import React from 'react'
import{connect} from 'react-redux';

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
        return (
            <tr>
                <td>{cityData.city.name}</td>
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