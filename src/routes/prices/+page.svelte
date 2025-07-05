<script lang="ts">
    import PriceCard from "$lib/PriceCard.svelte";
    import type { Price } from "$lib/prices";

    let data: Price[] = [
        {
            commodity: "Apple",
            variety: "Kasmir/Shimla - II",
            maxPrice: 7860,
            minPrice: 7800,
            date: "2025-07-04",
        },
        {
            commodity: "Bottle gourd",
            variety: "Bottle Gourd",
            maxPrice: 1960,
            minPrice: 1900,
            date: "2025-07-04",
        },
        {
            commodity: "Cabbage",
            variety: "Cabbage",
            maxPrice: 1640,
            minPrice: 1600,
            date: "2025-07-04",
        },
        {
            commodity: "Garlic",
            variety: "Garlic",
            maxPrice: 2460,
            minPrice: 2400,
            date: "2025-07-04",
        },
        {
            commodity: "Green Chilli",
            variety: "Green Chilly",
            maxPrice: 2560,
            minPrice: 2500,
            date: "2025-07-04",
        },
        {
            commodity: "Lemon",
            variety: "Lemon",
            maxPrice: 4260,
            minPrice: 4200,
            date: "2025-07-04",
        },
        {
            commodity: "Mango",
            variety: "Dusheri",
            maxPrice: 1660,
            minPrice: 1600,
            date: "2025-07-04",
        },
        {
            commodity: "Onion",
            variety: "Red",
            maxPrice: 1860,
            minPrice: 1800,
            date: "2025-07-04",
        },
        {
            commodity: "Potato",
            variety: "Desi",
            maxPrice: 1680,
            minPrice: 1600,
            date: "2025-07-04",
        },
        {
            commodity: "Pumpkin",
            variety: "Pumpkin",
            maxPrice: 1460,
            minPrice: 1400,
            date: "2025-07-04",
        },
        {
            commodity: "Ridgeguard(Tori)",
            variety: "Ridgeguard(Tori)",
            maxPrice: 1750,
            minPrice: 1700,
            date: "2025-07-04",
        },
        {
            commodity: "Tomato",
            variety: "Local",
            maxPrice: 1700,
            minPrice: 1629,
            date: "2025-07-04",
        },
        {
            commodity: "Wheat",
            variety: "Dara",
            maxPrice: 2454,
            minPrice: 2400,
            date: "2025-07-04",
        },
    ];

    function bestToday(prices: Price[]): Price[] {
        return prices.sort((a, b) => b.maxPrice - a.maxPrice).slice(0, 4);
    }

    function fuzzySearch(query: string, prices: Price[]): Price[] {
        const lowerQuery = query.toLowerCase();
        return prices.filter(
            (price) =>
                price.commodity.toLowerCase().includes(lowerQuery) ||
                price.variety.toLowerCase().includes(lowerQuery),
        );
    }

    let searchQuery = "";
</script>

<div class="min-h-screen backdrop-blur-lg">
    <div class="h-32"></div>
    <div class="text-center text-2xl font-bold my-4">Best Today</div>
    <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 w-fit mx-auto"
    >
        {#each bestToday(data) as price}
            <PriceCard {price} />
        {/each}
    </div>
    <div class="text-center text-2xl font-bold my-4">All Prices</div>
    <div class="flex justify-center mb-4">
        <input
            type="text"
            bind:value={searchQuery}
            placeholder="Search by commodity or variety"
            class="p-2 self-center border border-tertiary-700 rounded-lg w-2xl backdrop-brightness-75"
        />
    </div>
    <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 w-fit mx-auto"
    >
        {#each fuzzySearch(searchQuery, data) as price}
            <PriceCard {price} />
        {/each}
    </div>
</div>
