import React from 'react';
import Select from 'react-select'
function HR(props) {
    const options = [
        { value: '1', label: 'Payroll' },
        { value: '2', label: 'Concerns' },
        { value: '3', label: 'Employment' },
        { value: '4', label: 'Records' }
    ];

    return (


        <div className="hr-container" >
            <div className="row" >
                <div className='title ' id="hey">
                    <h2 className="black"> HR</h2>
                    <p >Hello, {props.name}</p>
                </div>
            </div>
            <div className=" col-md-12 " id="row3 ">
                <div className="col-md-4"></div>
                <div className="col-md-4">     <form id="box">
                    <div className="form-group ">
                        <label htmlFor="exampleFormControlInput1 " placeholder={props.name}></label>
                    </div>
                    <div className="form-group  ">
                        <Select placeholder="Select" options={options} />
                        <p className='form-underlabel' > Please select a topic.</p>

                    </div>
                    <hr></hr>
                    <div className="form-group ">
                        <textarea className="form-control wow" id="exampleFormControlTextarea1 " rows="6 " placeholder="Please outline all comments and concerns here."></textarea>
                    </div>
                    <div id="sub/canBtn ">
                        <button type="submit " className="btn ">Submit</button>
                    </div>
                </form></div>
                <div className="col-md-4"></div>

            </div>
            <br></br>
        </div>


    )
}

export default HR;