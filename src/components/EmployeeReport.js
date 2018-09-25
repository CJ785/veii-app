import React, { Component } from 'react';
import axios from 'axios'
import EmployeesList from "./EmployeesList"

class EmployeeEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            rolename: "",
            firstname: "",
            lastname: "",
            startbreak: [],
            endbreak: ""
        };
        this.handleUsername = this.handleUsername.bind(this);
        this.getUser = this.getUser.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Employee Edit ID: ", this.state.username)
        if (this.state.username !== prevState.username) {
            this.getUser()
        }
    }

    handleUsername(username) {
        this.setState({
            username: username
        })
        console.log("ID retrieved from EmployeeList: ", username)
    }


    getUser() {
        axios.get('/id/' + this.state.username).then(response => {
            if (response.data) {

                this.setState({
                    username: response.data.username,
                    firstname: response.data.firstname,
                    lastname: response.data.lastname,
                    rolename: response.data.rolename,
                    startbreak: [response.data.startbreak],
                    endbreak: response.data.endbreak
                })
                console.log(response.data.startbreak[0].breakstart)
            } else {
                null
            }
        })
    }


    render() {
        let employeebreaks = this.state.startbreak
        console.log(employeebreaks)
        return (
            <div>
                <EmployeesList getID={this.handleUsername} />
                <div className="EmployeeBreaks">

                </div>
            </div>

        );
    }
}
export default EmployeeEdit;