import React from 'react'
import{connect} from 'react-redux';
import Chart from '../components/chart.jsx';
import GoogleMap from '../components/google-maps.jsx';

class WeatherList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        )
    }

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        // ES6 destructuring
        //const lon = cityData.city.coord.lon;
        //const lat = cityData.city.coord.lat;
        const {lon, lat} = cityData.city.coord;

        return (
            <tr key={name}>
                <td>{name}</td>

                <td><Chart data={temps} color="red" units="K"/></td>
                <td><Chart data={pressures} color="blue" units="hPa"/></td>
                <td><Chart data={humidities} color="green" units="%"/></td>
            </tr>
        )
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather
    };
}

export default connect(mapStateToProps)(WeatherList);