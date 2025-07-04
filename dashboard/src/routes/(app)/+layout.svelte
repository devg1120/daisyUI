<script>
	import { PUBLIC_SITE_NAME } from '$env/static/public';
	import Sidebar from '$components/Sidebar.svelte';
	import Header from '$components/Header.svelte';
	import { navigating } from '$app/stores';
	import { isOpenSidebar } from '$lib/stores/dashboardStore';

	/** @type {HTMLElement} */
	let wrapperEl;

	$: if ($navigating) {
		if (wrapperEl) wrapperEl.scrollTo(0, 0);
	}
</script>

<svelte:head>
	<title>{PUBLIC_SITE_NAME}</title>
</svelte:head>

<div>
	<div class="drawer lg:drawer-open min-h-screen bg-base-100">
		<input id="drawer" type="checkbox" class="drawer-toggle" bind:checked={$isOpenSidebar} />
		<div class="drawer-content">
			<!-- page content -->
			<Header />
			<main class="overflow-auto px-4 md:px-6 pt-5 pb-5" bind:this={wrapperEl}>
				<slot />
			</main>
		</div>
		<div
			class="drawer-side z-40 border-r"
			style="scroll-behavior: smooth; scroll-padding-top: 5rem;"
		>
			<!-- Sidebar content -->
			<label for="drawer" class="drawer-overlay" aria-label="Close Menu"></label>
			<Sidebar />
		</div>
	</div>
</div>
