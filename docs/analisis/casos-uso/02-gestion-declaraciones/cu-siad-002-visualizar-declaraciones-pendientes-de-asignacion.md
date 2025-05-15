---
title: 'CU-SIAD-002: Visualizar Declaraciones Pendientes de Asignación'
sidebar_label: 'CU-SIAD-002: Visualizar Pendientes'
---

### Caso de Uso 002

**1. Nombre del Caso de Uso del Sistema:**
CU-SIAD-002: Visualizar Declaraciones Pendientes de Asignación

**2. Descripción del caso de uso:**
Permite al Supervisor Aduanero consultar el listado de todas las declaraciones de importación que están registradas en el sistema y que aún no han sido asignadas a un Especialista Aduanero para su diligencia.

**3. Actor(es):**
Supervisor Aduanero.

**4. Precondiciones:**
* El Supervisor Aduanero ha iniciado sesión en el sistema.
* Existen declaraciones registradas en el sistema pendientes de asignación.

**5. Post condiciones:**
* El sistema muestra el listado de declaraciones pendientes con la información mínima requerida (número de declaración, fecha de registro, canal de riesgo).
* Si no hay declaraciones pendientes, el sistema muestra un mensaje indicándolo.

**6. Flujo de eventos:**
    1.  El Supervisor Aduanero selecciona la opción "Declaraciones Pendientes" o accede a la sección correspondiente desde su panel principal.
    2.  El Sistema consulta la base de datos para obtener todas las declaraciones con estado "Pendiente de Asignación".
    3.  El Sistema presenta al Supervisor Aduanero un listado/tabla con las declaraciones encontradas, mostrando al menos: Número de Declaración, Fecha de Registro, Canal de Riesgo (Naranja/Rojo).

**7. Flujos alternativos / Sub-flujos:**
* **7.A. Listado vacío:**
    1.  Si no se encuentran declaraciones pendientes de asignación, el Sistema muestra un mensaje: "No hay declaraciones pendientes de asignación en este momento."

**8. Excepciones:**
* **8.1. Error al cargar el listado:** Si ocurre un problema al consultar la base de datos, el Sistema muestra un mensaje de error: "No se pudo cargar el listado de declaraciones. Intente nuevamente más tarde."

**9. Requisito asociado (Funcional o no funcional):**
RF-SIAD-002: Visualización de Declaraciones Pendientes de Asignación
RNF-SIAD-001: Rendimiento de Carga de Listados

**10. Prototipo de interfaz de usuario:**
No definido en este documento. Referirse al prototipo de pantalla de "Listado de Declaraciones Pendientes".