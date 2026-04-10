<script lang="ts">
	import { PanelLeft } from 'lucide-svelte';
	import { useChromeShellState } from '$lib/chrome/shared/shell.svelte';

	type Props = {
		title: string;
	};

	let { title }: Props = $props();
	const shellState = useChromeShellState();
</script>

<header class="hidden h-11 items-center border-b border-zinc-100 bg-white px-4 md:flex">
	<div class="flex min-w-0 flex-1 items-center">
		<button
			type="button"
			aria-label="Toggle sidebar"
			class="mr-1 ml-1 inline-flex items-center text-xs font-medium tracking-wide text-zinc-500 transition-colors hover:text-zinc-400"
			onclick={() => {
				shellState.isSidebarExpanded = !shellState.isSidebarExpanded;
			}}
		>
			<PanelLeft class="h-3.5 w-3.5" />
		</button>

		<p class="min-w-0 truncate text-xs font-medium tracking-wide text-zinc-500">{title}</p>
	</div>

	<div class="flex items-center gap-2"></div>
</header>
