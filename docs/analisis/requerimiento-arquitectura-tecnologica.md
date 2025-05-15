---
sidebar_position: 6
sidebar_label: "Arquitectura Tecnológica"
---

# Especificación de los requerimientos de la arquitectura tecnológica

Para el Sistema de Asignación de Especialistas (SIAD), se han definido los siguientes elementos clave que componen la arquitectura tecnológica necesaria para su correcto funcionamiento, desarrollo y despliegue. Estos elementos se agrupan en Plataforma e Infraestructura.

### Plataforma Tecnológica

La plataforma tecnológica del SIAD comprende el conjunto de software base y herramientas esenciales sobre las cuales se construirá y operará el sistema. Los componentes principales incluyen:

* **Base de Datos:** Se utilizará un sistema gestor de bases de datos relacional para garantizar la integridad y consistencia de los datos. *Ejemplo: PostgreSQL por su robustez, escalabilidad y características ACID.*
* **Middleware:** Se emplearán componentes de middleware para facilitar la comunicación entre las diferentes partes de la aplicación y con otros sistemas existentes si fuera necesario. *Ejemplo: Un bus de mensajes como RabbitMQ o Kafka podría usarse para la gestión de notificaciones (RF-SIAD-009).*
* **Sistemas Operativos:** Los servidores de aplicación y base de datos operarán sobre sistemas operativos estables y con buen soporte. *Ejemplo: Linux (distribución como Ubuntu Server o CentOS) por su rendimiento y seguridad.*
* **Runtime y Servidores de Aplicación:** El entorno de ejecución para la lógica de negocio del SIAD. *Ejemplo: Java con Spring Boot y un servidor embebido como Tomcat, o Node.js con Express, dependiendo de la pericia del equipo de desarrollo y los requisitos de rendimiento.*
* **Software Base Adicional:** Incluye otras herramientas necesarias como kits de desarrollo (JDK, Node.js), herramientas de gestión de dependencias (Maven, npm), etc.

### Infraestructura Tecnológica

La infraestructura tecnológica se refiere a los componentes de hardware y la organización física y lógica que soportarán la plataforma y la aplicación SIAD.

* **Virtualización:** Se contempla el uso de tecnologías de virtualización para optimizar el uso de recursos de hardware, facilitar la escalabilidad y mejorar la gestión de los entornos. *Ejemplo: VMware vSphere para un entorno on-premise robusto, o contenedores Docker gestionados con Kubernetes para mayor flexibilidad y despliegue ágil.*
* **Servidores (Hardware):** Se requerirán servidores físicos o virtuales con la capacidad de cómputo, memoria y almacenamiento necesarios para alojar la base de datos, el servidor de aplicaciones y otros servicios complementarios. Las especificaciones exactas dependerán de la carga esperada (RNF-SIAD-001, RNF-SIAD-006).
* **Telecomunicaciones:** Se asegurará una conectividad de red confiable y con el ancho de banda adecuado para el acceso de los usuarios (Supervisores y Especialistas) al sistema y para la comunicación entre los componentes del sistema. Esto incluye switches, routers y configuración de VLANs si es necesario.
* **Seguridad:** Se implementarán múltiples capas de seguridad para proteger el sistema y los datos. *Ejemplo: Firewalls perimetrales y de aplicación web (WAF), sistemas de detección/prevención de intrusos (IDS/IPS), políticas de acceso robustas, VPN para acceso remoto seguro, y cifrado de datos en tránsito (TLS/SSL) y en reposo (RNF-SIAD-002).*
* **Almacenamiento:** Se dispondrá de soluciones de almacenamiento centralizado o distribuido para los datos de la aplicación, logs, backups y otros artefactos. *Ejemplo: Una Storage Area Network (SAN) o Network Attached Storage (NAS) para entornos on-premise, o servicios de almacenamiento en bloque/objetos si se opta por una nube.*
* **Hardware Varios:** Incluye otros elementos como sistemas de alimentación ininterrumpida (UPS) para los servidores críticos, y equipamiento para la gestión de backups.

Esta especificación servirá de base para las decisiones de diseño detallado y adquisición de componentes tecnológicos.