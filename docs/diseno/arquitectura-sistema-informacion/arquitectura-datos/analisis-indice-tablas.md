---
sidebar_position: 5
---

# Análisis de indice de tablas

A continuación, se presenta un análisis de los índices de tablas propuestos para optimizar el rendimiento de las consultas en el Sistema de Asignación de Especialistas (SIAD).

## Índice Propuesto Nro. 1

* **Tabla(s) Involucrada(s):** `Declaraciones`
* **Camino (Columnas Potenciales del Índice):** `estado_declaracion`, `fecha_registro`
    * *Comentario:* Para filtrar rápidamente declaraciones por su estado (ej. "Pendiente de Asignación") y ordenarlas por fecha.
* **Tipo de Transacción que se Beneficia:**
    * Consulta de declaraciones pendientes de asignación por parte de Supervisores (RF-SIAD-002).
    * Proceso de asignación automática al seleccionar el lote de declaraciones a procesar (RF-SIAD-006).
* **Frecuencia de la Transacción:** Muy Alta
* **Prioridad del Índice:** Alta

## Índice Propuesto Nro. 2

* **Tabla(s) Involucrada(s):** `Declaraciones`
* **Camino (Columnas Potenciales del Índice):** `numero_declaracion`
    * *Comentario:* Para búsquedas directas de una declaración específica por su número.
* **Tipo de Transacción que se Beneficia:**
    * Consulta de una declaración específica por su número (implícito en varios RFs).
    * Búsqueda para reasignación o consulta de historial.
* **Frecuencia de la Transacción:** Media
* **Prioridad del Índice:** Alta (dado que `numero_declaracion` debería ser único y es un criterio de búsqueda común).

## Índice Propuesto Nro. 3

* **Tabla(s) Involucrada(s):** `Diligencias`
* **Camino (Columnas Potenciales del Índice):** `declaracion_id`, `estado_diligencia`
    * *Comentario:* Para encontrar rápidamente todas las diligencias asociadas a una declaración y filtrar por su estado actual.
* **Tipo de Transacción que se Beneficia:**
    * Consulta del detalle de una declaración y sus diligencias asociadas.
    * Seguimiento del estado de las diligencias.
* **Frecuencia de la Transacción:** Alta
* **Prioridad del Índice:** Alta

## Índice Propuesto Nro. 4

* **Tabla(s) Involucrada(s):** `Asignaciones`
* **Camino (Columnas Potenciales del Índice):** `diligencia_id`, `fecha_evento`
    * *Comentario:* Para obtener el historial de asignaciones de una diligencia específica, ordenado cronológicamente.
* **Tipo de Transacción que se Beneficia:**
    * Consulta de trazabilidad del proceso de asignación (RF-SIAD-010).
* **Frecuencia de la Transacción:** Media
* **Prioridad del Índice:** Alta

## Índice Propuesto Nro. 5

* **Tabla(s) Involucrada(s):** `Asignaciones`
* **Camino (Columnas Potenciales del Índice):** `especialista_id`, `estado_asignacion`
    * *Comentario:* Para que los especialistas puedan consultar rápidamente sus diligencias activas.
* **Tipo de Transacción que se Beneficia:**
    * Visualización de la bandeja de tareas de un especialista.
    * Cálculo de carga de trabajo de especialistas.
* **Frecuencia de la Transacción:** Alta
* **Prioridad del Índice:** Alta

## Índice Propuesto Nro. 6

* **Tabla(s) Involucrada(s):** `Especialistas`
* **Camino (Columnas Potenciales del Índice):** `estado_disponibilidad`, `especialidad` (si se usa frecuentemente en filtros de asignación)
    * *Comentario:* Para optimizar la selección de especialistas disponibles y cualificados durante los procesos de asignación.
* **Tipo de Transacción que se Beneficia:**
    * Asignación manual de declaraciones (RF-SIAD-003).
    * Proceso de asignación automática (RF-SIAD-006).
    * Consulta de disponibilidad por parte de Supervisores (RF-SIAD-007).
* **Frecuencia de la Transacción:** Muy Alta
* **Prioridad del Índice:** Media-Alta (dependiendo de la selectividad de los campos).

---
**Nota:** Este análisis es preliminar. La necesidad y efectividad de cada índice deberán ser validadas mediante pruebas de rendimiento con datos representativos del sistema. Se deben considerar también los costos de mantenimiento de los índices (espacio y tiempo de actualización en operaciones de escritura).
