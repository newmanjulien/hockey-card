<script lang="ts">
	import PromptCanvasRoute from '$lib/canvas/PromptCanvasRoute.svelte';
	import { createPromptCanvasRouteContent } from '$lib/canvas/presenters/prompt-canvas-content';

	const content = createPromptCanvasRouteContent('professional-liability-negligent-misrepresentation');
</script>

<PromptCanvasRoute {content} />
