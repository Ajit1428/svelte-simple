<script lang="ts">
	import { onMount } from 'svelte';
	import { listAllRecipe } from '../../api/recipe-list';

	type Category = {
		idCategory: string;
		strCategory: string;
		strCategoryThumb: string;
		strCategoryDescription: string;
	};

	let categories: Category[] = [];
	onMount(async () => {
		try {
			const fetchedData = await listAllRecipe();
			categories = fetchedData?.data?.categories;
		} catch (error) {
			console.log(error);
		}
	});
</script>

<div class="flex items-center justify-between">
	{#each categories as category}
		<div class="border-2 mr-4 shadow-lg bg-gray-200 rounded-lg">
			<div class="flex flex-col items-center w-[12rem] p-4">
				<img src={category?.strCategoryThumb} alt="recipe" class="h-[12rem] w-[12rem]" />
				{category?.strCategory}
			</div>
		</div>
	{/each}
</div>
