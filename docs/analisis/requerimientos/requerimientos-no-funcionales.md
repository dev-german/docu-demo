---
sidebar_position: 2
sidebar_label: "No funcionales"
---

# Requerimientos No Funcionales del Sistema de Asignación de Especialistas (SIAD)

## Introducción
A continuación, se detallan los requerimientos no funcionales (RNF) para el Sistema de Asignación de Especialistas (SIAD). Estos requerimientos definen los atributos de calidad del sistema, como su rendimiento, seguridad, usabilidad, entre otros. Cada requerimiento tiene un identificador único para su trazabilidad.

---

### RNF-SIAD-001: Rendimiento de Carga de Listados {#rnf-siad-001}
El listado de declaraciones de importación pendientes de asignación deberá cargarse y mostrarse en la interfaz del Supervisor Aduanero en un tiempo no mayor a 3 segundos, incluso con un volumen de hasta 1,000 declaraciones activas simultáneamente. La respuesta del sistema al aplicar filtros sobre este listado no deberá exceder los 2 segundos.

---

### RNF-SIAD-002: Seguridad de Acceso y Protección de Datos {#rnf-siad-002}
El sistema deberá implementar mecanismos de autenticación robustos (contraseñas seguras con política de complejidad) y autorización basada en roles para asegurar que solo los Supervisores Aduaneros y Especialistas Aduaneros puedan acceder a las funciones y datos para los cuales tienen permiso. Se deberá proteger la información sensible de las declaraciones y los datos personales de los especialistas contra accesos no autorizados y brechas de seguridad, cumpliendo con las normativas de protección de datos aplicables. *(Nota: Considerar normativas específicas si aplican, como la Ley de Protección de Datos Personales de Perú).*

---

### RNF-SIAD-003: Usabilidad del Sistema para Supervisores {#rnf-siad-003}
Un Supervisor Aduanero, después de una sesión de capacitación de no más de 2 horas, deberá ser capaz de realizar las tareas comunes de asignación manual y configuración de parámetros de asignación automática de manera eficiente. El número de clics para completar una asignación manual no deberá ser excesivo (idealmente, no más de 5 pasos principales una vez identificada la declaración y el especialista). El sistema deberá proporcionar mensajes de error claros y ayudas contextuales básicas.

---

### RNF-SIAD-004: Disponibilidad del Sistema {#rnf-siad-004}
El sistema SIAD deberá estar disponible para los usuarios al menos el 99.5% del tiempo durante el horario laboral principal (lunes a viernes, de 08:00 a 18:00 horas, Hora Estándar de Perú - PET). El tiempo máximo de inactividad no planificada no deberá exceder las 4 horas acumuladas al mes durante dicho horario.

---

### RNF-SIAD-005: Mantenibilidad de las Reglas de Asignación {#rnf-siad-005}
Las reglas y parámetros utilizados por el proceso de asignación automática (por ejemplo, criterios de priorización, cargas de trabajo de especialistas, tipos de diligencia) deberán ser configurables por un administrador técnico o un usuario supervisor con permisos especiales a través de una interfaz de administración o archivos de configuración dedicados, sin requerir modificaciones en el código fuente del sistema ni un redespliegue completo de la aplicación.

---

### RNF-SIAD-006: Escalabilidad del Procesamiento de Declaraciones {#rnf-siad-006}
El sistema deberá ser capaz de manejar un crecimiento proyectado del 25% en el número de declaraciones de importación procesadas anualmente y un aumento del 15% en el número de usuarios (supervisores y especialistas) durante los próximos 3 años, sin que esto degrade el rendimiento especificado en otros RNF (ej. RNF-SIAD-001).

---

### RNF-SIAD-007: Compatibilidad con Navegadores Web {#rnf-siad-007}
La interfaz de usuario web del SIAD deberá ser completamente funcional y visualmente correcta en las dos últimas versiones estables de los siguientes navegadores: Google Chrome, Mozilla Firefox y Microsoft Edge, en sus versiones para escritorio.

---

### RNF-SIAD-008: Registros de Auditoría (Logging) {#rnf-siad-008}
El sistema deberá generar y almacenar logs de auditoría detallados para todas las acciones críticas y cambios de estado significativos. Esto incluye, pero no se limita a: inicios y cierres de sesión (exitosos y fallidos), creación, modificación (asignación/reasignación) de diligencias, cambios en la configuración de reglas de asignación, y ejecución de procesos automáticos. Los logs deberán incluir información del usuario, fecha/hora del evento, y los datos relevantes de la acción realizada, y deberán ser almacenados de forma segura para evitar su alteración.

---