<script lang="ts">
	// Without a +page.js or +page.ts file
	import { accountSchema, languages } from '$lib/schemas/forms';
	import SuperDebug, { superForm, defaults } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { cn } from '$lib/utils';

	import { buttonVariants } from '$components/ui/button';
	import { CalendarIcon, ChevronsUpDown, Check } from 'lucide-svelte';
	import Calendar from '$components/ui/calendar/calendar.svelte';
	import * as Form from '$components/ui/form';
	import { Input } from '$components/ui/input';
	import * as Popover from '$components/ui/popover';
	import * as Command from '$components/ui/command';
	import {
		parseDate,
		type DateValue,
		DateFormatter,
		getLocalTimeZone
	} from '@internationalized/date';

	const form = superForm(defaults(zod(accountSchema)), {
		SPA: true,
		validators: zod(accountSchema),
		resetForm: false,
		multipleSubmits: 'prevent',
		onUpdate({ form }) {
			if (form.valid) {
			}
		}
	});
	const { form: formData, errors, enhance, constraints, validate } = form;

	let dobValue: DateValue | undefined = $formData.dob ? parseDate($formData.dob) : undefined;
	const handleSubmit = async () => {};

	const df = new DateFormatter('zh-CN', {
		dateStyle: 'long'
	});

	const isDateDisabled = (currDate) => {
		const currDateObj = currDate.toDate(getLocalTimeZone);
		const today = new Date();
		today.setHours(0, 0, 0, 0);

		if (currDateObj > today || currDate.year < 1900) return true;
		return false;
	};
</script>

<form method="POST" action="/login" novalidate use:enhance on:submit|preventDefault={handleSubmit}>
	<Form.Field name="name" {form}>
		<Form.Control let:attrs>
			<Form.Label>Name</Form.Label>
			<Input {...attrs} bind:value={$formData.name} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="dob" class="flex flex-col">
		<Form.Control let:attrs>
			<Form.Label>Date of Birth</Form.Label>
			<Popover.Root>
				<Popover.Trigger
					class={cn(
						buttonVariants({ variant: 'outline' }),
						'h-12 w-[240px] justify-start text-left font-normal',
						!dobValue && 'text-muted-foreground'
					)}
					{...attrs}
				>
					<CalendarIcon class="mr-2 h-4 w-4" />
					{dobValue ? df.format(dobValue.toDate(getLocalTimeZone())) : 'Pick a date'}
				</Popover.Trigger>
				<Popover.Content class="w-auto p-0" align="start">
					<Calendar
						bind:value={dobValue}
						isDateDisabled={(currDate) => {
							const currDateObj = currDate.toDate(getLocalTimeZone());
							const today = new Date();
							today.setHours(0, 0, 0, 0);

							if (currDateObj > today || currDate.year < 1900) return true;

							return false;
						}}
						onValueChange={(value) => {
							if (value === undefined) {
								$formData.dob = undefined;
								validate('dob');
								return;
							}
							$formData.dob = value.toDate(getLocalTimeZone()).toISOString();
							validate('dob');
						}}
					/>
				</Popover.Content>
				<input hidden bind:value={$formData.dob} name={attrs.name} />
			</Popover.Root>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="language" class="flex flex-col">
		<Popover.Root>
			<Form.Control let:attrs>
				<Form.Label>Language</Form.Label>
				<Popover.Trigger
					role="combobox"
					{...attrs}
					class={cn(
						buttonVariants({ variant: 'outline' }),
						'w-[200px] justify-between h-12',
						!$formData.language && 'text-muted-foreground'
					)}
				>
					{languages.find((lang) => lang.value == $formData.language)?.label || 'Select a language'}
					<ChevronsUpDown class="ml-2 size-4 shrink-0 opacity-50" />
				</Popover.Trigger>
				<input hidden bind:value={$formData.language} name={attrs.name} />
			</Form.Control>
			<Popover.Content class="w-[200px] p-0">
				<Command.Root>
					<Command.Input placeholder="Search lanaguage..." />
					<Command.Empty>No language found.</Command.Empty>
					<Command.List>
						{#each languages as language}
							<Command.Item
								{...form}
								value={language.label}
								onSelect={() => {
									$formData.language = language.value;
									validate('language');
								}}
							>
								<Check
									class={cn(
										'mr-2 size-4',
										language.value === $formData.language ? 'opacity-100' : 'opacity-0'
									)}
								/>
								{language.label}
							</Command.Item>
						{/each}
					</Command.List>
				</Command.Root>
			</Popover.Content>
		</Popover.Root>
	</Form.Field>
	<button class="btn btn-info my-8">Update account</button>
</form>
<SuperDebug data={$formData} />
