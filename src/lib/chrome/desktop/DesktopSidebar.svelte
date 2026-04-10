<script lang="ts">
	import { ChevronsUpDown } from 'lucide-svelte';
	import { DEFAULT_BROKER } from '$lib/chrome/shared/branding';
	import { cn } from '$lib/chrome/shared/cn';
	import HomeLink from '$lib/chrome/shared/HomeLink.svelte';
	import NavList from '$lib/chrome/shared/NavList.svelte';
	import PersonAvatar from '$lib/chrome/shared/PersonAvatar.svelte';
	import {
		getActiveNavRoute,
		NAV_SECTIONS,
		type NavRouteItem
	} from '$lib/chrome/shared/nav';
	import { useChromeShellState } from '$lib/chrome/shared/shell.svelte';
	import { sidebarIndicator } from '$lib/chrome/shared/sidebar-indicator';

	type Props = {
		currentPathname: string;
		class?: string;
	};

	let { currentPathname, class: className = '' }: Props = $props();

	const shellState = useChromeShellState();
	const activeRoute = $derived(getActiveNavRoute(currentPathname));
	let hoveredRoute = $state<NavRouteItem | null>(null);

	const bottomRouteIds = new Set(
		NAV_SECTIONS.flatMap((section) =>
			section.id === 'bottom'
				? section.items.flatMap((item) => (item.kind === 'route' ? [item.id] : []))
				: []
		)
	);

	const indicatorTarget = $derived.by(() => {
		const targetRoute = hoveredRoute ?? activeRoute;

		return {
			targetKey: targetRoute?.id ?? null,
			enabled: Boolean(targetRoute && !bottomRouteIds.has(targetRoute.id))
		};
	});
</script>

<aside
	class={cn(
		'flex w-(--dashboard-sidebar-width) shrink-0 self-stretch flex-col overflow-hidden pt-2.5 pl-(--dashboard-sidebar-pad-left) pr-(--dashboard-sidebar-pad-right) transition-[width,padding] duration-200',
		shellState.isSidebarExpanded ? 'items-stretch' : 'items-start',
		className
	)}
	aria-label="Dashboard sidebar"
>
	<div class="mb-4 ml-0.5 flex w-full items-center pr-0.5">
		<HomeLink class="shrink-0" />

		<div
			class={cn(
				'ml-auto flex shrink-0 items-center overflow-hidden transition-[max-width,opacity,transform] duration-200',
				shellState.isSidebarExpanded
					? 'max-w-24 translate-x-0 opacity-100'
					: 'pointer-events-none max-w-0 translate-x-1 opacity-0'
			)}
		>
			<div class="inline-flex h-6 origin-center scale-110 items-center gap-1 rounded-full border border-zinc-100 bg-zinc-50 px-1 text-zinc-100">
				<PersonAvatar person={DEFAULT_BROKER} size={20} class="border border-zinc-100 bg-white" />
				<ChevronsUpDown aria-hidden="true" class="h-3 w-3 text-zinc-400" />
			</div>
		</div>
	</div>

	<nav
		use:sidebarIndicator={indicatorTarget}
		class="relative flex min-h-0 flex-1 flex-col"
		aria-label="Dashboard navigation"
		onmouseleave={() => {
			hoveredRoute = null;
		}}
	>
		<span
			aria-hidden="true"
			class="sidebar-nav-indicator pointer-events-none absolute rounded-sm bg-zinc-200/60 transition-[top,left,width,height,opacity] duration-200 ease-out"
		></span>
		<NavList
			sections={NAV_SECTIONS}
			{currentPathname}
			expanded={shellState.isSidebarExpanded}
			renderMode="desktop"
			onHoverRoute={(route, sectionId) => {
				hoveredRoute = sectionId === 'bottom' ? null : route;
			}}
		/>
	</nav>
</aside>
