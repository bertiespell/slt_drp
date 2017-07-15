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
            <div className="events">
                {this.props.events.events.map((event, i) => {
                  let mediaLeft = i % 2 === 0
                  ? <Media.Left align="">
                      <img width={200} height={200} src={event.fields.eventImage.fields.file.url} alt="Image"/>
                  </Media.Left>
                  : null
                  let mediaRight = i % 2 !== 0
                  ? <Media.Right align="">
                      <img width={200} height={200} src={event.fields.eventImage.fields.file.url} alt="Image"/>
                  </Media.Right>
                  : null
                    return (
                        <Media className="Media">
                            {mediaLeft}
                            <Media.Body>
                                <Media.Heading>{event.fields.eventTitle}</Media.Heading>
                                <p>{event.fields.eventVenue}</p>
                                <p>{event.fields.eventPrice}</p>
                            </Media.Body>
                            {mediaRight}
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
