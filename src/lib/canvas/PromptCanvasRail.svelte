<script lang="ts">
	import PersonAvatar from '$lib/chrome/shared/PersonAvatar.svelte';
	import PromptCanvasDocumentSection from '$lib/canvas/PromptCanvasDocumentSection.svelte';
	import type { PromptCanvasDocument, PromptCanvasTrainer } from '$lib/canvas/types';

	type Props = {
		trainer: PromptCanvasTrainer;
		documents?: readonly PromptCanvasDocument[];
	};

	let { trainer, documents = [] }: Props = $props();
</script>

<aside class="prompt-canvas-rail-shell hidden w-full lg:block lg:border-l lg:border-zinc-100">
	<div class="prompt-canvas-rail-frame mx-auto w-full px-4 sm:px-6 lg:max-w-none lg:px-0">
		<div
			class="prompt-canvas-rail-surface overflow-hidden rounded-sm border border-zinc-100 bg-white lg:rounded-none lg:border-0"
		>
			<section class="px-4 py-4">
				<p class="text-[9px] font-medium uppercase tracking-[0.16em] text-zinc-400">
					Docs provided by
				</p>
				<div class="mt-3 flex items-center gap-2.5">
					<PersonAvatar
						person={trainer}
						size={36}
						class="bg-zinc-200 text-[12px] text-zinc-600"
					/>
					<div class="min-w-0">
						<p class="truncate text-[13px] font-medium text-zinc-900">{trainer.name}</p>
						<p class="mt-0.5 text-[11px] leading-relaxed text-zinc-500">{trainer.title}</p>
					</div>
				</div>
				<button
					type="button"
					class="mt-3 inline-flex w-full items-center justify-center rounded-full bg-zinc-50 px-3 py-2 text-[12px] font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
				>
					Schedule a call
				</button>
			</section>

			<PromptCanvasDocumentSection {documents} />
		</div>
	</div>
</aside>
