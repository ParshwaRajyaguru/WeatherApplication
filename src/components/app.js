import React, { Component } from 'react';
import SearchBar from '../containers/searchbar';
import CitiesWeatherList from '../containers/citiesWeatherList';

export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <CitiesWeatherList />
            </div>
        );
    }
}
