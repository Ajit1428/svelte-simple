<script>
	import { ChefHat } from 'lucide-svelte';
	import { MoveRight } from 'lucide-svelte';
</script>

<main class="h-full w-full">
	<div class="main-img text-white md:mx-[700px]">
		<div class="flex flex-col items-center h-full gap-2">
			<div class="flex flex-col items-center gap-4 mt-[8rem]">
				<ChefHat class=" h-[8rem] w-[8rem]" />
				<span class="text-2xl font-semibold">100k+ Premium Recipe</span>
			</div>
			<div
				class="flex flex-col items-center mt-[18rem] leading-none text-[4rem] font-semibold gap-2"
			>
				<span>Get</span>
				<span>Cooking</span>
			</div>
			<div class="flex flex-col items-center gap-[7rem] mt-6">
				<span class="text-[1.3rem]">Simple way to find Tasty Recipe</span>
				<a href="/sign-in">
					<button
						class="flex items-center gap-4 bg-[#129575] px-[50px] py-[15px] rounded-xl text-[1.4rem]"
					>
						Start Cooking
						<MoveRight />
					</button>
				</a>
			</div>
		</div>
	</div>
</main>
