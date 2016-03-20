import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        // bind this to local function onInputChange,
        // and use it as a class method onSearchTermChange
        this.onSearchTermChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    render() {
        return (
            <form className="input-group">
                <input
                    placeholder="search your city"
                    value={this.state.term}
                    onChange={this.onSearchTermChange}/>
                <span>
                    <button
                        type="submit"
                        className="btn btn-danger"
                        onClick={this.onFormSubmit}>Submit
                    </button>
                </span>
            </form>
        )
    }

    onInputChange(e) {
        this.setState({term: e.target.value});
    }

    onFormSubmit(e) {
        e.preventDefault();

        this.props.fetchWeather(this.state.term);

        // reset the search term
        this.setState({term: ''});
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);