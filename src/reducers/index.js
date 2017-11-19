import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import CountryReducer from './reducer_countries';

const rootReducer = combineReducers({
    weather: WeatherReducer,
    country: CountryReducer
});

export default rootReducer;
