import { FETCH_DATA, NEW_DATA } from '../actions/types';

const initialState = {
    smurfs: [],
    smurf: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                smurfs: action.payload
            };
        case NEW_DATA: 
            return {
                ...state,
                smurf: action.payload
            };
        default:
            return state;
    }
}