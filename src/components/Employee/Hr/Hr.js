import React from 'react';
import Select from 'react-select'
function HR(props) {
    const options = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' }
    ];

    return (


        <div className=" yo" >
            <div className="row" >
                <div className='title ' id="hey">
                    <h2 className="black"> HR</h2>
                    <p >Hello, {props.name}</p>
                </div>
            </div>
            <div className=" col-md-12 " id="row3 ">
                <div classname="col-md-4"></div>
                <div classname="col-md-4">     <form id="box">
                    <div className="form-group ">
                        <label htmlFor="exampleFormControlInput1 " placeholder={props.name}></label>
                    </div>
                    <div className="form-group  ">
                        <Select placeholder options={options} />
                        <p className=''>1 = no rush </p><p className='' > 5 = urgent </p>

                    </div>
                    <hr></hr>
                    <div className="form-group ">
                        <textarea className="form-control wow" id="exampleFormControlTextarea1 " rows="6 " placeholder="What happened?"></textarea>
                    </div>
                    <div id="sub/canBtn ">
                        <button type="submit " className="btn ">Submit</button>
                    </div>
                </form></div>
                <div classname="col-md-4"></div>

            </div>
            <br></br>
        </div>


    )
}

export default HR;