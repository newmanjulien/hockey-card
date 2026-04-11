import { redirect } from '@sveltejs/kit';
import { DEFAULT_ROUTE_HREF } from '$lib/routes/route-registry';

export function load() {
	throw redirect(307, DEFAULT_ROUTE_HREF);
}
