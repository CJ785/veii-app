import React, { Component } from 'react';

class OnBreakList extends Component {
    constructor(props) {
        super(props);
        this.lastbreak = this.lastbreak.bind(this)
    }

    lastbreak(array) {
        return array[array.length - 1].breakstart
    }

    render() {
        let employees = this.props.state.employees;
        let optionItems = employees.map((employee) =>
            <option key={employee.username}>{employee.firstname} {employee.lastname} on break since {this.lastbreak(employee.startbreak)}</option>
        );

        return (
            <p>
                {optionItems}
            </p>
        )
    }
}

export default OnBreakList;