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
	kind: 'disabled';
	label: string;
	icon: NavIcon;
};

export type NavItem = NavRouteItem | NavDisabledItem;

export type NavSection = {
	id: NavSectionId;
	heading: string | null;
	desktopSectionClass?: string;
	mobileSectionClass?: string;
	showCollapsedDivider?: boolean;
	items: readonly NavItem[];
};

const ROUTE_ITEMS: NavRouteItem[] = (
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
		items: ROUTE_ITEMS.filter((item) => ROUTE_REGISTRY[item.id].sectionId === section.id)
	})),
	{
		id: 'bottom',
		heading: null,
		desktopSectionClass: 'pt-3',
		mobileSectionClass: 'pt-6',
		items: [
			{
				kind: 'disabled',
				label: 'Contact support',
				icon: CircleQuestionMark
			}
		]
	}
] as const;

export type { NavRouteId, NavSectionId };

export function isNavItemActive(href: string, pathname: string) {
	return pathname === href || pathname.startsWith(`${href}/`);
}

export function getActiveNavRoute(pathname: string) {
	for (const section of NAV_SECTIONS) {
		for (const item of section.items) {
			if (item.kind === 'route' && isNavItemActive(item.href, pathname)) {
				return item;
			}
		}
	}

	return (
		NAV_SECTIONS.flatMap((section) => section.items).find(
			(item): item is NavRouteItem => item.kind === 'route' && item.id === DEFAULT_ROUTE_ID
		) ?? null
	);
}
