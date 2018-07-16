import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeatherData } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { searchCity : ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e) {
        this.setState({ searchCity: e.target.value });
    }

    onFormSubmit(e) {
        e.preventDefault();

        this.props.fetchWeatherData(this.state.searchCity);
        this.setState({ searchCity: '' });
    }

    render() {
        return (
            <form className = "input-group" onSubmit = {this.onFormSubmit}>
                <input
                    placeholder = "Enter City Name to get next 5 days weather forecast"
                    className = "form-control"
                    value = {this.state.searchCity}
                    onChange = {this.onInputChange}
                />

                <span className = "input-group-btn">
                    <button type = "submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeatherData }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);