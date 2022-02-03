import { Application, bold, red } from "./deps.ts";
import { router } from "./router.ts";
import { errorHandler, logger } from "./middlewares/mod.ts";

const app = new Application();

app.use(logger);
app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ hostname, port }) => {
  console.log(bold(`start`) + red(` ${hostname ?? "localhost"}:${port}`));
});

const port = parseInt(Deno.env.get("PORT") ?? "8000");

app.listen({ port });
