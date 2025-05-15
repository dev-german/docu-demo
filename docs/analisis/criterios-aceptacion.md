---
sidebar_position: 5
sidebar_label: "Criterios de Aceptación"
---

# Especificación de Criterios de Aceptación para Requisitos Funcionales (SIAD)

A continuación, se detallan los criterios de aceptación para cada Requisito Funcional (RF) del Sistema de Asignación de Especialistas.

---

## [RF-SIAD-001](./requerimientos/requerimientos-funcionales.md#rf-siad-001): Autenticación de Usuarios {#rf-siad-001-ca}
*El sistema deberá permitir la autenticación de usuarios (Supervisores Aduaneros, Especialistas Aduaneros) mediante un nombre de usuario y contraseña para acceder a las funcionalidades designadas a su rol.*

**Criterios de Aceptación:**
1.  **Dado** un usuario con credenciales válidas (nombre de usuario y contraseña correctos) y un rol asignado (Supervisor o Especialista), **cuando** el usuario ingresa sus credenciales en la pantalla de inicio de sesión y hace clic en "Ingresar", **entonces** el sistema valida las credenciales y redirige al usuario al panel principal correspondiente a su rol.
2.  **Dado** un usuario con credenciales inválidas (nombre de usuario o contraseña incorrectos), **cuando** el usuario ingresa estas credenciales y hace clic en "Ingresar", **entonces** el sistema muestra un mensaje de error indicando "Usuario o contraseña incorrectos" y no permite el acceso.
3.  **Dado** un usuario que intenta acceder sin ingresar credenciales, **cuando** hace clic en "Ingresar", **entonces** el sistema muestra un mensaje indicando que los campos son obligatorios.

---

## [RF-SIAD-002](./requerimientos/requerimientos-funcionales.md#rf-siad-002): Visualización de Declaraciones Pendientes de Asignación {#rf-siad-002-ca}
*El sistema deberá mostrar a los Supervisores Aduaneros un listado de las declaraciones de importación que requieren la asignación de un especialista. Este listado deberá incluir, como mínimo, el número de declaración, fecha de registro y canal de riesgo (naranja o rojo).*

**Criterios de Aceptación:**
1.  **Dado** que un Supervisor Aduanero ha iniciado sesión, **cuando** accede a la sección de "Declaraciones Pendientes de Asignación", **entonces** el sistema muestra un listado o tabla con todas las declaraciones no asignadas.
2.  **Dado** el listado de declaraciones pendientes, **para cada declaración** se muestra correctamente su número de declaración, fecha de registro en el sistema y el canal de riesgo asignado (naranja o rojo).
3.  **Dado** el listado de declaraciones pendientes, **cuando** no existen declaraciones pendientes de asignación, **entonces** el sistema muestra un mensaje indicando "No hay declaraciones pendientes de asignación" o una tabla vacía con esa indicación.

---

## [RF-SIAD-003](./requerimientos/requerimientos-funcionales.md#rf-siad-003): Asignación Manual de Declaraciones a Especialistas {#rf-siad-003-ca}
*El sistema deberá permitir a un Supervisor Aduanero seleccionar una declaración de importación específica del listado de pendientes y asignarla manualmente a un Especialista Aduanero disponible y cualificado.*

**Criterios de Aceptación:**
1.  **Dado** un Supervisor Aduanero en la pantalla de declaraciones pendientes, **cuando** selecciona una declaración específica, selecciona un Especialista Aduanero disponible de una lista y confirma la asignación, **entonces** la declaración queda registrada como asignada a ese especialista y ya no figura como pendiente.
2.  **Dado** que se ha realizado una asignación manual, **cuando** se consulta el detalle de la declaración asignada, **entonces** se muestra el nombre del Especialista Aduanero asignado, la fecha de asignación y el supervisor que realizó la asignación.
3.  **Dado** un Supervisor Aduanero, **cuando** intenta asignar una declaración, **entonces** el sistema solo permite seleccionar especialistas marcados como "disponibles" (según RF-SIAD-007).

---

## [RF-SIAD-004](./requerimientos/requerimientos-funcionales.md#rf-siad-004): Reasignación de Declaraciones {#rf-siad-004-ca}
*El sistema deberá permitir a un Supervisor Aduanero seleccionar una declaración previamente asignada y reasignarla a un Especialista Aduanero diferente, registrando el motivo de dicha reasignación.*

