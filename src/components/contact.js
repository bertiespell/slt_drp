import React, { Component } from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = { value: ''}
        this.handleChange = this.handleChange.bind(this);
    }
    
    getInitialState() {
        return {
            value: ''
        };
    }

    getValidationState() {
        const email = this.state.value;
        if (this.checkEmail(email)) {
            return 'success'
        }
        if (!email.length) {
            return null;
        }
        else return 'error';

    }

    checkEmail(email) {
        const atIndex = email.indexOf('@');
        const dotIndex = email.lastIndexOf('.');
        const length = email.length;
        const lastLetters = email.substr(dotIndex);
        
        if (atIndex === -1 || dotIndex === -1) {
            return false;
        }

        if (atIndex > dotIndex) {
            return false;
        }

        if (length <= dotIndex +2) {
            return false;
        }

        if (atIndex <= 3) {
            return false;
        }

        if (dotIndex <= atIndex + 2) {
            return false;
        }

        if (/[0-9]/g.test(lastLetters)) {
            return false;
        }

        if (!(/\w/g.test(lastLetters))) {
            return false;
        }

        return true;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div className="form-container">
                <h1 className="contact-us">Contact Us &hearts;</h1>
                <div className="contact-info-left">
                <h2>Address</h2>
                <p>St Michaels House</p>
                <p>275 Meanwood Rd</p>
                <p>Leeds LS6 2TE</p>
                <h2>Phone</h2>
                <p>+447763227615</p>
                </div>
                <div className="contact-info-right">
                    <form>
                        <FormGroup
                        controlId="formBasicText"
                        validationState={this.getValidationState()}
                        >
                        <ControlLabel>Sign up to our mailing list!</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="Enter text"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                        <HelpBlock>Make sure to enter a valid email address</HelpBlock>
                        </FormGroup>
                    </form>
                </div>
        </div>
        );
    }
}

export default Contact;

