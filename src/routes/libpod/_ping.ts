import { addRoute } from 'rou3';
import { router } from '../../utils/router';

addRoute(router, 'GET', '/libpod/_ping', () => true);
addRoute(router, 'HEAD', '/libpod/_ping', () => true);

// compat
addRoute(router, 'GET', '/_ping', () => true);
addRoute(router, 'HEAD', '/_ping', () => true);
