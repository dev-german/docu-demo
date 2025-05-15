---
title: 'CU-SIAD-020: Administrar Catálogos del Sistema'
sidebar_label: 'CU-SIAD-020: Admin. Catálogos'
---

### Caso de Uso 020

**1. Nombre del Caso de Uso del Sistema:**
CU-SIAD-020: Administrar Catálogos del Sistema

**2. Descripción del caso de uso:**
Permite al Administrador del Sistema gestionar las listas maestras o catálogos utilizados por el SIAD, como por ejemplo: tipos de diligencia, motivos de reasignación, motivos de anulación, estados de disponibilidad de especialistas, etc.

**3. Actor(es):**
Administrador del Sistema.

**4. Precondiciones:**
* El Administrador del Sistema ha iniciado sesión.

**5. Post condiciones:**
* Los elementos de los catálogos son creados, modificados o desactivados/eliminados según la acción realizada.
* Los cambios en los catálogos se reflejan en las opciones disponibles en otras partes del sistema (ej. en los desplegables de selección).
* Las acciones se registran en los logs de auditoría.

**6. Flujo de eventos (Ejemplo: Agregar un nuevo Tipo de Diligencia):**
    1.  El Administrador accede a la sección "Administración de Catálogos".
    2.  El Sistema muestra una lista de los catálogos gestionables (ej. "Tipos de Diligencia", "Motivos de Reasignación").
    3.  El Administrador selecciona el catálogo "Tipos de Diligencia".
    4.  El Sistema muestra los tipos de diligencia existentes y una opción para "Agregar Nuevo".
    5.  El Administrador selecciona "Agregar Nuevo".
    6.  El Sistema presenta un formulario para ingresar el nombre y descripción del nuevo tipo de diligencia.
    7.  El Administrador completa la información y guarda.
    8.  El Sistema valida los datos (ej. que el nombre no esté duplicado).
    9.  El Sistema añade el nuevo tipo de diligencia al catálogo.
    10. El Sistema registra la acción en los logs de auditoría.
    11. El Sistema muestra un mensaje de confirmación: "Nuevo tipo de diligencia agregado exitosamente."

*Flujos similares para modificar o desactivar/eliminar ítems de catálogos.*

**7. Flujos alternativos / Sub-flujos:**
* N/A

**8. Excepciones:**
* **8.1. Intento de eliminar un ítem de catálogo en uso:** Si un tipo de diligencia está siendo usado en declaraciones activas, el sistema podría impedir su eliminación directa y sugerir desactivarlo.
* **8.2. Datos duplicados:** Si se intenta agregar un ítem con un nombre o código que ya existe.
* **8.3. Error al guardar:** Error genérico si falla la actualización en base de datos.

**9. Requisito asociado (Funcional o no funcional):**
Capacidad mencionada en Perfil SIAD-CONFIGURADOR-APLICACION ("Módulo de Administración de Catálogos y Listas Maestras del Sistema").
RNF-SIAD-005: Mantenibilidad de las Reglas de Asignación (indirectamente, al permitir configurar opciones).

**10. Prototipo de interfaz de usuario:**
No definido en este documento. Referirse a los prototipos de la sección de "Administración de Catálogos".