import React from 'react';
import "./Supervisor.css";
function Supervisor(props) {
    return (
        <div className="container" id='sup-page' >
            <div className="row" >
                <div>
                    <h1>MAINTENANCE REQUEST</h1>
                </div>
            </div>

            <div className="col-md-12" id="row3">
                <form>

                    <div className="form-group">
                    </div>
                    <label htmlFor="exampleFormControlInput1">Name: {props.name}</label>
                    <div className="form-group"></div>
                    <label htmlFor="exampleFormControlInput1">Department</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="i.e. Coffee, Grainger, Body, Trays"></input>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Please describe the problem.</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                    </div>
                    <div id="sub/canBtn">
                        <button type="submit" className="btn">Submit</button>
                        <button type="button" className="btn btn-danger">Clear</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Supervisor;