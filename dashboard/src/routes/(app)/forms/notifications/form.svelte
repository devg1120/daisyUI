<script lang="ts">
	import SuperDebug, { superForm, defaults } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { notificationSchema } from '$lib/schemas/forms';
	import * as Form from '$components/ui/form';
	import * as RadioGroup from '$components/ui/radio-group';

	const form = superForm(defaults(zod(notificationSchema)), {
		SPA: true,
		validators: zod(notificationSchema),
		resetForm: false,
		multipleSubmits: 'prevent',
		onUpdate({ form }) {
			if (form.valid) {
			}
		}
	});
	const { form: formData, enhance, validate, validateForm } = form;

	const handleSubmit = async () => {
		validate('type');
		validateForm();
	};
</script>

<form method="POST" use:enhance on:submit|preventDefault={handleSubmit} class="space-y-8">
	<Form.Fieldset {form} name="type">
		<Form.Legend>Notify me about...</Form.Legend>
		<Form.Control>
			<RadioGroup.Root bind:value={$formData.type}>
				<div class="flex items-center space-x-3">
					<Form.Control let:attrs>
						<RadioGroup.Item value="all" {...attrs} />
						<Form.Label>All new messages</Form.Label>
					</Form.Control>
				</div>
				<div class="flex items-center space-x-3">
					<Form.Control let:attrs>
						<RadioGroup.Item value="mentions" {...attrs} />
						<Form.Label>Direct messages and mentions</Form.Label>
					</Form.Control>
				</div>
				<div class="flex items-center space-x-3">
					<Form.Control let:attrs>
						<RadioGroup.Item value="none" {...attrs} />
						<Form.Label>Nothing</Form.Label>
					</Form.Control>
				</div>
			</RadioGroup.Root>
		</Form.Control>
	</Form.Fieldset>
	<div>
		<h3 class="mb-4 text-lg font-medium">Email Notification</h3>
		<div class="space-y-4">
			<div class="flex flex-row items-center justify-between rounded-lg border p-4">
				<div class="space-y-0.5">
					<span class="text-base">Communication emails</span>
					<p class="text-sm text-muted-foreground">Receive emails about your account activity.</p>
				</div>
				<input type="checkbox" class="toggle" bind:checked={$formData.communication_emails} />
			</div>
			<div class="flex flex-row items-center justify-between rounded-lg border p-4">
				<div class="space-y-0.5">
					<span class="label-text text-base">Marketing emails</span>
					<p class="text-sm text-muted-foreground">
						Receive emails about new products, features, and more.
					</p>
				</div>
				<input type="checkbox" class="toggle" bind:checked={$formData.marketing_emails} />
			</div>
			<div class="flex flex-row items-center justify-between rounded-lg border p-4">
				<div class="space-y-0.5">
					<span class="label-text text-base">Social emails</span>
					<p class="text-sm text-muted-foreground">
						Receive emails for friends, follows, and more.
					</p>
				</div>
				<input type="checkbox" class="toggle" bind:checked={$formData.social_emails} />
			</div>
			<div class="flex flex-row items-center justify-between rounded-lg border p-4">
				<div class="space-y-0.5">
					<span class="label-text text-base">Security emails</span>
					<p class="text-sm text-muted-foreground">
						Receive emails about your account activity and security.
					</p>
				</div>
				<input type="checkbox" class="toggle" bind:checked={$formData.security_emails} />
			</div>
		</div>
	</div>
	<label class="label justify-start">
		<input type="checkbox" class="checkbox" bind:checked={$formData.mobile} />
		<div class="px-3">
			<span class="label-text text-base">Use different settings for my mobile devices</span>
			<p class="text-sm text-muted-foreground">
				You can manage your mobile notifications in the
				<a href="/examples/forms">mobile settings </a>
			</p>
		</div>
	</label>
	<button class="btn btn-info my-8">Update display</button>
	<SuperDebug data={$formData} />
</form>
