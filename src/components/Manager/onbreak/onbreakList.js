import React, { Component } from 'react';

class OnBreakList extends Component {
    constructor(props) {
        super(props);
        this.lastbreak = this.lastbreak.bind(this)
        this.currentBreak = this.currentBreak.bind(this)
    }

    lastbreak(array) {
        return array[array.length - 1].breakstart
    }
    currentBreak = () => {
        let employees = this.props.state;
        if (employees.length >= 1) {
            return (
                employees.map((employee) =>
                    <p className="gotit" key={employee.username}>{employee.firstname} {employee.lastname} on break since {this.lastbreak(employee.startbreak)}</p>
                )
            )
        }
        else {
            return <p className="gotit">No Employees currently on break</p>

        }
    }

    render() {
        return (
            <div>
                {this.currentBreak()}
            </div>
        )

    }
}

export default OnBreakList;