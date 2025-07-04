<script lang="ts">
    import TimeCard from "./TimeCard.svelte";

    function randomDangerLevel(): "low" | "medium" | "high" {
        const levels: ("low" | "medium" | "high")[] = ["low", "medium", "high"];
        return levels[Math.floor(Math.random() * levels.length + 1)];
    }
</script>

<div class="flex w-fit h-32 m-10 mx-auto bg-transparent rounded-lg gap-2">
    {#each Array(5) as _, i}
        <TimeCard dangerLevel={randomDangerLevel()} />
    {/each}
</div>
