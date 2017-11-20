import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import CountriesReducer from './reducer_countries';

const rootReducer = combineReducers({
    weather: WeatherReducer,
    countries: CountriesReducer
});

export default rootReducer;
