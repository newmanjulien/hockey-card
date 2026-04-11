import {
	BadgeDollarSign,
	CircleQuestionMark,
	Globe,
	HandCoins,
	Leaf,
	Shield
} from 'lucide-svelte';

type NavIcon = typeof CircleQuestionMark;

export type NavSectionId = 'next-30-days' | 'next-90-days' | 'history';

type RouteSectionDefinition = {
	id: NavSectionId;
	heading: string;
	desktopSectionClass?: string;
	mobileSectionClass?: string;
	showCollapsedDivider?: boolean;
};

export type AppRouteDefinition = {
	sectionId: RouteSectionDefinition['id'];
	href: `/${string}`;
	navLabel: string;
	title: string;
	icon: NavIcon;
};

export const ROUTE_SECTION_DEFINITIONS: readonly RouteSectionDefinition[] = [
	{
		id: 'next-30-days',
		heading: 'Veolia',
		desktopSectionClass: 'pt-2'
	},
	{
		id: 'next-90-days',
		heading: 'Cirque du Soleil',
		desktopSectionClass: 'pt-6',
		mobileSectionClass: 'pt-4',
		showCollapsedDivider: true
	},
	{
		id: 'history',
		heading: 'Exterra',
		desktopSectionClass: 'pt-6',
		mobileSectionClass: 'pt-4',
		showCollapsedDivider: true
	}
] as const;

export const ROUTE_REGISTRY = {
	'veolia-trade-credit': {
		sectionId: 'next-30-days',
		href: '/veolia-trade-credit',
		navLabel: 'Trade credit',
		title: 'Trade credit for Veolia',
		icon: HandCoins
	},
	'cirque-cyber': {
		sectionId: 'next-90-days',
		href: '/cirque-cyber',
		navLabel: 'Cyber',
		title: 'Cyber for Cirque du Soleil',
		icon: Shield
	},
	'cirque-global-services': {
		sectionId: 'next-90-days',
		href: '/cirque-global-services',
		navLabel: 'Global services',
		title: 'Global services for Cirque du Soleil',
		icon: Globe
	},
	'exterra-environmental-risk': {
		sectionId: 'history',
		href: '/exterra-environmental-risk',
		navLabel: 'Environmental risk',
		title: 'Environmental risk for Exterra',
		icon: Leaf
	},
	'exterra-surety': {
		sectionId: 'history',
		href: '/exterra-surety',
		navLabel: 'Surety',
		title: 'Surety for Exterra',
		icon: BadgeDollarSign
	}
} as const satisfies Record<string, AppRouteDefinition>;

export type NavRouteId = keyof typeof ROUTE_REGISTRY;
export type NavPath = (typeof ROUTE_REGISTRY)[NavRouteId]['href'];

export const DEFAULT_ROUTE_ID: NavRouteId = 'exterra-environmental-risk';
export const DEFAULT_ROUTE_HREF: NavPath = ROUTE_REGISTRY[DEFAULT_ROUTE_ID].href;

export const ROUTE_IDS = Object.keys(ROUTE_REGISTRY) as NavRouteId[];
