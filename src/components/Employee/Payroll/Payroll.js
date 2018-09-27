import React from 'react';
import "./Payroll.css";
function Payroll(props) {
    return (
<<<<<<< HEAD
        <div className="container">
            <div className="row" id='payroll-page'>
=======
        <div className="payroll-container ">
            <div className="row" id='hr-page'>
>>>>>>> d3a468bd3b8031874ad8a08743ecfd69d9736478
                <div>
                    <h1>PAYROLL REQUEST</h1>
                </div>
                <div className=" col-md-12 " id="row3 ">
                    <form>
                        <div className="form-group ">
                            <label htmlFor="exampleFormControlInput1 ">Name: {props.name}</label>
                        </div>
                        <div className="form-group ">
                            <label htmlFor="exampleFormControlInput1 ">Department</label>
                            <input type="text " className="form-control " id="exampleFormControlInput1 " placeholder="i.e. Coffee, Grainger, Body, Trays "></input>
                        </div>
                        <div className="form-group ">
                            <label htmlFor="exampleFormControlTextarea1 ">Please describe your the situation below.</label>
                            <textarea className="form-control " id="exampleFormControlTextarea1 " rows="6 "></textarea>
                        </div>
                        <div id="sub/canBtn ">
                            <button type="submit " className="btn">Submit</button>
                            <button type="button " className="btn btn-danger ">Clear</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Payroll;