<script lang="ts">
	import PromptCanvas from '$lib/canvas/PromptCanvas.svelte';
	import { ROUTE_REGISTRY, type NavRouteId } from '$lib/routes/route-registry';

	type Props = {
		routeId: NavRouteId;
	};

	let { routeId }: Props = $props();
	const route = $derived(ROUTE_REGISTRY[routeId]);

	function handleAttach() {
		console.info(`[prompt-canvas:${routeId}] attach clicked`);
	}

	function handleSubmit(value: string) {
		console.info(`[prompt-canvas:${routeId}] submitted`, value);
	}
</script>

<PromptCanvas
	heading={route.prompt.heading}
	value={route.prompt.initialValue}
	actions={route.prompt.actions}
	trainer={route.trainer}
	onAttach={handleAttach}
	onSubmit={handleSubmit}
/>
