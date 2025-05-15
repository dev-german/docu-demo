---
title: 'CU-SIAD-011: Consultar Historial de Asignaciones de una Declaración'
sidebar_label: 'CU-SIAD-011: Consultar Historial'
---

### Caso de Uso 011

**1. Nombre del Caso de Uso del Sistema:**
CU-SIAD-011: Consultar Historial de Asignaciones de una Declaración

**2. Descripción del caso de uso:**
Permite a un Supervisor Aduanero visualizar el registro cronológico de todas las acciones de asignación, reasignación y otros eventos relevantes que han ocurrido sobre una declaración específica.

**3. Actor(es):**
Supervisor Aduanero.

**4. Precondiciones:**
* El Supervisor Aduanero ha iniciado sesión.
* La declaración sobre la que se desea consultar el historial existe en el sistema.

**5. Post condiciones:**
* El sistema muestra un listado cronológico de los eventos de asignación para la declaración seleccionada, incluyendo detalles como fechas, usuarios involucrados y motivos (si aplica).

**6. Flujo de eventos:**
    1.  El Supervisor Aduanero busca y selecciona una declaración específica (puede estar pendiente, asignada o incluso finalizada).
    2.  El Supervisor Aduanero elige la opción "Ver Historial de Asignación" o "Trazabilidad".
    3.  El Sistema consulta la base de datos para recuperar todos los eventos de asignación relacionados con esa declaración.
    4.  El Sistema presenta el historial en orden cronológico, mostrando para cada evento: Fecha/Hora, Tipo de Evento (ej. "Asignación Inicial", "Reasignación por Supervisor", "Asignación Automática"), Especialista Anterior (si aplica), Especialista Nuevo/Asignado, Usuario que realizó la acción, Motivo (para reasignaciones manuales).

**7. Flujos alternativos / Sub-flujos:**
* **7.A. No hay historial:**
    1.  Si es una declaración recién registrada y nunca asignada, el historial estará vacío o mostrará un mensaje como "Aún no hay eventos de asignación para esta declaración."

**8. Excepciones:**
* **8.1. Error al cargar el historial:** Si ocurre un problema al consultar la base de datos, el Sistema muestra un mensaje de error: "No se pudo cargar el historial de la declaración. Intente nuevamente."

**9. Requisito asociado (Funcional o no funcional):**
RF-SIAD-010: Trazabilidad del Proceso de Asignación
RNF-SIAD-008: Registros de Auditoría (Logging)

**10. Prototipo de interfaz de usuario:**
No definido en este documento. Referirse al prototipo de pantalla de "Historial/Trazabilidad de Declaración".