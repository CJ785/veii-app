import React, { Component } from 'react';
import axios from 'axios'
import EmployeeDropdown from "./EmployeeDropdown"

class EmployeesList extends Component {

    constructor() {
        super();
        this.state = {
            employees: [],
        };
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        let initialEmployees = [];
        axios.get('/employees/').then(response => {
            console.log("Data: " + response.data[0])
            initialEmployees = response.data.map((employee) => {
                return employee
            });
            console.log(initialEmployees);
            this.setState({
                employees: initialEmployees,
            });
        });
    }

    render() {
        return (
            <div>
                <h3>Employees:</h3>
                <EmployeeDropdown state={this.state} />
            </div>

        );
    }
}
export default EmployeesList;