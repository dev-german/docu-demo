---
sidebar_position: 2
sidebar_label: Planificación de Capacidades
---

# Estimación de la Planificación de Capacidades

A continuación, se presenta una estimación de la planificación de capacidades para los principales dispositivos de hardware que soportarán el Sistema de Asignación de Especialistas (SIAD). Estas estimaciones consideran un crecimiento proyectado y la necesidad de mantener un rendimiento óptimo.

## 1. Dispositivo: Servidores para Clúster Kubernetes (por nodo)

* **Almacenamiento:**
    * **Estimación Inicial:** 500 GB - 1 TB SSD/NVMe por nodo (para el SO, runtime de contenedores, imágenes cacheadas y logs locales).
    * **Consideraciones:** El almacenamiento persistente para las aplicaciones (volúmenes de datos de microservicios, si no usan directamente la BD central) se gestionará a través de soluciones de almacenamiento de red (SAN/NAS) o almacenamiento en la nube (ej. EBS, Azure Disk Storage).
    * **Proyección de Crecimiento:** El almacenamiento local de nodos puede no crecer significativamente si los datos persistentes están centralizados. El crecimiento principal será en el almacenamiento de red.
* **Procesamiento:**
    * **Estimación Inicial:** 8-16 vCPUs (o núcleos físicos) por nodo.
    * **Consideraciones:** Dependerá del número de pods/microservicios por nodo y la intensidad de sus tareas. Se requiere capacidad para picos de carga y para los procesos de Kubernetes.
    * **Proyección de Crecimiento:** Aumento de nodos en el clúster o escalado vertical de los nodos existentes (más vCPUs/RAM) según el incremento de la carga transaccional y el número de usuarios (RNF-SIAD-006).
* **Comunicación:**
    * **Estimación Inicial:** Múltiples interfaces de red de 1 Gbps o 10 Gbps por nodo.
    * **Consideraciones:** Para la comunicación interna del clúster (CNI), comunicación con el almacenamiento de red, y exposición de servicios a través del Ingress/API Gateway.
    * **Proyección de Crecimiento:** El ancho de banda podría necesitar incrementarse si el tráfico API o la comunicación entre microservicios crece sustancialmente.

## 2. Dispositivo: Servidor Nginx (Frontend)

* **Almacenamiento:**
    * **Estimación Inicial:** 100-200 GB SSD (para el SO, Nginx, y los archivos estáticos de las aplicaciones Angular dockerizadas).
    * **Consideraciones:** Las aplicaciones Angular son principalmente estáticas una vez compiladas. El almacenamiento principal es para los logs de Nginx.
    * **Proyección de Crecimiento:** Bajo crecimiento, principalmente por logs.
* **Procesamiento:**
    * **Estimación Inicial:** 2-4 vCPUs.
    * **Consideraciones:** Nginx es eficiente sirviendo contenido estático y como reverse proxy. La carga principal dependerá del número de usuarios concurrentes y solicitudes HTTP/S.
    * **Proyección de Crecimiento:** Moderado, podría necesitarse un ligero aumento si el número de usuarios crece significativamente. Se puede escalar horizontalmente con múltiples instancias de Nginx detrás de un balanceador.
* **Comunicación:**
    * **Estimación Inicial:** Interfaz de red de 1 Gbps.
    * **Consideraciones:** Para servir los archivos de las aplicaciones frontend a los usuarios y para la comunicación con el API Gateway.
    * **Proyección de Crecimiento:** Moderado, en línea con el aumento de usuarios.

## 3. Dispositivo: Servidor de Base de Datos PostgreSQL (si es dedicado)

* **Almacenamiento:**
    * **Estimación Inicial:** 1-2 TB SSD/NVMe de alto rendimiento (para datos, índices y logs de transacciones).
    * **Consideraciones:** Basado en la estimación de volúmenes de datos de las tablas principales (Declaraciones, Diligencias, Asignaciones, etc.) y su crecimiento anual. Se deben incluir snapshots y espacio para replicación si se usa.
    * **Proyección de Crecimiento:** Alto, directamente relacionado con el crecimiento de los datos transaccionales (RNF-SIAD-006 y estimación de volúmenes).
