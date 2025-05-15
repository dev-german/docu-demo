---
title: 'CU-SIAD-004: Reasignar Declaración a Otro Especialista'
sidebar_label: 'CU-SIAD-004: Reasignar Declaración'
---

### Caso de Uso 004

**1. Nombre del Caso de Uso del Sistema:**
CU-SIAD-004: Reasignar Declaración a Otro Especialista

**2. Descripción del caso de uso:**
Permite al Supervisor Aduanero cambiar la asignación de una declaración previamente asignada a un Especialista Aduanero, para transferirla a otro Especialista disponible, registrando un motivo para la reasignación.

**3. Actor(es):**
Supervisor Aduanero.

**4. Precondiciones:**
* El Supervisor Aduanero ha iniciado sesión.
* Existe una declaración que ya ha sido asignada a un Especialista.
* Existen otros Especialistas Aduaneros disponibles.

**5. Post condiciones:**
* La declaración queda asignada al nuevo Especialista seleccionado.
* Se registra el motivo de la reasignación.
* Se actualiza el historial de la declaración y los logs de auditoría.
* (Opcional) Se notifica al nuevo Especialista y al Especialista anterior.

**6. Flujo de eventos:**
    1.  El Supervisor Aduanero busca y selecciona una declaración previamente asignada.
    2.  El Supervisor Aduanero elige la opción "Reasignar".
    3.  El Sistema presenta una lista de Especialistas Aduaneros disponibles y cualificados.
    4.  El Supervisor Aduanero selecciona un nuevo Especialista de la lista.
    5.  El Sistema solicita al Supervisor Aduanero que ingrese un motivo para la reasignación.
    6.  El Supervisor Aduanero ingresa el motivo y confirma la reasignación.
    7.  El Sistema actualiza la asignación de la declaración al nuevo Especialista y guarda el motivo.
    8.  El Sistema registra la acción en el historial de la declaración y en los logs de auditoría.
    9.  El Sistema muestra un mensaje de confirmación: "Declaración [Número] reasignada exitosamente a [Nombre del Nuevo Especialista]."

**7. Flujos alternativos / Sub-flujos:**
* **7.A. No hay otros especialistas disponibles/cualificados:**
    1.  Si el sistema no encuentra otros especialistas adecuados, muestra un mensaje: "No hay otros especialistas disponibles o cualificados para esta reasignación en este momento."

**8. Excepciones:**
* **8.1. Error al guardar la reasignación:** Si ocurre un problema al actualizar la base de datos, el Sistema muestra un mensaje de error: "Error al procesar la reasignación. Intente nuevamente."
* **8.2. Motivo de reasignación obligatorio no ingresado:** Si el motivo es obligatorio y no se proporciona, el sistema muestra un mensaje: "Debe ingresar un motivo para la reasignación."

**9. Requisito asociado (Funcional o no funcional):**
RF-SIAD-004: Reasignación de Declaraciones
RF-SIAD-010: Trazabilidad del Proceso de Asignación

**10. Prototipo de interfaz de usuario:**
No definido en este documento. Referirse a los prototipos de pantalla de "Reasignación de Declaraciones".