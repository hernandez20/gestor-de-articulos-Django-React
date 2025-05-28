from django.contrib import admin
from django.urls import path, include
from articulos.views import ArticuloViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'articulos', ArticuloViewSet)
urlpatterns = [
    path('admin/', admin.site.urls),
        path('', include(router.urls)),

]
