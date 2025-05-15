---
sidebar_position: 4
---

# Estimación de Volúmenes de Datos

A continuación, se presenta una estimación del volumen de datos para las tablas más importantes del Sistema de Asignación de Especialistas (SIAD).

### 1. Tabla: Declaraciones

* **Cantidad de Registros Anual (Estimada):** 500,000
    * *Comentario:* Número de nuevas declaraciones de importación que ingresan al sistema anualmente.
* **Tamaño del Registro (Estimado):** 512 bytes
    * *Comentario:* Tamaño promedio estimado para almacenar la información de una declaración (considerando campos como número de declaración, fechas, canal, estado, tipo de diligencia, etc.).
* **Crecimiento Anual (% Estimado):** 10%
    * *Comentario:* Incremento porcentual esperado en el número de declaraciones por año.
* **Tipo de Acceso:**
    * **Lectura:** Muy frecuente (consultas de supervisores, listados, búsquedas, procesos automáticos).
    * **Escritura:** Frecuente (registro de nuevas declaraciones, actualizaciones de estado).
    * **Actualización:** Frecuente (cambios de estado, asignación de canal).

### 2. Tabla: Diligencias

* **Cantidad de Registros Anual (Estimada):** 600,000
    * *Comentario:* Número de diligencias generadas anualmente (una declaración puede generar una o más, aunque usualmente es una principal).
* **Tamaño del Registro (Estimado):** 256 bytes
    * *Comentario:* Tamaño promedio para una diligencia (ID, tipo, fechas, estado, referencia a declaración, resultado).
* **Crecimiento Anual (% Estimado):** 10%
    * *Comentario:* Alineado con el crecimiento de las declaraciones.
* **Tipo de Acceso:**
    * **Lectura:** Frecuente (consultas de especialistas y supervisores, procesos de asignación).
    * **Escritura:** Frecuente (creación al registrar declaración, registro de resultado).
    * **Actualización:** Muy frecuente (cambios de estado: asignada, en proceso, observada, completada).

### 3. Tabla: Especialistas

* **Cantidad de Registros Anual (Estimada):** 5 (Nuevos) / Total: 150 (Total de especialistas activos)
    * *Comentario:* Número bajo de nuevos registros anuales, pero un volumen total de especialistas a gestionar. La estimación de almacenamiento se basará en el total.
* **Tamaño del Registro (Estimado):** 256 bytes
    * *Comentario:* Tamaño para almacenar datos del especialista (ID, nombre, especialidad, estado de disponibilidad).
* **Crecimiento Anual (% Estimado):** 3-5% (en el número total de especialistas)
    * *Comentario:* Crecimiento moderado en la plantilla de especialistas.
* **Tipo de Acceso:**
    * **Lectura:** Muy frecuente (procesos de asignación para verificar disponibilidad y carga, consultas de supervisores).
    * **Escritura:** Infrecuente (alta de nuevos especialistas).
    * **Actualización:** Frecuente (actualización del estado de disponibilidad, carga de trabajo).

### 4. Tabla: Asignaciones

* **Cantidad de Registros Anual (Estimada):** 700,000
    * *Comentario:* Número de eventos de asignación y reasignación. Cada diligencia tendrá al menos una asignación, y puede haber reasignaciones.
* **Tamaño del Registro (Estimado):** 128 bytes
    * *Comentario:* Tamaño para una entrada de asignación (IDs, fechas, tipo de asignación, supervisor, motivo de reasignación si aplica, estado de la asignación).
* **Crecimiento Anual (% Estimado):** 12%
    * *Comentario:* Puede ser ligeramente superior al de las diligencias debido a posibles reasignaciones.
* **Tipo de Acceso:**
    * **Lectura:** Frecuente (consultas de historial, trazabilidad, reportes).
    * **Escritura:** Muy frecuente (cada vez que se asigna o reasigna una diligencia).
    * **Actualización:** Moderada (actualización del estado de una asignación, ej. si se anula).

---
**Nota sobre los Valores:** Los valores presentados para "Cantidad de Registros", "Tamaño del Registro" y "Crecimiento" son **ejemplos ilustrativos**. Debes ajustarlos a las estimaciones reales y proyecciones de tu sistema SIAD.
