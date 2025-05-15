---
title: 'CU-SIAD-018: Gestionar Cuentas de Usuario'
sidebar_label: 'CU-SIAD-018: Gestionar Cuentas'
---

### Caso de Uso 018

**1. Nombre del Caso de Uso del Sistema:**
CU-SIAD-018: Gestionar Cuentas de Usuario

**2. Descripción del caso de uso:**
Permite al Administrador del Sistema crear nuevas cuentas de usuario, modificar la información de cuentas existentes (ej. datos personales, rol asignado) y desactivar o eliminar cuentas de usuario del SIAD.

**3. Actor(es):**
Administrador del Sistema.

**4. Precondiciones:**
* El Administrador del Sistema ha iniciado sesión.

**5. Post condiciones:**
* **Creación:** Se crea una nueva cuenta de usuario en el sistema con los datos y rol especificados.
* **Modificación:** La información de la cuenta de usuario seleccionada es actualizada.
* **Desactivación/Eliminación:** La cuenta de usuario seleccionada es marcada como inactiva o eliminada lógicamente, impidiendo su acceso.
* Todas las acciones se registran en los logs de auditoría.

**6. Flujo de eventos (Ejemplo: Creación de Usuario):**
    1.  El Administrador accede a la sección "Administración de Usuarios".
    2.  El Administrador selecciona la opción "Crear Nuevo Usuario".
    3.  El Sistema presenta un formulario para ingresar los datos del nuevo usuario (ej. nombre, apellido, nombre de usuario, contraseña inicial, correo electrónico, rol).
    4.  El Administrador completa el formulario.
    5.  El Administrador guarda la información.
    6.  El Sistema valida los datos (ej. que el nombre de usuario no exista).
    7.  El Sistema crea la nueva cuenta de usuario.
    8.  El Sistema registra la acción en los logs de auditoría.
    9.  El Sistema muestra un mensaje de confirmación: "Usuario [Nombre de Usuario] creado exitosamente."

*Flujos similares para Modificar y Desactivar/Eliminar, seleccionando un usuario existente y aplicando la acción.*

**7. Flujos alternativos / Sub-flujos:**
* N/A

**8. Excepciones:**
* **8.1. Nombre de usuario ya existe (Creación):** El Sistema muestra: "El nombre de usuario ya está en uso. Por favor, elija otro."
* **8.2. Datos inválidos o faltantes:** El Sistema indica los campos que requieren corrección.
* **8.3. Error al procesar la acción:** Si ocurre un error de base de datos, se muestra un mensaje genérico.

**9. Requisito asociado (Funcional o no funcional):**
Capacidad mencionada en Perfil SIAD-CONFIGURADOR-APLICACION ("Módulo de Administración de Cuentas de Usuario de SIAD").
RNF-SIAD-002: Seguridad de Acceso y Protección de Datos.
RNF-SIAD-008: Registros de Auditoría (Logging).

**10. Prototipo de interfaz de usuario:**
No definido en este documento. Referirse a los prototipos de la sección de "Administración de Usuarios".