**Criterios de Aceptación:**
1.  **Dado** un Supervisor Aduanero, **cuando** selecciona una declaración previamente asignada, elige la opción "Reasignar", selecciona un nuevo Especialista Aduanero disponible, registra un motivo para la reasignación y confirma, **entonces** la declaración queda asignada al nuevo especialista.
2.  **Dado** que una declaración ha sido reasignada, **cuando** se consulta el historial de la declaración (referencia RF-SIAD-010), **entonces** se registra el especialista anterior, el nuevo especialista, el supervisor que realizó la reasignación, la fecha y el motivo de la reasignación.
3.  **Dado** que una declaración ha sido reasignada, **el especialista anterior** ya no visualiza dicha declaración en su listado de tareas/diligencias activas y es (opcionalmente) notificado.

---

## RF-SIAD-005: Configuración de Parámetros para Asignación Automática {#rf-siad-005-ca}
*El sistema deberá proveer una interfaz para que los Supervisores Aduaneros puedan configurar los parámetros y reglas que regirán el proceso de asignación automática. Estos parámetros incluirán, al menos, la consideración del canal de riesgo de la declaración y la disponibilidad del especialista.*

**Criterios de Aceptación:**
1.  **Dado** un Supervisor Aduanero (o Administrador con permisos), **cuando** accede a la sección de "Configuración de Parámetros de Asignación Automática", **entonces** puede visualizar los parámetros actuales (ej. prioridad por canal de riesgo, consideración de disponibilidad, umbrales de carga de trabajo, etc.).
2.  **Dado** el acceso a la interfaz de configuración, **cuando** el Supervisor modifica un parámetro (ej. activa/desactiva un criterio, ajusta una ponderación) y guarda los cambios, **entonces** el sistema almacena la nueva configuración y esta será utilizada en la próxima ejecución del proceso de asignación automática.
3.  **Dado** que se intenta guardar una configuración con valores inválidos o inconsistentes (ej. valores fuera de rango permitido, suma de porcentajes incorrecta), **entonces** el sistema muestra un mensaje de error descriptivo y no guarda los cambios hasta su corrección.

---

## RF-SIAD-006: Ejecución del Proceso de Asignación Automática {#rf-siad-006-ca}
*El sistema deberá ser capaz de ejecutar un proceso que asigne automáticamente un lote de declaraciones de importación pendientes a los Especialistas Aduaneros disponibles, basándose en los parámetros y reglas configuradas.*

**Criterios de Aceptación:**
1.  **Dado** un Supervisor Aduanero, **cuando** inicia el proceso de "Asignación Automática" (ya sea de forma inmediata o programada para un lote específico de declaraciones pendientes), **entonces** el sistema procesa el lote y asigna las declaraciones a los especialistas disponibles que cumplen con las reglas y parámetros configurados (referencia RF-SIAD-005).
2.  **Dado** que el proceso de asignación automática ha finalizado, **cuando** se revisa el listado de declaraciones pendientes, **entonces** aquellas declaraciones que cumplieron criterios y encontraron un especialista disponible han sido removidas de este listado y aparecen como asignadas.
3.  **Dado** que el proceso de asignación automática ha finalizado, **cuando** se consulta un log o resumen del proceso, **entonces** se informa el número total de declaraciones procesadas, el número de declaraciones asignadas exitosamente, y el número de declaraciones que no pudieron ser asignadas (indicando, si es posible, el motivo principal, ej. "sin especialistas disponibles con criterios requeridos").

---

## RF-SIAD-007: Gestión de Disponibilidad de Especialistas {#rf-siad-007-ca}
*El sistema deberá permitir a los Especialistas Aduaneros indicar y actualizar su estado de disponibilidad (por ejemplo: disponible, ocupado, fuera de oficina, en capacitación) para ser considerados correctamente por el módulo de asignación automática. Los Supervisores Aduaneros también podrán visualizar esta disponibilidad.*

