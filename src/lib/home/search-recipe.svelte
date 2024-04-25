<script lang="ts">
	import { Settings2 } from 'lucide-svelte';
	import { recipeSearchByName } from '../../api/recipe-search';
	import { listAllRecipe } from '../../api/recipe-list';
	import { onMount } from 'svelte';
	import Loader from './loader.svelte';

	type MealList = {
		strMeal: string;
		strMealThumb: string;
	};

	type CategoryList = {
		strCategory: string;
		strCategoryThumb: string;
	};

	let query = '';
	let timer: ReturnType<typeof setTimeout>;
	let loading = false;
	$: query, handleRecipeSearch();
	let mealData: MealList[] = [];

	const handleQueryChange = (ev: Event) => {
		clearTimeout(timer);
		loading = true;
		const target = ev.target as HTMLInputElement;
		timer = setTimeout(() => {
			query = target.value;
		}, 750);
	};

	const handleRecipeSearch = async () => {
		loading = true;
		try {
			let data = await recipeSearchByName(query);
			mealData = data?.data?.meals;
			loading = false;
		} catch (error) {
			loading = false;
			console.log(error);
		}
	};

	let categoryData: CategoryList[] = [];

	onMount(async () => {
		try {
			const fetchedData = await listAllRecipe();
			categoryData = fetchedData?.data?.categories;
		} catch (error) {
			console.log(error);
		}
	});
</script>

<div class="flex items-center justify-between mt-[2rem] overflow-y-auto">
	<input
		type="text"
		placeholder="Search for the recipe"
		class="p-4 rounded-xl border-2 outline-none w-[20rem] md:w-[25rem]"
		on:input={handleQueryChange}
	/>
	<span class="text-white bg-[#129575] p-4 rounded-xl ml-6">
		<Settings2 />
	</span>
</div>
<div class="grid grid-cols-2 grid-flow-row mt-4">
	{#if query}
		{#if loading}
			<div class="flex items-center justify-center col-span-2">
				<Loader />
			</div>
		{:else}
			{#each mealData as category}
				<div class="flex flex-col mx-2 my-2 border-2 bg-gray-200 p-4 gap-2 rounded-lg">
					<img src={category.strMealThumb} alt="category" />
					{category?.strMeal}
				</div>
			{/each}
		{/if}
	{:else}
		{#each categoryData as lCategory}
			<div class="flex flex-col mx-2 my-2 border-2 bg-gray-200 p-4 gap-2 rounded-lg">
				<img src={lCategory.strCategoryThumb} alt="category" />
				{lCategory?.strCategory}
			</div>
		{/each}
	{/if}
</div>
