import {combineReducers} from 'redux';
import {FETCH_WEATHER} from '../actions/index';

export default function (state = [], action) {
    console.log('Action received', action);

    switch (action.type) {
        case FETCH_WEATHER:
            // create a new array with old state data, plus the new one
            return [action.payload.data, ...state];
            //return state.concat([action.payload.data]);
        default:
            return state
    }
}