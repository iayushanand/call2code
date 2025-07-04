<script lang="ts">
    import TempText from "$lib/TempText.svelte";
    import WeatherDetail from "$lib/WeatherDetail.svelte";
</script>

<div
    class="min-h-screen bg-gradient-to-br to-tertiary-400 flex items-center justify-center p-4"
>
    <TempText />
    <WeatherDetail />
</div>
