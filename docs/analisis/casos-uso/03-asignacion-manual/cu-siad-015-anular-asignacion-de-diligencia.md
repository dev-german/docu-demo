---
title: 'CU-SIAD-015: Anular Asignación de Diligencia'
sidebar_label: 'CU-SIAD-015: Anular Asignación'
---

### Caso de Uso 015

**1. Nombre del Caso de Uso del Sistema:**
CU-SIAD-015: Anular Asignación de Diligencia

**2. Descripción del caso de uso:**
Permite al Supervisor Aduanero anular una asignación de diligencia que previamente se había realizado a un Especialista, devolviendo la declaración al estado de "Pendiente de Asignación" o a un estado de "Anulada", registrando un motivo.

**3. Actor(es):**
Supervisor Aduanero.

**4. Precondiciones:**
* El Supervisor Aduanero ha iniciado sesión.
* Existe una declaración asignada a un Especialista.
* El estado de la diligencia permite la anulación (ej. no está "Finalizada" o "En Proceso Irreversible").

**5. Post condiciones:**
* La asignación de la declaración al especialista es removida.
* La declaración vuelve a estar disponible para una nueva asignación o cambia a un estado específico de anulación.
* Se registra el motivo de la anulación.
* Se actualiza el historial de la declaración y los logs de auditoría.
* (Opcional) Se notifica al Especialista que la asignación ha sido anulada.

**6. Flujo de eventos:**
    1.  El Supervisor Aduanero busca y selecciona una declaración previamente asignada.
    2.  El Supervisor Aduanero elige la opción "Anular Asignación".
    3.  El Sistema solicita al Supervisor Aduanero que ingrese un motivo para la anulación.
    4.  El Supervisor Aduanero ingresa el motivo y confirma la anulación.
    5.  El Sistema desvincula la declaración del especialista y actualiza su estado (ej. "Pendiente de Asignación" o "Anulada").
    6.  El Sistema guarda el motivo de la anulación.
    7.  El Sistema registra la acción en el historial de la declaración y en los logs de auditoría.
    8.  El Sistema muestra un mensaje de confirmación: "Asignación de la declaración [Número] anulada exitosamente."

**7. Flujos alternativos / Sub-flujos:**
* N/A

**8. Excepciones:**
* **8.1. Anulación no permitida:** Si el estado actual de la diligencia no permite la anulación, el sistema muestra un mensaje: "No se puede anular la asignación en el estado actual de la diligencia."
* **8.2. Motivo de anulación obligatorio no ingresado:** Si el motivo es obligatorio y no se proporciona, el sistema muestra un mensaje: "Debe ingresar un motivo para la anulación."
* **8.3. Error al procesar la anulación:** Si ocurre un problema al actualizar la base de datos, el Sistema muestra un mensaje de error: "Error al procesar la anulación. Intente nuevamente."

**9. Requisito asociado (Funcional o no funcional):**
Capacidad mencionada en Perfil SIAD-OPERADOR-AVANZADO ("Anulación (asignaciones)").
RF-SIAD-010: Trazabilidad del Proceso de Asignación.

**10. Prototipo de interfaz de usuario:**
No definido en este documento. Referirse a los prototipos de pantalla de "Gestión de Declaraciones Asignadas".