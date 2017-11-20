import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountries } from "../actions/index";
import { bindActionCreators } from "redux";

class CountriesFilter extends Component {
    componentDidMount() {
        this.props.fetchCountries();
    }

    renderCountries() {
        return this.props.countries.map((country, i) => (
                <span>
                    {!!i && " | "}
                    <span key={country.code}
                      className={country.code === this.props.countryCode ? 'important' : 'not-so-important'}> {country.name}
                    </span>
                </span>
            )
        );
    }

    render() {
        return (
            <div>
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