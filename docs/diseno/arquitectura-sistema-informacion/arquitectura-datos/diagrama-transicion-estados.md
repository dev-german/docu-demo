---
sidebar_position: 2
---

# Diagrama de transición de estados

```mermaid
---
title: Estados SIAD
---
stateDiagram-v2
    [*] --> Recepcionada
    Recepcionada --> EnProceso
    EnProceso --> Recepcionada
    EnProceso --> Reasignada
    Asignada --> Reasignada
    Asignada --> [*]
    Reasignada --> [*]
```