import Reactividad from "../components/slides/Reactividad/Reactividad.mdx";
import Directivas from "../components/slides/Directivas/Directivas.mdx";
import APIs from "../components/slides/APIs/APIs.mdx";
import TemplateSyntax from "../components/slides/TemplateSyntax/TemplateSyntax.mdx";
import Transitions from "../components/slides/BuiltInComponents/Transition&TransitionGroup.mdx";
import KeepAlive from "../components/slides/MoreBuiltInComponents/KeepAlive&Teleport.mdx";

export default [
  {
    name: "APIs",
    path: "/APIs",
    component: APIs,
  },
  {
    name: "TemplateSyntax",
    path: "/TemplateSyntax",
    component: TemplateSyntax,
  },
  {
    name: "Reactividad",
    path: "/reactividad",
    component: Reactividad,
  },
  {
    name: "Directivas",
    path: "/directivas",
    component: Directivas,
  },
  {
    name: "BuiltInComponents",
    path: "/Transition&TransitionGroup",
    component: Transitions,
  },
  {
    name: "MoreBuiltInComponents",
    path: "/MoreBuiltInComponents",
    component: KeepAlive,
  },

];
