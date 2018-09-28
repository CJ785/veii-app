import React from 'react';
import "./Supervisor.css";
import Select from 'react-select'
function Supervisor(props) {

    const departments = [
        { value: '1', label: 'Payroll' },
        { value: '2', label: 'Concerns' },
        { value: '3', label: 'Employment' },
        { value: '4', label: 'Records' }
    ];
    return (
        <div className="sup-page"  >
            <div className="row" >
                <div>
                    <h3 className="super-spacer">Supervisor Request</h3>
                    <p className="name-spacer-super" >Hello, {props.name}</p>
                </div>
            </div>

            <div className="col-md-12" id="row3">
                <form>

                    <div className="form-group">
                    </div>
                    <div className="form-group"></div>
                    <Select placeholder="Department" options={departments} />
                    <hr></hr>

                    <br></br>

                    <div className="form-group">
                        <textarea className="form-control " id="exampleFormControlTextarea1 " rows="6 " placeholder="Please outline all comments and concerns here."></textarea>
                    </div>
                    <div id="sub/canBtn">
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
       
    )
}

export default Supervisor;