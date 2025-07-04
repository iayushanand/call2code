<script lang="ts">
	import Navbar from "$lib/Navbar.svelte";
	import Background from "$lib/Background.svelte";
	import "../app.css";

	let { children } = $props();
</script>

<Background></Background>
<Navbar></Navbar>


{@render children()}
