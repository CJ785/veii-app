import React from 'react';
import "./PartsReq.css";
import Select from 'react-select'
import axios from 'axios';

class PartsReq extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            empName: '',
            department: '',
            departmentError: '',
            timeFrame: '',
            partName: '',
            partID: '',
            partQuantity: ''

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
                        partName: "",
                        partID: "",
                        partQuantity: ""
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
        if (isError) {
            this.setState({
                ...this.state,
                ...errors
            })
        }
        return isError
    }

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

            <div className="parts-page">
                <div className="row" >
                    <div>
                        <h3 className="pay-spacer">Parts Request</h3>
                        <p className="name-spacer-pay">Hello, {this.props.name}</p>
                    </div>
                    <div className="col-md-12" id="row3">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text "
                                className="form-control "
                                name="department"
                                id="department"
                                placeholder="Department"
                                value={this.state.department}
                                onChange={this.handleChange}
                            />
                            <span style={styles}>{this.state.departmentError}</span>
                            <hr></hr>
                            <Select placeholder="How fast do you need parts" onChange={this.handleTimeChange} options={timeFrame} />
                            <br></br>
                            <br></br>

                            <div className="form-row" id="three-box" >
                                <div className="col-md-4 ">
                                    <input type="text"
                                        className="form-control "
                                        name="partName"
                                        id="partName"
                                        placeholder="Part"
                                        value={this.state.partName}
                                        onChange={this.handleChange}
                                    />
                                    <span style={styles}>{this.state.partNameError}</span>
                                </div>
                                <div className="col-md-4 ">
                                    {/* <input type="partID" value={this.state.partID}
                                         onChange={this.handleChange} id="validationCustom01" placeholder=" Id" />  */}
                                    <input type="text"
                                        className="form-control "
                                        name="partID"
                                        id="partID"
                                        placeholder="Part ID"
                                        value={this.state.partID}
                                        onChange={this.handleChange}
                                    />
                                    <span style={styles}>{this.state.partIDError}</span>
                                </div>
                                <div className="col-md-4">
                                    {/* <input type="partQuantity" value={this.state.partQuantity}
                                        onChange={this.handleChange} id="validationCustom01" placeholder="Qty" /> */}
                                    <input type="text "
                                        className="form-control "
                                        name="partQuantity"
                                        id="partQuantity"
                                        placeholder="Quantity"
                                        value={this.state.partQuantity}
                                        onChange={this.handleChange}
                                    />
                                    <span style={styles}>{this.state.partQuantityError}</span>
                                </div>
                            </div>
                            <div id="sub-btn">
                                <button type="submit" className="btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >

        )
    }
}
function PartsReq(props) {


}

export default PartsReq;