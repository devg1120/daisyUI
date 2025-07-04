<script>
	import Icon from '@iconify/svelte';
	import { PUBLIC_SITE_NAME } from '$env/static/public';
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
	class="bg-base-100 text-base-content sticky top-0 z-30 h-16 w-full justify-center backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] shadow-sm"
>
	<nav class="navbar w-full">
		<div class="flex flex-1 md:gap-1 lg:gap-2">
			<!-- menu button  -->
			<span
				class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
				data-tip="Menu"
			>
				<label
					for="drawer"
					aria-label="Open menu"
					class="btn btn-square btn-ghost drawer-button lg:hidden"
				>
					<Icon icon="heroicons-solid:menu" class="h-5 w-5" />
				</label>
			</span>
			<!-- logo button -->
			<div class="flex items-center gap-2 lg:hidden">
				<a href="/" class="btn btn-ghost gap-1 px-2 md:gap-2">
					<div class="font-title text-base-content text-lg md:text-2xl">{PUBLIC_SITE_NAME}</div>
				</a>
			</div>
		</div>
		<div class="flex-0">
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
					<div class="indicator">
						<Icon icon="ph:shopping-cart" class="h-5 w-5" />
						<span class="badge badge-sm indicator-item">8</span>
					</div>
				</div>
				<div
					tabindex="0"
					class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-200 shadow"
				>
					<div class="card-body">
						<span class="font-bold text-lg">8 Items</span>
						<span class="text-info">Subtotal: $999</span>
						<span class="card-actions">
							<button class="btn btn-primary btn-block">View cart</button>
						</span>
					</div>
				</div>
			</div>
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<img
							src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
							alt="Tailwind CSS Navbar component"
						/>
					</div>
				</div>
				<ul
					tabindex="0"
					class="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52"
				>
					<li>
						<a class="justify-between" href="/settings">
							Settings <span class="badge">New</span>
						</a>
					</li>
					<li><a href="/logout">Logout</a></li>
				</ul>
			</div>
		</div>
	</nav>
</div>
