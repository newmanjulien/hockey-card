<script lang="ts">
	import PromptCanvasRoute from '$lib/canvas/PromptCanvasRoute.svelte';
	import { createPromptCanvasRouteContent } from '$lib/routes/route-content';

	const content = createPromptCanvasRouteContent('veolia-trade-credit');
</script>

<PromptCanvasRoute {content} />
