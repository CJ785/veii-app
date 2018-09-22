import React, { Component } from 'react'
import Signup from '../sign-up'
import "./Manager.css"
import EmployeeDropdown from '../EmployeeDropdown';
import EmployeesList from '../EmployeesList'
import OnBreak from "../onbreak"

class Manager extends Component {
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
                                <h1>ADD EMPLOYEE</h1>
                            </div>


                            <div className="deptBtn" onClick={() => this.handleClick(2)}>
                                <h1>EDIT EMPLOYEE</h1>
                            </div>


                            <div className="deptBtn" onClick={() => this.handleClick(3)}>
                                <h1>CURRENTLY ON BREAK</h1>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12" id="row2">

                            <div className="deptBtn" onClick={() => this.handleClick(4)}>
                                <h1 >SEARCH EMPLOYEE</h1>
                            </div>

                        </div>
                    </div>
                </div>
            )
        } else if (this.state.buttonPressed === 1) {
            return (
                <div className="conditional">
                    <button className='button' onClick={() => this.handleClick(0)}> BACK </button>
                    <Signup />
                </div>

            )
        }
        else if (this.state.buttonPressed === 2) {
            return (
                <div className="conditional">
                    <button className='button' onClick={() => this.handleClick(0)}> BACK </button>
                    <EmployeesList />
                </div>

            )
        }
        else if (this.state.buttonPressed === 3) {
            return (
                <div className="conditional">
                    <button className='button' onClick={() => this.handleClick(0)}> BACK </button>
                    {<OnBreak />}
                </div>

            )
        }
        else if (this.state.buttonPressed === 4) {
            return (
                <div className="conditional">
                    <button className='button' onClick={() => this.handleClick(0)}> BACK </button>
                    {/* <Payroll name={this.props.name} /> */}
                </div>

            )
        }

    }

    render() {
        return (
            <div className='ManagerView'>
                {this.conditionalRender()}
            </div>

            //put in the rest of your buttons here

            //add conditional rendering based on this.state.buttonPressed
        )
    }
}

export default Manager;