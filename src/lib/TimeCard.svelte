<script lang="ts">
    import CloudIcon from "@lucide/svelte/icons/cloud";

    export let dangerLevel: "low" | "medium" | "high" = "low";
</script>

<div
    class="flex h-32 w-32
    {dangerLevel === 'low'
        ? 'to-success-500/30'
        : dangerLevel === 'medium'
          ? 'to-warning-500/30'
          : 'to-error-500/30'} 
        rounded-lg shadow-lg items-center justify-center bg-gradient-to-b"
>
    <CloudIcon />
</div>
