<script lang="ts">
	import SuperDebug, { superForm, defaults } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { appearanceSchema } from '$lib/schemas/forms';
	import * as Form from '$components/ui/form';
	import * as RadioGroup from '$components/ui/radio-group';
	import { Label } from '$components/ui/label';

	const form = superForm(defaults(zod(appearanceSchema)), {
		SPA: true,
		validators: zod(appearanceSchema),
		resetForm: false,
		multipleSubmits: 'prevent',
		onUpdate({ form }) {
			if (form.valid) {
			}
		}
	});
	const { form: formData, enhance, validate, validateForm } = form;

	const handleSubmit = async () => {
		validate('font');
		validateForm();
	};
</script>

<form method="POST" novalidate use:enhance on:submit|preventDefault={handleSubmit}>
	<Form.Field {form} name="font">
		<Form.Control let:attrs>
			<Form.Label>Font</Form.Label>
			<div class="relative w-full">
				<select {...attrs} class="select select-bordered w-full" bind:value={$formData.font}>
					<option value="inter">Inter</option>
					<option value="manrope">Manrope</option>
					<option value="system">System</option>
				</select>
			</div>
			<Form.FieldErrors />
		</Form.Control>
	</Form.Field>
	<Form.Fieldset {form} name="theme">
		<Form.Legend>Theme</Form.Legend>
		<Form.Description>Select the theme for the dashboard.</Form.Description>
		<Form.FieldErrors />
		<RadioGroup.Root
			class="grid max-w-md grid-cols-2 gap-8 pt-2"
			orientation="horizontal"
			bind:value={$formData.theme}
		>
			<Form.Control let:attrs>
				<Label class="[&:has([data-state=checked])>div]:border-primary">
					<RadioGroup.Item {...attrs} value="light" class="sr-only" />
					<div class="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
						<div class="space-y-2 rounded-sm bg-[#ecedef] p-2">
							<div class="space-y-2 rounded-md bg-white p-2 shadow-sm">
								<div class="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
								<div class="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
							</div>
							<div class="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
								<div class="h-4 w-4 rounded-full bg-[#ecedef]" />
								<div class="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
							</div>
							<div class="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
								<div class="h-4 w-4 rounded-full bg-[#ecedef]" />
								<div class="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
							</div>
						</div>
					</div>
					<span class="block w-full p-2 text-center font-normal"> Light </span>
				</Label>
			</Form.Control>
			<Form.Control let:attrs>
				<Label class="[&:has([data-state=checked])>div]:border-primary">
					<RadioGroup.Item {...attrs} value="dark" class="sr-only" />
					<div
						class="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground"
					>
						<div class="space-y-2 rounded-sm bg-slate-950 p-2">
							<div class="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
								<div class="h-2 w-[80px] rounded-lg bg-slate-400" />
								<div class="h-2 w-[100px] rounded-lg bg-slate-400" />
							</div>
							<div class="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
								<div class="h-4 w-4 rounded-full bg-slate-400" />
								<div class="h-2 w-[100px] rounded-lg bg-slate-400" />
							</div>
							<div class="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
								<div class="h-4 w-4 rounded-full bg-slate-400" />
								<div class="h-2 w-[100px] rounded-lg bg-slate-400" />
							</div>
						</div>
					</div>
					<span class="block w-full p-2 text-center font-normal"> Dark </span>
				</Label>
			</Form.Control>
			<RadioGroup.Input name="theme" />
		</RadioGroup.Root>
	</Form.Fieldset>
	<button class="btn btn-info my-8">Update account</button>
</form>
<SuperDebug data={$formData} />
