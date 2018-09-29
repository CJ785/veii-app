import React from 'react';
import Select from 'react-select'
import "./Hr.css";


function HR(props) {
    const options = [
        { value: '1', label: 'Payroll' },
        { value: '2', label: 'Concerns' },
        { value: '3', label: 'Employment' },
        { value: '4', label: 'Records' }
    ];

    return (


        <div className="hr-page" >
            <div className="row" >
                <div className='title '>
                    <h2 className="ntitle"> HR</h2>
                    <p className="nspacer" >Hello, {props.name}</p>
                </div>
            </div>
            <div className=" col-md-12 " id="row3 ">
                <form id="box">
                    <div className="form-group ">
                        <label tmlFor="exampleFormControlInput1 " placeholder={props.name}></label>
                    </div>
                    <div className="form-group  ">
                        <Select placeholder="Select" options={options} />
                        <p className='form-underlabel' > Please select a topic.</p>

                    </div>
                    <hr></hr>
                    <div className="form-group ">
                        <textarea className="form-control " id="exampleFormControlTextarea1 " rows="6 " placeholder="Please outline all comments and concerns here."></textarea>
                    </div>
                    <div id="sub/canBtn ">
                        <button type="submit " className="btn ">Submit</button>
                    </div>
                </form>
            </div>
            <br></br>
        </div>


    )
}

export default HR;