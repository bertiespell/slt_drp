import * as types from '../types/types';

const initialState = {
    events: [],
    error: null,
    fetching: false
};

function eventsReducer (prevState = initialState, action) {
    switch (action.type) {
        case types.FETCH_EVENTS_REQUEST: {
            const newState = Object.assign({}, prevState, {
                fetching: true
            });
            return newState;
        }
        case types.FETCH_EVENTS_SUCCESS: {
            const newState = Object.assign({}, prevState, {
                fetching: false,
                events: action.payload
            });
            return newState;
        }
        case types.FETCH_EVENTS_ERROR: {
            const newState = Object.assign({}, prevState, {
                fetching: false,
                error: action.payload
            });
            return newState;
        }
        default: {
            return prevState;
        }
    }
}

export function getEventData (state) {
    return state.events;
}

export default eventsReducer;