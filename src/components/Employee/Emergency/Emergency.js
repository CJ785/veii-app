import React from 'react';
import "./Emergency.css";
import Select from 'react-select'
import axios from 'axios';

export default class Emergency extends React.PureComponent {

    handleClick(e) {
        // e.preventDefault();
        console.log('front end text log');
        alert("Emergency Message Sent!")
        axios.post('/emergency', {

        });
    }

    render() {
        return (
            <div onClick={() => this.handleClick()}><p className="gotti row emerg">Emergency</p></div>
        )
    }
}

