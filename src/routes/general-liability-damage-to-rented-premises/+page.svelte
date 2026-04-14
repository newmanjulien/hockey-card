<script lang="ts">
	import PromptCanvasRoute from '$lib/canvas/PromptCanvasRoute.svelte';
	import { createPromptCanvasRouteContent } from '$lib/canvas/presenters/prompt-canvas-content';

	const content = createPromptCanvasRouteContent('general-liability-damage-to-rented-premises');
</script>

<PromptCanvasRoute {content} />
