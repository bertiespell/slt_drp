import {createClient} from 'contentful'
import * as types from '../types/types';

const client = createClient({
  space: 'nsgr9fdi99xl',
  accessToken: 'ce25aff15092c0d8f1800074216a452d1a4d372bc08998ad94472c52848e4001'
});

export function getEvents () {
    return function (dispatch) {
        dispatch(fetchEventsRequest());
        client.getEntries()
        .then((response) => {
            dispatch(fetchEventsSuccess(response.items))
        })
        .catch(err => {
                dispatch(fetchEventsError(err));
            });
    }
}

export function fetchEventsRequest () {
    return {
        type: types.FETCH_EVENTS_REQUEST
    };
}

export function fetchEventsSuccess (events) {
    return {
        type: types.FETCH_EVENTS_SUCCESS,
        payload: events
    };
}

export function fetchEventsError (error) {
    return {
        type: types.FETCH_EVENTS_ERROR,
        payload: error
    };
}