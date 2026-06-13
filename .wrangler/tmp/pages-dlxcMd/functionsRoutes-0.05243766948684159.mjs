import { onRequest as __api_classes_js_onRequest } from "D:\\Client Development\\EMIS\\emis\\functions\\api\\classes.js"
import { onRequest as __api_discipline_js_onRequest } from "D:\\Client Development\\EMIS\\emis\\functions\\api\\discipline.js"
import { onRequest as __api_init_js_onRequest } from "D:\\Client Development\\EMIS\\emis\\functions\\api\\init.js"
import { onRequest as __api_marks_js_onRequest } from "D:\\Client Development\\EMIS\\emis\\functions\\api\\marks.js"
import { onRequest as __api_students_js_onRequest } from "D:\\Client Development\\EMIS\\emis\\functions\\api\\students.js"

export const routes = [
    {
      routePath: "/api/classes",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_classes_js_onRequest],
    },
  {
      routePath: "/api/discipline",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_discipline_js_onRequest],
    },
  {
      routePath: "/api/init",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_init_js_onRequest],
    },
  {
      routePath: "/api/marks",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_marks_js_onRequest],
    },
  {
      routePath: "/api/students",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_students_js_onRequest],
    },
  ]