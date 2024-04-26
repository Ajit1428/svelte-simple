<script lang="ts">
	import { page } from '$app/stores';
	import { ArrowLeft } from 'lucide-svelte';
	import { individualMealDeatails } from '../../../api/meal-individual-details';
	import { onMount } from 'svelte';
	import Loader from '$lib/home/loader.svelte';
	import { cn } from '../../../utils/cn';

	type Meal = {
		strIngredient1: string;
		strIngredient2: string;
		strIngredient3: string;
		strIngredient4: string;
		strIngredient5: string;
		strIngredient6: string;
		strInstructions: string;
		strMeal: string;
		strMealThumb: string;
	};

	type ingredient = {
		ingredient: string;
	};

	let mealId = $page.params.id;
	let mealDetails: Meal[] = [];
	let loading = false;
	let showIngredient = '';
	let filteredMealInstruction = [];
	let ingredientItem: ingredient[] = [];

	let mealInstruction: string[] = [];
	let splitRegex = /STEP \d+\r\n\r\n/g;

	const handleFetchedDetails = async () => {
		try {
			loading = true;
			const fetchedDetails = await individualMealDeatails(mealId);
			mealDetails = fetchedDetails?.data?.meals;
			filteredMealInstruction = mealDetails.map((a) => a?.strInstructions);
			mealInstruction = filteredMealInstruction
				.toString()
				.split(splitRegex)
				.filter((a) => a !== '');

			mealDetails.map(
				(a) =>
					(ingredientItem = [
						{
							ingredient: a?.strIngredient1
						},
						{
							ingredient: a?.strIngredient2
						},
						{
							ingredient: a?.strIngredient3
						},
						{
							ingredient: a?.strIngredient4
						},
						{
							ingredient: a?.strIngredient5
						},
						{
							ingredient: a?.strIngredient6
						}
					])
			);

			loading = false;
		} catch (error) {
			console.log(error);
			loading = false;
		}
	};

	const handleIngredientClick = async (ingredient: string) => {
		try {
			loading = true;
			showIngredient = ingredient;
			handleFetchedDetails();
		} catch (error) {
			console.log(error);
			loading = false;
		}
	};

	onMount(() => {
		handleFetchedDetails();
	});
</script>

<div class="max-w-[500px] mx-auto h-screen">
	<div class="pt-10 px-4 pb-10">
		<a href="/home">
			<ArrowLeft />
		</a>
		<div class="my-4 w-full">
			{#if loading}
				<div class="flex items-center justify-center h-screen">
					<Loader />
				</div>
			{:else}
				{#each mealDetails as mealDetail}
					<div class="flex flex-col gap-4">
						<img src={mealDetail?.strMealThumb} alt="meal" class="w-full h-[20rem] rounded-lg" />
						<spsn class="text-xl font-medium">{mealDetail?.strMeal}</spsn>
					</div>
					<div class="flex items-center my-10 gap-10 text-xl">
						<button
							class={cn(
								'text-[#129575]',
								showIngredient === 'ingredient' &&
									'bg-[#129575] text-white p-4 text-center w-fit rounded-lg'
							)}
							on:click={() => handleIngredientClick('ingredient')}
						>
							Ingredients
						</button>
						<button
							class={cn(
								'text-[#129575]',
								showIngredient === 'instruction' &&
									'bg-[#129575] text-white p-4 text-center w-fit rounded-lg'
							)}
							on:click={() => handleIngredientClick('instruction')}
						>
							Instructions
						</button>
					</div>
					{#if showIngredient === 'ingredient'}
						{#each ingredientItem as item}
							<div class="grid grid-cols-2 gap-4">
								<div class="bg-gray-100 p-4 rounded-full shadow-md text-center col-span-2 mb-2">
									{item.ingredient}
								</div>
							</div>
						{/each}
					{:else if showIngredient === 'instruction'}
						{#each mealInstruction as instruction}
							<div class="mt-2">
								<div class="bg-gray-100 p-4 rounded-md shadow-md text-center col-span-2 mb-2">
									{instruction}
								</div>
							</div>
						{/each}
					{:else}
						{#each ingredientItem as item}
							<div class="grid grid-cols-2 gap-4">
								<div class="bg-gray-100 p-4 rounded-full shadow-md text-center col-span-2 mb-2">
									{item.ingredient}
								</div>
							</div>
						{/each}
					{/if}
				{/each}
			{/if}
		</div>
	</div>
</div>
