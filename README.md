# Documentación del Sistema de Asignación de Especialistas (SIAD)

Bienvenido al repositorio de la documentación oficial para el **Sistema de Asignación de Especialistas (SIAD)**. Este proyecto utiliza [Docusaurus](https://docusaurus.io/) para generar un sitio web de documentación estático, moderno y fácil de navegar.

## Acerca del SIAD

El Sistema de Asignación de Especialistas (SIAD) tiene como finalidad gestionar la asignación automática y controlada de especialistas aduaneros para la atención de declaraciones de importación que requieren ser sometidas a una diligencia (inspección documental o física).

Este sitio de documentación está diseñado para servir como una fuente central de verdad para todos los involucrados en el ciclo de vida del SIAD, incluyendo:

* **Equipo de Desarrollo:** Para entender la arquitectura, diseño técnico, y especificaciones de construcción.
* **Equipo de Calidad (QA):** Para acceder a los requerimientos, casos de uso, y criterios de aceptación para el diseño de pruebas.
* **Usuarios Normativos y de Negocio:** Para comprender el alcance, funcionalidades, y flujos de trabajo del sistema.
* **Administradores de Sistema y Operadores:** Para guías de despliegue, configuración y mantenimiento.

## Acceso a la Documentación Desplegada

La documentación generada se puede encontrar en:

➡️ **[Enlace a tu sitio Docusaurus desplegado aquí]** (Ej: `https://intranet.sunat.gob.pe/proyectos/siad/docs`)

## Estructura de la Documentación

La documentación está organizada en las siguientes secciones principales:

* **Introducción:** Visión general del sistema SIAD, su propósito y alcance.
* **Análisis de Requerimientos:**
    * Requerimientos Funcionales (RF)
    * Requerimientos No Funcionales (RNF)
    * Casos de Uso y Actores del Sistema
    * Criterios de Aceptación
* **Diseño del Sistema:**
    * Modelo Conceptual
    * Arquitectura del Sistema (Datos, Aplicaciones, Tecnológica)
    * Diagramas (Clases, Secuencia, Despliegue, Paquetes, Transición de Estados)
* **Especificaciones de Construcción:**
    * Entorno de Construcción
    * (Otras especificaciones técnicas)
* **Guías de Usuario (Opcional):** Manuales para los diferentes perfiles de usuario.
* **Guías de Operación y Mantenimiento (Opcional):** Información para administradores.

## Desarrollo Local (Para contribuir o visualizar la documentación)

Para levantar este sitio de Docusaurus localmente, sigue estos pasos:

1.  **Clona el repositorio (si aún no lo has hecho):**
    ```bash
    git clone [URL_DEL_REPOSITORIO_DE_ESTA_DOCUMENTACION]
    cd [NOMBRE_DE_LA_CARPETA_DEL_PROYECTO_DOCUSAURUS]
    ```

2.  **Instala las dependencias:**
    Asegúrate de tener Node.js (versión recomendada por Docusaurus, usualmente LTS) y Yarn o npm.
    ```bash
    npm install
    # o
    yarn install
    ```

3.  **Inicia el servidor de desarrollo:**
    ```bash
    npm start
    # o
    yarn start
    ```
    Esto abrirá el sitio de documentación en tu navegador, usualmente en `http://localhost:3000`. El sitio se recargará automáticamente cuando hagas cambios en los archivos fuente (principalmente en la carpeta `docs/`).

## Construcción del Sitio (Build)

Para generar la versión estática del sitio (usualmente para despliegue):

```bash
npm run build
# o
yarn build
Los archivos estáticos se generarán en la carpeta build/. Estos son los archivos que se despliegan en un servidor web.ContribucionesSi deseas contribuir a esta documentación (corregir errores, añadir información, mejorar diagramas, etc.), por favor sigue estos pasos (o los que defina el equipo):Crea un nuevo branch para tus cambios.Realiza tus modificaciones en los archivos Markdown (.md o .mdx) dentro de la carpeta docs/.Asegúrate de que el sitio se construya correctamente localmente.Envía un Pull Request (o Merge Request) para su revisión.ContactoPara preguntas o problemas relacionados con el sistema SIAD o esta