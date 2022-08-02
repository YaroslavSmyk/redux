import { fetchWeatherData } from './weather.gateway'

const WEATHER_DATA = 'WEATHER_DATA';

export const weatherDataReceived = (weatherData) => {
  return {
    type: WEATHER_DATA,
    payload: { weatherData },
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    fetchWeatherData().then((weatherData) => {
      dispatch(weatherDataReceived(weatherData));
    });
  };
};
