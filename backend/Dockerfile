FROM python:3.10

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY requirements.txt .

RUN pip install --upgrade pip && pip install -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

# Utiliza una Imagen de Python
# PYTHONDONTWRITEBYTECODE 1  evita generar archivos .pyc
# PYTHONUNBUFFERED=1  obliga a Python a mostrar los logs directamente en consola sin buffer
# Definimos la raiz del proyecto y copiamos las carpetas necesarias. Instala las dependencias 
# Corre el proyecto y expone el puerto 8000