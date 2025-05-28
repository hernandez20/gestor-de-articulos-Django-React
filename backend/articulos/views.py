from rest_framework import viewsets, status
from rest_framework.decorators import action, parser_classes
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from django.http import HttpResponse
import pandas as pd

from .models import Articulo
from .serializers import ArticuloSerializer

class ArticuloViewSet(viewsets.ModelViewSet):
    queryset = Articulo.objects.all()
    serializer_class = ArticuloSerializer

    @action(detail=False, methods=['get'], url_path='exportar_excel')
    def exportar_excel(self, request):
        articulos = Articulo.objects.all().values('codigo', 'descripcion', 'precio')
        df = pd.DataFrame(list(articulos))
        response = HttpResponse(content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
        response['Content-Disposition'] = 'attachment; filename=articulos.xlsx'
        df.to_excel(response, index=False)
        return response

    @action(detail=False, methods=['post'], url_path='importar_excel')
    @parser_classes([MultiPartParser])
    def importar_excel(self, request):
        archivo = request.FILES.get('file')
        if not archivo:
            return Response({'error': 'Archivo no recibido.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            df = pd.read_excel(archivo)
            for _, row in df.iterrows():
                Articulo.objects.update_or_create(
                    codigo=row['codigo'],
                    defaults={
                        'descripcion': row['descripcion'],
                        'precio': row['precio'],
                    }
                )
            return Response({'message': 'Importación exitosa.'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
