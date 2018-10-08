import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios';
import Modal from 'react-responsive-modal';;


export default class ExampleSupervisor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empName: '',
            department: '',
            departmentError: '',
            description: '',
            descriptionError: '',
            open: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this)
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        //run form validation before sending information
        const err = this.validate();

        if (!err) {
            axios.post('/payrollemail', {
                name: this.props.name,
                department: this.state.department,
                description: this.state.description,
            })
                .then((response) => {
                    //if email is sent successfully, reset fields to blank
                    alert("Email succesfully sent");
                    this.setState({
                        empName: "",
                        department: "",
                        departmentError: "",
                        description: "",
                        descriptionError: ""
                    })


                }).catch((error) => {
                    console.log('errors: ', error.response)
                });
        }
    }

    validate = () => {
        let isError = false;
        const errors = {}
        if (this.state.department.length < 1) {
            isError = true;
            errors.departmentError = "You must enter a department name"
        }
        else if (this.state.description.length < 1) {
            isError = true;
            errors.descriptionError = "You must enter a description"
        }
        if (isError) {
            this.setState({
                ...this.state,
                ...errors
            })
        }
        return isError
    }
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };



    render() {
        const styles = {
            color: "red"
        }
        return (
            <div>
                <button className="payroll" onClick={this.onOpenModal}><p className="gotti">Payroll</p></button>
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <div className="payroll-page">
                        <div className="row" >
                            <div>
                                <h3 className="pay-spacer">Payroll Request</h3>
                                <p className="name-spacer-pay">Hello, {this.props.name}</p>
                            </div>
                            <div className=" col-md-12 ">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group ">
                                    </div>
                                    <div className="form-group ">
                                        <input type="text "
                                            className="form-control "
                                            name="department"
                                            id="dept-box"
                                            placeholder="Department"
                                            value={this.state.department}
                                            onChange={this.handleChange}
                                        />
                                        <span style={styles}>{this.state.departmentError}</span>
                                    </div>
                                    <hr></hr>
                                    <div className="form-group ">
                                        <input type="text"
                                            name="description"
                                            value={this.state.description}
                                            onChange={this.handleChange}
                                            className="form-control "
                                            id="prob-box"
                                            rows="6 "
                                            placeholder="Please outline all comments and concerns here." />
                                        <span style={styles}>{this.state.descriptionError}</span>
                                    </div>
                                    <div id="sub/canBtn ">
                                        <button type="submit " className="btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}
