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

<div class="mt-[3.8rem] border-2 shadow-lg relative md:mx[700px] md:mt-[3.4rem]">
	<button class="absolute bg-[#129575] p-4 rounded-full bottom-[2rem] left-[13rem] md:left-[12rem]">
		<PlusIcon class="text-white" />
	</button>
	<div class="flex justify-between p-4">
		{#each icons as { icon: IconR }}
			<div class="text-slate-400"><IconR /></div>
		{/each}
	</div>
</div>
