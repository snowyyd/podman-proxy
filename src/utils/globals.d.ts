import type { RouteFunction } from './router';

declare module 'rou3'
{
	declare function addRoute(ctx: RouterContext<RouteFunction>, method: string | undefined, path: string, data: RouteFunction): void;
}
