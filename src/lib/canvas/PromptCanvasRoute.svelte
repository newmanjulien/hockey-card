<script lang="ts">
	import { page } from '$app/state';
	import PromptCanvas from '$lib/canvas/PromptCanvas.svelte';
	import type { PromptCanvasRouteContent } from '$lib/canvas/types';

	type Props = {
		content: PromptCanvasRouteContent;
	};

	let { content }: Props = $props();
	const currentPathname = $derived(page.url.pathname);

	function handleAttach() {
		console.info(`[prompt-canvas:${currentPathname}] attach clicked`);
	}

	function handleSubmit(value: string) {
		console.info(`[prompt-canvas:${currentPathname}] submitted`, value);
	}
</script>

<PromptCanvas
	heading={content.prompt.heading}
	value={content.prompt.initialValue}
	suggestions={content.prompt.suggestions}
	trainer={content.trainer}
	documents={content.documents}
	documentsNote={content.documentsNote}
	onAttach={handleAttach}
	onSubmit={handleSubmit}
/>
