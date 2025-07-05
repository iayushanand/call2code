<script>
    const imgSrc1 = "/aifarmer.png";
    const imgSrc2 = "/hoefarmer.png";
    const imgSrc3 = "/sellfarmer.png";
</script>

<div class="relative z-10 pt-20 px-4 w-full text-center">
    <div class="max-w-7xl mx-auto rounded-2xl space-y-10">
        <div class="h-32"></div>
        <p class="text-9xl sm:text-12xl font-bold text-tertiary-100">
            Farm Assist
        </p>
        <h2 class="text-lg sm:text-xl font-semibold text-tertiary-200">
            Smarter Farming, Powered by AI
        </h2>

        <p class="text-tertiary-100 max-w-2xl mx-auto text-sm sm:text-base">
            🔍 Real-Time Farming Insights for Your Location<br />
            Know what to plant, when to plant, and how to maximize your yield — all
            with the power of AI. Farm Assist gives you instant recommendations based
            on your farm's location, current weather conditions, and market prices.
        </p>

        <hr class="border-dashed border-tertiary-700/40" />
        <div class="h-32"></div>
        <div class="space-y-6">
            <h3 class="text-xl sm:text-2xl font-semibold text-tertiary-100">
                ✅ What You Can Do with Farm Assist
            </h3>

            <!-- Cards Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                    class="border-2 border-tertiary-700/40 rounded-2xl bg-[rgba(0,0,0,0.5)] overflow-hidden"
                >
                    <header class="overflow-hidden group">
                        <img
                            src={imgSrc1}
                            class="aspect-[3/2] w-full object-cover hover:grayscale hover:hue-rotate-90 transition-transform duration-500 ease-in-out group-hover:scale-105"
                            alt="banner"
                        />
                    </header>
                    <article
                        class="space-y-4 p-4 text-left text-sm sm:text-base"
                    >
                        <div>
                            <h4 class="text-tertiary-100 font-semibold text-lg">
                                🌦️ AI-Powered Farming Review
                            </h4>
                            <p class="text-tertiary-200">
                                Get intelligent recommendations tailored to your
                                land and weather.
                            </p>
                        </div>
                        <ul class="list-disc list-inside text-tertiary-100">
                            <li>Choose the best crops for the season</li>
                            <li>Optimize planting and harvesting time</li>
                            <li>Protect your yield from weather risks</li>
                        </ul>
                    </article>
                </div>

                <div
                    class="border-2 border-tertiary-700/40 rounded-2xl bg-[rgba(0,0,0,0.5)] overflow-hidden"
                >
                    <header class="overflow-hidden group">
                        <img
                            src={imgSrc2}
                            class="aspect-[3/2] w-full object-cover hover:grayscale hover:hue-rotate-90 transition-transform duration-500 ease-in-out group-hover:scale-105"
                            alt="banner"
                        />
                    </header>
                    <article
                        class="space-y-4 p-4 text-left text-sm sm:text-base"
                    >
                        <div>
                            <h4 class="text-tertiary-100 font-semibold text-lg">
                                📍 Location-Based Guidance
                            </h4>
                            <p class="text-tertiary-200">
                                Farming isn't one-size-fits-all. Enter your
                                location, and we'll provide:
                            </p>
                        </div>
                        <ul class="list-disc list-inside text-tertiary-100">
                            <li>Localized soil and climate insights</li>
                            <li>Weather alerts that matter to your farm</li>
                            <li>
                                Advice based on regional agricultural trends
                            </li>
                        </ul>
                    </article>
                </div>

                <div
                    class="border-2 border-tertiary-700/40 rounded-2xl bg-[rgba(0,0,0,0.5)] overflow-hidden"
                >
                    <header class="overflow-hidden group">
                        <img
                            src={imgSrc3}
                            class="aspect-[3/2] w-full object-cover hover:grayscale hover:hue-rotate-90 transition-transform duration-500 ease-in-out group-hover:scale-105"
                            alt="banner"
                        />
                    </header>
                    <article
                        class="space-y-4 p-4 text-left text-sm sm:text-base"
                    >
                        <div>
                            <h4 class="text-tertiary-100 font-semibold text-lg">
                                🌱 Live Market Price Checker
                            </h4>
                            <p class="text-tertiary-200">
                                Never overpay again. With our seed price
                                tracker, you can:
                            </p>
                        </div>
                        <ul class="list-disc list-inside text-tertiary-100">
                            <li>
                                Compare real-time seed prices from government
                                chart
                            </li>
                            <li>Discover affordable alternatives</li>
                            <li>Track price trends to buy at the right time</li>
                        </ul>
                    </article>
                </div>
            </div>
        </div>
    </div>
</div>
