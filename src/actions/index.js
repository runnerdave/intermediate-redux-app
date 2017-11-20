import axios from 'axios';
import resources from '../resources';

const API_KEY = '6f6a9295d082f940d5090e4d8564d156';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';

export function fetchWeather(city, country) {
    const url = `${ROOT_URL}&q=${city},${country}`;
    const request = axios.get(url);

    // console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

export function fetchCountries() {
    const payload = resources.countries;

    return {
        type: FETCH_COUNTRIES,
        payload: payload
    }
}