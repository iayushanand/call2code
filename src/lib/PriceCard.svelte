<script lang="ts">
    import type { Price } from "./prices";

    export let price: Price;

    // interface Price {
    //     commodity: string;
    //     variety: string;
    //     maxPrice: number;
    //     minPrice: number;
    //     date: string;
    // }
</script>

<div
    class="flex flex-col justify-between items-center text-center
	h-40 w-40 p-4 rounded-lg shadow-lg backdrop-brightness-90
	text-tertiary-100 space-y-1"
>
    <div class="text-base font-semibold leading-tight text-success-100">
        {price.commodity}
        <span class="block text-xs font-normal opacity-70">{price.variety}</span
        >
    </div>

    <div class="text-sm">
        <p><span class="opacity-70">Max:</span> ₹{price.maxPrice}</p>
        <p><span class="opacity-70">Min:</span> ₹{price.minPrice}</p>
    </div>

    <div class="text-xs opacity-60 mt-2">
        {price.date}
    </div>
</div>
