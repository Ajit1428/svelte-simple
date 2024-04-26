<script lang="ts">
	import UserButton from 'clerk-sveltekit/client/UserButton.svelte';
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import RecipeReview from '$lib/home/recipe-review.svelte';
	import HomeFooter from '$lib/home/home-footer.svelte';
	import RecipeCategory from '$lib/home/recipe-category.svelte';
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
		<a href="/search" class="w-full">
			<input
				type="text"
				placeholder="Search for the recipe"
				class="p-4 rounded-xl border-2 outline-none w-full"
			/>
		</a>
	</div>
	<div class="mt-[3rem]">
		<RecipeCategory />
	</div>
	<div class="mt-6">
		<span class="font-semibold text-xl">New Recipes</span>
		<RecipeReview />
	</div>
</div>
<HomeFooter />
