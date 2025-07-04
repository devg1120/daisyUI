<script>
	import { cn } from '$lib/utils';
	import { page } from '$app/stores';
	let className = '';
	export { className as class };

	/**
	 * @typedef {Object} Item
	 * @prop {string} href
	 * @prop {string} title
	 */

	/** @type {Array<Item>} */
	export let items = [];
</script>

<nav class="bg-base-100">
	<ul class={cn('menu flex flex-row lg:flex-col', className)}>
		{#each items as item}
			{@const isActive = $page.url.pathname === item.href}
			<li>
				{#if item.href}
					<a href={item.href} class={cn(isActive ? 'bg-muted' : '', 'group')}>
						{item.title}
					</a>
				{/if}
			</li>
		{/each}
	</ul>
</nav>
