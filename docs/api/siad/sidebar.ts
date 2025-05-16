import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/siad/api-del-sistema-de-asignacion-de-especialistas-siad",
    },
    {
      type: "category",
      label: "Declaraciones",
      link: {
        type: "doc",
        id: "api/siad/declaraciones",
      },
      items: [
        {
          type: "doc",
          id: "api/siad/registra-una-nueva-declaracion-de-importacion",
          label: "Registra una nueva declaración de importación.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/siad/obtiene-un-listado-de-declaraciones",
          label: "Obtiene un listado de declaraciones.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/siad/obtiene-detalles-de-una-declaracion-especifica",
          label: "Obtiene detalles de una declaración específica.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/siad/actualiza-una-declaracion-ej-su-estado",
          label: "Actualiza una declaración (ej. su estado).",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Diligencias",
      link: {
        type: "doc",
        id: "api/siad/diligencias",
      },
      items: [
        {
          type: "doc",
          id: "api/siad/actualiza-el-estado-de-una-diligencia",
          label: "Actualiza el estado de una diligencia.",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Asignaciones",
      link: {
        type: "doc",
        id: "api/siad/asignaciones",
      },
      items: [
        {
          type: "doc",
          id: "api/siad/realiza-una-asignacion-manual-de-una-diligencia-a-un-especialista",
          label: "Realiza una asignación manual de una diligencia a un especialista.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/siad/inicia-el-proceso-de-asignacion-automatica-de-diligencias",
          label: "Inicia el proceso de asignación automática de diligencias.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/siad/reasigna-una-diligencia-a-un-nuevo-especialista",
          label: "Reasigna una diligencia a un nuevo especialista.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Especialistas",
      link: {
        type: "doc",
        id: "api/siad/especialistas",
      },
      items: [
        {
          type: "doc",
          id: "api/siad/obtiene-un-listado-de-especialistas",
          label: "Obtiene un listado de especialistas.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/siad/obtiene-detalles-de-un-especialista",
          label: "Obtiene detalles de un especialista.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/siad/actualiza-el-estado-de-disponibilidad-de-un-especialista",
          label: "Actualiza el estado de disponibilidad de un especialista.",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Notificaciones",
      link: {
        type: "doc",
        id: "api/siad/notificaciones",
      },
      items: [
        {
          type: "doc",
          id: "api/siad/envia-una-notificacion-uso-interno-por-otros-servicios",
          label: "Envía una notificación (uso interno por otros servicios).",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Autenticación",
      link: {
        type: "doc",
        id: "api/siad/autenticacion",
      },
      items: [
        {
          type: "doc",
          id: "api/siad/autentica-un-usuario-y-retorna-un-token",
          label: "Autentica un usuario y retorna un token.",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
