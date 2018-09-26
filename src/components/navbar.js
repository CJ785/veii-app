import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import '../App.css';
import axios from 'axios'
import Signup from './sign-up';

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null,
                    rolename: null
                })
            }
        }).catch(error => {
            console.log('Logout error')
        })

    }

    render() {
        const loggedIn = this.props.loggedIn;
        return (
            <div>

                <header className="navbar navrbar-default" id="nav-container">
                    <div className="col-4" >

                        {loggedIn ? (
                            <section className="navbar-section">
                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                    <span className="text-secondary">logout</span></Link>
                                <span className="text-secondary"><p>{this.props.name}</p></span>
                            </section>
                        ) : (
                                <section className="navbar-section">
                                    <Link to="/signup"><p className="user">Add User</p></Link>
                                </section>
                            )}
                    </div>
                </header>
            </div>

        );

    }
}

export default Navbar