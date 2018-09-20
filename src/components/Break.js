import React from 'react';

function Break(props) {
    return (
        <div className="container">
            <div className="row" id='hr-page'>
                <div>
                    <h1>RESTROOM BREAK</h1>
                </div>
                <div className="col-md-12" id="row3">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Name: {props.name}</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Department</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="i.e. Coffee, Grainger, Body, Trays"></input>
                        </div>
                        <div className="form-group">
                            <div>
                                <button type="button" className="btn btn-primary btn-lg">Initiate Restroom Break</button>
                                <button type="button" className="btn btn-secondary btn-lg">Return From Restroom</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Break;