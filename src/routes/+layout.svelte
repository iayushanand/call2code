<script lang="ts">
    import Navbar from '$lib/Navbar.svelte';
	import '../app.css';
	
	let { children } = $props();
</script>

{@render children()}


<Navbar></Navbar>