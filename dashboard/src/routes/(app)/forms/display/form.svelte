<script lang="ts">
	import SuperDebug, { superForm, defaults } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { displaySchema } from '$lib/schemas/forms';
	import * as Form from '$components/ui/form';
	import * as Checkbox from '$components/ui/checkbox';

	const items = [
		{
			id: 'recents',
			label: 'Recents'
		},
		{
			id: 'home',
			label: 'Home'
		},
		{ id: 'applications', label: 'Applications' },
		{
			id: 'desktop',
			label: 'Desktop'
		},
		{
			id: 'downloads',
			label: 'Downloads'
		},
		{
			id: 'documents',
			label: 'Documents'
		}
	] as const;

	const form = superForm(defaults(zod(displaySchema)), {
		SPA: true,
		validators: zod(displaySchema),
		resetForm: false,
		multipleSubmits: 'prevent',
		onUpdate({ form }) {
			if (form.valid) {
			}
		}
	});
	const { form: formData, errors, enhance, validate, validateForm } = form;

	const handleSubmit = async () => {
		// validate('items[0]');
		validateForm();
	};
</script>

<form method="POST" action="/display" use:enhance on:submit|preventDefault={handleSubmit}>
	<Form.Fieldset {form} name="items" class="space-y-0">
		<div class="mb-4">
			<Form.Legend class="text-base">Sidebar</Form.Legend>
			<Form.Description>Select the items you want to display in the sidebar.</Form.Description>
		</div>
		<div class="space-y-2">
			{#each items as item}
				{@const checked = $formData.items.includes(item.id)}
				<div class="flex flex-row items-center space-x-3">
					<Form.Control let:attrs>
						{@const { name, ...rest } = attrs}
						<Checkbox.Root
							{...rest}
							{checked}
							onCheckedChange={(v) => {
								if (v) {
									$formData.items = [...$formData.items, item.id];
								} else {
									$formData.items = $formData.items.filter((i) => i != item.id);
								}
							}}
						/>
						<Form.Label class="font-normal">{item.label}</Form.Label>
						<input type="checkbox" {name} hidden value={item.id} {checked} />
					</Form.Control>
				</div>
			{/each}
			<Form.FieldErrors />
		</div>
	</Form.Fieldset>
	<button class="btn btn-info my-8">Update display</button>
</form>
<SuperDebug data={$formData} />
