<script lang="ts">
	import { page } from '$app/stores';
	import { ArrowLeft } from 'lucide-svelte';
	import { individualMealDeatails } from '../../../api/meal-individual-details';
	import { onMount } from 'svelte';

	type Meal = {
		strIngredient1: string;
		strIngredient2: string;
		strIngredient3: string;
		strIngredient4: string;
		strIngredient5: string;
		strIngredient6: string;
		strMeal: string;
		strMealThumb: string;
	};

	let mealId = $page.params.id;
	let mealDetails: Meal[] = [];

	const handleFetchedDetails = async () => {
		const fetchedDetails = await individualMealDeatails(mealId);
		mealDetails = fetchedDetails?.data?.meals;
	};

	onMount(() => {
		handleFetchedDetails();
	});
</script>

<div class="max-w-[500px] mx-auto h-screen">
	<div class="pt-10 px-4">
		<a href="/home">
			<ArrowLeft />
		</a>
		<div class="mt-4">
			{#each mealDetails as mealDetail}
				<div class="flex flex-col gap-4">
					<img src={mealDetail?.strMealThumb} alt="meal" class="w-full h-[20rem] rounded-lg" />
					<spsn class="text-xl font-medium">{mealDetail?.strMeal}</spsn>
				</div>
				<div class="mt-10 bg-[#129575] p-4 text-white text-xl text-center w-fit rounded-lg">
					Ingredients
				</div>
				<div class="grid grid-cols-2 gap-4 mt-10">
					<div class="bg-gray-100 p-4 rounded-full shadow-md text-center col-span-2">
						{mealDetail?.strIngredient1}
					</div>
					<div class="bg-gray-100 p-4 rounded-full shadow-md text-center col-span-2">
						{mealDetail?.strIngredient2}
					</div>
					<div class="bg-gray-100 p-4 rounded-full shadow-md text-center col-span-2">
						{mealDetail?.strIngredient3}
					</div>
					<div class="bg-gray-100 p-4 rounded-full shadow-md text-center col-span-2">
						{mealDetail?.strIngredient4}
					</div>
					<div class="bg-gray-100 p-4 rounded-full shadow-md text-center col-span-2">
						{mealDetail?.strIngredient5}
					</div>
					<div class="bg-gray-100 p-4 rounded-full shadow-md text-center col-span-2">
						{mealDetail?.strIngredient6}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
