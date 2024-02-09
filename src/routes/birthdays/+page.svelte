<script>
	import Birthday from './Birthday.svelte';

	let data = [
		{ name: 'Hercules', dob: '1994-03-15' },
		{ name: 'Athena', dob: '2001-08-27' }
	];
</script>

<h1>Birthday list</h1>

<ul>
	{#each data as { name, dob }}
		<li>
			<Birthday {name} {dob} />
		</li>
	{/each}
</ul>
