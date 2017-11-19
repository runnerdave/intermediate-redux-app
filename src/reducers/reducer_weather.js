import {FETCH_WEATHER} from "../actions/index";

export default function (state = [], action) {
    if (!action.error) {
        switch (action.type) {
            case FETCH_WEATHER:
                //return state.concat([action.payload.data]);
                return [ action.payload.data, ...state ];//using ES6 syntax
        }
    } else {
        console.error("City not found, please check the COUNTRY property at actions/index.js ")
    }
    return state;
};