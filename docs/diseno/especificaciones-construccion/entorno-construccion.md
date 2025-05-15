---
sidebar_position: 1
sidebar_label: Entorno de Construcción
---

# Entorno de Construcción

A continuación, se detalla la plataforma y herramientas propuestas para el ambiente de desarrollo del Sistema de Asignación de Especialistas (SIAD).

* **Hardware (Desarrollo Local):**
    * **Descripción:** Estaciones de trabajo (laptops o desktops) para los desarrolladores.
    * **Características Recomendadas:**
        * Procesador: Intel Core i5/i7 (o equivalentes AMD Ryzen 5/7) de generación reciente.
        * Memoria RAM: Mínimo 16 GB (32 GB recomendado para un rendimiento óptimo con múltiples herramientas, Docker, e IDEs).
        * Almacenamiento: Unidad de Estado Sólido (SSD) de 512 GB o superior.
        * Monitor: Uno o dos monitores para mejorar la productividad.

* **Sistema Operativo (Desarrollo Local):**
    * **Descripción:** Sistema operativo en las estaciones de trabajo de los desarrolladores.
    * **Opciones:** Windows 10/11 Pro (con WSL2 para Docker), macOS, o distribuciones de Linux (ej. Ubuntu, Fedora).
    * **Consideraciones:** Debe ser compatible con todas las herramientas de desarrollo y permitir la ejecución de Docker Desktop.

* **Herramientas de Construcción y Desarrollo:**
    * **Entorno de Desarrollo Integrado (IDE):**
        * Para Backend (Spring Boot): IntelliJ IDEA Ultimate/Community, Eclipse IDE for Java EE Developers, o Visual Studio Code con extensiones para Java y Spring.
        * Para Frontend (Angular): Visual Studio Code (altamente recomendado por su soporte para TypeScript y Angular), WebStorm.
    * **Sistema de Control de Versiones:** Git.
    * **Repositorio de Código Fuente:** GitLab, GitHub, Bitbucket (o el sistema de repositorios corporativo de SUNAT).
    * **Herramienta de Gestión de Dependencias y Construcción (Backend):** Apache Maven o Gradle.
    * **Herramienta de Gestión de Paquetes y Construcción (Frontend):** npm (Node Package Manager) o Yarn.
    * **Kit de Desarrollo Java (JDK):** OpenJDK 17 (o la versión LTS más reciente compatible con Spring Boot 3.x).
    * **Node.js:** Versión LTS reciente (para Angular CLI y gestión de paquetes frontend).
    * **Angular CLI:** Herramienta de línea de comandos para Angular.
    * **Docker Desktop:** Para construir y ejecutar imágenes Docker localmente, y para interactuar con entornos Kubernetes de desarrollo (ej. Minikube, Kind, Docker Desktop Kubernetes).
    * **Herramientas de Línea de Comandos de Kubernetes:** `kubectl`.
    * **Herramientas de Pruebas:**
        * Backend: JUnit, Mockito, Spring Test.
        * Frontend: Jasmine, Karma, Protractor (o alternativas más modernas como Jest, Cypress para Angular).
    * **Cliente API REST:** Postman, Insomnia, o la herramienta integrada en el IDE para probar los microservicios.
    * **Herramientas de Documentación (si se generan localmente):** Compilador de Docusaurus (Node.js).

* **Base de Datos (Desarrollo Local):**
    * **Descripción:** Instancia de base de datos para que los desarrolladores prueben localmente.
    * **Opción Principal:** PostgreSQL (misma versión que producción/UAT, idealmente ejecutada en un contenedor Docker para consistencia).
    * **Alternativa Ligera (para pruebas unitarias/integración rápida):** Base de datos en memoria como H2 (configurada en perfiles de prueba de Spring Boot).

* **Software de Aplicaciones (Adicional):**
    * **Navegadores Web:** Versiones recientes de Google Chrome, Mozilla Firefox, Microsoft Edge (para pruebas de frontend).
    * **Herramientas de Diseño/Diagramación (Opcional):** draw.io (diagrams.net), PlantUML (con integración en IDE), o similares para la documentación de diseño.

* **Servidor WEB (Desarrollo Local Frontend):**
    * **Descripción:** Servidor de desarrollo integrado con Angular CLI.
    * **Herramienta:** `ng serve` (Angular Live Development Server).
    * **Consideraciones:** Para el despliegue de las aplicaciones Angular en contenedores Docker para entornos superiores, se usará Nginx, por lo que se pueden tener configuraciones de Nginx para pruebas locales si se desea simular el entorno de producción más de cerca.

* **Otros:**
    * **Herramientas de Comunicación y Colaboración de Equipo:** Microsoft Teams, Slack, Jira, Confluence (o las herramientas corporativas de SUNAT).
    * **Cliente VPN:** Si es necesario para acceder a recursos de red internos de SUNAT desde ubicaciones remotas.

---
Este formato detalla cada elemento del entorno de construcción utilizando listas y descripciones, como solicitaste.
