## 🧰 Librerías principales del backend

- `Django`: Framework principal para construir el backend.
- `Django REST Framework`: Para construir la API RESTful.
- `Pandas`: Usado para leer y generar archivos Excel.
- `openpyxl`: Motor necesario para que pandas pueda leer/escribir archivos `.xlsx`.
- `MultiPartParser`: Permite subir archivos desde formularios a través de la API.


# 🧾 Gestor de Artículos – React + Django + Docker
Aplicación web completa para gestionar artículos con funcionalidades de creación, edición, eliminación, importación y exportación desde archivos Excel.

Tecnologías utilizadas:
- 💻 Frontend: React (Vite + TailwindCSS)
- ⚙️ Backend: Django + Django REST Framework
- 🐬 Base de datos: MySQL
- 🐳 Docker y Docker Compose

---

## 📦 Requisitos

- Docker y Docker Compose instalados
- (Opcional) Node.js y Python 3 si deseas ejecutar partes fuera de contenedores

---

## 🚀 Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://gitlab.com/hernandez20/gestor-de-articulos-django-react.git
cd gestor-de-articulos-django-react


2 Construir y levantar los contenedores

docker-compose up --build // Para Desarrollo
docker-compose -f docker-compose.yml up --build // Con el cliente Compilado 

Esto levanta:

🌐 Frontend en http://localhost:3000

🔌 Backend Django en http://localhost:8000

🐬 MySQL como base de datos en el puerto 3306

Crear superusuario para /admin
docker-compose exec backend python manage.py createsuperuser


📤 Exportar artículos a Excel
Ve a la sección "Lista de Artículos".

Haz clic en el botón "Exportar Excel".

El navegador descargará un archivo articulos.xlsx con todos los artículos actuales.

📥 Importar artículos desde Excel
Prepara un archivo Excel con los siguientes encabezados:

| codigo | descripcion | precio |
| ------ | ----------- | ------ |
| 1234   | Artículo A  | 45.00  |
| 5678   | Artículo B  | 99.90  |


En la interfaz, utiliza el componente "Importar Excel":

Haz clic en "Seleccionar archivo"

Luego en "Importar Excel"

Los artículos se importarán y actualizarán según el codigo.

📁 Estructura del proyecto

.
├── backend/         
├── client/          
├── docker-compose.yml
├── README.md


 .gitignore relevante
client/node_modules/

backend/__pycache__/

backend/env/

*.env, *.sqlite3

db_data/ (volumen de MySQL)

```

### Referencia de la API

#### Obtener todos los artículos
GET `/articulos/`

#Editar un artículo por ID
POST `/articulos/{id}/`

#Exportar artículos a Excel
GET `/articulos/exportar_excel/`

#Importar artículos desde Excel
POST  `/articulos/importar_excel/`

Content-Type: multipart/form-data
Body: file=[archivo.xlsx]


