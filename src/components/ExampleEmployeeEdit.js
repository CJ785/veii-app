import React, { Component } from 'react';
import axios from 'axios';
import EmployeesList from "./EmployeesList";
import Modal from 'react-responsive-modal';


export default class ExampleEmployeeEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            rolename: "",
            firstname: "",
            lastname: "",
            startbreak: "",
            endbreak: "",
            open: false
        };
        this.handleUsername = this.handleUsername.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getUser = this.getUser.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.updateUser = this.updateUser.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        //If the user clicks on a different employee's name, run the getUser function to get that employee's information from the database
        if (this.state.username !== prevState.username) {
            this.getUser()
        }
    }

    handleUsername(username) {
        this.setState({
            username: username
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    getUser() {
        //Call to the database by the user's unique ID, then update the user fields with the response
        axios.get('/id/' + this.state.username).then(response => {
            if (response.data) {
                this.setState({
                    username: response.data.username,
                    firstname: response.data.firstname,
                    lastname: response.data.lastname,
                    rolename: response.data.rolename,
                    activeemployee: response.data.activeemployee,
                    startbreak: response.data.startbreak,
                    endbreak: response.data.endbreak,
                })
            } else {
                null
            }
        })
    }

    updateUser(event) {
        event.preventDefault();
        //When a user's information is updated and submitted, send the updated information to the database
        axios.post("/updateUser", {
            username: this.state.username,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            rolename: this.state.rolename,
            activeemployee: this.state.activeemployee
        }).then(response => {
            if (!response.data.error) {
                //If a user is updated, the input fields are reset so another user can be edited
                alert("User successfully updated")
                this.setState({
                    firstname: "",
                    lastname: "",
                })
            } else {
            }
        }).catch(error => {
            console.log('edit error: ')
            console.log(error)

        })

    }


    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {

        return (
            <div>
                <button className="manager" onClick={this.onOpenModal}><p className="gotti">Edit Employee</p></button>
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <div className="edit-user">
                        <EmployeesList getID={this.handleUsername} />
                        <div className="EditForm edit-form">
                            <h4 className="edit-title">Edit Employee</h4>
                            <form className="form-horizontal ">
                                <div className="form-group">
                                    <div className="col-3 col-mr-auto">
                                        <input className="form-input"
                                            type="hidden"
                                            id="username"
                                            name="username"
                                            placeholder="Employee ID"
                                            value={this.state.username}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-1 col-ml-auto somethong">
                                        <label className="form-label" htmlFor="firstname">Firstname</label>
                                    </div>
                                    <div className="col-3 col-mr-auto">
                                        <input className="form-input"
                                            type="text"
                                            id="firstname"
                                            name="firstname"
                                            placeholder="Firstname"
                                            value={this.state.firstname}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-1 col-ml-auto somethong">
                                        <label className="form-label" htmlFor="lastname">Lastname</label>
                                    </div>
                                    <div className="col-3 col-mr-auto">
                                        <input className="form-input"
                                            type="text"
                                            id="lastname"
                                            name="lastname"
                                            placeholder="Lastname"
                                            value={this.state.lastname}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-1 col-ml-auto somethong">
                                        <label>Employee Role:</label>
                                    </div>
                                    <div className="col-3 col-mr-auto">
                                        <select name="rolename" id="rolename" value={this.state.rolename} onChange={this.handleChange}>
                                            <option value="Employee">Employee</option>
                                            <option value="Manager">Manager</option>
                                        </select>
                                    </div>

                                </div>
                                <div className="form-group">
                                    <div className="col-1 col-ml-auto somethong">
                                        <label>Current Employee:</label>
                                    </div>
                                    <div className="col-3 col-mr-auto">
                                        <select name="activeemployee" id="activeemployee" value={this.state.activeemployee} onChange={this.handleChange}>
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </div>

                                </div>
                                <div className="form-group ">
                                    <div className="col-12"></div>
                                    <button
                                        className=" btton-padding btn  "
                                        onClick={this.updateUser}
                                        type="submit"
                                    >Update Employee</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}



