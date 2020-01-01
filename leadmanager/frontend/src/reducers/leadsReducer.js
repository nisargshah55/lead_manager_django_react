import { GET_LEADS } from '../actions/actionTypes.js';

const initState = {
    leadsState: []
}
export default function (state = initState, action) {
    switch (action.type) {
        case GET_LEADS:
            return {
                ...state,
                leadsState: action.payload
            }
        default:
            return state;
    }
}