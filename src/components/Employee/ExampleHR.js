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
            importance: '',
            importanceError: '',
            description: '',
            descriptionError: '',
            open: false
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
        const err = this.validate();

        if (!err) {
            axios.post('/hremail', {
                name: this.props.name,
                department: this.state.department,
                importance: this.state.importance,
                description: this.state.description,
            })
                .then((response) => {
                    alert("Email succesfully sent");
                    this.setState({
                        empName: "",
                        department: "",
                        departmentError: "",
                        importance: "",
                        importanceError: "",
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
        else if (this.state.importance < 1 || this.state.importance > 5) {
            isError = true;
            errors.importanceError = "You must select a value for importance"
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
                <button className="hr" onClick={this.onOpenModal}><p className="gotti">Human Resources</p></button>
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <div className="hr-page" >
                        <div className="row" >
                            <div >
                                <h1>Email Human Resources</h1>
                            </div>
                        </div>
                        <div className=" col-md-12 " id="row3 ">
                            <form onSubmit={this.handleSubmit}>
                                <div className="dept-box">
                                    <label htmlFor="exampleFormControlInput1 "
                                        name="empName"
                                        id="empName"
                                        value={this.state.empName}
                                        onChange={this.handleChange}
                                    >Name: {this.props.name}</label>

                                </div>
                                <div className="form-group ">
                                    <label htmlFor="exampleFormControlInput1 ">Department</label>
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
                                <div className="form-group ">
                                    <label htmlFor="exampleFormControlSelect2 " >How important is this matter?
                            <span >(1 = no rush and 5 = extremely urgent)</span>
                                    </label>
                                    <select multiple className="form-control "
                                        id="importance"
                                        name='importance'
                                        value={this.state.importance}
                                        onChange={this.handleChange}
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <span style={styles}>{this.state.importanceError}</span>
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="exampleFormControlTextarea1 " name="topic">Please describe your situation below.</label>
                                    <input type="text"
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.handleChange}
                                        className="form-control "
                                        id="hr-box"
                                        rows="6 "
                                        placeholder="Please outline all comments and concerns here." />
                                    <span style={styles}>{this.state.departmentError}</span>
                                </div>
                                <div id="sub/canBtn ">
                                    <button type="submit " className="btn  " >Submit</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}
