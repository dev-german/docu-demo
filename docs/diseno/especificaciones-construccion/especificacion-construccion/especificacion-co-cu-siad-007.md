---
sidebar_label: "UC-001: GestorDePedidos"
title: "Especificación: GestorDePedidos"
---

import EspecificacionUnidad from '@site/src/components/DesignSpecs/EspecificacionUnidad';

<EspecificacionUnidad
id="UC-001"
nombre="GestorDePedidos"
paquete="com.miempresa.comercio.pedidos.servicio"
tipo="Servicio (Clase Java de Lógica de Negocio)"
objetivoPrincipal="Encapsular la lógica de creación, actualización y consulta de pedidos. Asegurar la integridad de los datos y aplicar las reglas de negocio correspondientes a los pedidos."
artefacto="comercio-servicios.jar"
/>

#### Método/Funcionalidad: `crearNuevoPedido(datosPedido)`

- **Descripción:** Crea un nuevo pedido en el sistema a partir de los datos proporcionados por el cliente.
- **Parámetros de Entrada:**
  - `datosPedido`: `DTO.DatosNuevoPedido` - Información completa para el nuevo pedido (ver DTOs definidos aparte o abajo).
- **Retorna:**
  - `DTO.RespuestaCreacionPedido` - Contiene el ID del pedido generado y el estado, o errores.
- **Lógica Principal / Pasos Clave (Seudocódigo):**
  1.  Validar datos del pedido (cliente, productos, stock, dirección).
  2.  Calcular el total del pedido (incluyendo impuestos/envío si aplica).
  3.  Reservar stock de los productos.
  4.  Persistir el nuevo pedido en la base de datos con estado inicial.
  5.  (Opcional) Intentar procesar el pago si es inmediato.
  6.  Retornar ID del pedido y estado.

#### Método/Funcionalidad: `actualizarEstadoPedido(idPedido, nuevoEstado)`

- **Descripción:** Modifica el estado de un pedido existente (ej. de "Pagado" a "Enviado").
- **Parámetros de Entrada:**
  - `idPedido`: `String` - Identificador del pedido a actualizar.
  - `nuevoEstado`: `Enum.EstadoPedido` - El nuevo estado deseado para el pedido.
- **Retorna:**
  - `boolean` - `true` si la actualización fue exitosa, `false` si no.
- **Lógica Principal / Pasos Clave:**
  1.  Verificar que el `idPedido` exista.
  2.  Validar que la transición al `nuevoEstado` sea permitida según el estado actual.
  3.  Actualizar estado en base de datos.
  4.  Realizar acciones secundarias (ej. liberar stock si se cancela, notificar al cliente).
  5.  Retornar éxito o fracaso.

---

### Consideraciones Importantes / Reglas de Negocio Clave

- El stock debe reservarse de forma atómica para evitar inconsistencias.
- Las transiciones de estado de pedido deben seguir el flujo definido: PENDIENTE -> PAGADO -> EN_PREPARACION -> ENVIADO -> ENTREGADO / CANCELADO.
- Cualquier fallo en el procesamiento de pago debe dejar el pedido en estado PENDIENTE_PAGO.

---

### Estructuras de Datos Relevantes (DTOs - Opcional)

```java title="com/miempresa/comercio/pedidos/servicio/model/DatosNuevoPedido.java"
class DatosNuevoPedido{
  private String idCliente;
  private List<LineaPedido> lineasDePedido;
}
```

```jsx title="com/miempresa/comercio/pedidos/servicio/model/LineaPedido.java"
class LineaPedido{
  private String idProducto;
  private int cantidad;
}
```
