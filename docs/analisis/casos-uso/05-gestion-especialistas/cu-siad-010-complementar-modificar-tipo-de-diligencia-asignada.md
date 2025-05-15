---
title: 'CU-SIAD-010: Complementar/Modificar Tipo de Diligencia Asignada'
sidebar_label: 'CU-SIAD-010: Comp/Mod Tipo Dilig.'
---

### Caso de Uso 010

**1. Nombre del Caso de Uso del Sistema:**
CU-SIAD-010: Complementar/Modificar Tipo de Diligencia Asignada

**2. Descripción del caso de uso:**
Permite al Especialista Aduanero, una vez que se le ha asignado una declaración, registrar o modificar (si los permisos y el estado de la diligencia lo permiten) el tipo de diligencia asociado a esa declaración.

**3. Actor(es):**
Especialista Aduanero.

**4. Precondiciones:**
* El Especialista Aduanero ha iniciado sesión.
* El Especialista tiene al menos una declaración asignada.
* El estado de la diligencia permite la modificación del tipo.

**5. Post condiciones:**
* El tipo de diligencia para la declaración seleccionada es actualizado en el sistema.
* El cambio se registra en el historial de la declaración si es relevante para auditoría.

**6. Flujo de eventos:**
    1.  El Especialista Aduanero accede al detalle de una declaración que tiene asignada.
    2.  El Sistema muestra la información de la declaración, incluyendo el tipo de diligencia actual (si ya fue establecido).
    3.  El Especialista Aduanero selecciona la opción para editar/registrar el tipo de diligencia.
    4.  El Sistema presenta una lista predefinida de tipos de diligencia.
    5.  El Especialista Aduanero selecciona el tipo de diligencia apropiado.
    6.  El Especialista Aduanero guarda el cambio.
    7.  El Sistema actualiza el tipo de diligencia para esa asignación.
    8.  El Sistema muestra un mensaje de confirmación: "Tipo de diligencia actualizado."

**7. Flujos alternativos / Sub-flujos:**
* N/A

**8. Excepciones:**
* **8.1. Modificación no permitida:** Si el estado actual de la diligencia (ej. "Finalizada") no permite cambiar el tipo, el sistema deshabilita la opción o muestra un mensaje: "No se puede modificar el tipo de diligencia en el estado actual."
* **8.2. Error al guardar:** Si hay un error al actualizar la base de datos, se muestra un mensaje: "Error al guardar el tipo de diligencia."

**9. Requisito asociado (Funcional o no funcional):**
RF-SIAD-008: Registro del Tipo de Diligencia Asignada

**10. Prototipo de interfaz de usuario:**
No definido en este documento. Referirse al prototipo de pantalla de "Detalle de Declaración Asignada" para el especialista.