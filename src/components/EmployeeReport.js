// aStatefull componenet for 
// when you click on somebody on the drop down list 
import React, { Component } from 'react';
import axios from 'axios'
import EmployeesList from "./EmployeesList"
import EmployeeBreakTable from './EmployeeBreakTable'

class EmployeeReport extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            rolename: "",
            firstname: "",
            lastname: "",
            startbreak: "",
            endbreak: ""
        };
        this.handleUsername = this.handleUsername.bind(this);
        this.getUser = this.getUser.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
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


    render() {



        return (
            <div>
                <EmployeesList getID={this.handleUsername} />
                <div className="EmployeeBreaks">
                    {/* Ternary that will only display the employee's breaks history once an employee has been chosen */}
                    {this.state.startbreak.length > 0 ? (
                        <EmployeeBreakTable state={this.state} />
                    ) : (
                            null
                        )}

                </div>
            </div>

        );
    }
}
export default EmployeeReport;