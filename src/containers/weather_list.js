import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.temp.day);
        const tempsCelsius = _.map(temps, (temp) => temp - 273);
        const pressures = cityData.list.map(weather => weather.pressure);
        const humidities = cityData.list.map(weather => weather.humidity);
        const {lon, lat} = cityData.city.coord;

        console.log(temps);

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={tempsCelsius} color={"orange"} unit="&deg; C"/></td>
                <td><Chart data={pressures} color={"red"} unit={"hPa"}/></td>
                <td><Chart data={humidities} color={"blue"} unit={"%"}/></td>
            </tr>
        );
    };

    render() {
        return (
            <table className={"table table-hover"}>
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (Celcius)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather}; // {weather} === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);