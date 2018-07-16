import axios from 'axios';

const API_KEY = "6a78596d062df78380eff5944c4e5567";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER_DATA = 'FETCH_WEATHER_DATA';

export function fetchWeatherData(city) {
    const resultUrl = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(resultUrl);

//    console.log("request: ", request);

    return {
        type: FETCH_WEATHER_DATA,
        payload: request
    };
}