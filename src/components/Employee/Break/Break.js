import React, { Component } from 'react';
import axios from 'axios'
import "./Break.css";
import Clock from './Clock'

class Break extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            firstname: "",
            lastname: "",
            onbreak: "",
            startbreak: new Date().toLocaleString(),
            endbreak: new Date().toLocaleString()
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

                this.setState({
                    username: response.data.username,
                    firstname: response.data.firstname,
                    lastname: response.data.lastname,
                    onbreak: response.data.onbreak,

                })
            }
        })
    }

    updateBreak() {
        axios.post("/update", {
            username: this.state.username,
            onbreak: this.state.onbreak
        }).then(response => {

        })

    }



    startBreak(event, startbreak) {
        if (this.state.onbreak === false) {
            axios.post("startbreak", {
                username: this.state.username,
                startbreak: this.state.startbreak
            }).then(response => {

            })
        }
        const startTime = new Date().toLocaleString()
        var takingBreak = this.state.onbreak

        if (takingBreak === false) {
            this.setState({
                onbreak: true,
                startbreak: new Date().toLocaleString()
            })


            alert(`Break started at ${startTime}`)
        }
        else {
            alert("You are already on break!")
        }


    }

    endBreak(event, endbreak) {
        if (this.state.onbreak === true) {
            axios.post("endbreak", {
                username: this.state.username,
                endbreak: this.state.endbreak
            }).then(response => {

            })
        }
        const endTime = new Date().toLocaleString();
        const endingBreak = this.state.onbreak
        if (endingBreak === true) {
            this.setState({
                onbreak: false,
                endbreak: new Date().toLocaleString()
            })
            alert(`Break ended at ${endTime}`)
        }
        else {
            alert("You aren't on break")
        }

    }

    render() {

        return (
            <div className="break-page">
                <div className="row" id='hr-page'>
                    <div>
                        <h3 className="break-spacer">Break</h3>
                    </div>
                    <div className="col-md-12" id="row3">
                        <form>
                            <div className="form-group">
                            </div>
                            <div>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="i.e. Coffee, Grainger, Body, Trays"></input>
                            </div>
                            <div className="form-group">
                                <div>
                                    <button type="button" className="btn" onClick={this.startBreak}>Initiate Restroom Break</button>
                                    <button type="button" className="btn btn-secondary btn-lg" onClick={this.endBreak}>Return From Restroom</button>
                                    {this.state.onbreak ? (
                                        <button type="button" className="btn btn-secondary btn-lg" onClick={this.endBreak} onChange={this.updateClock}>Return From Break</button>
                                    ) : (
                                            <button type="button" className="btn btn-primary btn-lg"  onClick={this.startBreak} onChange={this.updateClock}>Initiate Break</button>
                                        )}
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
                <Clock />
            </div>
        )
    }
}

export default Break;