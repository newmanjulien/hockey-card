<script lang="ts">
	import type { PromptCanvasDocument } from '$lib/canvas/types';
	import PdfIcon from '$lib/canvas/PdfIcon.svelte';

	type Props = {
		documents: readonly PromptCanvasDocument[];
	};

	let { documents }: Props = $props();
</script>

{#if documents.length > 0}
	<section class="border-t border-zinc-100 px-4 py-4">
		<ol class="space-y-2.5">
			{#each documents as document (document.id)}
				<li>
					<!-- These cards are intentionally non-interactive. If we later want PDFs to open,
					this wrapper should change back to a link/button rather than layering click behavior
					onto the current static card. -->
					<div class="flex items-start gap-3 rounded-2xl border border-zinc-100 bg-white px-3 py-3">
						<PdfIcon class="size-9 shrink-0" />
						<div class="min-w-0 pt-0.5">
							<p class="text-[12px] font-medium leading-snug text-zinc-800">
								{document.title}
							</p>
						</div>
					</div>
				</li>
			{/each}
		</ol>
	</section>
{/if}
