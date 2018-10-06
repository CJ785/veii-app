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
            timeFrame: '',
            timeFrameError: '',
            partName: '',
            partNameError: '',
            partID: '',
            partIDError: '',
            partQuantity: '',
            partQuantityError: '',
            partQuantityTypeError: '',
            open: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
        this.handleTimeChange = this.handleTimeChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSelectChange = (val) => {
        console.log(val)
        this.setState({
            department: val.value
        })
    }

    handleTimeChange = (time) => {
        this.setState({
            timeFrame: time.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const err = this.validate();

        if (!err) {
            axios.post('/partsreqemail', {
                name: this.props.name,
                department: this.state.department,
                timeFrame: this.state.timeFrame,
                partName: this.state.partName,
                partID: this.state.partID,
                partQuantity: this.state.partQuantity
            })
                .then((response) => {
                    alert("Email succesfully sent");
                    this.setState({
                        empName: "",
                        department: "",
                        departmentError: "",
                        timeFrame: "",
                        timeFrameError: "",
                        partName: "",
                        partNameError: "",
                        partID: "",
                        partIDError: "",
                        partQuantity: "",
                        partQuantityError: "",
                        partQuantityTypeError: ""
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
        else if (this.state.timeFrame.length < 1) {
            isError = true;
            errors.timeFrameError = "You must select a timeframe"
        }
        else if (this.state.partName.length < 1) {
            isError = true;
            errors.partNameError = "You must enter the name of the part you're requesting"
        }
        else if (this.state.partID.length < 1) {
            isError = true;
            errors.partIDError = "You must enter the ID of the part you're requesting"
        }
        else if (this.state.partQuantity.length < 1) {
            isError = true;
            errors.partQuantityError = "You must enter the number of parts you're requesting"
        }
        else if (isNaN(this.state.partQuantity)) {
            isError = true;
            errors.partQuantityTypeError = "You must a numeric value"
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
        const timeFrame = [
            { value: 'Now', label: 'Now' },
            { value: 'Later Today', label: 'Later Today' },
            { value: 'Tomorrow', label: 'Tomorrow' },
            { value: 'This Week', label: 'This Week' },
            { value: 'Upcoming Order', label: 'Upcoming Order' }
        ];
        const departments = [
            { value: 'Payroll', label: 'Payroll' },
            { value: 'Concerns', label: 'Concerns' },
            { value: 'Employment', label: 'Employment' },
            { value: 'Records', label: 'Records' }
        ];
        return (

            <div>
                <button className="preq" onClick={this.onOpenModal}><p className="gotti">Parts</p></button>
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <div className="parts-page">
                        <div className="row" >
                            <div>
                                <h3 className="pay-spacer">Parts Request</h3>
                                <p className="name-spacer-pay">Hello, {this.props.name}</p>
                            </div>
                            <div className="col-md-12" id="row3">
                                <form onSubmit={this.handleSubmit}>
                                    <textarea name="department"
                                        value={this.state.department}
                                        onChange={this.handleChange}
                                        className="form-control "
                                        id="exampleFormControlTextarea1 "
                                        rows="2"
                                        placeholder="Please enter the department you are emailing from."></textarea>
                                    <span style={styles}>{this.state.departmentError}</span>
                                    <hr></hr>
                                    <Select placeholder="How fast do you need parts" onChange={this.handleTimeChange} options={timeFrame} />
                                    <span style={styles}>{this.state.timeFrameError}</span>
                                    <br></br>
                                    <br></br>

                                    <div className="form-row">
                                        <div className="col-md-4 ">
                                            <textarea name="partName" value={this.state.partName}
                                                onChange={this.handleChange} id="validationCustom01" rows="4" placeholder="Part" ></textarea>
                                            <span style={styles}>{this.state.partNameError}</span>
                                        </div>
                                        <div className="col-md-4 ">
                                            <textarea name="partID" value={this.state.partID}
                                                onChange={this.handleChange} id="validationCustom02" placeholder=" Id" ></textarea>
                                            <span style={styles}>{this.state.partIDError}</span>
                                        </div>
                                        <div className="col-md-4">
                                            <textarea name="partQuantity" value={this.state.partQuantity}
                                                onChange={this.handleChange} id="validationCustom02" placeholder="Qty"  ></textarea>
                                            <span style={styles}>{this.state.partQuantityError}</span>
                                            <span style={styles}>{this.state.partQuantityTypeError}</span>
                                        </div>
                                    </div>
                                    <div id="sub/canBtn">
                                        <button type="submit" className="btn">Submit</button>
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
