import React, { Component } from 'react';
import _ from 'lodash';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

import resources from '../resources';

const COUNTRY = 've';
const LANGUAGE = 'es';

export default class App extends Component {
    constructor(props) {
        super(props);
        const country = _.find(resources.countries, country => country.code === COUNTRY);
        const area = _.get(country, 'area');
        const text = _.find(resources.app_text, headers => headers.language === LANGUAGE);
        this.header = _.get(text, 'table_headers');
        this.placeholder = _.get(text, 'search-placeholder').replace('AREA', area);
    }

    render() {

        return (
            <div>
                <SearchBar placeholder={this.placeholder} country={COUNTRY}/>
                <WeatherList headers={this.header}/>
            </div>
        );
    }
}
