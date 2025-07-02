---
title: 'CU-SIAD-002: Cambiar Contraseña'
sidebar_label: 'CU-SIAD-002: Cambiar Contraseña'
---

## 1. Descripción del caso de uso:
Permite a un usuario **autenticado** del sistema SIAD **cambiar su contraseña actual** por una nueva. El sistema valida la contraseña actual y se asegura de que la nueva contraseña cumpla con los **requisitos de seguridad** definidos antes de actualizarla.

## 2. Actor(es):
Supervisor Aduanero, Especialista Aduanero, Administrador del Sistema, Usuario Observador Global.

## 3. Precondiciones:
* El usuario debe haber **iniciado sesión** exitosamente en el sistema SIAD.
* El sistema debe estar **operativo y accesible**.
* El usuario debe **recordar su contraseña actual**.

## 4. Post condiciones:
* Si el cambio de contraseña es exitoso, la contraseña del usuario **se actualiza** en la base de datos y se le notifica al usuario.
* Si el cambio de contraseña falla, la contraseña del usuario **permanece sin cambios** y se muestra un mensaje de error.
* Se registra el **intento de cambio de contraseña** (exitoso o fallido) en el log de auditoría.

## 5. Flujo de eventos:
    1.  El Actor **inicia sesión** en el sistema SIAD.
    2.  El Actor navega a la sección de "**Configuración de Perfil**" o "**Seguridad**".
    3.  El Actor selecciona la opción "**Cambiar Contraseña**".
    4.  El Sistema presenta un formulario para cambiar la contraseña con los campos: "**Contraseña Actual**", "**Nueva Contraseña**" y "**Confirmar Nueva Contraseña**".
    5.  El Actor ingresa su contraseña actual en el campo "**Contraseña Actual**".
    6.  El Actor ingresa la nueva contraseña deseada en el campo "**Nueva Contraseña**".
    7.  El Actor re-ingresa la nueva contraseña en el campo "**Confirmar Nueva Contraseña**".
    8.  El Actor hace clic en el botón "**Guardar Cambios**" o "**Cambiar Contraseña**".
    9.  El Sistema **valida** que la "**Contraseña Actual**" ingresada coincida con la contraseña almacenada para el usuario.
    10. El Sistema **valida** que la "**Nueva Contraseña**" y "**Confirmar Nueva Contraseña**" coincidan.
    11. El Sistema **valida** que la "**Nueva Contraseña**" cumpla con las **políticas de seguridad** (longitud mínima, caracteres especiales, etc.).
    12. El Sistema **actualiza la contraseña** del usuario en la base de datos.
    13. El Sistema muestra un **mensaje de confirmación** al Actor: "Su contraseña ha sido cambiada exitosamente."
    14. El Sistema puede redirigir al Actor a la página de perfil o al panel principal.

## 6. Flujos alternativos / Sub-flujos:
* **6.A. Olvido de contraseña actual mientras está logueado:**
    1.  Si el Actor olvida su contraseña actual pero ya está logueado, se le puede sugerir el flujo de "**Recuperación de Contraseña**" como una alternativa para restablecerla (este puede ser un caso de uso separado).

## 7. Excepciones:
* **7.1. Contraseña actual incorrecta:** Si la contraseña actual ingresada no coincide con la almacenada, el Sistema muestra un mensaje: "**La contraseña actual es incorrecta. Por favor, verifique y reintente.**" y permanece en el formulario de cambio de contraseña.
* **7.2. Nueva contraseña y confirmación no coinciden:** Si la "**Nueva Contraseña**" y "**Confirmar Nueva Contraseña**" no son idénticas, el Sistema muestra un mensaje: "**La nueva contraseña y su confirmación no coinciden. Por favor, verifique.**" y permanece en el formulario.
* **7.3. Nueva contraseña no cumple políticas de seguridad:** Si la nueva contraseña no cumple con los requisitos de complejidad (ej. muy corta, no incluye números/símbolos), el Sistema muestra un mensaje específico indicando las políticas no cumplidas (ej. "**La nueva contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, un número y un símbolo.**") y permanece en el formulario.
* **7.4. Nueva contraseña es igual a la actual:** Si la nueva contraseña es idéntica a la contraseña actual, el Sistema muestra un mensaje: "**La nueva contraseña no puede ser igual a la contraseña actual.**" y permanece en el formulario.
* **7.5. Campos vacíos:** Si el Actor deja algún campo obligatorio vacío, el Sistema muestra un mensaje: "**Todos los campos son obligatorios.**"
* **7.6. Falla en la actualización de la base de datos:** Si ocurre un error interno al intentar actualizar la contraseña, el Sistema muestra un mensaje de error general (ej. "**Error al cambiar la contraseña. Intente más tarde.**")

## 8. Requisito asociado (Funcional o no funcional):
* [RF-SIAD-004: Gestión de Perfil de Usuario](../../requerimientos/requerimientos-funcionales.md#rf-siad-004)
* [RNF-SIAD-002: Seguridad de Acceso y Protección de Datos](../../requerimientos/requerimientos-no-funcionales.md#rnf-siad-002)
* [RNF-SIAD-008: Registros de Auditoría (Logging)](../../requerimientos//requerimientos-no-funcionales.md#rnf-siad-008)

## 9. Prototipo de interfaz de usuario:

* [pt-001-cu-siad-002](../../prototipos/02-gestion-de-perfil/pt-cu-siad-002-cambiar-contrasena.md#p-cambio-contrasena-01-formulario-de-cambio-de-contrasena)