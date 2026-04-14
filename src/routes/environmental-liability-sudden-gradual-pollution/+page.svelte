<script lang="ts">
	import PromptCanvasRoute from '$lib/canvas/PromptCanvasRoute.svelte';
	import { createPromptCanvasRouteContent } from '$lib/canvas/presenters/prompt-canvas-content';

	const content = createPromptCanvasRouteContent('environmental-liability-sudden-gradual-pollution');
</script>

<PromptCanvasRoute {content} />
