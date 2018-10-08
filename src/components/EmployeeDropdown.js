import React, { Component } from 'react';

class EmployeeDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedID: ""
        }
        this.getNewID = this.getNewID.bind(this);

    }

    getNewID(event) {
        var newID = event.target.value
        this.props.getInput(newID)
        this.setState({
            selectedID: newID
        });

    }

    render() {
        let employees = this.props.state.employees;
        //create dropdown of employee names, saving the username as the value so it can be used to search
        let optionItems = employees.map((employee) =>
            <option value={employee.username} key={employee.username} >{employee.firstname} {employee.lastname}</option>
        );

        return (
            <div>
                <select onChange={this.getNewID}>
                    {optionItems}
                </select>
            </div>
        )
    }
}

export default EmployeeDropdown;