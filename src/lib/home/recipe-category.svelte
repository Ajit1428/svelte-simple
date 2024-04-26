<script lang="ts">
	import { cn } from '../../utils/cn';
	import { onMount } from 'svelte';
	import { recipeMealCategorySearch } from '../../api/recipe-meal-category';

	type Category = {
		idMeal: string;
		strMeal: string;
		strMealThumb: string;
	};

	let meals: Category[] = [];
	let selectedCategory = 'Chicken';
	let categories = ['Chicken', 'Breakfast', 'Starter', 'Seafood', 'Beef'];

	onMount(async () => {
		handleFetchAllCategories();
	});

	const handleFetchAllCategories = async () => {
		try {
			const fetchedData = await recipeMealCategorySearch(selectedCategory);
			meals = fetchedData?.data?.meals;
		} catch (error) {
			console.log(error);
		}
	};

	const handleSelectedCategory = (name: string) => {
		selectedCategory = name;
		handleFetchAllCategories();
	};
</script>

<div class="flex items-center justify-between gap-4 sticky">
	{#each categories as category}
		<button
			class={cn(
				'text-black  py-2',
				selectedCategory === category && 'bg-[#129575] text-white  rounded-2xl px-4'
			)}
			value={category}
			on:click={() => handleSelectedCategory(category)}
		>
			{category}
		</button>
	{/each}
</div>
<div class="flex items-center justify-between mt-[3rem] overflow-x-auto p-4">
	{#each meals as meal}
		<div class="border-2 mr-4 shadow-lg bg-gray-200 rounded-lg">
			<div class="flex flex-col w-[12rem] h-[19rem] p-4 gap-2">
				<a href="/details/{meal?.idMeal}">
					<img src={meal?.strMealThumb} alt="recipe" class="h-[12rem] w-[12rem] mb-2" />
					{meal?.strMeal}
				</a>
			</div>
		</div>
	{/each}
</div>
