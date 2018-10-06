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
        axios.get('/onBreak/').then(response => {
            initialList = response.data.map((employee) => {
                return employee
            });
            this.setState({
                employees: initialList,
            })
            //console.log(this.state.employees[0].firstname)
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
            <button  className="manager" onClick={this.onOpenModal}><p className="gotti">On Break</p></button>
            <Modal open={this.state.open} onClose={this.onCloseModal} center>
            <h3>Employees On Break:</h3>
                <OnBreakList state={this.state.employees} />
            </Modal>
          </div>
        );
      }
    
}


