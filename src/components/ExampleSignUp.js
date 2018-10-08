import React, { Component } from 'react';
import axios from 'axios'
import Select from 'react-select'
import "./Employee/Employee.css"
import Modal from 'react-responsive-modal';


export default class ExampleSignUp extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			usernameError: '',
			password: 'password',
			rolename: "Employee",
			firstname: "",
			firstnameError: '',
			lastname: "",
			lastnameError: '',
			open: false

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.validate = this.validate.bind(this)
		this.duplicateName = this.duplicateName.bind(this)
		this.handleSelectChange = this.handleSelectChange.bind(this)
		this.onOpenModal = this.onOpenModal.bind(this);
		this.onCloseModal = this.onCloseModal.bind(this);
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	//Gets the value of the role assigned to the new user
	handleSelectChange(event) {
		this.setState({
			rolename: event.value
		})
	}

	//In case the chosen user ID is already taken, this informs the manager to enter a different ID
	duplicateName = () => {
		const usernameError = "There is already a user with that ID in the system, please choose a different ID";
		this.setState({
			usernameError: usernameError
		})
	}

	//Validation check on username, firstname, and lastname, all needing to be passed before code is sent to the database
	validate = () => {
		let isError = false;
		const errors = {}
		if (this.state.username.length != 4) {
			isError = true;
			errors.usernameError = "Employee ID must be 4 digits in length"
		}
		else if (isNaN(this.state.username)) {
			isError = true;
			errors.usernameError = "You must enter numbers only"
		}
		else if (this.state.firstname.length < 1) {
			isError = true;
			errors.firstnameError = "You must enter a first name!"
		}
		else if (this.state.lastname.length < 1) {
			isError = true;
			errors.lastnameError = "You must enter a last name!"
		}
		if (isError) {
			this.setState({
				...this.state,
				...errors
			})
		}
		return isError
	}

	handleSubmit(event) {
		event.preventDefault()
		//Validation is checked before form can be submitted to database
		const err = this.validate();

		if (!err) {
			//request to server to add a new username/password
			axios.post('/user/', {
				username: this.state.username,
				password: this.state.password,
				rolename: this.state.rolename,
				firstname: this.state.firstname,
				lastname: this.state.lastname
			})
				.then(response => {
					if (!response.data.error) {
						//If a new user is created, the input fields and error fields are reset so another user can be added
						alert("New user successfully created")
						this.setState({
							usernameError: "",
							username: "",
							firstnameError: "",
							firstname: "",
							lastnameError: "",
							lastname: "",
						})
					} else {
						this.duplicateName();
					}
				}).catch(error => {
					console.log('signup error: ')
					console.log(error)

				})
		}
	}

	onOpenModal = () => {
		this.setState({ open: true });
	};

	onCloseModal = () => {
		this.setState({ open: false });
	};

	render() {
		const styles = {
			color: "red"
		}
		const options = [
			{ name: "rolename", value: 'Employee', label: 'Employee' },
			{ name: "rolename", value: 'Manager', label: 'Manager' }
		]
		return (
			<div>
				<button className="manager" onClick={this.onOpenModal}><p className="gotti">Add Employee</p></button>
				<Modal open={this.state.open} onClose={this.onCloseModal} center>
					<div className="SignupForm add-user" id="add-employee">
						<h3 className="signup-title">Add Employee</h3>
						<form className="form-horizontal signup-form">
							<div className="form-group">

								<div className="col-4 col-mr-auto" >
									<input className="form-input"
										type="text"
										id="username"
										name="username"
										placeholder="ID"
										value={this.state.username}
										onChange={this.handleChange}
									/>
									<span style={styles}>{this.state.usernameError}</span>
								</div>
							</div>
							<br></br>
							<div className="form-group">
								<div className="col-4 col-mr-auto">
									<input className="form-input"
										type="text"
										id="firstname"
										name="firstname"
										placeholder="Firstname"
										value={this.state.firstname}
										onChange={this.handleChange}
									/>
									<span style={styles}>{this.state.firstnameError}</span>
								</div>
							</div>
							<br></br>
							<div className="form-group">
								<div className="col-4 col-mr-auto">
									<input className="form-input"
										type="text"
										id="lastname"
										name="lastname"
										placeholder="Lastname"
										value={this.state.lastname}
										onChange={this.handleChange}
									/>
									<span style={styles}>{this.state.lastnameError}</span>
								</div>
							</div>
							<br></br>
							<div className="form-group">
								<div className="col-4 col-mr-auto">
									<Select placeholder=" Role" onChange={this.handleSelectChange} options={options} />
								</div>
							</div>

							<div className="form-group ">
								<div className="col-12"></div>
								<button
									className=" btn btn-primary signup-button "
									onClick={this.handleSubmit}
									type="submit"
								>Add Employee</button>
							</div>
						</form>
					</div>
				</Modal>
			</div>
		);
	}

}
