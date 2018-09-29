import React from 'react';
import axios from 'axios'
import "./Hr.css";


class HR extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            empName: '',
            department: '',
            importance: '',
            description: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        let dataToSend = {
            department: event.target.department.value,
            empName: event.target.name.value,
            // importance: event.target.importance,
        }
        axios.post('/hremail', {
            transformRequest: [function (data, headers) {
                JSON.stringify(dataToSend);
                return data;
            }],
            // data: dataToSend
        })
            .then((response) => {
                console.log('data: ', response.data);
                this.setState({
                    empName: "",
                    department: "",
                    importance: "",
                    description: ""
                })
                // .catch((error) => {
                //     console.log('errors: ', error.response)
                // });
                // // const data = new FormData(event.target);
                // console.log(event.target);
                // fetch('/hremail', {
                //     method: 'POST',
                //     body: dataToSend,
                // }).then(response => {
                //     console.log(this.state.description);
                //     console.log("hr email sent on submit");
                //     this.setState({
                //         empName: "",
                //         department: "",
                //         importance: "",
                //         description: ""
                //     })
                // })
            })
    }
    render() {
        return (
            <div className="container" >
                <div className="row" id='hr-page'>
                    <div >
                        <h1>EMAIL HR</h1>
                    </div>
                </div>
                <div className=" col-md-12 " id="row3 ">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group ">
                            <label htmlFor="exampleFormControlInput1 "
                                name="empName"
                                id="empName"
                                value={this.state.empName}
                                onChange={this.handleChange}
                            >Name:</label>
                        </div>
                        <div className="form-group ">
                            <label htmlFor="exampleFormControlInput1 ">Department</label>
                            <input type="text "
                                className="form-control "
                                name="department"
                                id="department"
                                placeholder="i.e. Coffee, Grainger etc "
                                value={this.state.department}
                                onChange={this.handleChange}
                            />
                        </div>
                        {/* <div className="form-group ">
                            <label htmlFor="exampleFormControlSelect2 " >How important is this matter?
                            <span >(1 = no rush and 5 = extremely urgent)</span>
                            </label>
                            <select multiple className="form-control "
                                id="importance"
                                name='importance'
                                value={this.state.importance}
                                onChange={this.handleChange}
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>  */}
                        <div className="form-group ">
                            <label htmlFor="exampleFormControlTextarea1 " name="topic">Please describe your the situation below.</label>
                            <textarea className="form-control "
                                id="description"
                                rows="6 "
                                name="description"
                                value={this.state.description}
                                onChange={this.handleChange}
                            >
                            </textarea>
                        </div>
                        <div id="sub/canBtn ">
                            <button type="submit " className="btn btn-success " >Submit</button>
                            <button type="button " className="btn btn-danger ">Clear</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default HR;