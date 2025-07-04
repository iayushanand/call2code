<script lang="ts">
    import EasyRead from "$lib/EasyRead.svelte";
    import TempText from "$lib/TempText.svelte";
    import WeatherDetail from "$lib/WeatherDetail.svelte";
</script>

<!-- <div class="min-h-screen bg-gradient-to-br to-tertiary-400"> -->
<div class="backdrop-blur-lg min-h-screen">
    <div class="h-44"></div>

    <div class="flex items-center justify-center p-4">
        <TempText />
        <WeatherDetail />
    </div>
    <div class="flex items-center justify-center p-4">
        <EasyRead />
    </div>
</div>
