import React from 'react';

function HR(props) {
    return (
        <div className="container">
            <div className="row" id='hr-page'>
                <div >
                    <h1>EMAIL HR</h1>
                </div>
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
                        <label htmlFor="exampleFormControlSelect2 ">How important is this matter?
                            <span >(1 = no rush and 5 = extremely urgent)</span>
                        </label>
                        <select multiple className="form-control " id="exampleFormControlSelect2 ">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-group ">
                        <label htmlFor="exampleFormControlTextarea1 ">Please describe your the situation below.</label>
                        <textarea className="form-control " id="exampleFormControlTextarea1 " rows="6 "></textarea>
                    </div>
                    <div id="sub/canBtn ">
                        <button type="submit " className="btn btn-success ">Submit</button>
                        <button type="button " className="btn btn-danger ">Clear</button>
                    </div>
                </form>
            </div>
        </div>


    )
}

export default HR;