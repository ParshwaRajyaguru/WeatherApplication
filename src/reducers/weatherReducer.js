import { FETCH_WEATHER_DATA } from '../actions/index';

export default function(state = [], action) {
//    console.log("action: ", action);
    switch(action.type) {
        case FETCH_WEATHER_DATA:
            return state.concat([action.payload.data]);
            //return [action.payload.data, ...state];
    }

    return state;
}