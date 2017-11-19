import { FETCH_COUNTRIES } from "../actions/index";

export default function (state = [], action) {
    // console.log('action payload', action.payload);
    switch (action.type) {
        case FETCH_COUNTRIES:
            return [ action.payload, ...state ];
    }
    return state;
}