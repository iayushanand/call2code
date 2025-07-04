<script lang="ts">
    import {
        generateEasyReadable,
        generateShortEasyRead,
        type WeatherInput,
    } from "./GenEasyRead";

    // export type WeatherInput = {
    //     location: string;
    //     temperature: number;
    //     feelsLike: number;
    //     humidity: number;
    //     windSpeed: number;
    //     windDirection: string;
    //     rainChance: number;
    //     rainAmount: number;
    //     uvIndex: number;
    //     soilMoisture: number;
    //     soilTemp: number;
    //     gdd: number;
    //     day1Forecast: string;
    //     day2Forecast: string;
    //     day3Forecast: string;
    // };

    let weatherData: WeatherInput = {
        location: "Bengaluru",
        temperature: 29, // Current air temperature (°C)
        feelsLike: 32, // Feels like
        humidity: 72, // High humidity
        windSpeed: 4.5, // Moderate breeze
        windDirection: "west", // Wind direction
        rainChance: 80, // High chance of rain
        rainAmount: 12, // Significant rainfall expected
        uvIndex: 9, // Very high UV index
        soilMoisture: 47, // Healthy soil moisture
        soilTemp: 26, // Ideal for crop growth
        gdd: 20, // Growing Degree Days
        day1Forecast: "heavy rain tomorrow",
        day2Forecast: "cloudy skies on Saturday",
        day3Forecast: "sunny and dry on Sunday",
    };

    function styleSegment(segment: {
        text: string;
        isData?: boolean;
        isDanger?: boolean;
        isWarning?: boolean;
        isGood?: boolean;
    }) {
        if (segment.isData) {
            if (segment.isDanger) return "font-bold text-primary-100";
            if (segment.isWarning) return "font-bold text-warning-100";
            if (segment.isGood) return "font-bold text-success-100";
            return "font-bold text-secondary-100";
        }
        return "opacity-75";
    }
</script>

<div class="max-w-3xl text-3xl text-tertiary-100">
    {#each generateShortEasyRead(weatherData) as segment}
        <span class={segment.isData ? styleSegment(segment) : "opacity-100"}
            >{segment.text}</span
        >
    {/each}
</div>
