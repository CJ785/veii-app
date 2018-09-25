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
        console.log("You clicked on Dropdown ID: ", newID)
        this.props.getInput(newID)
        this.setState({
            selectedID: newID
        });

    }



    render() {
        let employees = this.props.state.employees;
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