
# **Frontend Angular - Configuración e Instalación**

Este proyecto es un frontend en **Angular** que utiliza un **repositorio de artefactos en JFrog** para gestionar las dependencias. Sigue los pasos a continuación para configurar y ejecutar el proyecto.

---

## **1. Requisitos Previos**

Asegúrate de tener las siguientes herramientas instaladas en tu máquina:

- **Node.js**: [Descargar Node.js](https://nodejs.org)
- **Angular CLI**:  
  npm install -g @angular/cli

## **2. Configuración del Repositorio de JFrog**

1. Debes tener un archivo **`.npmrc`** en la raíz del proyecto con las siguientes configuraciones:

   ```@npm-bbta:registry=https://bbogdigital.jfrog.io/bbogdigital/api/npm/npm-bbta/
   ```

2. **Crea un archivo `.env`** en la raíz del proyecto con las credenciales de JFrog (tal como en el .env.example):

   ```bash
   ARTIFACTORY_READER_USER=tu_usuario
   ARTIFACTORY_READER_API_KEY=tu_api_key
   ```

---

## **3. Script para Configurar las Dependencias**

Ejecuta el siguiente script para configurar el acceso a las dependencias en JFrog:

---

## **4. Ejecutar el Script desde la Consola**

1. **Ejecutar el script**:

   - **Windows** (en gitBash):

     ```bash
     bash ./install-dependencies.sh
     ```
---

## **5. Ejecución del Proyecto**

Después de instalar las dependencias, sigue estos pasos para ejecutar el proyecto:

1. **Iniciar el servidor de desarrollo Angular**:

   ```bash
   ng serve
   ```

2. **Acceder a la aplicación** en tu navegador en:

   ```
   http://localhost:4200
   ```

---

## **6. Problemas Comunes**

### **Error de CORS**
Si encuentras problemas relacionados con CORS, asegúrate de que el backend esté configurado para permitir solicitudes desde **localhost:4200**.

---

## **7. Contacto**

Si tienes algún problema con la configuración, contacta al equipo de desarrollo.

---

## **Conclusión**

Siguiendo estos pasos, tendrás configurado el proyecto correctamente, con las dependencias descargadas desde **JFrog** y la aplicación lista para ejecutarse. 🚀
