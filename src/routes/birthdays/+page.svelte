<script>
	import Birthday from './Birthday.svelte';

	export let data;
	console.log(data);
</script>

<h1>Birthday list</h1>

<ul>
	{#each data.birthdays as { name, dob }}
		<li>
			<Birthday {name} {dob} />
		</li>
	{/each}
</ul>
