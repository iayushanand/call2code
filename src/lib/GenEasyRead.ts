export type Segment = {
    text: string;
    isData?: boolean;
    isWarning?: boolean;
    isDanger?: boolean;
    isGood?: boolean;
};

export type WeatherInput = {
    location: string;
    temperature: number;
    feelsLike: number;
    humidity: number;
    windSpeed: number;
    windDirection: string;
    rainChance: number;
    rainAmount: number;
    uvIndex: number;
    soilMoisture: number;
    soilTemp: number;
    gdd: number;
    day1Forecast: string;
    day2Forecast: string;
    day3Forecast: string;
};
export function generateEasyReadable(data: WeatherInput): Segment[] {
    const {
        location,
        temperature,
        feelsLike,
        humidity,
        windSpeed,
        windDirection,
        rainChance,
        rainAmount,
        uvIndex,
        soilMoisture,
        soilTemp,
        gdd,
        day1Forecast,
        day2Forecast,
        day3Forecast
    } = data;

    const uvRisk =
        uvIndex >= 8 ? 'very high' :
            uvIndex >= 6 ? 'high' :
                uvIndex >= 3 ? 'moderate' : 'low';

    const rainAdvice =
        rainChance > 60 || rainAmount > 5
            ? 'irrigation might not be needed'
            : 'light irrigation may still be helpful';

    const soilTip =
        soilTemp < 10
            ? 'too cold for planting'
            : soilTemp < 18
                ? 'okay for some crops'
                : soilTemp <= 30
                    ? 'good for crop growth'
                    : 'getting too warm for some crops';

    return [
        { text: "It’s " },
        {
            text: `${temperature}°C`,
            isData: true,
            isGood: temperature >= 20 && temperature <= 30,
            isWarning: temperature >= 35,
            isDanger: temperature >= 40 || temperature <= 0
        },
        { text: " in " },
        { text: location, isData: true },
        { text: " right now, but it feels like " },
        {
            text: `${feelsLike}°C`,
            isData: true,
            isGood: feelsLike >= 20 && feelsLike <= 30,
            isWarning: feelsLike >= 37,
            isDanger: feelsLike >= 42
        },
        { text: ". The air is " },
        {
            text: `${humidity}%`,
            isData: true,
            isGood: humidity >= 40 && humidity <= 70,
            isWarning: humidity < 30,
            isDanger: humidity < 15
        },
        { text: " humid, and there’s a light wind from the " },
        { text: windDirection, isData: true },
        { text: " at " },
        {
            text: `${windSpeed} m/s`,
            isData: true,
            isGood: windSpeed <= 5,
            isWarning: windSpeed > 10,
            isDanger: windSpeed >= 15
        },
        { text: ". There’s a " },
        {
            text: `${rainChance}%`,
            isData: true,
            isGood: rainChance >= 30 && rainChance <= 50,
            isWarning: rainChance >= 60,
            isDanger: rainChance >= 90
        },
        { text: " chance of rain today, with about " },
        {
            text: `${rainAmount} mm`,
            isData: true,
            isGood: rainAmount >= 3 && rainAmount <= 6,
            isWarning: rainAmount > 10,
            isDanger: rainAmount >= 50
        },
        { text: " expected, so " },
        { text: rainAdvice, isData: true },
        { text: ". The sun is strong, with a UV index of " },
        {
            text: `${uvIndex}`,
            isData: true,
            isGood: uvIndex < 3,
            isWarning: uvIndex >= 6,
            isDanger: uvIndex >= 8
        },
        { text: " — that’s " },
        { text: uvRisk, isData: true },
        { text: ". Soil moisture is at " },
        {
            text: `${soilMoisture}%`,
            isData: true,
            isGood: soilMoisture >= 30 && soilMoisture <= 60,
            isWarning: soilMoisture < 20,
            isDanger: soilMoisture < 10 || soilMoisture > 90
        },
        { text: ", and the temperature in the soil is around " },
        {
            text: `${soilTemp}°C`,
            isData: true,
            isGood: soilTemp >= 18 && soilTemp <= 28,
            isWarning: soilTemp < 10 || soilTemp > 32,
            isDanger: soilTemp < 5 || soilTemp > 35
        },
        { text: " — " },
        { text: soilTip, isData: true },
        { text: ". Today’s growing degree days: " },
        {
            text: `${gdd}`,
            isData: true,
            isGood: gdd > 10
        },
        { text: ". Coming up: " },
        { text: day1Forecast, isData: true, isGood: true },
        { text: ", then " },
        { text: day2Forecast, isData: true, isGood: true },
        { text: ", and " },
        { text: day3Forecast, isData: true, isGood: true },
        { text: " after that." }
    ];
}

export function generateShortEasyRead(data: WeatherInput): Segment[] {
    const {
        temperature,
        rainChance,
        rainAmount,
        soilMoisture,
        soilTemp,
        day1Forecast
    } = data;

    const rainAdvice =
        rainChance > 60 || rainAmount > 5
            ? 'no irrigation needed'
            : 'light irrigation may help';

    const soilTip =
        soilTemp < 10
            ? 'soil is too cold'
            : soilTemp < 18
                ? 'okay for some crops'
                : soilTemp <= 30
                    ? 'good for crops'
                    : 'soil is getting too warm';

    return [
        { text: "Temp: " },
        {
            text: `${temperature}°C`,
            isData: true,
            isGood: temperature >= 20 && temperature <= 30,
            isWarning: temperature >= 35,
            isDanger: temperature >= 40 || temperature <= 0
        },
        { text: ", Rain: " },
        {
            text: `${rainChance}%`,
            isData: true,
            isGood: rainChance >= 30 && rainChance <= 50,
            isWarning: rainChance >= 60,
            isDanger: rainChance >= 90
        },
        { text: " (" },
        {
            text: `${rainAmount} mm`,
            isData: true,
            isGood: rainAmount >= 3 && rainAmount <= 6,
            isWarning: rainAmount > 10,
            isDanger: rainAmount >= 50
        },
        { text: "), so " },
        { text: rainAdvice, isData: true },
        { text: ". Soil: " },
        {
            text: `${soilMoisture}%`,
            isData: true,
            isGood: soilMoisture >= 30 && soilMoisture <= 60,
            isWarning: soilMoisture < 20,
            isDanger: soilMoisture < 10 || soilMoisture > 90
        },
        { text: ", " },
        {
            text: `${soilTemp}°C`,
            isData: true,
            isGood: soilTemp >= 18 && soilTemp <= 28,
            isWarning: soilTemp < 10 || soilTemp > 32,
            isDanger: soilTemp < 5 || soilTemp > 35
        },
        { text: " — " },
        { text: soilTip, isData: true },
        { text: ". Forecast: " },
        { text: day1Forecast, isData: true, isGood: true },
        { text: "." }
    ];
}