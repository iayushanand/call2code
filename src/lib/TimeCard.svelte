<script lang="ts">
    import CloudIcon from "@lucide/svelte/icons/cloud";
    import RainCloud from "@lucide/svelte/icons/cloud-rain";
    import LightningCloud from "@lucide/svelte/icons/cloud-lightning";
    import SunCloud from "@lucide/svelte/icons/cloud-sun";

    export let dangerLevel: "low" | "medium" | "high" = "low";
    export let weatherType: "cloudy" | "rainy" | "stormy" | "sunny" = "cloudy";

    export let day = "tmrw";
</script>

<div
    class="flex flex-col h-32 w-32 gap-5
    {dangerLevel === 'low'
        ? 'to-success-500/30'
        : dangerLevel === 'medium'
          ? 'to-warning-500/30'
          : 'to-error-500/30'} 
        rounded-lg shadow-lg items-center justify-center bg-gradient-to-b"
>
    {#if weatherType === "cloudy"}
        <CloudIcon class="h-16 w-16 opacity-75" />
    {:else if weatherType === "rainy"}
        <RainCloud class="h-16 w-16 opacity-75" />
    {:else if weatherType === "stormy"}
        <LightningCloud class="h-16 w-16 opacity-75" />
    {:else if weatherType === "sunny"}
        <SunCloud class="h-16 w-16 opacity-75" />
    {/if}

    <div class="bottom-2 text-sm opacity-75">
        {day}
    </div>
</div>
