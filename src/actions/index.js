import axios from 'axios';

const API_KEY = 'a7bbfa2c26cfc09fae4131cc8d0e7a49';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},uk`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}