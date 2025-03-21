import { findRoute } from 'rou3';
import './routes/all-routes';
import { constants } from './utils/constants';
import { router, type RouteFunction } from './utils/router';
import { discard } from './utils/utils';

function checkRequest(r: NginxHTTPRequest)
{
	// Read-only mode
	if (r.variables.readOnly !== '0' && constants.httpMethods.write.includes(r.method))
	{
		return discard(r, 403, `The API is in read only mode, ${r.method} is not allowed.`);
	}

	// Routes handler
	const route = findRoute(router, r.method, r.uri);
	if (route)
	{
		const fn = route.data as RouteFunction;
		return fn(r, route.params) ?? true;
	}

	return false;
}

export default {
	checkRequest,
};
