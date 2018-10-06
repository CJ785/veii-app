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
        console.log(this.props.state);
        console.log(`${employees} this is where error is holmes!!!!!!!#############` );
        if (employees.length >= 1) {
            return(
            employees.map((employee) =>
                <p className="gotti" key={employee.username}>{employee.firstname} {employee.lastname} on break since {this.lastbreak(employee.startbreak)}</p>
            )
        )
        }
        else {
            return <p className="gotti">No Employees currently on break</p>

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