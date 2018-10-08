import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            loginError: "",
            password: 'password',
            rolename: "",
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.notFound = this.notFound.bind(this)
        this.validate = this.validate.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    validate = () => {
        let isError = false;
        const errors = {}
        if (this.state.username.length != 4) {
            isError = true;
            errors.loginError = "Employee ID must be 4 digits in length"
        }
        else if (isNaN(this.state.username)) {
            isError = true;
            errors.loginError = "You must enter numbers only"
        }
        if (isError) {
            this.setState({
                ...this.state,
                ...errors
            })
        }
        return isError
    }
    notFound = () => {
        const loginerror = "User not found, please try again";
        this.setState({
            loginError: loginerror
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const err = this.validate();
        if (!err) {
            axios
                .post('/user/login', {
                    username: this.state.username,
                    password: this.state.password
                })
                .then(response => {
                    console.log('login response: ')
                    console.log(response)
                    if (response.status === 200) {
                        // update App.js state
                        this.props.updateUser({
                            loggedIn: true,
                            username: response.data.username,
                            rolename: response.data.rolename,
                            firstname: response.data.firstname,
                            lastname: response.data.lastname,
                            onbreak: response.data.onbreak,
                            activeemployee: response.data.activeemployee,
                            startbreak: response.data.startbreak,
                            endbreak: response.data.endbreak
                        })
                        // update the state to redirect to home
                        this.setState({
                            redirectTo: '/'
                        })
                    }
                }).catch(error => {
                    this.notFound();
                    console.log('login error: ')
                    console.log(error);

                })
        }
    }

    render() {
        const styles = {
            color: "red"
        }
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div>
                    <h4>Login</h4>

                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="username">UserID: </label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    placeholder="UserID"
                                    type="number"
                                    pattern="[0-9]*"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                                <span style={styles}>{this.state.loginError}</span>
                            </div>
                        </div>

                        <div className="form-group ">
                            <div className="col-7"></div>
                            <button
                                className="btn loginBtn btn-primary col-1 col-mr-auto"

                                onClick={this.handleSubmit}
                                type="submit">Login</button>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default LoginForm
