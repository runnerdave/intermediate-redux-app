import { FETCH_COUNTRIES } from "../actions/index";

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_COUNTRIES:
            return action.payload;
    }
    return state;
}