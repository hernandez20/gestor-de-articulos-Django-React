from django.db import models

class Articulo(models.Model):
    codigo = models.CharField(max_length=20, unique=True)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.codigo
