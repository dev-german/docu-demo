---
sidebar_position: 1
---

# Entorno Tecnológico del Sistema

A continuación, se describen los elementos de la infraestructura y plataforma tecnológica propuestos para el Sistema de Asignación de Especialistas (SIAD).

## Elementos de la Infraestructura y Plataforma

* **Hardware:**
    * **Servidores para Clúster Kubernetes:** Múltiples nodos (físicos o virtuales) con capacidad de CPU, RAM y almacenamiento adecuada para ejecutar los pods de los microservicios, la base de datos (si está contenida en el clúster o es dedicada), y los componentes de gestión de Kubernetes. Se requiere alta disponibilidad y escalabilidad.
        * *Ejemplo específico:* Servidores Dell PowerEdge R750 o equivalentes, o instancias de cómputo en un proveedor de nube (ej. AWS EC2, Azure VMs, GCP Compute Engine) con configuraciones optimizadas para cargas de trabajo de contenedores.
    * **Servidor para Nginx (Frontend):** Servidor (físico o virtual) para alojar el servidor web Nginx que servirá las aplicaciones Angular. Podría ser un nodo dedicado o parte de una infraestructura de borde.
        * *Ejemplo específico:* Servidor Dell PowerEdge R450 o equivalente, o instancia de cómputo optimizada para web.
    * **Servidor de Base de Datos (si es dedicado):** Si PostgreSQL no se ejecuta dentro del clúster de Kubernetes, se requerirá un servidor dedicado (físico o virtual) con almacenamiento rápido (SSD/NVMe) y suficiente RAM.
    * **Almacenamiento de Red (SAN/NAS):** Para volúmenes persistentes de Kubernetes, backups de base de datos, y almacenamiento compartido si es necesario.
    * **Equipamiento de Red:** Switches, routers, balanceadores de carga (hardware o software) para gestionar el tráfico hacia Nginx, el API Gateway/Ingress de Kubernetes, y entre los componentes del clúster.
    * **Docker Registry Host (si es on-premise):** Servidor para alojar el registro privado de imágenes Docker.

* **Software:**
    * **Sistema Operativo Servidores:** Linux (ej. Ubuntu Server LTS, CentOS Stream, Red Hat Enterprise Linux) para todos los nodos del clúster Kubernetes, servidor Nginx, y servidor de base de datos.
    * **Orquestación de Contenedores:** Kubernetes (versión estable reciente).
    * **Motor de Contenerización:** Docker (o un runtime compatible con CRI como containerd).
    * **Servidor Web Frontend:** Nginx (para servir las aplicaciones Angular y actuar como reverse proxy si es necesario).
    * **Base de Datos:** PostgreSQL (versión estable reciente).
    * **Lenguajes de Programación y Frameworks:**
        * Backend: Java (JDK 17+) con Spring Boot (versión 3.x+).
        * Frontend: TypeScript con Angular (versión 16+).
    * **API Gateway:** Implementado a través de Kubernetes Ingress Controller (ej. Nginx Ingress, Traefik) o una solución de API Gateway dedicada (ej. Spring Cloud Gateway, Kong).
    * **Registro de Imágenes Docker:** Docker Hub (público o privado), Harbor (on-premise), o registro de contenedor del proveedor de nube (ej. AWS ECR, Azure ACR, GCP Artifact Registry).
    * **Herramientas de Monitoreo y Logging:** Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana) o equivalentes, integrados con Kubernetes.
    * **Herramientas de CI/CD:** Jenkins, GitLab CI/CD, GitHub Actions, o equivalentes para la automatización de la construcción, pruebas y despliegue.
    * **Software de Seguridad:** Firewalls (de red y de aplicación web - WAF), herramientas de escaneo de vulnerabilidades, software antivirus/antimalware en los servidores si aplica.

* **Comunicaciones:**
    * **Red Interna (Intranet SUNAT):** Conectividad de alta velocidad (Gigabit Ethernet o superior) entre todos los servidores y componentes del sistema. Segmentación de red (VLANs) para seguridad y gestión.
    * **Acceso de Usuarios:** A través de la red intranet `intranet.sunat.peru` vía HTTP/S.
    * **Comunicación entre Microservicios:** A través de la red interna del clúster Kubernetes, gestionada por el CNI (Container Network Interface) de Kubernetes y los Services.
    * **Comunicación con la Base de Datos:** Conexión segura y de baja latencia desde los microservicios al servidor de base de datos.
    * **Comunicación con el API Gateway/Ingress:** Exposición segura de los servicios hacia las aplicaciones frontend.
    * **Conectividad Externa (si aplica):** Si el sistema necesita interactuar con servicios externos (ej. para envío de notificaciones SMS/email a través de proveedores externos), se requerirá conectividad segura a Internet, posiblemente a través de un proxy o firewall.

---
Este formato desglosa cada elemento de la infraestructura y plataforma, proporcionando ejemplos y descripciones en lugar de usar una tabla.
