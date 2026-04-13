import {
	BadgeDollarSign,
	CircleQuestionMark,
	Globe,
	HandCoins,
	Leaf,
	Shield
} from 'lucide-svelte';
import {
	CLIENT_IDS,
	DEFAULT_DEMO_ROUTE_ID,
	ROUTE_IDS,
	DEMO_CLIENTS,
	getDemoRoute,
	type DemoClientId,
	type DemoRouteIconId,
	type DemoRouteId
} from '$lib/demo-data/dashboard';
import {
	getRouteNavLabel,
	getRouteSectionHeading,
	getRouteTitle
} from '$lib/routes/route-content';

type NavIcon = typeof CircleQuestionMark;

export type NavSectionId = DemoClientId;
export type NavRouteId = DemoRouteId;
export type NavPath = `/${NavRouteId}`;

type RouteSectionDefinition = {
	id: NavSectionId;
	heading: string;
	desktopSectionClass?: string;
	mobileSectionClass?: string;
	showCollapsedDivider?: boolean;
};

export type AppRouteDefinition = {
	sectionId: NavSectionId;
	href: NavPath;
	navLabel: string;
	title: string;
	icon: NavIcon;
};

const ROUTE_ICON_MAP = {
	'badge-dollar-sign': BadgeDollarSign,
	globe: Globe,
	'hand-coins': HandCoins,
	leaf: Leaf,
	shield: Shield
} as const satisfies Record<DemoRouteIconId, NavIcon>;

function createRouteDefinition(routeId: NavRouteId): AppRouteDefinition {
	const route = getDemoRoute(routeId);

	return {
		sectionId: route.clientId,
		href: `/${routeId}`,
		navLabel: getRouteNavLabel(route),
		title: getRouteTitle(route),
		icon: ROUTE_ICON_MAP[route.iconId]
	};
}

function getFirstRouteForClient(clientId: NavSectionId) {
	const routeId = ROUTE_IDS.find((candidateId) => getDemoRoute(candidateId).clientId === clientId);

	if (!routeId) {
		throw new Error(`No route found for client "${clientId}"`);
	}

	return getDemoRoute(routeId);
}

export const ROUTE_SECTION_DEFINITIONS: readonly RouteSectionDefinition[] = CLIENT_IDS.map(
	(clientId, index) => ({
		id: clientId,
		heading: getRouteSectionHeading(getFirstRouteForClient(clientId)),
		desktopSectionClass: index === 0 ? 'pt-2' : 'pt-6',
		mobileSectionClass: index === 0 ? undefined : 'pt-4',
		showCollapsedDivider: index > 0
	})
);

export const ROUTE_REGISTRY = {
	'veolia-trade-credit': createRouteDefinition('veolia-trade-credit'),
	'cirque-cyber': createRouteDefinition('cirque-cyber'),
	'cirque-global-services': createRouteDefinition('cirque-global-services'),
	'exterra-environmental-risk': createRouteDefinition('exterra-environmental-risk'),
	'exterra-surety': createRouteDefinition('exterra-surety')
} as const satisfies Record<NavRouteId, AppRouteDefinition>;

export const DEFAULT_ROUTE_ID: NavRouteId = DEFAULT_DEMO_ROUTE_ID;
export const DEFAULT_ROUTE_HREF: NavPath = ROUTE_REGISTRY[DEFAULT_ROUTE_ID].href;
export const ROUTE_IDS_IN_ORDER = ROUTE_IDS;
export const CLIENTS_IN_ORDER = CLIENT_IDS.map((clientId) => DEMO_CLIENTS[clientId]);
