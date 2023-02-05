Al cargar este proyecto en vercel dio un error que tambien le paso a otros usuarios de este curso, la manera de resolverla fue la siguiente:

1.- Crear en el root (en el mismo nivel donde está remix.config.js) un nuevo archivo como server.js con los imports y exports siguientes:


    import { createRequestHandler } from "@remix-run/vercel";
    import * as build from "@remix-run/dev/server-build";
     
    export default createRequestHandler({ build, mode: process.env.NODE_ENV });


Y finalmente instalando con npm i lo siguiente: @remix-run/vercel y @vercel/node

y sino volver a las preguntas del video 301.

tambien habra que sustituir el contenido del archivo remix.config.js, por lo siguiente:

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "vercel",
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  ignoredRouteFiles: ["**/.*"],
  future: {},
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};