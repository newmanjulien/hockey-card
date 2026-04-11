import { CircleQuestionMark } from 'lucide-svelte';
import {
	DEFAULT_ROUTE_ID,
	ROUTE_REGISTRY,
	ROUTE_SECTION_DEFINITIONS,
	type AppRouteDefinition,
	type NavPath,
	type NavRouteId,
	type NavSectionId
} from '$lib/routes/route-registry';

type NavIcon = AppRouteDefinition['icon'];

export type NavRouteItem = {
	kind: 'route';
	id: NavRouteId;
	label: string;
	title: string;
	href: NavPath;
	icon: NavIcon;
};

export type NavDisabledItem = {
	id: string;
	kind: 'disabled';
	label: string;
	icon: NavIcon;
};

export type NavFooterItem = NavDisabledItem;

export type NavSection = {
	id: NavSectionId;
	heading: string;
	desktopSectionClass?: string;
	mobileSectionClass?: string;
	showCollapsedDivider?: boolean;
	items: readonly NavRouteItem[];
};

export const NAV_ROUTE_ITEMS: readonly NavRouteItem[] = (
	Object.entries(ROUTE_REGISTRY) as [NavRouteId, AppRouteDefinition][]
).map(([id, route]) => ({
	kind: 'route' as const,
	id,
	label: route.navLabel,
	title: route.title,
	href: route.href as NavPath,
	icon: route.icon
}));

export const NAV_SECTIONS: readonly NavSection[] = [
	...ROUTE_SECTION_DEFINITIONS.map((section) => ({
		...section,
		items: NAV_ROUTE_ITEMS.filter((item) => ROUTE_REGISTRY[item.id].sectionId === section.id)
	}))
] as const;

export const NAV_FOOTER_ITEMS: readonly NavFooterItem[] = [
	{
		id: 'contact-support',
		kind: 'disabled',
		label: 'Contact support',
		icon: CircleQuestionMark
	}
] as const;

export type { NavRouteId, NavSectionId };

export function isNavItemActive(href: string, pathname: string) {
	return pathname === href || pathname.startsWith(`${href}/`);
}

export function getActiveNavRoute(pathname: string) {
	return (
		NAV_ROUTE_ITEMS.find((item) => isNavItemActive(item.href, pathname)) ??
		NAV_ROUTE_ITEMS.find((item) => item.id === DEFAULT_ROUTE_ID) ??
		null
	);
}
