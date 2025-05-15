---
title: 'CU-SIAD-003: Asignar Manualmente Declaración a Especialista'
sidebar_label: 'CU-SIAD-003: Asignar Manualmente'
---

### Caso de Uso 003

**1. Nombre del Caso de Uso del Sistema:**
CU-SIAD-003: Asignar Manualmente Declaración a Especialista

**2. Descripción del caso de uso:**
Permite al Supervisor Aduanero seleccionar una declaración de importación del listado de pendientes y asignarla de forma manual a un Especialista Aduanero específico que esté disponible y cualificado.

**3. Actor(es):**
Supervisor Aduanero.

**4. Precondiciones:**
* El Supervisor Aduanero ha iniciado sesión y está visualizando el listado de declaraciones pendientes (CU-SIAD-002).
* Existen Especialistas Aduaneros registrados y marcados como "disponibles".

**5. Post condiciones:**
* La declaración seleccionada queda registrada como asignada al Especialista Aduanero elegido.
* La declaración ya no aparece en el listado de "Pendientes de Asignación".
* Se registra la asignación en el historial de la declaración y en los logs de auditoría.
* (Opcional) Se notifica al Especialista Aduanero (ver CU-SIAD-012).

**6. Flujo de eventos:**
    1.  Desde el listado de declaraciones pendientes, el Supervisor Aduanero selecciona una declaración específica.
    2.  El Supervisor Aduanero elige la opción "Asignar Manualmente".
    3.  El Sistema presenta una lista de Especialistas Aduaneros disponibles y cualificados (según criterios como tipo de diligencia, especialización, etc.).
    4.  El Supervisor Aduanero selecciona un Especialista de la lista.
    5.  (Opcional) El Supervisor Aduanero registra el tipo de diligencia (ver CU-SIAD-009).
    6.  El Supervisor Aduanero confirma la asignación.
    7.  El Sistema actualiza el estado de la declaración a "Asignada" y la asocia con el Especialista seleccionado.
    8.  El Sistema registra la acción en el historial de la declaración y en los logs de auditoría.
    9.  El Sistema muestra un mensaje de confirmación: "Declaración [Número] asignada exitosamente a [Nombre del Especialista]."

**7. Flujos alternativos / Sub-flujos:**
* **7.A. No hay especialistas disponibles/cualificados:**
    1.  Si el sistema no encuentra especialistas que cumplan los criterios para la declaración seleccionada, muestra un mensaje: "No hay especialistas disponibles o cualificados para esta declaración en este momento."

**8. Excepciones:**
* **8.1. Error al guardar la asignación:** Si ocurre un problema al actualizar la base de datos, el Sistema muestra un mensaje de error: "Error al procesar la asignación. Intente nuevamente." y la declaración permanece sin asignar.
* **8.2. Declaración ya asignada por otro supervisor:** Si, en el interim, otro supervisor asignó la misma declaración, el sistema muestra un mensaje: "Esta declaración ya ha sido asignada. Por favor, actualice su listado."

**9. Requisito asociado (Funcional o no funcional):**
RF-SIAD-003: Asignación Manual de Declaraciones a Especialistas
RF-SIAD-007: Gestión de Disponibilidad de Especialistas
RF-SIAD-010: Trazabilidad del Proceso de Asignación
RNF-SIAD-003: Usabilidad del Sistema para Supervisores

**10. Prototipo de interfaz de usuario:**
No definido en este documento. Referirse a los prototipos de pantalla de "Asignación Manual".