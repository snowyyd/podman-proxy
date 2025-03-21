import { createRouter } from 'rou3';

export type VersionizedParams = { version: string; } & Record<string, string> | undefined;
export type RouteFunction = (r: NginxHTTPRequest, params: Record<string, string> | undefined) => unknown;
export const router = createRouter();
