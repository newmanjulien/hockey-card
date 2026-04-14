<script lang="ts">
	import type {
		PromptCanvasDocument,
		PromptCanvasSuggestions,
		PromptCanvasTrainer
	} from '$lib/canvas/types';
	import PromptCanvasRail from '$lib/canvas/PromptCanvasRail.svelte';
	import { ArrowUp, CircleQuestionMark, Plus } from 'lucide-svelte';

	type Props = {
		heading: string;
		suggestions: PromptCanvasSuggestions;
		value?: string;
		trainer: PromptCanvasTrainer;
		documents?: readonly PromptCanvasDocument[];
		documentsNote: string;
		onAttach?: () => void;
		onSubmit?: (value: string) => void;
	};

	const DEFAULT_PROMPT_PLACEHOLDER = 'Ask about the docs...';

	let {
		heading,
		suggestions,
		value = $bindable(''),
		trainer,
		documents = [],
		documentsNote,
		onAttach,
		onSubmit
	}: Props = $props();
	let textareaElement = $state<HTMLTextAreaElement | null>(null);
	const MAX_TEXTAREA_LINES = 11;

	const canSubmit = $derived(Boolean(onSubmit) && value.trim().length > 0);

	function syncTextareaHeight() {
		if (!textareaElement) {
			return;
		}

		const computedStyle = window.getComputedStyle(textareaElement);
		const lineHeight = Number.parseFloat(computedStyle.lineHeight);
		const paddingHeight =
			Number.parseFloat(computedStyle.paddingTop) +
			Number.parseFloat(computedStyle.paddingBottom) +
			Number.parseFloat(computedStyle.borderTopWidth) +
			Number.parseFloat(computedStyle.borderBottomWidth);
		const maxHeight = Number.isFinite(lineHeight)
			? lineHeight * MAX_TEXTAREA_LINES + paddingHeight
			: null;

		textareaElement.style.height = '0px';
		const nextHeight =
			maxHeight === null
				? textareaElement.scrollHeight
				: Math.min(textareaElement.scrollHeight, maxHeight);
		textareaElement.style.height = `${nextHeight}px`;
		textareaElement.style.overflowY =
			maxHeight !== null && textareaElement.scrollHeight > maxHeight ? 'auto' : 'hidden';
	}

	function handleSubmit() {
		const nextValue = value.trim();

		if (!onSubmit || !nextValue) {
			return;
		}

		onSubmit(nextValue);
	}

	function applySuggestion(suggestion: string) {
		value = suggestion;
		syncTextareaHeight();
		textareaElement?.focus();
		textareaElement?.setSelectionRange(suggestion.length, suggestion.length);
	}

	$effect(() => {
		void textareaElement;
		void value;
		syncTextareaHeight();
	});
</script>

<div class="prompt-canvas-layout grid min-h-full grid-cols-1">
	<section class="flex h-full min-h-full w-full items-center justify-center px-4 py-6 md:px-8 md:py-8">
		<div class="flex w-full max-w-[43rem] flex-col items-center">
			<h1 class="mb-10 text-center text-[1.4rem] leading-tight tracking-[-0.02em] text-zinc-900">
				{heading}
			</h1>

			<form
				class="mb-2 w-full rounded-[1.8rem] border border-zinc-200/90 bg-white px-3.5 pt-2.5 pb-2 md:mb-2.5 md:px-4.5 md:pt-3 md:pb-2"
				onsubmit={(event) => {
					event.preventDefault();
					handleSubmit();
				}}
			>
					<div>
						<textarea
							bind:this={textareaElement}
							bind:value
							rows={1}
							aria-label="Prompt input"
							placeholder={DEFAULT_PROMPT_PLACEHOLDER}
							class="prompt-input w-full resize-none overflow-hidden border-0 bg-transparent p-0 text-[0.84rem] leading-[1.38] text-zinc-800 outline-none placeholder:font-normal placeholder:text-zinc-400 md:text-[0.9rem]"
						></textarea>
					</div>

				<div class="mt-2 flex items-center justify-between md:mt-2.5">
					<button
						type="button"
						aria-label="Add attachment"
						class="group relative inline-flex items-center justify-center text-zinc-700 disabled:cursor-default disabled:opacity-55"
						disabled={!onAttach}
						title={!onAttach ? 'Not available yet' : undefined}
						onclick={() => {
							onAttach?.();
						}}
					>
						<span
							aria-hidden="true"
							class="pointer-events-none absolute -inset-2 rounded-full transition-colors group-hover:bg-zinc-100"
						></span>
						<Plus class="relative size-4 stroke-[2.25]" />
					</button>

					<div class="flex items-center">
						<button
							type="submit"
							aria-label="Send prompt"
							class="inline-flex size-7.5 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-[1.02] disabled:cursor-default disabled:bg-zinc-300 disabled:text-zinc-500 disabled:hover:scale-100"
							disabled={!canSubmit}
							title={!onSubmit ? 'Not available yet' : undefined}
						>
							<ArrowUp class="size-3.75 stroke-[2.4]" />
						</button>
					</div>
				</div>
			</form>

				<div class="relative w-full">
					<div class="w-full overflow-hidden">
						{#each suggestions as suggestion, index (suggestion)}
							<button
								type="button"
								class="flex w-full items-center gap-2 rounded-xl px-3 py-2.75 text-left text-[0.8rem] font-normal text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-700 md:px-3.5 md:py-3 md:text-[0.84rem]"
							onclick={() => {
								applySuggestion(suggestion);
							}}
						>
							<CircleQuestionMark class="size-3.5 shrink-0 text-zinc-500" />
							<span>{suggestion}</span>
						</button>

							{#if index < suggestions.length - 1}
								<div class="h-px w-full bg-zinc-100/50"></div>
							{/if}
						{/each}
				</div>
			</div>
		</div>
	</section>

		<PromptCanvasRail {trainer} {documents} {documentsNote} />
	</div>

<style>
	.prompt-canvas-layout {
		--prompt-canvas-rail-width: 22rem;
	}

	@media (min-width: 1024px) {
		.prompt-canvas-layout {
			min-height: 100cqh;
			grid-template-columns: minmax(0, 1fr) var(--prompt-canvas-rail-width);
		}
	}
</style>
