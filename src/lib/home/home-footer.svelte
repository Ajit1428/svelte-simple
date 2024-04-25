<script lang="ts">
	import {
		BellIcon,
		PlusIcon,
		BookMarkedIcon,
		HomeIcon,
		User2Icon,
		type Icon
	} from 'lucide-svelte';
	import { type ComponentType } from 'svelte';

	type Footer = {
		icon: ComponentType<Icon>;
	};

	let icons: Footer[] = [
		{
			icon: HomeIcon
		},
		{
			icon: BookMarkedIcon
		},
		{
			icon: BellIcon
		},
		{
			icon: User2Icon
		}
	];
</script>

<div class="fixed bottom-0 w-full">
	<div class="border-2 shadow-lg relative max-w-[500px] mx-auto">
		<button class="absolute bg-[#129575] p-4 rounded-full left-[45%] bottom-[50%]">
			<PlusIcon class="text-white" />
		</button>
		<div class="flex justify-center items-center space-x-[7rem] p-4">
			{#each icons as { icon: IconR }}
				<div class="text-slate-400"><IconR /></div>
			{/each}
		</div>
	</div>
</div>
