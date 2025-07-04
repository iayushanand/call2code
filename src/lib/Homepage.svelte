<script>
    const imgSrc =
        "https://images.unsplash.com/photo-1463171515643-952cee54d42a?q=80&w=450&h=190&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
</script>

<div class="relative z-10 pt-20 px-4 w-full text-center">
    <div class="max-w-7xl mx-auto rounded-2xl p-6 sm:p-10 space-y-10">
        <h1 class="text-3xl sm:text-4xl font-bold text-tertiary-100">
            Agri Assist
        </h1>
        <h2 class="text-lg sm:text-xl font-semibold text-tertiary-200">
            Smarter Farming, Powered by AI
        </h2>

        <p class="text-tertiary-100 max-w-2xl mx-auto text-sm sm:text-base">
            🔍 Real-Time Farming Insights for Your Location<br />
            Know what to plant, when to plant, and how to maximize your yield — all
            with the power of AI. AgriGenius gives you instant recommendations based
            on your farm's location, current weather conditions, and market prices.
        </p>

        <hr class="border-dashed border-tertiary-700/40" />

        <div class="space-y-6">
            <h3 class="text-xl sm:text-2xl font-semibold text-tertiary-100">
                ✅ What You Can Do with AgriGenius
            </h3>

            <!-- Cards Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each [1, 2, 3] as i}
                    <div
                        class="border-2 border-tertiary-700/40 rounded-2xl bg-[rgba(0,0,0,0.5)] overflow-hidden"
                    >
                        <header>
                            <img
                                src={imgSrc}
                                class="aspect-[21/9] w-full object-cover grayscale hue-rotate-90"
                                alt="banner"
                            />
                        </header>
                        <article
                            class="space-y-4 p-4 text-left text-sm sm:text-base"
                        >
                            <div>
                                <h4
                                    class="text-tertiary-100 font-semibold text-lg"
                                >
                                    🌦️ AI-Powered Farming Review
                                </h4>
                                <p class="text-tertiary-200">
                                    Get intelligent recommendations tailored to
                                    your land and weather.
                                </p>
                            </div>
                            <ul class="list-disc list-inside text-tertiary-100">
                                <li>Choose the best crops for the season</li>
                                <li>Optimize planting and harvesting time</li>
                                <li>Protect your yield from weather risks</li>
                            </ul>
                        </article>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>
