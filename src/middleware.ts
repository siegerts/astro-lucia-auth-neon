import { auth } from "../lib/lucia";

import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = (context, next) => {
  context.locals.auth = auth.handleRequest(context as any);
  return next();
};
