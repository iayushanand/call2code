<script lang="ts">
    import CloudIcon from "@lucide/svelte/icons/cloud";

    import DropletIcon from "@lucide/svelte/icons/droplet";

    import WindIcon from "@lucide/svelte/icons/wind";
</script>

<div class="flex gap-6">
    <div>
        <CloudIcon
            class="h-32 w-32 mask-l-from-tertiary-contrast-50-950 text-tertiary-100"
        />
    </div>
    <div class="h-24 w-1 bg-tertiary-100 my-auto opacity-35"></div>
    <div class="flex flex-col justify-center gap-2">
        <div class="text-3xl font-bold text-tertiary-100">Cloudy</div>
        <div class="flex flex-col gap-1">
            <div class="text-lg text-tertiary-200 flex gap-4 my-auto">
                <DropletIcon class="my-auto" fill="currentColor" /> 60%
            </div>
            <div class="text-sm text-tertiary-200 flex gap-4 my-auto">
                <WindIcon class="my-auto" /> 10 km/h
            </div>
        </div>
    </div>
</div>
