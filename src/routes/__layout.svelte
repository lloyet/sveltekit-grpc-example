<script lang="ts">
	import "../app.css";

	import { onMount } from "svelte";

	import { GreeterClient } from "$proto/GreeterServiceClientPb";

	import { grpcClient } from "$stores";
	import { GRPC_URL } from "$env";

	onMount(() => {
		const greeterService = new GreeterClient(GRPC_URL, null, null);
		grpcClient.set(greeterService);
	});
</script>

<main>
	<slot />
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
