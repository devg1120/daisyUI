<script lang="ts">
	import { Input } from '$components/ui/input';
	import type { TableViewModel } from 'svelte-headless-table';
	import type { Task } from '../(data)/schema';
	import { statues, priorities } from '../(data)/data.js';
	import type { Writable } from 'svelte/store';
	import { FacetedFilter } from './index';

	export let tableModel: TableViewModel<Task>;

	const { pluginStates } = tableModel;
	const {
		filterValue
	}: {
		filterValue: Writable<string>;
	} = pluginStates.filter;

	const {
		filterValues
	}: {
		filterValues: Writable<{
			status: string[];
			priority: string[];
		}>;
	} = pluginStates.colFilter;

	$: showReset = Object.values({ ...$filterValues, $filterValue }).some((v) => v.length > 0);
</script>

<div class="flex items-center justify-between">
	<div class="flex flex-1 items-center space-x-2">
		<Input
			placeholder="Filter tasks..."
			class="h-8 w-[150px] lg:w-[250px]"
			type="search"
			bind:value={$filterValue}
		/>

		<FacetedFilter title="status" bind:filterValues={$filterValues.status} options={statues} />
	</div>
</div>