* **Procesamiento:**
    * **Estimación Inicial:** 8-16 vCPUs optimizadas para base de datos.
    * **Consideraciones:** Para manejar consultas complejas, transacciones concurrentes, mantenimiento de índices y backups.
    * **Proyección de Crecimiento:** Moderado a alto, según la complejidad de las consultas y el volumen de transacciones.
* **Comunicación:**
    * **Estimación Inicial:** Interfaz de red de 1 Gbps o 10 Gbps.
    * **Consideraciones:** Para la comunicación de baja latencia con los microservicios.
    * **Proyección de Crecimiento:** Moderado, en línea con el aumento de la carga de los microservicios.

## 4. Dispositivo: Almacenamiento de Red (SAN/NAS)

* **Almacenamiento:**
    * **Estimación Inicial:** 5-10 TB (para volúmenes persistentes de Kubernetes, backups de base de datos, archivos compartidos).
    * **Consideraciones:** Debe ser escalable y ofrecer diferentes niveles de rendimiento según la necesidad (ej. almacenamiento más rápido para volúmenes de BD si no están en almacenamiento local de alto rendimiento).
    * **Proyección de Crecimiento:** Alto, para acomodar el crecimiento de datos y la retención de backups.
* **Procesamiento:**
    * **Estimación Inicial:** El procesamiento es inherente al controlador del SAN/NAS.
    * **Consideraciones:** Debe ser capaz de manejar las IOPS y el throughput requerido por las aplicaciones y la base de datos.
    * **Proyección de Crecimiento:** Escalabilidad del controlador o adición de más unidades de almacenamiento.
* **Comunicación:**
    * **Estimación Inicial:** Múltiples interfaces de red de alta velocidad (ej. 10 Gbps, Fibre Channel) para la conexión con los servidores del clúster y el servidor de base de datos.
    * **Consideraciones:** Ancho de banda suficiente para las operaciones de I/O y backups.
    * **Proyección de Crecimiento:** Puede requerir más ancho de banda o interfaces a medida que crece el volumen de datos y la actividad.

## 5. Dispositivo: Equipamiento de Red (Switches, Routers, Balanceadores de Carga)

* **Almacenamiento:** No aplica directamente (configuración y firmware).
* **Procesamiento:**
    * **Estimación Inicial:** Capacidad de procesamiento de paquetes y gestión de sesiones adecuada para el tráfico esperado.
    * **Consideraciones:** Los balanceadores de carga deben poder manejar las conexiones concurrentes y la terminación SSL si aplica.
    * **Proyección de Crecimiento:** Podría requerir actualización a modelos de mayor capacidad si el tráfico de red supera los límites actuales.
* **Comunicación:**
    * **Estimación Inicial:** Puertos de 1 Gbps / 10 Gbps, con capacidad de switching y routing para el volumen de tráfico interno y externo.
    * **Consideraciones:** Redundancia y alta disponibilidad son cruciales.
    * **Proyección de Crecimiento:** Aumento del número de puertos o capacidad de los enlaces troncales según crezca la infraestructura.

## 6. Dispositivo: Docker Registry Host (si es on-premise)

* **Almacenamiento:**
    * **Estimación Inicial:** 500 GB - 1 TB (para almacenar múltiples versiones de imágenes Docker de microservicios y frontends).
    * **Consideraciones:** El tamaño dependerá del número de imágenes y sus tamaños individuales.
    * **Proyección de Crecimiento:** Moderado, a medida que se añaden nuevos servicios o se generan más versiones de imágenes.
* **Procesamiento:**
    * **Estimación Inicial:** 2-4 vCPUs.
    * **Consideraciones:** Carga relativamente baja, principalmente para servir las solicitudes de pull/push de imágenes.
    * **Proyección de Crecimiento:** Bajo.
* **Comunicación:**
    * **Estimación Inicial:** Interfaz de red de 1 Gbps.
    * **Consideraciones:** Para la transferencia de imágenes hacia los nodos de Kubernetes y el servidor Nginx.
    * **Proyección de Crecimiento:** Bajo a moderado.

---
**Nota General:** Todas las estimaciones de capacidad deben revisarse periódicamente y ajustarse en función del monitoreo del rendimiento y el crecimiento real del sistema. Es fundamental planificar con redundancia y capacidad de escalado para asegurar la disponibilidad (RNF-SIAD-004) y escalabilidad (RNF-SIAD-006) del sistema.
