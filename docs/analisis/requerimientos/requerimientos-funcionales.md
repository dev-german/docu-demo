---
sidebar_position: 1
sidebar_label: "Funcionales"
---

# Requerimientos Funcionales del Sistema de Asignación de Especialistas (SIAD)

## Introducción
Aquí se detallan los requerimientos funcionales (RF) identificados para el SIAD. Cada requerimiento tiene un identificador único que puede ser utilizado para enlazarlo y trazarlo desde otros documentos como casos de uso, diseños técnicos o planes de prueba.

---

### RF-SIAD-001: Autenticación de Usuarios {#rf-siad-001}
El sistema deberá permitir la autenticación de usuarios (Supervisores Aduaneros, Especialistas Aduaneros) mediante un nombre de usuario y contraseña para acceder a las funcionalidades designadas a su rol.

**Criterios de Aceptación (Ejemplo opcional):**
* Un usuario con credenciales válidas puede iniciar sesión.
* Un usuario con credenciales inválidas no puede iniciar sesión.
* Tras el inicio de sesión, el sistema presenta las opciones correspondientes al rol del usuario.

---

### RF-SIAD-002: Visualización de Declaraciones Pendientes de Asignación {#rf-siad-002}
El sistema deberá mostrar a los Supervisores Aduaneros un listado de las declaraciones de importación que requieren la asignación de un especialista. Este listado deberá incluir, como mínimo, el número de declaración, fecha de registro y canal de riesgo (naranja o rojo).

**[Criterios de Aceptación](../criterios-aceptacion.md#rf-siad-002-ca)**

---

### RF-SIAD-003: Asignación Manual de Declaraciones a Especialistas {#rf-siad-003}
El sistema deberá permitir a un Supervisor Aduanero seleccionar una declaración de importación específica del listado de pendientes y asignarla manualmente a un Especialista Aduanero disponible y cualificado.

---
### RF-SIAD-004: Reasignación de Declaraciones {#rf-siad-004}
El sistema deberá permitir a un Supervisor Aduanero seleccionar una declaración previamente asignada y reasignarla a un Especialista Aduanero diferente, registrando el motivo de dicha reasignación.

---
### RF-SIAD-005: Configuración de Parámetros para Asignación Automática {#rf-siad-005}
El sistema deberá proveer una interfaz para que los Supervisores Aduaneros puedan configurar los parámetros y reglas que regirán el proceso de asignación automática. Estos parámetros incluirán, al menos, la consideración del canal de riesgo de la declaración y la disponibilidad del especialista.

---
### RF-SIAD-006: Ejecución del Proceso de Asignación Automática {#rf-siad-006}
El sistema deberá ser capaz de ejecutar un proceso que asigne automáticamente un lote de declaraciones de importación pendientes a los Especialistas Aduaneros disponibles, basándose en los parámetros y reglas configuradas.

---
### RF-SIAD-007: Gestión de Disponibilidad de Especialistas {#rf-siad-007}
El sistema deberá permitir a los Especialistas Aduaneros indicar y actualizar su estado de disponibilidad para ser considerados correctamente por el módulo de asignación automática. Los Supervisores Aduaneros también podrán visualizar esta disponibilidad.

---
### RF-SIAD-008: Registro del Tipo de Diligencia Asignada {#rf-siad-008}
El sistema deberá permitir registrar el tipo de diligencia que se realizará sobre la declaración asignada (por ejemplo: diligencia documental, diligencia de inspección física).

---
### RF-SIAD-009: Notificación de Asignación a Especialistas {#rf-siad-009}
El sistema deberá enviar automáticamente una notificación al Especialista Aduanero correspondiente cada vez que se le asigne o reasigne una nueva declaración.

---
### RF-SIAD-010: Trazabilidad del Proceso de Asignación {#rf-siad-010}
El sistema deberá registrar un historial de todas las acciones de asignación y reasignación realizadas sobre una declaración. Este historial deberá ser consultable e incluir la declaración afectada, el especialista, el usuario que realizó la acción y la fecha/hora.

---