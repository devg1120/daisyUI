<script>
	import SidebarNav from './(components)/sidebar-nav.svelte';
	const sidebarNavItems = [
		{
			title: 'Profile',
			href: '/forms'
		},
		{
			title: 'Account',
			href: '/forms/account'
		},
		{
			title: 'Appearance',
			href: '/forms/appearance'
		},
		{
			title: 'Notifications',
			href: '/forms/notifications'
		},
		{
			title: 'Display',
			href: '/forms/display'
		}
	];
</script>

<div class="space-y-0.5">
	<h2>Settings</h2>
	<p class="text-muted-foreground">Manage your account settings and set e-mail preferences.</p>
</div>
<div class="divider" />
<div class="flex flex-col lg:flex-row lg:space-x-0 lg:space-y-0">
	<aside class="mx-4 lg:w-1/6">
		<SidebarNav items={sidebarNavItems} />
	</aside>
	<div class="flex-1 lg:max-w-2xl">
		<slot />
	</div>
</div>
