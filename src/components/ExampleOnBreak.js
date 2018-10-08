import React, { Component } from 'react'
import axios from 'axios'
import OnBreakList from "./Manager/OnBreak/onbreakList"
import Modal from 'react-responsive-modal';




export default class ExampleOnBreak extends Component {
    constructor() {
        super();
        this.state = {
            employees: [],
            open: false
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        let initialList = [];
        //Call to the database to get all user's currently on a break
        axios.get('/onBreak/').then(response => {
            initialList = response.data.map((employee) => {
                return employee
            });
            this.setState({
                employees: initialList,
            })
        });
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <div >
                <button className="manager" onClick={this.onOpenModal}><p className="gotti">On Break</p></button>
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <div className="breaks">
                        <h3>Employees Currently On Break:</h3>
                        <OnBreakList state={this.state.employees} />
                    </div>

                </Modal>
            </div>
        );
    }

}


