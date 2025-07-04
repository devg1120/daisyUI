<script>
	// jsdoc + js + daisyui + sveltekit-superforms

	import { superForm, setMessage } from 'sveltekit-superforms/client';
	import { _formSchema } from './schema';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { applyAction, deserialize } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { toast } from '@jill64/svelte-toast';
	import { z } from 'zod';
	import SuperDebug from 'sveltekit-superforms';

	/** @type {import("sveltekit-superforms/client").SuperValidated<z.infer<typeof _formSchema>>} */
	export let data;

	const {
		form,
		errors,
		// message: secondMessage,
		enhance,
		// reset,
		constraints,
		validateForm
	} = superForm(data, {
		SPA: true,
		validators: zodClient(_formSchema),
		multipleSubmits: 'prevent',
		resetForm: false,
		onUpdate({ form }) {
			if (form.valid) {
				setMessage(form, 'Valid second data!');
			}
		}
	});

	/** @param {{ currentTarget: EventTarget & HTMLFormElement}} event */
	const handleSubmit = async (event) => {
		const validateResult = await validateForm();
		if (!validateResult.valid) {
			return;
		}

		const data = new FormData(event.currentTarget);

		const response = await fetch(event.currentTarget.action, {
			method: 'POST',
			body: data
		});

		/** @type {import('@sveltejs/kit').ActionResult} */
		const result = deserialize(await response.text());

		if (result.type === 'success') {
			await invalidateAll();
		} else {
			$toast.error('Faild');
			// reset();
			return;
		}

		applyAction(result);
	};
</script>

<form method="POST" action="/login" novalidate use:enhance on:submit|preventDefault={handleSubmit}>
	<label class="form-control w-full">
		<div class="label">
			<span class="label-text">Username</span>
		</div>
		<input
			type="text"
			placeholder="@daisyui"
			class="input input-bordered w-full {$errors.username ? 'input-error' : ''}"
			bind:value={$form.username}
			{...$constraints.username}
			aria-invalid={$errors.username ? 'true' : undefined}
		/>
		<div class="label">
			<span class="label-text text-muted-foreground">
				This is your display name.It can be your real name or pseudonym. You can only change this
				once every 30 days
			</span>
		</div>
		{#if $errors.username}
			<div class="label">
				<span class="label-text-alt text-red-500">{$errors.username}</span>
			</div>
		{/if}
	</label>
	<label class="form-control w-full">
		<div class="label">
			<span class="label-text">Email</span>
		</div>
		<input
			type="email"
			placeholder="demo@mail.com"
			class="input input-bordered w-full {$errors.email ? 'input-error' : ''}"
			bind:value={$form.email}
			{...$constraints.email}
			aria-invalid={$errors.email ? 'true' : undefined}
		/>
		<div class="label">
			<span class="label-text text-muted-foreground">
				You can manage verified email addresses in your email settings.
			</span>
		</div>
		{#if $errors.email}
			<div class="label">
				<span class="label-text-alt text-red-500">{$errors.email}</span>
			</div>
		{/if}
	</label>
	<label class="form-control w-full">
		<div class="label">Bio</div>
		<textarea
			bind:value={$form.bio}
			class="textarea textarea-bordered {$errors.bio ? 'textarea-error' : ''}"
			placeholder="I own a computer."
			{...$constraints.bio}
			aria-invalid={$errors.bio ? 'true' : undefined}
		/>
		<div class="label text-sm text-muted-foreground">
			<span>Your can @mention other users and organizations to link to them.</span>
		</div>
		{#if $errors.bio}
			<div class="label">
				<span class="label-text-alt text-red-500">{$errors.bio}</span>
			</div>
		{/if}
	</label>
	<label class="form-control w-full">
		<div class="label">URLs</div>
		<div class="label text-sm text-muted-foreground">
			<span>Add links to your website, blog, or social media profiles.</span>
		</div>
		{#each $form.urls as _, i}
			<input
				bind:value={$form.urls[i]}
				class="input mb-2 input-bordered w-full {$errors.urls && $errors.urls[i]
					? 'input-error'
					: ''}"
				placeholder="I own a computer."
				{...$constraints.urls}
				aria-invalid={$errors.urls && $errors.urls[i] ? 'true' : undefined}
			/>
			{#if $errors.urls && $errors.urls[i]}
				<div class="label">
					<span class="label-text-alt text-red-500">{$errors.urls[i]}</span>
				</div>
			{/if}
		{/each}
	</label>
	<button class="btn btn-info my-8">Update profile</button>
</form>
<SuperDebug data={$form} />
