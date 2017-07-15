import React, { Component } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

class EventDescription extends Component {
    render() {
        return (
        <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg" >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body bsClass>
            <h4>{this.props.title}</h4>
            <p>{this.formatText(this.props.description)}</p>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
        );
    }
    formatText(node) {
        return node.split('\n').map(text => <p>{text}</p>);
    }
}



export default EventDescription;