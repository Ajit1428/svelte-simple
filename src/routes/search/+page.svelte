<script>
	import SearchRecipe from '$lib/home/search-recipe.svelte';
	import { ArrowLeft } from 'lucide-svelte';
</script>

<div class="m-10 h-full max-w-[500px] mx-auto p-2">
	<div class="flex items-center font-bold text-[3rem] gap-4">
		<a href="/home">
			<ArrowLeft class="w-10 h-10" />
		</a>
		<span> Search </span>
	</div>
	<SearchRecipe />
</div>
