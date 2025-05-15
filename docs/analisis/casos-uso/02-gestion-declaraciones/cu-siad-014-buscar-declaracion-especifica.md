---
title: 'CU-SIAD-014: Buscar Declaración Específica'
sidebar_label: 'CU-SIAD-014: Buscar Declaración'
---

### Caso de Uso 014

**1. Nombre del Caso de Uso del Sistema:**
CU-SIAD-014: Buscar Declaración Específica

**2. Descripción del caso de uso:**
Permite a un usuario (principalmente Supervisor Aduanero) buscar una declaración específica dentro del sistema utilizando su número de identificación u otros criterios de búsqueda relevantes.

**3. Actor(es):**
Supervisor Aduanero, (potencialmente otros roles con permisos de consulta).

**4. Precondiciones:**
* El Actor ha iniciado sesión en el sistema.
* El Actor conoce algún dato identificatorio de la declaración que desea buscar (ej. número de declaración).

**5. Post condiciones:**
* Si se encuentra la declaración, el sistema muestra su información detallada o la resalta en un listado.
* Si no se encuentra, el sistema informa que no hay coincidencias.

**6. Flujo de eventos:**
    1.  El Actor accede a la funcionalidad de búsqueda del sistema (puede ser una barra de búsqueda general o una opción en listados específicos).
    2.  El Actor ingresa el criterio de búsqueda (ej. número de declaración completo o parcial).
    3.  El Actor inicia la búsqueda.
    4.  El Sistema consulta la base de datos utilizando el criterio proporcionado.
    5.  Si se encuentra una o más coincidencias, el Sistema presenta los resultados. Si es una única coincidencia, puede redirigir directamente al detalle de la declaración.
    6.  Si no hay coincidencias, el Sistema muestra un mensaje: "No se encontraron declaraciones con el criterio de búsqueda proporcionado."

**7. Flujos alternativos / Sub-flujos:**
* **7.A. Búsqueda avanzada:**
    1.  El Actor accede a una opción de "Búsqueda Avanzada".
    2.  El Sistema presenta múltiples campos para refinar la búsqueda (ej. por fecha, por estado, por especialista asignado, etc.).

**8. Excepciones:**
* **8.1. Error en la búsqueda:** Si ocurre un error durante la consulta a la base de datos, el Sistema muestra un mensaje: "Error al realizar la búsqueda. Intente nuevamente."

**9. Requisito asociado (Funcional o no funcional):**
Usabilidad general del sistema. Implícito para la gestión eficiente (ej. para RF-SIAD-004, RF-SIAD-010).

**10. Prototipo de interfaz de usuario:**
No definido en este documento. Contemplado en los prototipos de las pantallas principales con funcionalidad de búsqueda.