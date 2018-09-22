import React, { Component } from 'react';

class OnBreakList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let employees = this.props.state.employees;
        let optionItems = employees.map((employee) =>
            <option key={employee.username}>{employee.firstname} {employee.lastname}</option>
        );

        return (
            <p>
                {optionItems}
            </p>
        )
    }
}

export default OnBreakList;