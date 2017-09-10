import axios from 'axios';

const API_KEY = '6f6a9295d082f940d5090e4d8564d156';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},au`;
    const request = axios.get(url);

    console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}