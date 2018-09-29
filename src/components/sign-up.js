import React, { Component } from 'react'
import axios from 'axios'

class Signup extends Component {
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
			lastnameError: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.validate = this.validate.bind(this)
		this.duplicateName = this.duplicateName.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	duplicateName = () => {
		const usernameError = "There is already a user with that ID in the system, please choose a different ID";
		this.setState({
			usernameError: usernameError
		})
	}

	validate = () => {
		let isError = false;
		const errors = {}
		if (this.state.username.length != 4) {
			isError = true;
			errors.usernameError = "Employee ID must be 4 digits in length"
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
					console.log(response)
					if (!response.data.error) {
						alert("New user successfully created")
						this.setState({
							usernameError: "",
							username: "",
							firstnameError: "",
							firstname: "",
							lastnameError: "",
							lastname: ""
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



	render() {
		const styles = {
			color: "red"
		}
		return (
			<div className="SignupForm">
				<h4>Add User</h4>
				<form className="form-horizontal">
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="username">Employee ID</label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								type="text"
								id="username"
								name="username"
								placeholder="Employee ID"
								value={this.state.username}
								onChange={this.handleChange}
							/>
							<span style={styles}>{this.state.usernameError}</span>
						</div>
					</div>
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="firstname">Firstname</label>
						</div>
						<div className="col-3 col-mr-auto">
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
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="lastname">Lastname</label>
						</div>
						<div className="col-3 col-mr-auto">
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
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label>Employee Role:</label>
						</div>
						<div className="col-3 col-mr-auto">
							<select name="rolename" id="rolename" value={this.state.rolename} onChange={this.handleChange}>
								<option value="Employee">Employee</option>
								<option value="Manager">Manager</option>
							</select>
						</div>

					</div>

					<div className="form-group ">
						<div className="col-7"></div>
						<button
							className="btn btn-primary col-1 col-mr-auto"
							onClick={this.handleSubmit}
							type="submit"
						>Add Employee</button>
					</div>
				</form>
			</div>

		)
	}
}

export default Signup
