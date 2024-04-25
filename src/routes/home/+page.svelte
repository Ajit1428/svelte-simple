<script lang="ts">
	import UserButton from 'clerk-sveltekit/client/UserButton.svelte';
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import { Settings2 } from 'lucide-svelte';
	import { cn } from '../../utils/cn';
	import RecipeList from '$lib/home/recipe-list.svelte';
	import RecipeReview from '$lib/home/recipe-review.svelte';
	import HomeFooter from '$lib/home/home-footer.svelte';

	let category = ['All', 'Indian', 'Italian', 'Asian'];
</script>

<div class=" overflow-y-hidden max-w-[500px] mx-auto p-2">
	<div class="flex justify-between items-center">
		<div class="flex flex-col mt-8">
			<span class="text-[2rem] font-semibold">Hello Ajit</span>
			<span class="text-slate-500">What are you cooking today?</span>
		</div>
		<div>
			<SignedIn>
				<UserButton afterSignOutUrl="/" />
			</SignedIn>
		</div>
	</div>
	<div class="flex items-center justify-between mt-[3rem]">
		<a href="/search">
			<input
				type="text"
				placeholder="Search for the recipe"
				class="p-4 rounded-xl border-2 outline-none w-[25rem]"
			/>
		</a>
		<span class="text-white bg-[#129575] p-4 rounded-xl ml-6">
			<Settings2 />
		</span>
	</div>
	<div class="flex justify-between mt-[3rem]">
		{#each category as item}
			<ul>
				<li
					class={cn(
						'text-black  py-2.5',
						category[0] === item && 'bg-[#129575] text-white  rounded-2xl px-10'
					)}
				>
					{item}
				</li>
			</ul>
		{/each}
	</div>
	<div class="mt-[3rem] overflow-x-auto">
		<RecipeList />
	</div>
	<div class="mt-10">
		<span class="font-semibold text-xl">New Recipes</span>
		<RecipeReview />
	</div>
</div>
<HomeFooter />
