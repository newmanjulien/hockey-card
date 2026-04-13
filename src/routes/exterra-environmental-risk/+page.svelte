<script lang="ts">
	import PromptCanvasRoute from '$lib/canvas/PromptCanvasRoute.svelte';
	import { createPromptCanvasRouteContent } from '$lib/routes/route-content';

	const content = createPromptCanvasRouteContent('exterra-environmental-risk');
</script>

<PromptCanvasRoute {content} />
