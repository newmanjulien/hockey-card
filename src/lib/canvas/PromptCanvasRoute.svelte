<script lang="ts">
	import { page } from '$app/state';
	import PromptCanvas from '$lib/canvas/PromptCanvas.svelte';
	import type { PromptCanvasRouteContent } from '$lib/canvas/types';

	type Props = {
		content: PromptCanvasRouteContent;
	};

	let { content }: Props = $props();
	let showRailMessage = $state(true);
	const currentPathname = $derived(page.url.pathname);

	// The right-rail message is intended to disappear after the user's first successful
	// submitted message and eventually be persisted per user in the database. Until the
	// backend exists, keep the visibility owned at the route layer so the trigger can be
	// swapped from this local state to server-backed state without changing PromptCanvas.

	function handleAttach() {
		console.info(`[prompt-canvas:${currentPathname}] attach clicked`);
	}

	function handleSubmit(value: string) {
		console.info(`[prompt-canvas:${currentPathname}] submitted`, value);
		showRailMessage = false;
	}
</script>

<PromptCanvas
	heading={content.prompt.heading}
	value={content.prompt.initialValue}
	placeholder={content.prompt.placeholder}
	actions={content.prompt.actions}
	trainer={content.trainer}
	railMessage={content.prompt.railMessage}
	showRailMessage={showRailMessage}
	onAttach={handleAttach}
	onSubmit={handleSubmit}
/>
