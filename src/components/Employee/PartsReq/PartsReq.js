import React from 'react';

function PartsReq(props) {
    return (
        <div className="container">
            <div className="row" id='hr-page'>
                <div>
                    <h1>PARTS REQUEST</h1>
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
                            <label htmlFor="exampleFormControlSelect2">How fast do you need the parts?
                        </label>
                            <select multiple className="form-control" id="exampleFormControlSelect2">
                                <option>Now</option>
                                <option>Later Today</option>
                                <option>Tomorrow</option>
                                <option>This Week</option>
                                <option>Upcoming Order</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Notes for Parts Dept:</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                        </div>
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label htmlFor="validationCustom01">Part Number</label>
                                <input type="text" className="form-control" id="validationCustom01" placeholder="Part Number" value="" required></input>
                                <div className="valid-feedback">
                                    Looks good!
                            </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="validationCustom02">Brief Description</label>
                                <input type="text" className="form-control" id="validationCustom02" placeholder="Description" value="" required></input>
                                <div className="valid-feedback">
                                    Looks good!
                            </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="validationCustom02">Quantity</label>
                                <input type="text" className="form-control" id="validationCustom02" placeholder="Quantity" value="" required></input>
                                <div className="valid-feedback">
                                    Looks good!
                            </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <input type="text" className="form-control" id="validationCustom01" placeholder="Part Number" value="" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <input type="text" className="form-control" id="validationCustom02" placeholder="Description" value="" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <input type="text" className="form-control" id="validationCustom02" placeholder="Quantity" value="" required></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <input type="text" className="form-control" id="validationCustom01" placeholder="Part Number" value="" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <input type="text" className="form-control" id="validationCustom02" placeholder="Description" value="" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <input type="text" className="form-control" id="validationCustom02" placeholder="Quantity" value="" required></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <input type="text" className="form-control" id="validationCustom01" placeholder="Part Number" value="" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <input type="text" className="form-control" id="validationCustom02" placeholder="Description" value="" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <input type="text" className="form-control" id="validationCustom02" placeholder="Quantity" value="" required></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <input type="text" className="form-control" id="validationCustom01" placeholder="Part Number" value="" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <input type="text" className="form-control" id="validationCustom02" placeholder="Description" value="" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <input type="text" className="form-control" id="validationCustom02" placeholder="Quantity" value="" required></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <input type="text" className="form-control" id="validationCustom01" placeholder="Part Number" value="" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <input type="text" className="form-control" id="validationCustom02" placeholder="Description" value="" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <input type="text" className="form-control" id="validationCustom02" placeholder="Quantity" value="" required></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <input type="text" className="form-control" id="validationCustom01" placeholder="Part Number" value="" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <input type="text" className="form-control" id="validationCustom02" placeholder="Description" value="" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <input type="text" className="form-control" id="validationCustom02" placeholder="Quantity" value="" required></input>
                            </div>
                        </div>
                        <div id="sub/canBtn">
                            <button type="submit" className="btn btn-success">Submit</button>
                            <button type="button" className="btn btn-danger">Clear</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PartsReq;