**Criterios de Aceptación:**
1.  **Dado** un Especialista Aduanero autenticado, **cuando** accede a su sección de "Gestión de Disponibilidad" o perfil, **entonces** puede seleccionar y guardar su estado de disponibilidad actual de una lista predefinida (ej. Disponible, Ocupado, Fuera de Oficina, En Capacitación, De Vacaciones).
2.  **Dado** que un Especialista Aduanero ha actualizado su estado a uno que impide asignaciones (ej. "Fuera de Oficina", "De Vacaciones"), **cuando** se ejecuta un proceso de asignación automática, **entonces** el sistema no le asigna nuevas declaraciones durante el periodo de no disponibilidad.
3.  **Dado** un Supervisor Aduanero, **cuando** consulta la información o dashboard de especialistas, **entonces** puede visualizar el estado de disponibilidad actual reportado por cada especialista.

---

## RF-SIAD-008: Registro del Tipo de Diligencia Asignada {#rf-siad-008-ca}
*El sistema deberá permitir registrar el tipo de diligencia que se realizará sobre la declaración asignada (por ejemplo: diligencia documental, diligencia de inspección física), información que podrá ser establecida por el Supervisor al momento de la asignación o complementada por el Especialista.*

**Criterios de Aceptación:**
1.  **Dado** un Supervisor Aduanero realizando una asignación manual (referencia RF-SIAD-003), **cuando** asigna una declaración, **entonces** tiene la opción de seleccionar el tipo de diligencia (ej. documental, física) para esa asignación desde una lista predefinida.
2.  **Dado** un Especialista Aduanero con una declaración asignada, **cuando** accede al detalle de la asignación, **entonces** puede registrar o modificar (si los permisos y el estado de la diligencia lo permiten) el tipo de diligencia asociado.
3.  **Dado** una declaración asignada, **cuando** se consulta su detalle o se visualiza en un listado relevante, **entonces** se muestra claramente el tipo de diligencia registrado para la misma.

---

## RF-SIAD-009: Notificación de Asignación a Especialistas {#rf-siad-009-ca}
*El sistema deberá enviar automáticamente una notificación (por ejemplo, vía correo electrónico o notificación dentro del sistema) al Especialista Aduanero correspondiente cada vez que se le asigne o reasigne una nueva declaración.*

**Criterios de Aceptación:**
1.  **Dado** que una declaración es asignada (manual o automáticamente) a un Especialista Aduanero, **cuando** la asignación se confirma y registra exitosamente en el sistema, **entonces** el especialista recibe una notificación (según el método configurado, ej. correo electrónico) informando sobre la nueva asignación en un plazo no mayor a 5 minutos.
2.  **Dado** que una declaración es reasignada a un nuevo Especialista Aduanero, **cuando** la reasignación se confirma y registra exitosamente, **entonces** el nuevo especialista recibe una notificación y (opcionalmente, según configuración) el especialista anterior es notificado de que la declaración ya no está bajo su responsabilidad.
3.  La notificación de asignación/reasignación deberá contener información esencial como el número de identificación de la declaración, (opcionalmente) el canal de riesgo, la fecha límite (si aplica), y un enlace directo (si el sistema es web) para acceder al detalle de la diligencia en el sistema.

---

## RF-SIAD-010: Trazabilidad del Proceso de Asignación {#rf-siad-010-ca}
*El sistema deberá registrar un historial de todas las acciones de asignación y reasignación realizadas sobre una declaración. Este historial deberá ser consultable por los Supervisores Aduaneros e incluir, como mínimo, la declaración afectada, el especialista asignado anteriormente (si aplica), el nuevo especialista asignado, el usuario que realizó la acción y la fecha/hora de la acción.*

**Criterios de Aceptación:**
1.  **Dado** un Supervisor Aduanero, **cuando** selecciona una declaración específica (asignada o con historial de asignaciones) y elige la opción de ver su "Historial de Asignación" o "Trazabilidad", **entonces** el sistema muestra un listado cronológico de todos los eventos de asignación, reasignación y (si aplica) anulación de asignación relacionados con esa declaración.
2.  **Para cada evento** registrado en el historial de asignación, el sistema debe mostrar de forma clara: la fecha y hora del evento, el tipo de evento (ej. "Asignación Inicial", "Reasignación por Supervisor", "Asignación Automática"), el especialista o recurso involucrado (asignado a, reasignado de/a), y el identificador del usuario (supervisor o sistema) que realizó o gatilló la acción.
3.  **Si un evento corresponde a una reasignación manual**, el historial también debe mostrar el motivo de la reasignación que fue registrado por el supervisor (referencia RF-SIAD-004).

---