---
title: 'CU-SIAD-019: Gestionar Perfiles y Permisos de Usuario'
sidebar_label: 'CU-SIAD-019: Gestionar Perfiles'
---

### Caso de Uso 019

**1. Nombre del Caso de Uso del Sistema:**
CU-SIAD-019: Gestionar Perfiles y Permisos de Usuario

**2. Descripción del caso de uso:**
Permite al Administrador del Sistema definir y modificar los perfiles de usuario (roles) dentro del SIAD, así como asignar los permisos específicos (acceso a funcionalidades y tipos de acceso: consulta, registro, modificación, etc.) a cada perfil.

**3. Actor(es):**
Administrador del Sistema.

**4. Precondiciones:**
* El Administrador del Sistema ha iniciado sesión.
* Existen funcionalidades definidas en el sistema a las cuales se pueden asignar permisos.

**5. Post condiciones:**
* Los perfiles de usuario son creados o actualizados con los permisos correspondientes.
* Los cambios en los permisos de un perfil afectan a todos los usuarios asignados a ese perfil.
* Las acciones se registran en los logs de auditoría.

**6. Flujo de eventos (Ejemplo: Modificar Permisos de un Perfil):**
    1.  El Administrador accede a la sección "Gestión de Perfiles y Permisos".
    2.  El Sistema muestra la lista de perfiles existentes (ej. SIAD-OPERADOR-AVANZADO, SIAD-USUARIO-TAREAS).
    3.  El Administrador selecciona un perfil para modificar.
    4.  El Sistema muestra las funcionalidades del sistema y los permisos actuales del perfil para cada una (ej. CRUD sobre "Declaraciones", Ejecución sobre "Asignación Automática").
    5.  El Administrador modifica los permisos (otorga o revoca acceso a funcionalidades o cambia el tipo de acceso).
    6.  El Administrador guarda los cambios.
    7.  El Sistema valida la consistencia de los permisos.
    8.  El Sistema actualiza la definición del perfil y sus permisos.
    9.  El Sistema registra la acción en los logs de auditoría.
    10. El Sistema muestra un mensaje de confirmación: "Permisos del perfil [Nombre del Perfil] actualizados exitosamente."

**7. Flujos alternativos / Sub-flujos:**
* **7.A. Crear nuevo perfil:**
    1.  El Administrador selecciona "Crear Nuevo Perfil".
    2.  Ingresa nombre y descripción del perfil, y luego asigna permisos como en el flujo principal.

**8. Excepciones:**
* **8.1. Intento de eliminar perfil en uso:** Si se intenta eliminar un perfil que tiene usuarios asignados, el sistema podría impedirlo o advertirlo.
* **8.2. Error al guardar:** Error genérico si falla la actualización en base de datos.

**9. Requisito asociado (Funcional o no funcional):**
Capacidad mencionada en Perfil SIAD-CONFIGURADOR-APLICACION ("Módulo de Gestión de Perfiles Genéricos y Asignación de Permisos de SIAD").
RNF-SIAD-002: Seguridad de Acceso y Protección de Datos.

**10. Prototipo de interfaz de usuario:**
No definido en este documento. Referirse a los prototipos de la sección de "Gestión de Perfiles y Permisos".