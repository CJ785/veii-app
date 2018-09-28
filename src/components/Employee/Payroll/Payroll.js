import React from 'react';
import "./Payroll.css";
import Select from 'react-select';
function Payroll(props) {

    const options = [
        { value: '1', label: 'Payroll' },
        { value: '2', label: 'Concerns' },
        { value: '3', label: 'Employment' },
        { value: '4', label: 'Records' }
    ];

    return (
        <div className="payroll-page">
            <div className="row" >
                <div>
                    <h3 className="pay-spacer">Payrol Request</h3>
                    <p className="name-spacer-pay" >Hello, {props.name}</p>
                </div>
                <div className=" col-md-12 ">
                    <form>
                        <div className="form-group ">
                        </div>
                        <div className="form-group ">
                        <Select placeholder="Department" options={options} />
                            
                        </div>
                        <hr></hr>
                        <div className="form-group ">
                            <textarea className="form-control " id="exampleFormControlTextarea1 " rows="6 " placeholder="Please outline all comments and concerns here."></textarea>
                        </div>
                        <div id="sub/canBtn ">
                            <button type="submit " className="btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Payroll;