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
                    <div className="  row">
                        <div className="break col-sm-3 " id="#" onClick={() => this.handleClick(5)}>
                            <h3 classnName="block-spacer">Break</h3>
                        </div>
                        <div className="col-sm-9" id="">
                            <div className=" row" id="#">
                                <div className=" hr col-sm-4" onClick={() => this.handleClick(1)} >
                                    <h3 classnName="block-spacer">Human Resources</h3>
                                </div>

                                <div id="#" className=" maint col-sm-4" onClick={() => this.handleClick(6)}>
                                    <h3 classnName="block-spacer">Maintenance</h3>
                                </div>

                                <div className=" supervisor col-sm-4" id="" onClick={() => this.handleClick(2)}>
                                    <h3 classnName="">Supervisor</h3>
                                </div>
                                <div className="  payroll col-sm-6" id="" onClick={() => this.handleClick(4)}>
                                    <h3 classnName="">Payroll</h3>
                                </div>

                                <div className="preq col-sm-6" id=" #" onClick={() => this.handleClick(3)}>
                                    <h3 classnName="">Parts </h3>
                                </div>

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