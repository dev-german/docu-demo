---
sidebar_position: 1
sidebar_label: "Prototipos para CU-SIAD-001"
---

# Prototipos de Pantalla para CU-SIAD-001: Iniciar Sesión en el Sistema

## P-LOGIN-01: Pantalla Principal de Inicio de Sesión

**Objetivo:** Permitir al usuario ingresar sus credenciales para acceder al Sistema de Asignación de Especialistas (SIAD).

![pt-001-cu-siad-001](/img/analisis/prototipos/casos-uso/01-autenticacion-y-acceso/pt-001-cu-siad-001-iniciar-sesion-en-el-sistema.jpg)

**Elementos de la Interfaz:**

1.  **Título de la Aplicación / Encabezado:**
    * **Texto:** "SIAD - Sistema de Asignación de Especialistas" (o podría mostrar el logo de SUNAT).
    * **Ubicación Sugerida:** Parte superior de la pantalla, centrado o alineado a la izquierda.
    * **Apariencia:** Texto claro, legible, con tipografía institucional.

2.  **Panel/Formulario de Inicio de Sesión:**
    * **Ubicación Sugerida:** Centrado vertical y horizontalmente en la página.
    * **Apariencia:** Un contenedor visualmente agrupado (ej. una tarjeta con un ligero borde o sombra).
    * **Título del Panel (Opcional):**
        * **Texto:** "Iniciar Sesión" o "Acceso al Sistema".
        * **Ubicación:** Encima de los campos de entrada, dentro del panel.
    * **Campo de Texto "Usuario":**
        * **Etiqueta:** "Usuario" (o "Nombre de Usuario") visible y asociada al campo.
        * **Input:** Campo de entrada de texto estándar.
        * **Placeholder (Texto de ayuda dentro del campo):** "Ingrese su nombre de usuario" (opcional).
        * **Atributos Adicionales:** Podría tener un ícono representativo (ej. un ícono de persona) alineado con el campo.
        * **Validación:** Marcado como requerido.
    * **Campo de Texto "Contraseña":**
        * **Etiqueta:** "Contraseña" visible y asociada al campo.
        * **Input:** Campo de entrada de texto de tipo `password` (los caracteres se ocultan).
        * **Placeholder:** "Ingrese su contraseña" (opcional).
        * **Atributos Adicionales:** Podría tener un ícono representativo (ej. un ícono de candado) y una opción para mostrar/ocultar la contraseña.
        * **Validación:** Marcado como requerido.
    * **Botón "Ingresar":**
        * **Texto:** "Ingresar" (o "Acceder").
        * **Apariencia:** Botón primario, claramente clickeable (ej. color de fondo distintivo, texto en contraste).
        * **Acción:** Al hacer clic, se envían los datos del formulario para validación.
        * **Estado Inicial:** Habilitado.
    * **Enlace "Olvidé mi contraseña" (Opcional):**
        * **Texto:** "¿Olvidó su contraseña?"
        * **Apariencia:** Texto de enlace estándar (ej. subrayado y/o en color diferente).
        * **Ubicación:** Debajo del botón "Ingresar" o de los campos de entrada.
        * **Acción:** Navega a la pantalla/flujo de recuperación de contraseña (P-RECUPERAR-01).

3.  **Área de Mensajes de Error/Notificación:**
    * **Ubicación Sugerida:** Debajo del botón "Ingresar" o directamente debajo del campo que causa el error.
    * **Visibilidad:** Oculta por defecto. Se muestra cuando hay un mensaje relevante.
    * **Apariencia:** Texto claro, a menudo en color rojo para errores, o un color neutro para notificaciones informativas. Puede ir acompañado de un ícono.

**Comportamiento y Flujos Descritos:**

* **Carga Inicial:**
    * Se presenta la pantalla con todos los elementos visibles.
    * El cursor (foco) se posiciona automáticamente en el campo "Usuario".
* **Ingreso Exitoso:**
    * Tras la validación correcta de las credenciales, el usuario es redirigido al panel principal correspondiente a su rol.
