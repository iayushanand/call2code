<script lang="ts">
    import TimeCard from "./TimeCard.svelte";

    function randomDangerLevel(): "low" | "medium" | "high" {
        const levels: ("low" | "medium" | "high")[] = ["low", "medium", "high"];
        return levels[Math.floor(Math.random() * levels.length + 1)];
    }

    function randomWeatherType(): "cloudy" | "rainy" | "stormy" | "sunny" {
        const types: ("cloudy" | "rainy" | "stormy" | "sunny")[] = [
            "cloudy",
            "rainy",
            "stormy",
            "sunny",
        ];
        return types[Math.floor(Math.random() * types.length + 1)];
    }
</script>

<div class="flex w-fit h-32 m-10 mx-auto bg-transparent rounded-lg gap-2">
    {#each Array(5) as _, i}
        <TimeCard
            day={i === 0 ? "tmrw" : `day${i + 1}`}
            dangerLevel={randomDangerLevel()}
            weatherType={randomWeatherType()}
        />
    {/each}
</div>
