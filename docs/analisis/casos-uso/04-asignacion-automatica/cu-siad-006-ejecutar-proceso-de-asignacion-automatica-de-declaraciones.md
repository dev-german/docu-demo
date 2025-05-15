---
title: 'CU-SIAD-006: Ejecutar Proceso de Asignación Automática de Declaraciones'
sidebar_label: 'CU-SIAD-006: Ejecutar Asign. Auto.'
---

### Caso de Uso 006

**1. Nombre del Caso de Uso del Sistema:**
CU-SIAD-006: Ejecutar Proceso de Asignación Automática de Declaraciones

**2. Descripción del caso de uso:**
Permite al Supervisor Aduanero iniciar el proceso mediante el cual el sistema asigna automáticamente un lote de declaraciones de importación pendientes a los Especialistas Aduaneros disponibles, basándose en los parámetros y reglas configuradas.

**3. Actor(es):**
Supervisor Aduanero (inicia el proceso), Sistema (ejecuta la asignación).

**4. Precondiciones:**
* El Supervisor Aduanero ha iniciado sesión.
* Existen declaraciones pendientes de asignación.
* Los parámetros de asignación automática han sido configurados (CU-SIAD-005).
* Existen Especialistas Aduaneros disponibles y con su estado actualizado.

**5. Post condiciones:**
* Un lote de declaraciones pendientes es procesado y, si es posible, asignado a especialistas.
* Las declaraciones asignadas exitosamente actualizan su estado y ya no aparecen como pendientes.
* Se genera un resumen o log del proceso de asignación automática.
* Se registra la ejecución y los resultados en los logs de auditoría.

**6. Flujo de eventos:**
    1.  El Supervisor Aduanero accede a la función "Ejecutar Asignación Automática".
    2.  (Opcional) El Supervisor puede seleccionar un lote específico de declaraciones o configurar filtros para el proceso.
    3.  El Supervisor Aduanero confirma el inicio del proceso.
    4.  El Sistema identifica las declaraciones pendientes que cumplen los criterios de entrada.
    5.  El Sistema identifica los Especialistas Aduaneros disponibles y que cumplen con los criterios de las reglas configuradas (carga de trabajo, cualificaciones, canal de riesgo, etc.).
    6.  El Sistema aplica el algoritmo de asignación para emparejar declaraciones con especialistas.
    7.  Para cada asignación exitosa, el Sistema actualiza el estado de la declaración y la asocia con el especialista.
    8.  El Sistema registra cada asignación en el historial de la declaración y en los logs de auditoría.
    9.  Al finalizar, el Sistema presenta un resumen al Supervisor (ej. "Proceso finalizado. X declaraciones asignadas, Y no pudieron ser asignadas.").
    10. (Opcional) Se notifican a los especialistas sus nuevas asignaciones (CU-SIAD-012).

**7. Flujos alternativos / Sub-flujos:**
* **7.A. No hay declaraciones que cumplan criterios / No hay especialistas disponibles:**
    1.  Si el sistema no encuentra declaraciones o especialistas que permitan realizar asignaciones, el resumen indicará "0 declaraciones asignadas" y proveerá un motivo si es posible (ej. "No hay especialistas disponibles que cumplan los criterios configurados.").

**8. Excepciones:**
* **8.1. Error durante el proceso de asignación:** Si ocurre un error crítico durante la ejecución (ej. falla de base de datos), el proceso se detiene (o maneja el error por declaración) y se registra el incidente. El sistema informa al supervisor.

**9. Requisito asociado (Funcional o no funcional):**
RF-SIAD-006: Ejecución del Proceso de Asignación Automática
RNF-SIAD-008: Registros de Auditoría (Logging)

**10. Prototipo de interfaz de usuario:**
No definido en este documento. Referirse a los prototipos de pantalla de "Ejecución de Asignación Automática".