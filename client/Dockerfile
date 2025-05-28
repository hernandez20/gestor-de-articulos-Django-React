FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-slim
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]



# Imagen de Node llamada Builder (Etapa 1)
# Definimos el directorio de trabajo dentro del contenedor y luego copiamos los archivos Necesarios
# Imagen liviana sin herramientas de Desarrollo (Opcional) (Etapa 2)
# Servimos la carpeta /dist (el proyecto Ya compilado)
# Inicia el servidor exponiendo el puerto 3000 