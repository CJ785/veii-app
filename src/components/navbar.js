import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import axios from 'axios'


class Navbar extends Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
        this.conditionalNavbar = this.conditionalNavbar.bind(this)
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

    conditionalNavbar = () => {
        if (this.props.loggedIn === true) {
            return (
                <section className="navbar-section">
                    <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                        <span className="text-secondary">logout</span></Link>
                    <span className="text-secondary"><p>{this.props.name}</p></span>
                </section>
            )
        } else if (this.props.loggedIn === false) {
            return (
                <section className="navbar-section">
                    <Link to="/signup"><p className="user">Add User</p></Link>
                </section>
            )
        }
    }


    render() {
        const loggedIn = this.props.loggedIn;
        return (
            <div>

                <header className="navbar navrbar-default" id="nav-container">
                    <div className="col-4" >

                        {this.conditionalNavbar()}

                        {/* {loggedIn ? (
                            <section className="navbar-section">
                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                    <span className="text-secondary">logout</span></Link>
                                <span className="text-secondary"><p>{this.props.name}</p></span>
                            </section>
                        ) : (
                                <section className="navbar-section">
                                    <Link to="/signup"><p className="user">Add User</p></Link>
                                </section>
                            )} */}
                    </div>
                </header>
            </div>

        );

    }
}

export default Navbar