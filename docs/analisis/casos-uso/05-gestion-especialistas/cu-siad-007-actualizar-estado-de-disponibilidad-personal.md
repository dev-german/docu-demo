---
title: 'CU-SIAD-007: Actualizar Estado de Disponibilidad Personal'
sidebar_label: 'CU-SIAD-007: Act. Disponibilidad'
---

### Caso de Uso 007

**1. Nombre del Caso de Uso del Sistema:**
CU-SIAD-007: Actualizar Estado de Disponibilidad Personal

**2. Descripción del caso de uso:**
Permite a un Especialista Aduanero indicar y actualizar su estado de disponibilidad actual (ej. disponible, ocupado, fuera de oficina, en capacitación) para que el sistema lo considere correctamente en los procesos de asignación automática y manual.

**3. Actor(es):**
Especialista Aduanero.

**4. Precondiciones:**
* El Especialista Aduanero ha iniciado sesión en el sistema.

**5. Post condiciones:**
* El nuevo estado de disponibilidad del Especialista Aduanero queda registrado en el sistema.
* El sistema utilizará este estado actualizado para futuras asignaciones.
* Se registra el cambio de estado en los logs de auditoría.

**6. Flujo de eventos:**
    1.  El Especialista Aduanero accede a su sección de "Gestión de Disponibilidad" o a su perfil.
    2.  El Sistema muestra el estado de disponibilidad actual del especialista y una lista de estados predefinidos (ej. Disponible, Ocupado, Fuera de Oficina, En Capacitación, De Vacaciones).
    3.  El Especialista Aduanero selecciona su nuevo estado de la lista.
    4.  (Opcional) Si el estado es "Fuera de Oficina" o similar, el sistema puede solicitar fechas de inicio y fin.
    5.  El Especialista Aduanero guarda los cambios.
    6.  El Sistema actualiza el estado de disponibilidad del especialista en la base de datos.
    7.  El Sistema registra el cambio en los logs de auditoría.
    8.  El Sistema muestra un mensaje de confirmación: "Su estado de disponibilidad ha sido actualizado a [Nuevo Estado]."

**7. Flujos alternativos / Sub-flujos:**
* N/A

**8. Excepciones:**
* **8.1. Error al guardar el estado:** Si ocurre un problema al actualizar la base de datos, el Sistema muestra un mensaje de error: "Error al actualizar su disponibilidad. Intente nuevamente."

**9. Requisito asociado (Funcional o no funcional):**
RF-SIAD-007: Gestión de Disponibilidad de Especialistas
RNF-SIAD-008: Registros de Auditoría (Logging)

**10. Prototipo de interfaz de usuario:**
No definido en este documento. Referirse a los prototipos de pantalla de "Gestión de Disponibilidad de Especialista".