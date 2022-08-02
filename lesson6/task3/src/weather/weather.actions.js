import { fetchWeatherData } from './weather.gateway';

export const ADD_WEATHER_DATA = 'WEATHER_DATA';

export const weatherDataReceived = (weatherData) => {
  return {
    type: ADD_WEATHER_DATA,
    payload: { 
      weatherData 
    },
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    fetchWeatherData().then((weatherData) => {
      dispatch(weatherDataReceived(weatherData));
    });
  };
};
