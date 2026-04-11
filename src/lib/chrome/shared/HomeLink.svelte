<script lang="ts">
	import { resolve } from '$app/paths';
	import { BRANDING } from '$lib/chrome/shared/branding';
	import { cn } from '$lib/chrome/shared/cn';
	import { DEFAULT_ROUTE_HREF } from '$lib/routes/route-registry';

	type Props = {
		class?: string;
		onclick?: (event: MouseEvent) => void;
	};

	let { class: className = '', onclick }: Props = $props();
</script>

<a
	href={resolve(DEFAULT_ROUTE_HREF)}
	aria-label={`Go to ${BRANDING.appName}`}
	class={cn('overflow-hidden rounded-sm', className)}
	{onclick}
>
	<img src={BRANDING.logoUrl} alt={BRANDING.logoAlt} class="size-6 shrink-0" />
</a>
