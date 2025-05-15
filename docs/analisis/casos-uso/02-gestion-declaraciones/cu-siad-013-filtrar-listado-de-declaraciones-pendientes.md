---
title: 'CU-SIAD-013: Filtrar Listado de Declaraciones Pendientes'
sidebar_label: 'CU-SIAD-013: Filtrar Pendientes'
---

### Caso de Uso 013

**1. Nombre del Caso de Uso del Sistema:**
CU-SIAD-013: Filtrar Listado de Declaraciones Pendientes

**2. Descripción del caso de uso:**
Permite al Supervisor Aduanero aplicar diversos criterios de filtro sobre el listado de declaraciones pendientes de asignación para refinar la búsqueda y visualizar un subconjunto específico de declaraciones.

**3. Actor(es):**
Supervisor Aduanero.

**4. Precondiciones:**
* El Supervisor Aduanero ha iniciado sesión y está visualizando el listado de declaraciones pendientes (CU-SIAD-002).

**5. Post condiciones:**
* El listado de declaraciones pendientes se actualiza mostrando solo aquellas que cumplen con los criterios de filtro aplicados.
* El sistema indica los filtros activos.

**6. Flujo de eventos:**
    1.  Desde el listado de declaraciones pendientes, el Supervisor Aduanero accede a las opciones de filtro.
    2.  El Sistema presenta los campos o criterios por los cuales se puede filtrar (ej. canal de riesgo, rango de fechas de registro, tipo de declarante, etc.).
    3.  El Supervisor Aduanero selecciona o ingresa los valores para uno o más criterios de filtro.
    4.  El Supervisor Aduanero aplica los filtros.
    5.  El Sistema consulta la base de datos aplicando los filtros seleccionados.
    6.  El Sistema actualiza el listado de declaraciones pendientes para mostrar solo los resultados que coinciden.
    7.  El Sistema muestra claramente los filtros que están actualmente aplicados.

**7. Flujos alternativos / Sub-flujos:**
* **7.A. Limpiar filtros:**
    1.  El Supervisor Aduanero selecciona la opción "Limpiar Filtros" o "Mostrar Todos".
    2.  El Sistema remueve todos los filtros aplicados y muestra el listado completo de declaraciones pendientes.
* **7.B. No se encuentran resultados con los filtros aplicados:**
    1.  Si ningún registro coincide con los filtros, el Sistema muestra un mensaje: "No se encontraron declaraciones que coincidan con los filtros aplicados."

**8. Excepciones:**
* **8.1. Error al aplicar filtros:** Si ocurre un problema al procesar la consulta con filtros, el Sistema muestra un mensaje de error: "Error al aplicar los filtros. Intente nuevamente."

**9. Requisito asociado (Funcional o no funcional):**
Implícito en RF-SIAD-002.
RNF-SIAD-001: Rendimiento de Carga de Listados (la respuesta al aplicar filtros no debe exceder 2 segundos).

**10. Prototipo de interfaz de usuario:**
Parte del prototipo de "Listado de Declaraciones Pendientes", mostrando las opciones de filtrado.