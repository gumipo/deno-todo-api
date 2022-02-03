import { RouterContext, Status } from '../deps.ts';

export function getHome(ctx: RouterContext) {
  ctx.response.status = Status.OK;
  ctx.response.body = 'todo list API with e🦕';
}
