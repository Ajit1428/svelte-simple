<script lang="ts">
	import { recipeSearchByMealName } from '../../api/recipe-meal-name';
	import { allRecipeListByCategory } from '../../api/recipe-list-all-categories';
	import { onMount } from 'svelte';
	import Loader from './loader.svelte';

	type Meal = {
		idMeal: string;
		strMeal: string;
		strMealThumb: string;
	};

	type Category = {
		idCategory: string;
		strCategory: string;
		strCategoryThumb: string;
	};

	let query = '';
	let timer: ReturnType<typeof setTimeout>;
	let loading = false;
	$: query, handleRecipeSearch();
	let mealData: Meal[] = [];
	let categoryData: Category[] = [];

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
			let data = await recipeSearchByMealName(query);
			mealData = data?.data?.meals;
			loading = false;
		} catch (error) {
			loading = false;
			console.log(error);
		}
	};

	onMount(async () => {
		try {
			const fetchedData = await allRecipeListByCategory();
			categoryData = fetchedData?.data?.categories;
		} catch (error) {
			console.log(error);
		}
	});
</script>

<div class="flex items-center justify-between mt-[2rem]">
	<input
		type="text"
		placeholder="Search for the recipe"
		class="p-4 rounded-xl border-2 outline-none w-full"
		on:input={handleQueryChange}
	/>
</div>
<div class="grid grid-cols-2 grid-flow-row mt-4">
	{#if query}
		{#if loading}
			<div class="flex items-center justify-center col-span-2">
				<Loader />
			</div>
		{:else}
			{#each mealData as meal}
				<div class="flex flex-col mx-2 my-2 border-2 bg-gray-200 p-4 gap-2 rounded-lg">
					<a href="/details/{meal.idMeal}">
						<img src={meal.strMealThumb} alt="category" />
						{meal?.strMeal}
					</a>
				</div>
			{/each}
		{/if}
	{:else}
		{#each categoryData as category}
			<div class="flex flex-col mx-2 my-2 border-2 bg-gray-200 p-4 gap-2 rounded-lg">
				<img src={category.strCategoryThumb} alt="category" />
				{category?.strCategory}
			</div>
		{/each}
	{/if}
</div>
