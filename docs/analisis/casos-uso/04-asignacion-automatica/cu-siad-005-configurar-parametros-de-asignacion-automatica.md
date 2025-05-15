---
title: 'CU-SIAD-005: Configurar Parámetros de Asignación Automática'
sidebar_label: 'CU-SIAD-005: Configurar Asign. Auto.'
---

### Caso de Uso 005

**1. Nombre del Caso de Uso del Sistema:**
CU-SIAD-005: Configurar Parámetros de Asignación Automática

**2. Descripción del caso de uso:**
Permite al Supervisor Aduanero o Administrador del Sistema definir y ajustar los parámetros, criterios y reglas que utiliza el sistema para realizar la asignación automática de declaraciones a los especialistas.

**3. Actor(es):**
Supervisor Aduanero, Administrador del Sistema.

**4. Precondiciones:**
* El actor (Supervisor o Administrador) ha iniciado sesión con los permisos necesarios.

**5. Post condiciones:**
* Los nuevos parámetros de asignación automática son guardados en el sistema.
* Las futuras ejecuciones del proceso de asignación automática utilizarán la configuración actualizada.
* Se registra el cambio de configuración en los logs de auditoría.

**6. Flujo de eventos:**
    1.  El Actor accede a la sección "Configuración de Asignación Automática".
    2.  El Sistema muestra la interfaz de configuración con los parámetros actuales (ej. prioridad por canal de riesgo, consideración de disponibilidad, umbrales de carga de trabajo, criterios de cualificación, etc.).
    3.  El Actor modifica los valores de los parámetros según sea necesario (activa/desactiva criterios, ajusta ponderaciones, define umbrales).
    4.  El Actor guarda los cambios.
    5.  El Sistema valida los parámetros ingresados.
    6.  El Sistema almacena la nueva configuración.
    7.  El Sistema registra el cambio en los logs de auditoría.
    8.  El Sistema muestra un mensaje de confirmación: "Configuración de asignación automática actualizada exitosamente."

**7. Flujos alternativos / Sub-flujos:**
* N/A para este nivel de detalle.

**8. Excepciones:**
* **8.1. Valores de parámetros inválidos:** Si el Actor ingresa valores fuera de rango o inconsistentes (ej. suma de porcentajes incorrecta), el Sistema muestra un mensaje de error descriptivo (ej. "El valor del parámetro X debe estar entre Y y Z.") y no guarda los cambios hasta su corrección.
* **8.2. Error al guardar la configuración:** Si ocurre un problema al guardar los datos, el Sistema muestra un mensaje de error: "Error al guardar la configuración. Intente nuevamente."

**9. Requisito asociado (Funcional o no funcional):**
RF-SIAD-005: Configuración de Parámetros para Asignación Automática
RNF-SIAD-005: Mantenibilidad de las Reglas de Asignación
RNF-SIAD-008: Registros de Auditoría (Logging)

**10. Prototipo de interfaz de usuario:**
No definido en este documento. Referirse a los prototipos de pantalla de "Configuración de Asignación Automática".