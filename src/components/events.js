import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../actions/index';
import { getEventData } from '../reducers/events.reducer';
import Media from 'react-bootstrap/lib/Media';

class Events extends Component {
    
    componentDidMount () {
        this.props.getEvents();
    }

    render() {
        return (
            <div>
                {this.props.events.events.map((event, i) => {
                    return (
                        <Media>
                            <Media.Left align="top">
                                <img width={200} height={200} src={event.fields.eventImage.fields.file.url} alt="Image"/>
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading>{event.fields.eventTitle}</Media.Heading>
                                <p>{event.fields.eventVenue}</p>
                                <p>{event.fields.eventPrice}</p>
                            </Media.Body>
                        </Media>
                    )                        
                })}
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
