<script lang="ts">
    import AiRead from "$lib/AiRead.svelte";
    import EasyRead from "$lib/EasyRead.svelte";
    import TempText from "$lib/TempText.svelte";
    import TimeLine from "$lib/TimeLine.svelte";
    import WeatherDetail from "$lib/WeatherDetail.svelte";
</script>

<!-- <div class="min-h-screen bg-gradient-to-br to-tertiary-400"> -->
<div class="backdrop-blur-lg min-h-screen">
    <div class="h-44"></div>

    <div class="flex items-center justify-center p-4">
        <TempText />
        <WeatherDetail />
    </div>
    <div class="flex flex-col items-center justify-center p-4 gap-8">
        <EasyRead />
        <AiRead />
    </div>
    <div class="flex items-center justify-center p-4">
        <TimeLine />
    </div>
</div>