* **Credenciales Inválidas:**
    * Se muestra un mensaje de error específico: "Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo."
    * El campo "Contraseña" se borra. El campo "Usuario" puede o no persistir.
    * El foco puede regresar al campo "Usuario" o "Contraseña".
* **Campos Vacíos:**
    * Si se intenta enviar el formulario con campos requeridos vacíos, se muestra un mensaje como: "El campo [Nombre del Campo] es obligatorio." o los campos se resaltan visualmente (ej. con un borde rojo).
* **Clic en "¿Olvidó su contraseña?":**
    * Navegación al prototipo P-RECUPERAR-01.

**Consideraciones Adicionales para el Prototipo:**

* **Diseño Responsivo:** La pantalla debe adaptarse a diferentes tamaños de pantalla (escritorio, tableta).
* **Accesibilidad (WCAG):**
    * Contraste de color adecuado.
    * Navegación completa por teclado.
    * Etiquetas `aria` si es necesario.
    * Texto alternativo para el logo (si se usa como imagen).
* **Guía de Estilo:** Si existe una guía de estilo de SUNAT o de la entidad, los colores, tipografías y espaciados deben adherirse a ella.

---

## P-RECUPERAR-01: Solicitud de Recuperación de Contraseña

**Objetivo:** Permitir al usuario iniciar el proceso para restablecer una contraseña olvidada.

![pt-002-cu-siad-001](/img/analisis/prototipos/casos-uso/01-autenticacion-y-acceso/pt-002-cu-siad-001-recuperar-clave.jpg)

**Elementos de la Interfaz:**

1.  **Título de la Pantalla:**
    * **Texto:** "Recuperar Contraseña".
    * **Ubicación Sugerida:** Parte superior de la pantalla.

2.  **Texto Instructivo:**
    * **Contenido:** "Por favor, ingrese su nombre de usuario o la dirección de correo electrónico asociada a su cuenta. Le enviaremos instrucciones para restablecer su contraseña."
    * **Ubicación:** Debajo del título.

3.  **Campo de Texto "Usuario o Correo Electrónico":**
    * **Etiqueta:** "Nombre de Usuario o Correo Electrónico".
    * **Input:** Campo de entrada de texto estándar.
    * **Placeholder (Opcional):** "usuario@ejemplo.com" o "su_usuario".
    * **Validación:** Requerido. Puede tener validación de formato de correo electrónico si se ingresa uno.

4.  **Botón "Enviar Instrucciones":**
    * **Texto:** "Enviar Instrucciones" (o "Continuar", "Recuperar").
    * **Apariencia:** Botón primario.
    * **Acción:** Envía la información ingresada al sistema para procesar la solicitud de recuperación.

5.  **Enlace "Volver a Inicio de Sesión":**
    * **Texto:** "Cancelar y volver a Inicio de Sesión".
    * **Apariencia:** Texto de enlace estándar.
    * **Ubicación:** Debajo del botón "Enviar Instrucciones".
    * **Acción:** Regresa al prototipo P-LOGIN-01.

**Comportamiento y Flujos Descritos:**

* **Carga Inicial:**
    * Se presenta la pantalla con el formulario.
    * El foco se posiciona en el campo "Usuario o Correo Electrónico".
* **Envío de Solicitud:**
    * Tras ingresar el dato y hacer clic en "Enviar Instrucciones":
        * El sistema procesa la solicitud.
        * Se muestra un mensaje de confirmación en la pantalla (o en una nueva pantalla/paso), por ejemplo: "Si la información proporcionada es correcta y coincide con una cuenta existente, hemos enviado un correo electrónico con las instrucciones para restablecer su contraseña. Por favor, revise su bandeja de entrada (y la carpeta de spam)."
        * El usuario no debería poder reenviar la solicitud inmediatamente para evitar abusos (se puede deshabilitar el botón temporalmente).
* **Dato Inválido o No Encontrado:**
    * Si el formato del correo es incorrecto, se muestra un error de validación en el campo.
    * Por razones de seguridad, usualmente no se confirma si el usuario/correo existe o no. Siempre se muestra un mensaje genérico como el del envío exitoso para no revelar información de las cuentas.
* **Clic en "Volver a Inicio de Sesión":**
    * Navegación al prototipo P-LOGIN-01.

---