import React from 'react';
import "./PartsReq.css";
import Select from 'react-select'
function PartsReq(props) {

    const options = [
        { value: '1', label: 'Now' },
        { value: '2', label: 'Later Today' },
        { value: '3', label: 'Tomorrow' },
        { value: '4', label: 'This Week' },
        { value: '5', label: 'Upcoming Order' }
    ];
    const departments = [
        { value: '1', label: 'Payroll' },
        { value: '2', label: 'Concerns' },
        { value: '3', label: 'Employment' },
        { value: '4', label: 'Records' }
    ];
    return (
        <div className="parts-page">
            <div className="row" id='hr-page'>
                <div>
                    <h3  className="parts-spacer">Parts Request</h3>
                    <p className="name-spacer-parts" >Hello, {props.name}</p>
                </div>
                <div className="col-md-12" id="row3">
                    <form>
                        <Select placeholder="Department" options={departments} />

                        <hr></hr>
                        <Select placeholder="How fast do you need parts" options={options} />
                        <br></br>
                        <br></br>

                        <div className="form-row">
                            <div className="col-md-4 ">
                                <input  className="form-control" id="validationCustom01" rows="4" placeholder="Part" ></input>
                            </div>
                            <div className="col-md-4 ">
                                <input className="form-control" id="validationCustom02" placeholder=" Id" ></input>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" id="validationCustom02" placeholder="Qty"  ></input>
                            </div>
                        </div>
                        <div id="sub/canBtn">
                            <button type="submit" className="btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PartsReq;