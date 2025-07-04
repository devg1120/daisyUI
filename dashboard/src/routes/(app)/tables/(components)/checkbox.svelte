<script lang="ts">
	import { Checkbox } from '$components/ui/checkbox';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { Writable } from 'svelte/store';

	type $$props = HTMLButtonAttributes & {
		checked: Writable<boolean>;
	};
	export let checked: Writable<boolean>;
</script>

<Checkbox bind:checked={$checked} {...$$restProps} />
