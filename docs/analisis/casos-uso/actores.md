---
sidebar_position: 1
---

# Actores

A continuación, se describen los principales actores que interactúan con el Sistema de Asignación de Especialistas (SIAD) y sus roles fundamentales dentro del flujo de asignación de diligencias aduaneras.

### 1. Supervisor Aduanero

**Descripción:**
El Supervisor Aduanero es el usuario encargado de gestionar y monitorear el proceso de asignación de declaraciones a los especialistas. Sus responsabilidades clave incluyen:
* Visualizar las declaraciones de importación pendientes de asignación.
* Asignar manualmente declaraciones específicas a los Especialistas Aduaneros disponibles y cualificados.
* Reasignar declaraciones cuando sea necesario, registrando los motivos correspondientes.
* Configurar y ajustar los parámetros y reglas para el proceso de asignación automática de declaraciones.
* Monitorear la disponibilidad y carga de trabajo de los Especialistas Aduaneros.
* Consultar la trazabilidad y el historial de las asignaciones realizadas.
Este actor se corresponde principalmente con el perfil **SIAD-OPERADOR-AVANZADO**.

### 2. Especialista Aduanero

**Descripción:**
El Especialista Aduanero es el usuario que realiza las diligencias (inspección documental o física) sobre las declaraciones de importación que le son asignadas. Sus interacciones principales con el sistema son:
* Gestionar y actualizar su estado de disponibilidad para ser considerado en los procesos de asignación.
* Recibir notificaciones sobre nuevas declaraciones asignadas o reasignadas.
* Consultar las declaraciones que tiene asignadas para su gestión.
* Registrar información relevante sobre la diligencia realizada (ej. tipo de diligencia, si el sistema lo permite).
Este actor se corresponde principalmente con el perfil **SIAD-USUARIO-TAREAS**.

### 3. Administrador del Sistema (SIAD-CONFIGURADOR-APLICACION)

**Descripción:**
El Administrador del Sistema es el usuario técnico o con permisos elevados responsable de la configuración general y el mantenimiento de la aplicación SIAD. Sus funciones incluyen:
* Gestionar las cuentas de usuario y sus roles dentro del SIAD.
* Configurar parámetros globales de la aplicación (como configuraciones de notificación, umbrales operativos).
* Administrar catálogos y listas maestras utilizadas por el sistema (ej. tipos de diligencia, motivos de reasignación).
* Supervisar el correcto funcionamiento técnico del sistema y acceder a los logs de la aplicación para diagnóstico.
Este actor se corresponde con el perfil **SIAD-CONFIGURADOR-APLICACION**.

### 4. Usuario Observador Global (SIAD-OBSERVADOR-GLOBAL)

**Descripción:**
El Usuario Observador Global es un actor que requiere visibilidad sobre el proceso de asignación y el estado general del sistema, pero sin capacidad de modificar datos o configuraciones. Sus actividades principales son:
* Monitorear dashboards con indicadores clave del proceso de asignación.
* Realizar consultas globales sobre el estado de las declaraciones y sus asignaciones (solo lectura).
* Acceder a reportes predefinidos del sistema.
* Visualizar logs de auditoría para fines de seguimiento y control.
Este actor se corresponde con el perfil **SIAD-OBSERVADOR-GLOBAL**.
