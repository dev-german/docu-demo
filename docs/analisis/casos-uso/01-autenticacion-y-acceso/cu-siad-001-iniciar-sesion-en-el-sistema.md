---
title: 'CU-SIAD-001: Iniciar Sesión en el Sistema'
sidebar_label: 'CU-SIAD-001: Iniciar Sesión'
---

## 1. Descripción del caso de uso:
Permite a un usuario registrado acceder al sistema SIAD introduciendo sus credenciales (nombre de usuario y contraseña). El sistema valida las credenciales y, si son correctas, concede acceso a las funcionalidades correspondientes a su rol.

## 2. Actor(es):
Supervisor Aduanero, Especialista Aduanero, Administrador del Sistema, Usuario Observador Global.

## 3. Precondiciones:
* El usuario debe poseer credenciales válidas (nombre de usuario y contraseña).
* El sistema debe estar operativo y accesible.
* El usuario debe tener un rol asignado en el sistema.

## 4. Post condiciones:
* Si la autenticación es exitosa, el sistema redirige al usuario al panel principal correspondiente a su rol.
* Si la autenticación falla, el sistema muestra un mensaje de error y no permite el acceso.
* Se registra el intento de inicio de sesión (exitoso o fallido) en el log de auditoría.

## 5. Flujo de eventos:
    1.  El Actor accede a la página de inicio de sesión del SIAD.
    2.  El Actor ingresa su nombre de usuario en el campo "Usuario".
    3.  El Actor ingresa su contraseña en el campo "Contraseña".
    4.  El Actor hace clic en el botón "Ingresar".
    5.  El Sistema valida las credenciales contra la base de datos de usuarios.
    6.  El Sistema verifica el rol del usuario.
    7.  El Sistema redirige al Actor al panel de control correspondiente a su rol.

## 6. Flujos alternativos / Sub-flujos:
* **6.A. Intento de recuperación de contraseña:**
    1.  El Actor hace clic en el enlace "¿Olvidó su contraseña?".
    2.  El Sistema presenta la interfaz para la recuperación de contraseña (este flujo puede ser un caso de uso separado y más detallado).

## 7. Excepciones:
* **7.1. Credenciales inválidas:** Si el nombre de usuario o la contraseña son incorrectos, el Sistema muestra un mensaje: "Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo." y permanece en la página de inicio de sesión.
* **7.2. Campos vacíos:** Si el Actor no ingresa nombre de usuario o contraseña, el Sistema muestra un mensaje: "Ambos campos son obligatorios."
* **7.3. Cuenta bloqueada/inactiva:** Si la cuenta del usuario está bloqueada o inactiva, el Sistema muestra un mensaje apropiado (ej. "Su cuenta se encuentra bloqueada. Contacte al administrador.") y no permite el acceso.
* **7.4. Falla de conexión con el servicio de autenticación:** El Sistema muestra un mensaje de error general (ej. "Error de autenticación. Intente más tarde.")

## 8. Requisito asociado (Funcional o no funcional):
* [RF-SIAD-001: Autenticación de Usuarios](../../requerimientos/requerimientos-funcionales.md#rf-siad-001)
* [RNF-SIAD-002: Seguridad de Acceso y Protección de Datos](../../requerimientos/requerimientos-no-funcionales.md#rnf-siad-002)
* [RNF-SIAD-008: Registros de Auditoría (Logging)](../../requerimientos//requerimientos-no-funcionales.md#rnf-siad-008)

## 9. Prototipo de interfaz de usuario:

* [pt-001-cu-siad-001](../../prototipos/01-autenticacion-y-acceso/pt-cu-siad-001-iniciar-sesion-en-el-sistema.md#p-login-01-pantalla-principal-de-inicio-de-sesión)
* [pt-002-cu-siad-001](../../prototipos/01-autenticacion-y-acceso/pt-cu-siad-001-iniciar-sesion-en-el-sistema.md#p-recuperar-01-solicitud-de-recuperación-de-contraseña)