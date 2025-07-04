<script lang="ts">
    import { generateEasyReadable, type Segment } from "./GenEasyRead";

    const cropAdviceSegments: Segment[] = [
        { text: "This weather is ideal for planting " },
        { text: "maize", isData: true },
        { text: ", " },
        { text: "green gram", isData: true },
        { text: ", and " },
        { text: "okra", isData: true },
        { text: "." },

        { text: " Avoid planting " },
        { text: "potato", isData: true, isDanger: true },
        { text: " right now — the market price is low at " },
        { text: "₹18/kg", isData: true, isGood: true },
        { text: "." },

        { text: " Good market choices today are " },
        { text: "baby corn", isData: true, isGood: true },
        { text: " and " },
        { text: "cucumber", isData: true, isGood: true },
        { text: "." },
    ];

    export function styleSegment(segment: Segment): string {
        if (segment.isData) {
            if (segment.isDanger)
                return "font-bold bg-gradient-to-l from-primary-200 to-primary-50 p-1 rounded bg-clip-text text-transparent ";
            if (segment.isWarning)
                return "font-bold bg-gradient-to-l from-primary-200 to-primary-50 p-1 rounded bg-clip-text text-transparent";
            if (segment.isGood)
                return "font-bold bg-gradient-to-l from-success-200 to-success-50 p-1 rounded bg-clip-text text-transparent";
            return "font-bold text-white";
        }
        return "opacity-75";
    }
</script>

<div class="max-w-3xl text-3xl text-tertiary-100">
    {#each cropAdviceSegments as segment}
        <span class={segment.isData ? styleSegment(segment) : "opacity-100"}>
            {segment.text}
        </span>
    {/each}
</div>
