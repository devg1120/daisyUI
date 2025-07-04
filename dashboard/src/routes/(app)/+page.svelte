<script>
	import Card from '$components/Card.svelte';
	import Icon from '@iconify/svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	const cards = data.cards;
	const persons = data.persons;
</script>

<section>
	<div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-5 mb-5">
		{#each cards as card}
			<Card class="flex items-center">
				<div class="relative w-12 h-12 mr-4 p-2 rounded-full">
					<Icon
						icon={card.icon}
						class="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-xl {card.colors
							.text}"
					/>
				</div>
				<div>
					<h6 class="mb-2 text-sm">{card.name}</h6>
					<p class="font-bold text-3xl">{card.value}</p>
				</div>
			</Card>
		{/each}
	</div>

	<h3 class="font-semibold text-lg">Table sm, pin rows</h3>
	<div class="mt-5 overflow-x-auto h-96">
		<table class="table table-sm table-pin-rows table-pin-cols">
			<!-- <table class="table-fixed"> -->
			<thead>
				<tr>
					<th></th>
					<th>Name</th>
					<th>Job</th>
					<th>company</th>
					<th>location</th>
					<th>Last Login</th>
					<th>Favorite Color</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{#each persons as person, index}
					<tr class="odd:bg-white even:bg-slate-50">
						<th>{index + 1}</th>
						<td>{person.name}</td>
						<td>{person.job}</td>
						<td>{person.company}</td>
						<td>{person.location}</td>
						<td>{person.lastLogin}</td>
						<td>{person.favoriteColor}</td>
						<td>
							<a href="/" class="hover:underline text-blue-600 dark:text-blue-500">Edit</a>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>
