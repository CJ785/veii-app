import React, { Component } from 'react';
import axios from 'axios'
import EmployeeDropdown from "./EmployeeDropdown"

class EmployeesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            employeeID: ""
        };
        this.componentDidMount = this.componentDidMount.bind(this)
        this.handleID = this.handleID.bind(this)
        this.updateuserID = this.updateuserID.bind(this)
    }

    componentDidMount() {
        //Dropdown list of all active employees, sorted by lastname
        let initialEmployees = [];
        axios.get('/employees/').then(response => {
            initialEmployees = response.data.map((employee) => {
                return employee
            });
            this.setState({
                employees: initialEmployees,
            });
        });
    }

    updateuserID(ID) {
        this.props.getID(ID)
    }

    handleID(ID) {
        this.updateuserID(ID)
        this.setState({
            employeeID: ID
        })

    }

    render() {
        return (
            <div>
                <h3>Select an Employee:</h3>
                <EmployeeDropdown state={this.state} getInput={this.handleID} />
            </div>

        );
    }
}
export default EmployeesList;