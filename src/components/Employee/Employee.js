import React, { Component } from 'react'
import "./Employee.css"
import Break from "./Break"
import HR from "./Hr"
import Maintenance from "./Maintenance"
import PartsReq from "./PartsReq"
import Payroll from "./Payroll"
import Supervisor from "./Supervisor"

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonPressed: 0
            // 0 could be your default view
        }
    }

    handleClick = (deptBtn) => {
        this.setState({ buttonPressed: deptBtn })
    }

    conditionalRender = () => {
        if (this.state.buttonPressed === 0) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" id="row1">

                            <div className="deptBtn" onClick={() => this.handleClick(1)}>
                                <h1>HR</h1>
                            </div>


                            <div className="deptBtn" onClick={() => this.handleClick(2)}>
                                <h1 >SUPERVISOR</h1>
                            </div>


                            <div className="deptBtn" onClick={() => this.handleClick(3)}>
                                <h1 >PARTS REQ</h1>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12" id="row2">

                            <div className="deptBtn" onClick={() => this.handleClick(4)}>
                                <h1 >PAYROLL</h1>
                            </div>


                            <div className="deptBtn" onClick={() => this.handleClick(5)}>
                                <h1 >BREAK</h1>
                            </div>


                            <div className="deptBtn" onClick={() => this.handleClick(6)}>
                                <h1 >MAINT.</h1>
                            </div>

                        </div>
                    </div>
                </div>
            )
        } else if (this.state.buttonPressed === 1) {
            return (
                <div className="conditional">
                    <button className='button' onClick={() => this.handleClick(0)}> BACK </button>
                    <HR name={this.props.name} />
                </div>

            )
        }
        else if (this.state.buttonPressed === 2) {
            return (
                <div className="conditional">
                    <button className='button' onClick={() => this.handleClick(0)}> BACK </button>
                    <Supervisor name={this.props.name} />
                </div>

            )
        }
        else if (this.state.buttonPressed === 3) {
            return (
                <div className="conditional">
                    <button className='button' onClick={() => this.handleClick(0)}> BACK </button>
                    <PartsReq name={this.props.name} />
                </div>

            )
        }
        else if (this.state.buttonPressed === 4) {
            return (
                <div className="conditional">
                    <button className='button' onClick={() => this.handleClick(0)}> BACK </button>
                    <Payroll name={this.props.name} />
                </div>

            )
        }
        else if (this.state.buttonPressed === 5) {
            return (
                <div className="conditional">
                    <button className='button' onClick={() => this.handleClick(0)}> BACK </button>
                    <Break name={this.props.name} break={this.props.break} />
                </div>

            )
        }
        else if (this.state.buttonPressed === 6) {
            return (
                <div className="conditional">
                    <button className='button' onClick={() => this.handleClick(0)}> BACK </button>
                    <Maintenance name={this.props.name} />
                </div>

            )
        }
    }

    render() {
        return (
            <div className='EmployeeView'>
                {this.conditionalRender()}
            </div>

            //put in the rest of your buttons here

            //add conditional rendering based on this.state.buttonPressed
        )
    }
}


export default Employee;