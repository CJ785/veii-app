import React from 'react';
import "./Emergency.css";
import Select from 'react-select'
import axios from 'axios';

export default class Emergency extends React.PureComponent {

    handleClick(e) {
        // e.preventDefault();
        console.log('front end text log');

        axios.post('/emergency', {

        });
    }

    render() {
        return (
            <div onClick={() => this.handleClick()}><p className="gotti">Emergency</p></div>
        )
    }
}

