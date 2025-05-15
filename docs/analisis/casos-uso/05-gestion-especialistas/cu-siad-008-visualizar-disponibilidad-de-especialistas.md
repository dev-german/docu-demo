---
title: 'CU-SIAD-008: Visualizar Disponibilidad de Especialistas'
sidebar_label: 'CU-SIAD-008: Ver Disponibilidad'
---

### Caso de Uso 008

**1. Nombre del Caso de Uso del Sistema:**
CU-SIAD-008: Visualizar Disponibilidad de Especialistas

**2. Descripción del caso de uso:**
Permite al Supervisor Aduanero consultar el estado de disponibilidad actual de todos los Especialistas Aduaneros registrados en el sistema.

**3. Actor(es):**
Supervisor Aduanero.

**4. Precondiciones:**
* El Supervisor Aduanero ha iniciado sesión en el sistema.

**5. Post condiciones:**
* El sistema muestra un listado o dashboard con los Especialistas Aduaneros y su estado de disponibilidad actual reportado.

**6. Flujo de eventos:**
    1.  El Supervisor Aduanero accede a la sección "Disponibilidad de Especialistas" o a un dashboard que contenga esta información.
    2.  El Sistema consulta la base de datos para obtener el estado de disponibilidad actual de cada Especialista Aduanero.
    3.  El Sistema presenta la información, usualmente mostrando el nombre del especialista y su estado (ej. "Disponible", "Ocupado", "Fuera de Oficina").

**7. Flujos alternativos / Sub-flujos:**
* N/A

**8. Excepciones:**
* **8.1. Error al cargar la información:** Si ocurre un problema al consultar la base de datos, el Sistema muestra un mensaje de error: "No se pudo cargar la información de disponibilidad. Intente nuevamente más tarde."

**9. Requisito asociado (Funcional o no funcional):**
RF-SIAD-007: Gestión de Disponibilidad de Especialistas

**10. Prototipo de interfaz de usuario:**
No definido en este documento. Referirse al prototipo de pantalla/dashboard de "Visualización de Disponibilidad de Especialistas".