import React, { Component } from 'react';
import axios from 'axios'
import "./Break.css";
class Break extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            firstname: "",
            lastname: "",
            onbreak: ""
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.getUser = this.getUser.bind(this)
        this.startBreak = this.startBreak.bind(this)
        this.endBreak = this.endBreak.bind(this)
        this.updateBreak = this.updateBreak.bind(this)
    }

    componentDidMount() {
        this.getUser()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.onbreak !== prevState.onbreak) {
            this.updateBreak()
        }
    }

    getUser() {
        axios.get('/id/').then(response => {
            if (response.data) {
                console.log('Get User: There is a user saved in the server session: ')

                this.setState({
                    username: response.data.username,
                    firstname: response.data.firstname,
                    lastname: response.data.lastname,
                    onbreak: response.data.onbreak
                })

            } else {
                null
            }
        })
    }

    updateBreak() {
        console.log("update called!")
        axios.post("/update", {
            username: this.state.username,
            onbreak: this.state.onbreak
        }).then(response => {

        })

    }

    startBreak() {
        var takingBreak = this.state.onbreak

        if (takingBreak === false) {
            this.setState({
                onbreak: true
            })


            alert("Break started")
        }
        else {
            alert("You are already on break!")
        }


    }

    endBreak() {
        const endingBreak = this.state.onbreak
        if (endingBreak === true) {
            this.setState({
                onbreak: false
            })
            alert("Break ended")
        }
        else {
            alert("You aren't on break")
        }

    }

    render() {

        return (
            <div className="container" id="break-page">
                <div className="row" id='hr-page'>
                    <div>
                        <h1>RESTROOM BREAK</h1>
                    </div>
                    <div className="col-md-12" id="row3">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Name: {this.props.name}</label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Department</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="i.e. Coffee, Grainger, Body, Trays"></input>
                            </div>
                            <div className="form-group">
                                <div>
                                    <button type="button" className="btn" onClick={this.startBreak}>Initiate Restroom Break</button>
                                    <button type="button" className="btn btn-secondary btn-lg" onClick={this.endBreak}>Return From Restroom</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Break;