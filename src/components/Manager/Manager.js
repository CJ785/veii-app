import React, { Component } from 'react'
import Signup from '../sign-up'
import "./Manager.css"
import EmployeeEdit from '../EmployeeEdit'
import EmployeeReport from '../EmployeeReport'
<<<<<<< Updated upstream
import onbreak from "./onbreak"
=======
import OnBreak from "./onbreak"
>>>>>>> Stashed changes

class Manager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonPressed: 0
        }
    }

    handleClick = (deptBtn) => {
        this.setState({ buttonPressed: deptBtn })
    }

    conditionalRender = () => {
        if (this.state.buttonPressed === 0) {
            return (
                <div className="">
                    <div className="row">
                        <div className="col-md-6 manager" id="">
                            <div className="deptBtn" onClick={() => this.handleClick(1)}>
                                <h2>Add Employee</h2>
                            </div>
                        </div>

                        <div className="col-md-6 manager" id="">
                            <div className="deptBtn" onClick={() => this.handleClick(2)}>
                                <h2>Edit Employee</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 manager" id="">
                            <div className="deptBtn" onClick={() => this.handleClick(3)}>
                                <h2>On Break</h2>
                            </div>
                        </div>
                        <div className="col-md-6 manager" id="">
                            <div className="deptBtn" onClick={() => this.handleClick(4)}>
                                <h2 >Search Employee</h2>
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
                    <EmployeeEdit />
                </div>

            )
        }
        else if (this.state.buttonPressed === 3) {
            return (
                <div className="conditional">
                    <button className='button' onClick={() => this.handleClick(0)}> BACK </button>
                    {<onbreak />}
                </div>

            )
        }
        else if (this.state.buttonPressed === 4) {
            return (
                <div className="conditional">
                    <button className='button' onClick={() => this.handleClick(0)}> BACK </button>
                    <EmployeeReport />
                </div>

            )
        }

    }

    render() {
        return (
            <div className='ManagerView'>
                {this.conditionalRender()}
            </div>

        )
    }
}

export default Manager;