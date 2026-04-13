<script lang="ts">
	import PromptCanvasRoute from '$lib/canvas/PromptCanvasRoute.svelte';
	import { createPromptCanvasRouteContent } from '$lib/canvas/presenters/prompt-canvas-content';

	const content = createPromptCanvasRouteContent('cirque-global-services');
</script>

<PromptCanvasRoute {content} />
