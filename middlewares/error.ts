import { Context, isHttpError, Status } from "../deps.ts";

export async function errorHandler(ctx: Context, next: () => Promise<void>) {
  try {
    await next();
  } catch (e) {
    if (!isHttpError(e)) {
      ctx.response.status = Status.InternalServerError;
      ctx.response.body = {
        error: {
          message: e.message,
          stack: e.stack,
        },
      };
      return;
    }
  }
}
