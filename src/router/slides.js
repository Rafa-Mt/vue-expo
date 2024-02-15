import Intro from "../components/slides/Intro/Intro.mdx";
import Instalacion from "../components/slides/Instalacion/Instalacion.mdx";
import CrearProyecto from "../components/slides/CrearProyecto/CrearProyecto.mdx";
import APIs from "../components/slides/APIs/APIs.mdx";
import TemplateSyntax from "../components/slides/TemplateSyntax/TemplateSyntax.mdx";
import Reactividad from "../components/slides/Reactividad/Reactividad.mdx";
import PropiedadesComputadas from "../components/slides/PropiedadesComputadas/PropiedadesComputadas.mdx";
import Watchers from "../components/slides/Watchers/Watchers.mdx";
import Directivas from "../components/slides/Directivas/Directivas.mdx";
import Lifecycles from "../components/slides/Lifecycles/Lifecycles.mdx";
import Routing from "../components/slides/Routing/Routing.mdx";

Intro.displayName = "Introducción";
Instalacion.displayName = "Instalación";
CrearProyecto.displayName = "Crear Proyecto";
APIs.displayName = "APIs";
TemplateSyntax.displayName = "Template Syntax";
Reactividad.displayName = "Reactividad en Vue";
PropiedadesComputadas.displayName = "Propiedades Computadas";
Watchers.displayName = "Watchers";
Directivas.displayName = "Directivas";
Lifecycles.displayName = "Lifecycle Hooks";
Routing.displayName = "Routing";

export default [
  {
    name: "Introducción",
    path: "/introduccion",
    component: Intro,
  },
  {
    name: "Instalación",
    path: "/instalacion",
    component: Instalacion,
  },
  {
    name: "Crear Proyecto",
    path: "/crear-proyecto",
    component: CrearProyecto,
  },
  {
    name: "APIs",
    path: "/apis",
    component: APIs,
  },
  {
    name: "Template Syntax",
    path: "/template-syntax",
    component: TemplateSyntax,
  },
  {
    name: "Reactividad",
    path: "/reactividad",
    component: () => Reactividad,
  },
  {
    name: "Propiedades Computadas",
    path: "/propiedades-computadas",
    component: PropiedadesComputadas,
  },
  {
    name: "Watchers",
    path: "/watchers",
    component: Watchers,
  },
  {
    name: "Directivas",
    path: "/directivas",
    component: Directivas,
  },
  {
    name: "Lifecycle Hooks",
    path: "/lifecycles",
    component: Lifecycles,
  },
  {
    name: "Routing",
    path: "/routing",
    component: Routing,
  },
];
