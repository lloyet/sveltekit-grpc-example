<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { grpcClient } from "$stores";
	import { HelloRequest, RandomNumberRequest } from "$proto/greeter_pb";

	let name = "";
	let randomSize = 10;
	let listName = new Array<string>();
	let listRandomNumbers = new Array<number>();

	function requestHello(
		e: SubmitEvent & {
			currentTarget: EventTarget & HTMLFormElement;
		}
	) {
		console.log(e);
		const request = new HelloRequest();
		request.setName(name);
		const call = $grpcClient.sayHello(request, null, (err, res) => {
			if (err) return;

			const name = res.getMessage();

			listName = [...listName, name];
		});
	}

	function requestRandomNumbers(
		e: SubmitEvent & {
			currentTarget: EventTarget & HTMLFormElement;
		}
	) {
		const req = new RandomNumberRequest();
		req.setSize(randomSize);

		const call = $grpcClient.randomNumber(req);
		call.on("data", (res) => {
			const number = res.getMessage();

			listRandomNumbers = [...listRandomNumbers, number];
		});
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte gRPC demo app" />
</svelte:head>

<section>
	<title>Say hello</title>
	<form on:submit={requestHello}>
		<input bind:value={name} type="text" />
		<button type="submit">Send Hello</button>
	</form>
	<ul>
		{#each listName as name}
			<li>{name}</li>
		{/each}
	</ul>
</section>

<section>
	<title>Random Numbers</title>
	<form on:submit={requestRandomNumbers}>
		<input type="number" bind:value={randomSize} />
		<button type="submit">Request Random Numbers</button>
	</form>
	<ul>
		{#each listRandomNumbers as number}
			<li>{number}</li>
		{/each}
	</ul>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	button {
		padding: 0.5em;
		border: none;
		background-color: dodgerblue;
		color: white;
		font-weight: bold;
		border-radius: 8px;
		cursor: pointer;
	}

	ul {
		text-decoration: none;
	}

	li {
		text-decoration: none;
	}
</style>
