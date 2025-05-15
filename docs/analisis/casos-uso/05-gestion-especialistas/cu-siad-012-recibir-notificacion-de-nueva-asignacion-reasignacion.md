---
title: 'CU-SIAD-012: Recibir Notificación de Nueva Asignación/Reasignación'
sidebar_label: 'CU-SIAD-012: Recibir Notificación'
---

### Caso de Uso 012

**1. Nombre del Caso de Uso del Sistema:**
CU-SIAD-012: Recibir Notificación de Nueva Asignación/Reasignación

**2. Descripción del caso de uso:**
El sistema notifica automáticamente a un Especialista Aduanero cada vez que se le asigna o reasigna una nueva declaración para su diligencia.

**3. Actor(es):**
Especialista Aduanero (receptor de la notificación), Sistema (emisor de la notificación).

**4. Precondiciones:**
* Una declaración ha sido exitosamente asignada (manualmente o automáticamente) o reasignada a un Especialista Aduanero.
* El sistema de notificaciones está configurado y operativo.
* El Especialista Aduanero tiene un método de notificación configurado (ej. correo electrónico, notificación en-app).

**5. Post condiciones:**
* El Especialista Aduanero recibe una notificación con la información esencial de la nueva asignación.

**6. Flujo de eventos:**
    1.  El Sistema detecta que una asignación o reasignación a un Especialista Aduanero se ha completado y registrado exitosamente (proveniente de CU-SIAD-003, CU-SIAD-004, CU-SIAD-006).
    2.  El Sistema genera el contenido de la notificación, incluyendo: número de declaración, canal de riesgo (opcional), fecha límite (si aplica), y un enlace directo (si es web) al detalle de la diligencia.
    3.  El Sistema envía la notificación al Especialista Aduanero a través del canal configurado (ej. correo electrónico, alerta en el panel del sistema).
    4.  (Opcional) El sistema registra el envío de la notificación.

**7. Flujos alternativos / Sub-flujos:**
* N/A

**8. Excepciones:**
* **8.1. Falla en el envío de notificación:** Si el sistema de notificación falla (ej. servidor de correo no disponible), el sistema interno puede reintentar el envío o registrar el error. La asignación en sí no se revierte.

**9. Requisito asociado (Funcional o no funcional):**
RF-SIAD-009: Notificación de Asignación a Especialistas

**10. Prototipo de interfaz de usuario:**
No aplica directamente (es una notificación). El contenido de la notificación (ej. plantilla de correo) sería definido.