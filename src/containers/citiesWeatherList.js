import React, { Component } from "react";
import { connect } from "react-redux";
import WeatherChart from '../components/weatherChart';
import GoogleMap from '../components/googleMap';

class CitiesWeatherList extends Component {
    renderWeatherRow(cityData) {
        const temperatureList = cityData.list.map(weather => weather.main.temp);
        const pressureList = cityData.list.map(weather => weather.main.pressure);
        const humidityList = cityData.list.map(weather => weather.main.humidity);

        const {lon, lat } = cityData.city.coord; //ES6 syntax
//        const lon = cityData.city.coord.lon;
//        const lat = cityData.city.coord.lat;


        return(
            <tr key={cityData.city.name}>
                <td> <GoogleMap lon={lon} lat={lat} /> </td>
                <td> <WeatherChart data={temperatureList} color="orange" units="K"/> </td>
                <td> <WeatherChart data={pressureList} color="yellow" units="hpa"/> </td>
                <td> <WeatherChart data={humidityList} color="gray" units="%"/> </td>
            </tr>
        );
    }

    render() {
        return(
            <table className = "table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hpa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.weather.map(this.renderWeatherRow)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
  return { weather };
}

export default connect(mapStateToProps)(CitiesWeatherList);
