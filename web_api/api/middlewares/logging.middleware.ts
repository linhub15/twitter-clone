import { Middleware } from "https://deno.land/x/oak@v9.0.1/middleware.ts";
import { Context } from "https://deno.land/x/oak@v9.0.1/mod.ts";

export const loggingMiddleware: Middleware = async (ctx, next) => {
  await next();
  console.log(buildLogEntry(ctx));
}

function buildLogEntry(ctx: Context) {
  const { url, method, ip } = ctx.request;
  const { status } = ctx.response;
  return `${new Date().toISOString()}\t${ip}\t${method} ${url.pathname} ${status}`;
}