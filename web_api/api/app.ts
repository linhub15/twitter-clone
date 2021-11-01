import { yellow } from "https://deno.land/std@0.99.0/fmt/colors.ts";
import { Application } from "./deps.ts";
import { loggingMiddleware } from "./middlewares/logging.middleware.ts";
import { router } from "./routes.ts";

const port = 4444;

const app = new Application();

app.use(loggingMiddleware);

app.use(router.routes());
app.use(router.allowedMethods());


app.addEventListener("listen", ({ secure, hostname, port }) => {
  console.info(
    `Listening on: ${
      yellow(`http://${hostname}:${port}`)
    } ...`,
  );
});

await app.listen({ port: port });
