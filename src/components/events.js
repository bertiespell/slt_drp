import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../actions/index';
import { getEventData } from '../reducers/events.reducer';
import Media from 'react-bootstrap/lib/Media';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import EventDescription from './eventModal';

class Events extends Component {

    componentWillMount() {
        this.setState({ lgShow: false });
    }

    componentDidMount () {
        this.props.getEvents();
        this.props.events.events.map((event) => {
            this.setState({ [event.sys.id]: false })
        })
    }

    render() {
        let lgClose = (key) => this.setState({ [key]: false });
        return (
            <div>
                {this.props.events.events.map((event, i) => {
                    let key = event.sys.id;
                    return (
                        <div>
                            <Media>
                                <Media.Left align="top">
                                    <img width={200} height={200} src={event.fields.eventImage.fields.file.url} alt="Image"/>
                                </Media.Left>
                                <Media.Body>
                                    <Media.Heading>{event.fields.eventTitle}</Media.Heading>
                                    <p>{event.fields.eventVenue}</p>
                                    <p>{event.fields.eventPrice}</p>

                                <ButtonToolbar>
                                    <Button bsStyle="primary" onClick={()=>this.setState({ [key]: true })}>
                                    More Details
                                    </Button>

                                    <EventDescription show={this.state[key]} onHide={lgClose.bind(this, key)} description={event.fields.eventDescription} title={event.fields.eventTitle}/>
                                    </ButtonToolbar>
                                </Media.Body>
                            </Media>
                        </div>
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
