import axios from 'axios';

const API_KEY = '4575fd2ae9b95f8f1bebed4a5b4eeb09';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city){
    const url = `${ROOT_URL}&q=${city},us`;

    const request = axios.get(url);

    console.log('request: ', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}