import React, { Component } from 'react'
import "./Employee.css"
import Break from "./Break"
import HR from "./Hr"
import Maintenance from "./Maintenance"
import PartsReq from "./PartsReq"
import Payroll from "./Payroll"
import Supervisor from "./Supervisor"
import Example from "./Example"
import ExampleSupervisor from "./ExampleSupervisor"
import ExamplePayroll from "./ExamplePayroll"
import ExampleParts from "./ExampleParts"
import ExampleHR from "./ExampleHR"
import ExampleBreak from "./ExampleBreak"
// import Modal from 'react-responsive-modal';;

import Emergency from './Emergency'

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonPressed: 0,
            show: false
            // 0 could be your default view
        }
    }


    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    }

    handleClick = (deptBtn) => {
        this.setState({ buttonPressed: deptBtn })
    }

    conditionalRender = () => {
        if (this.state.buttonPressed === 0) {
            return (
                <div className="container">
                    <div className="  row">
                        <div className=" col-sm-4" >

                            <ExampleBreak name={this.props.name} />



                        </div>

                        <div id="#" className="  col-sm-4">
                            <ExampleHR name={this.props.name} />
                        </div>

                        <div className="  col-sm-4" id="">
                            <Example name={this.props.name} />
                        </div>
                    </div>
                    <div className=" row" id="#" >
                        <div className="   col-sm-4" id="" >
                            <ExampleSupervisor name={this.props.name} />
                        </div>

                        <div className=" col-sm-4" id=" #" >
                            <ExamplePayroll name={this.props.name} />
                        </div>
                        <div className=" col-sm-4" id=" #" >
                            <ExampleParts name={this.props.name} />
                        </div>

                    </div>
                    <div className="col-md-12 emerg" className="emerg">
                        <Emergency />
                    </div>
                </div >
            



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