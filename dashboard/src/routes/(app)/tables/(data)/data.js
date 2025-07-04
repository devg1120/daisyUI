import {
	Circle,
	ArrowDown,
	ArrowUp,
	ArrowRight,
	CircleDollarSignIcon,
	CircleX,
	CircleCheck,
	CircleDot
} from 'lucide-svelte';

export const labels = [
	{
		value: 'bug',
		label: 'Bug'
	},
	{
		value: 'feature',
		label: 'Feature'
	},
	{
		value: 'documentation',
		label: 'Documentation'
	}
];

export const statues = [
	{
		value: 'backlog',
		label: 'Backlog',
		icon: CircleDollarSignIcon
	},
	{
		value: 'todo',
		label: 'Todo',
		icon: Circle
	},
	{
		value: 'in progress',
		label: 'In Progress',
		icon: CircleDot
	},
	{
		value: 'done',
		label: 'Done',
		icon: CircleCheck
	},
	{
		value: 'canceled',
		label: 'Canceled',
		icon: CircleX
	}
];

export const priorities = [
	{
		label: 'Low',
		value: 'low',
		icon: ArrowDown
	},
	{
		label: 'Medium',
		value: 'medium',
		icon: ArrowRight
	},
	{
		label: 'High',
		value: 'high',
		icon: ArrowUp
	}
];
