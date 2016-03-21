import React from 'react';
import SearchBar from '../containers/search-bar.jsx';
import WeatherList from '../containers/weather-list.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Weather forecast 5 days</h1>
                <SearchBar />
                <WeatherList />
            </div>
        );
    }
}
