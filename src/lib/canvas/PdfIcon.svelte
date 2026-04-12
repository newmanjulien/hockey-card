<script lang="ts">
	import { cn } from '$lib/chrome/shared/cn';

	type Props = {
		class?: string;
	};

	let { class: classProp = '' }: Props = $props();
</script>

<span
	aria-hidden="true"
	class={cn(
		'inline-flex items-center justify-center rounded-xl bg-red-600 text-[11px] font-bold tracking-tight text-white',
		classProp
	)}
>
	PDF
</span>
