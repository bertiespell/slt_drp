import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../actions/index';
import { getEventData } from '../reducers/events.reducer';


class Events extends Component {
    
    componentDidMount () {
        this.props.getEvents();
    }

    render() {
        console.log('STATE TO MAP OVER ----> ', this.props.events)
        return (
            <div>
                    <h1>Events</h1>
            </div>
        )
    }
}


function mapDispatchToProps (dispatch) {
    return {
        getEvents: () => {
            dispatch(getEvents());
        }
    };
}

function mapStateToProps (state) {
    return {
        events: getEventData(state)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);
