import React, { Component } from 'react'
import axios from 'axios'
import EmployeesList from "./EmployeesList"
import EmployeeBreakTable from './EmployeeBreakTable'
import Modal from 'react-responsive-modal';


export default class ExampleEmployeeReport extends Component {

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
        this.getUser = this.getUser.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        // this.onOpenModal = this.onOpenModal.bind(this);
        // this.onCloseModal = this.onCloseModal.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        //If the user clicks a different name from the dropdown, call the getUser function
        if (this.state.username !== prevState.username) {
            this.getUser()
        }
    }

    handleUsername(username) {
        //Get the updated user ID from the EmployeeList file
        this.setState({
            username: username
        })
    }


    getUser() {
        //Call to the database to get the user by id(username) and then update the current user's state to the response
        axios.get('/id/' + this.state.username).then(response => {
            if (response.data) {

                this.setState({
                    username: response.data.username,
                    firstname: response.data.firstname,
                    lastname: response.data.lastname,
                    rolename: response.data.rolename,
                    startbreak: response.data.startbreak,
                    endbreak: response.data.endbreak
                })
            } else {
                null
            }
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
                <button className="manager"  onClick={this.onOpenModal}><p className="gotti">Employee Report </p></button>
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <EmployeesList getID={this.handleUsername} />
                    <div className="EmployeeBreaks">
                        {/* Ternary that will only display the employee's breaks history once an employee has been chosen */}
                        {this.state.startbreak.length > 0 ? (
                             <EmployeeBreakTable state={this.state} />
                         ) : (
                                null
                                
                             )}

                    </div>
                </Modal>
            </div>
        );
    }
}
