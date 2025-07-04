<script>
	import ProfileForm from './profile-form.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div>
	<h3 class="text-lg font-medium">Profile</h3>
	<p class="text-sm text-muted-foreground">This is how others will see you on the site.</p>
</div>
<div class="divider" />
<ProfileForm data={data.form} />
