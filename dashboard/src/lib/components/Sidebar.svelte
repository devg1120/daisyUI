<script>
	import { page } from '$app/stores';
	import { links } from '$lib/data/links';
	import Icon from '@iconify/svelte';
	import { PUBLIC_SITE_NAME } from '$env/static/public';
	import { isOpenSidebar } from '$lib/stores/dashboardStore';

	function handleClick() {
		isOpenSidebar.set(false);
	}
</script>

<aside class="bg-base-100 min-h-screen w-80">
	<div class="relative">
		<div class="h-16 sticky top-0 shadow-sm items-center px-4 py-2">
			<!-- logo button -->
			<a href="/" class="flex-0 btn btn-ghost px-2">
				<div class="font-title inline-flex text-lg md:text-2xl">{PUBLIC_SITE_NAME}</div>
			</a>
		</div>
		<div class="h-4"></div>
		<ul class="menu px-4 py-0">
			{#each links as link}
				<li>
					{#if link.path}
						<a
							href={link.path}
							class="group {link.path == $page.url.pathname ? 'active' : ''}"
							on:click={handleClick}
						>
							<Icon icon={link.icon.inactive} class="text-3xl mr-3"></Icon>
							{link.name}
						</a>
					{:else if link.nested_links}
						<details>
							<summary class="">
								<Icon icon={link.icon.inactive} class="text-3xl mr-3"></Icon>
								{link.name}
							</summary>
							<ul>
								<li>
									{#each link.nested_links as subLink}
										<a href={subLink.path} class="group">
											{subLink.name}
										</a>
									{/each}
								</li>
							</ul>
						</details>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</aside>
