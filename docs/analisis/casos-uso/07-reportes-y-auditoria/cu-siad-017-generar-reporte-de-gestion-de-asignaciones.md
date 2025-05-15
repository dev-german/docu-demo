---
title: 'CU-SIAD-017: Generar Reporte de Gestión de Asignaciones'
sidebar_label: 'CU-SIAD-017: Generar Reporte'
---

### Caso de Uso 017

**1. Nombre del Caso de Uso del Sistema:**
CU-SIAD-017: Generar Reporte de Gestión de Asignaciones

**2. Descripción del caso de uso:**
Permite a un Supervisor Aduanero o Usuario Observador Global generar reportes predefinidos o personalizados sobre la gestión de asignaciones, mostrando estadísticas, tendencias y datos relevantes para la toma de decisiones y auditoría.

**3. Actor(es):**
Supervisor Aduanero, Usuario Observador Global.

**4. Precondiciones:**
* El Actor ha iniciado sesión con los permisos necesarios.
* Existen datos históricos de asignaciones en el sistema.

**5. Post condiciones:**
* El sistema genera el reporte solicitado.
* El reporte puede ser visualizado en pantalla, exportado a formatos comunes (PDF, Excel) o impreso.

**6. Flujo de eventos:**
    1.  El Actor accede a la sección "Reportes".
    2.  El Sistema muestra una lista de reportes predefinidos (ej. "Declaraciones asignadas por especialista", "Tiempos promedio de asignación", "Declaraciones por estado y canal de riesgo", "Productividad de especialistas").
    3.  El Actor selecciona un reporte de la lista.
    4.  (Opcional) Si el reporte permite parámetros, el Sistema solicita al Actor que ingrese los criterios (ej. rango de fechas, especialista específico, etc.).
    5.  El Actor confirma la generación del reporte.
    6.  El Sistema procesa los datos y genera el reporte.
    7.  El Sistema presenta el reporte en pantalla y ofrece opciones para exportar o imprimir.

**7. Flujos alternativos / Sub-flujos:**
* **7.A. Generación de reporte personalizado (si aplica):**
    1.  El Actor selecciona una opción para crear un reporte personalizado.
    2.  El Sistema presenta una interfaz para seleccionar campos, filtros, agrupaciones, etc.
    3.  El Actor define la estructura del reporte y lo ejecuta.

**8. Excepciones:**
* **8.1. Error en la generación del reporte:** Si ocurre un problema durante la recolección o procesamiento de datos, el Sistema muestra un mensaje de error: "Error al generar el reporte. Intente nuevamente."
* **8.2. No hay datos para el reporte:** Si los criterios seleccionados no arrojan datos, el reporte se muestra vacío o con un mensaje indicándolo.

**9. Requisito asociado (Funcional o no funcional):**
Capacidad mencionada en Perfil SIAD-OPERADOR-AVANZADO ("Generador de Reportes de Gestión y Operativos") y SIAD-OBSERVADOR-GLOBAL ("Acceso a Reportes Predefinidos del Sistema").

**10. Prototipo de interfaz de usuario:**
No definido en este documento. Referirse a los prototipos de la sección de "Reportes".