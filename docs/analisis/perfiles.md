---
sidebar_position: 4
sidebar_label: "Perfiles"
---

# Identificación de Perfiles

---
### Perfil: `SIAD-OPERADOR-AVANZADO` {#perfil-siad-operador-avanzado}

**Opciones a las que tiene acceso el perfil:**
* Panel de Gestión de Declaraciones (visualización, priorización, seguimiento de estados)
* Funcionalidad de Asignación Manual de Diligencias
* Funcionalidad de Reasignación y Anulación de Diligencias
* Módulo de Configuración de Reglas y Parámetros para Asignación Automática
* Panel de Ejecución y Programación de Procesos de Asignación Automática
* Dashboard de Visualización de Disponibilidad y Carga de Trabajo de Recursos (Especialistas)
* Módulo de Consultas Avanzadas y Trazabilidad de Asignaciones
* Generador de Reportes de Gestión y Operativos

**Tipos de Acceso Permitidos:**
* `Consulta`
* `Registro` (asignaciones)
* `Modificación` (asignaciones, reglas)
* `Anulación` (asignaciones)
* `Ejecución` (procesos automáticos)
* `Configuración` (reglas)

---

### Perfil: `SIAD-USUARIO-TAREAS` {#perfil-siad-usuario-tareas}

**Opciones a las que tiene acceso el perfil:**
* Bandeja de Tareas/Diligencias Asignadas (propias)
* Funcionalidad para Registrar/Actualizar Información de Diligencias Propias (ej. tipo, estado, resultado, adjuntos)
* Módulo de Gestión de Disponibilidad Personal (para procesos de asignación)
* Consulta de Historial Personal de Tareas/Diligencias

**Tipos de Acceso Permitidos:**
* `Consulta` (sus tareas/datos)
* `Registro` (información de diligencias, disponibilidad)
* `Modificación` (su información y estado de tareas)

---

### Perfil: `SIAD-CONFIGURADOR-APLICACION` {#perfil-siad-configurador-aplicacion}

**Opciones a las que tiene acceso el perfil:**
* Módulo de Administración de Cuentas de Usuario de SIAD (altas, bajas, modificaciones)
* Módulo de Gestión de Perfiles Genéricos y Asignación de Permisos de SIAD
* Panel de Configuración de Parámetros Globales de la Aplicación SIAD (ej. notificaciones, umbrales, integraciones)
* Módulo de Administración de Catálogos y Listas Maestras del Sistema (ej. tipos de diligencia, motivos de anulación)
* Herramientas de Supervisión Técnica y Acceso a Logs de Aplicación SIAD

**Tipos de Acceso Permitidos:**
* `Consulta`
* `Registro` (cuentas, parámetros)
* `Modificación` (cuentas, perfiles, parámetros)
* `Anulación` (o desactivación de cuentas)
* `Configuración` (parámetros globales)

---

### Perfil: `SIAD-OBSERVADOR-GLOBAL` {#perfil-siad-observador-global}

**Opciones a las que tiene acceso el perfil:**
* Dashboard de Monitoreo General del Proceso de Asignación (indicadores clave, estados)
* Módulo de Consultas Globales de Declaraciones y Estado de Asignaciones (solo lectura)
* Acceso a Reportes Predefinidos del Sistema (solo lectura)
* Visualización de Logs de Auditoría de Cambios y Eventos del Sistema (solo lectura)

**Tipos de Acceso Permitidos:**
* `Consulta` (acceso de solo lectura)

---