<script>
	import { twMerge } from 'tailwind-merge';

	export let type = 'shadow';
	let className = '';
	export { className as class };
</script>

<div
	class="p-5 {type == 'shadow' ? 'shadow-lg' : 'border border-gray-300'} {twMerge(
		'bg-white',
		className
	)} rounded-xl"
>
	<slot />
</div>
