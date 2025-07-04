<script>
	/** @type {import('./$types').PageData} */
	export let data;
	const invoices = data.invoices;
</script>

<h3 class="font-semibold text-lg">Invoices[daisyui]</h3>
<div class="mt-5 overflow-x-auto h-76">
	<table class="table table-sm table-pin-rows table-pin-cols">
		<thead>
			<tr>
				<th>Invoice</th>
				<th>Status</th>
				<th>Method</th>
				<th class="text-right">Amount</th>
			</tr>
		</thead>
		<tbody>
			{#each invoices as invoice}
				<tr class="odd:bg-white even:bg-slate-50">
					<td>{invoice.invoice}</td>
					<td>{invoice.paymentStatus}</td>
					<td>{invoice.paymentMethod}</td>
					<td class="text-right">{invoice.totalAmount}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<h3 class="font-semibold text-lg">Data tables</h3>
<div class="mt-5 overflow-x-auto h-76">
	<table class="table table-sm table-pin-rows table-pin-cols"></table>
</div>
