<script lang="ts">
	import SignIn from 'clerk-sveltekit/client/SignIn.svelte';
</script>

<div class="h-full flex items-center justify-center">
	<SignIn redirectUrl="/home" />
</div>
