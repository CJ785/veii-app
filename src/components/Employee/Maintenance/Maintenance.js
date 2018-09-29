import React from 'react';
import "./Maintenance.css";
import Select from 'react-select'

function Maintenance(props) {
    const options = [
        { value: '1', label: 'Coffee' },
        { value: '2', label: 'Grainger' },
        { value: '3', label: 'Body' },
        { value: '4', label: 'Trays' }
    ];

    return (
        < div className="maint-page" >
            <div className="row" >
                <div>
                    <h3 className="maint-spacer"> Maintenance Request</h3>
                    <p className="name-spacer-maint" >Hello, {props.name}</p>
                </div>
                <div className="col-md-12" id="row3">
                    <form>
                        <div className="form-group">
                        </div>
                        <div className="form-group">
                        <Select placeholder="Department" options={options} />
                        </div>
                        <hr></hr>
                        <div className="form-group" >
                             <textarea className="form-control " id="exampleFormControlTextarea1 " rows="6 " placeholder="Please outline all comments and concerns here."></textarea>
                        </div>
                        <div id="sub/canBtn">
                            <button type="submit" className="btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <br></br>
            </ div>
       
    )
}

export default Maintenance;