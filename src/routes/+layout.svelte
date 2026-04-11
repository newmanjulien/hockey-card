<script lang="ts">
	import { page } from '$app/state';
	import DesktopHeader from '$lib/chrome/desktop/DesktopHeader.svelte';
	import DesktopSidebar from '$lib/chrome/desktop/DesktopSidebar.svelte';
	import MobileDrawer from '$lib/chrome/mobile/MobileDrawer.svelte';
	import MobileHeader from '$lib/chrome/mobile/MobileHeader.svelte';
	import { BRANDING } from '$lib/chrome/shared/branding';
	import { getActiveNavRoute } from '$lib/chrome/shared/nav';
	import {
		provideChromeShellState,
		type ChromeShellState
	} from '$lib/chrome/shared/shell.svelte';
	import '../app.css';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	const shellState = $state<ChromeShellState>({
		isSidebarExpanded: true,
		isMobileDrawerOpen: false
	});

	provideChromeShellState(shellState);

	const currentRoute = $derived(getActiveNavRoute(page.url.pathname));
	const currentTitle = $derived(currentRoute?.title ?? BRANDING.appName);
</script>

<svelte:head>
	<title>{BRANDING.appName}</title>
</svelte:head>

<div class="h-dvh min-h-dvh overflow-hidden bg-zinc-50">
	<div
		class="dashboard-canvas flex h-full min-h-0 md:gap-(--dashboard-canvas-gap)"
		data-sidebar-state={shellState.isSidebarExpanded ? 'expanded' : 'collapsed'}
	>
		<DesktopSidebar currentPathname={page.url.pathname} class="hidden md:flex" />

		<main class="min-w-0 flex min-h-0 flex-1 flex-col overflow-hidden bg-white md:rounded-sm md:border md:border-zinc-100">
			<MobileDrawer currentPathname={page.url.pathname} />
			<MobileHeader title={currentTitle} />

			<div class="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
				<DesktopHeader title={currentTitle} />

				<div class="dashboard-main-viewport min-h-0 min-w-0 flex-1 overflow-x-hidden overflow-y-auto">
					<div class="h-full min-h-full min-w-0">
						{@render children()}
					</div>
				</div>
			</div>
		</main>
	</div>
</div>
