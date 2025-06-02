---
sidebar_position: 1
sidebar_label: "Alcance del  Sistema"
---

# Alcance del Sistema de Información

## Descripción

El presente sistema tiene como finalidad gestionar la **asignación automática y controlada de especialistas aduaneros** para la atención de **declaraciones de importación** que requieren ser sometidas a una **diligencia**.

Una *declaración* es el documento presentado por un **declarante** que contiene la información sobre las mercancías que desea importar. Según el canal asignado durante el proceso selectivo (naranja o rojo), la diligencia requerida puede ser:

- **Inspección documental** (canal naranja), realizada por un especialista desde un entorno de escritorio.
- **Inspección física** (canal rojo), realizada presencialmente por un funcionario en el punto de control.

### Funcionalidades incluidas:
- Registro y consulta de declaraciones asignadas para revisión.
- Asignación automática o manual de especialistas a diligencias.
- Reasignación manual de especialistas a diligencias
- Generación de trazabilidad para fines de auditoría.


## Diagrama contexto general del sistema

```mermaid
flowchart TB
classDef borderless stroke-width:0px
classDef brightBlue fill:#6082B6, color:#fff
classDef gray fill:#62524F, color:#fff
classDef gray2 fill:#4F625B, color:#fff

subgraph supervisorAduanero[ ]
    A1[[Supervisor<br/> Usuario del sistema, que asigna declaraciones]]
end
class supervisorAduanero,A1 gray

subgraph allocationSystem[ ]
    A3[[Sistema de Asignación]]
    B3[Permite a los supervisores asignar declaraciones a los funcionarios aduaneros]
end
class allocationSystem,A3 brightBlue

subgraph emailSystem[ ]
    A4[[Sistema de correo]]
    B4[Sistema interno de envio de correos]
end
class emailSystem,A4, gray2

supervisorAduanero-->allocationSystem
allocationSystem--Envia correo usando -->emailSystem

class A1,A3,A4,B3,B4, borderless
```