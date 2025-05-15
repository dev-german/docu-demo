---
title: 'CU-SIAD-009: Registrar Tipo de Diligencia al Asignar'
sidebar_label: 'CU-SIAD-009: Reg. Tipo Diligencia'
---

### Caso de Uso 009

**1. Nombre del Caso de Uso del Sistema:**
CU-SIAD-009: Registrar Tipo de Diligencia al Asignar

**2. Descripción del caso de uso:**
Permite al Supervisor Aduanero, durante el proceso de asignación manual de una declaración (CU-SIAD-003), especificar el tipo de diligencia que se realizará sobre dicha declaración (ej. documental, inspección física).

**3. Actor(es):**
Supervisor Aduanero.

**4. Precondiciones:**
* El Supervisor Aduanero está en proceso de realizar una asignación manual (paso intermedio de CU-SIAD-003).
* El sistema tiene una lista predefinida de tipos de diligencia.

**5. Post condiciones:**
* El tipo de diligencia seleccionado queda asociado a la asignación de la declaración.
* Esta información es visible al consultar el detalle de la declaración asignada.

**6. Flujo de eventos:**
    1.  Durante el flujo de CU-SIAD-003 (Asignar Manualmente Declaración), después de seleccionar la declaración y antes de seleccionar al especialista (o concurrentemente), el Sistema presenta una opción para seleccionar el "Tipo de Diligencia".
    2.  El Supervisor Aduanero selecciona el tipo de diligencia de una lista desplegable o conjunto de opciones (ej. "Inspección Documental", "Inspección Física").
    3.  El Supervisor Aduanero continúa con el proceso de asignación.
    4.  Al confirmar la asignación, el Sistema guarda el tipo de diligencia junto con los demás datos de la asignación.

**7. Flujos alternativos / Sub-flujos:**
* **7.A. Tipo de diligencia predeterminado o inferido:**
    1.  El sistema podría preseleccionar un tipo de diligencia basado en el canal de riesgo de la declaración (ej. Naranja -> Documental, Rojo -> Física), permitiendo al supervisor cambiarlo si es necesario.

**8. Excepciones:**
* **8.1. Lista de tipos de diligencia no disponible:** Si la lista no se carga, se muestra un error y podría impedir la asignación si es un campo obligatorio.

**9. Requisito asociado (Funcional o no funcional):**
RF-SIAD-008: Registro del Tipo de Diligencia Asignada

**10. Prototipo de interfaz de usuario:**
Parte del prototipo de "Asignación Manual".