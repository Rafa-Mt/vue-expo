import Intro from "../components/slides/Intro/Intro.mdx";
import Instalacion from "../components/slides/Instalacion/Instalacion.mdx";
import CrearProyecto from "../components/slides/CrearProyecto/CrearProyecto.mdx";
import APIs from "../components/slides/APIs/APIs.mdx";
import TemplateSyntax from "../components/slides/TemplateSyntax/TemplateSyntax.mdx"
import Reactividad from "../components/slides/Reactividad/Reactividad.mdx";
import PropiedadesComputadas from "../components/slides/PropiedadesComputadas/PropiedadesComputadas.mdx";
import Watchers from "../components/slides/Watchers/Watchers.mdx";
import Directivas from "../components/slides/Directivas/Directivas.mdx";
import ReactividadProfundidad from "../components/slides/ReactividadProfundidad/ReactividadProfundidad.mdx";
import Lifecycles from "../components/slides/Lifecycles/Lifecycles.mdx";
import Routing from "../components/slides/Routing/Routing.mdx";
import ReusableComponents from "../components/slides/Reusabilidad/Reusabilidad.mdx";
import BuiltInComponents from "../components/slides/BuiltInComponents/BuiltInComponents.mdx";
import MoreBuiltInComponents from "../components/slides/MoreBuiltInComponents/MoreBuiltInComponents.mdx";
import ManejoEstados from "../components/slides/ManejoEstados/ManejoEstados.mdx";
import TestingVue from "../components/slides/TestingVue/TestingVue.mdx";


Intro.displayName = "Introducción";
Instalacion.displayName = "Instalación";
CrearProyecto.displayName = "Crear Proyecto";
APIs.displayName = "APIs";
TemplateSyntax.displayName = "Template Syntax";
Reactividad.displayName = "Reactividad en Vue";
PropiedadesComputadas.displayName = "Propiedades Computadas";
Watchers.displayName = "Watchers";
Directivas.displayName = "Directivas";
ReactividadProfundidad.displayName = "Reactividad Profundidad";
Lifecycles.displayName = "Lifecycle Hooks";
ReusableComponents.displayName = "Reusabilidad";
BuiltInComponents.displayName = "Componentes Internos";
MoreBuiltInComponents.displayName = "Más Componentes Internos";
ManejoEstados.displayName = "Manejo de Estados";
Routing.displayName = "Routing";
TestingVue.displayName = "Testing Vue";

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
    component: Reactividad,
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
    name: "Reactividad a Profundidad",
    path: "/reactividad-a-profundidad",
    component: ReactividadProfundidad,
  },
  {
    name: "Lifecycle Hooks",
    path: "/lifecycle-hooks",
    component: Lifecycles,
  },
  {
    name: "Reusable Components",
    path: "/reusable-components",
    component: ReusableComponents,
  },
  {
    name: "Built-in Components",
    path: "/built-in-components",
    component: BuiltInComponents,
  },
  {
    name: "More Built-in Components",
    path: "/more-built-in-components",
    component: MoreBuiltInComponents,
  },
  {
    name: "Manejo de Estados",
    path: "/manejo-de-estados",
    component: ManejoEstados,
  },
  {
    name: "Routing",
    path: "/routing",
    component: Routing,
  },
  {
    name: "Testing Vue",
    path: "/testing-vue",
    component: TestingVue,
  }

];
