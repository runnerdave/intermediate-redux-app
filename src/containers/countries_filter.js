import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountries } from "../actions/index";
import { bindActionCreators } from "redux";

class CountriesFilter extends Component {
    componentDidMount(){
        this.props.fetchCountries();
    }

    renderCountries() {
        console.info('Countries props:', this.props.countries);
        return this.props.countries.map((country) => (
                <span key={country.code}> {country.name} </span>
            )
        );
        // return `hola: ${this.props.countries[0]}`;
    }

    render() {
        return (
            <div className="CountriesFilter">
                {this.renderCountries()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        countries: state.countries
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchCountries}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesFilter);