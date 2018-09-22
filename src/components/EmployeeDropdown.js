import React, { Component } from 'react';

class EmployeeDropdown extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let employees = this.props.state.employees;
        let optionItems = employees.map((employee) =>
            <option key={employee.username}>{employee.firstname} {employee.lastname}</option>
        );

        return (
            <div>
                <select>
                    {optionItems}
                </select>
            </div>
        )
    }
}

export default EmployeeDropdown;