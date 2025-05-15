---
title: 'CU-SIAD-016: Priorizar Declaraciones para Asignación'
sidebar_label: 'CU-SIAD-016: Priorizar Declaraciones'
---

### Caso de Uso 016

**1. Nombre del Caso de Uso del Sistema:**
CU-SIAD-016: Priorizar Declaraciones para Asignación

**2. Descripción del caso de uso:**
Permite al Supervisor Aduanero marcar ciertas declaraciones pendientes con un nivel de prioridad más alto para que sean consideradas preferentemente por el sistema de asignación (manual o automática) o para la atención de los supervisores.

**3. Actor(es):**
Supervisor Aduanero.

**4. Precondiciones:**
* El Supervisor Aduanero ha iniciado sesión.
* Existen declaraciones pendientes de asignación.

**5. Post condiciones:**
* La declaración seleccionada es marcada con el nivel de prioridad indicado.
* El sistema puede usar esta información de prioridad en los listados y en el proceso de asignación automática.
* El cambio de prioridad se registra.

**6. Flujo de eventos:**
    1.  El Supervisor Aduanero visualiza el listado de declaraciones pendientes (CU-SIAD-002).
    2.  El Supervisor Aduanero selecciona una o más declaraciones.
    3.  El Supervisor Aduanero elige la opción "Establecer Prioridad" o similar.
    4.  El Sistema presenta los niveles de prioridad disponibles (ej. Alta, Media, Baja).
    5.  El Supervisor Aduanero selecciona el nivel de prioridad deseado.
    6.  El Supervisor Aduanero confirma el cambio.
    7.  El Sistema actualiza el atributo de prioridad de la(s) declaración(es) seleccionada(s).
    8.  El Sistema muestra un mensaje de confirmación: "Prioridad actualizada para la(s) declaración(es) seleccionada(s)."
    9.  El listado de declaraciones puede reflejar visualmente la nueva prioridad (ej. con un icono o color).

**7. Flujos alternativos / Sub-flujos:**
* N/A

**8. Excepciones:**
* **8.1. Error al actualizar la prioridad:** Si ocurre un problema al guardar el cambio en la base de datos, el Sistema muestra un mensaje de error: "Error al actualizar la prioridad. Intente nuevamente."

**9. Requisito asociado (Funcional o no funcional):**
Capacidad mencionada en Perfil SIAD-OPERADOR-AVANZADO ("Panel de Gestión de Declaraciones (visualización, priorización, seguimiento de estados)").
Puede influir en RF-SIAD-005 y RF-SIAD-006 si la prioridad es un parámetro de asignación.

**10. Prototipo de interfaz de usuario:**
No definido en este documento. Parte del prototipo de "Listado de Declaraciones Pendientes".