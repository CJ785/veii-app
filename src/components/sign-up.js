import React, { Component } from 'react'
import axios from 'axios'
import Select from 'react-select'
import "./Employee/Employee.css"

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: 'password',
			rolename: "Employee",
			firstname: "",
			lastname: "",
			departments : [
				{ value: 'Employee', label: 'Employee' },
				{ value: 'Manager', label: 'Manager' }
			]
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault()

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
					console.log('successful signup')
					this.setState({
						username: "",
						firstname: "",
						lastname: ""
					})
				} else {
					alert("I'm sorry, there's already a user with that username")
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


	render() {
		return (
			<div className="SignupForm add-user">
				<h3 className="signup-title">Add Employee</h3>
				<form className="form-horizontal signup-form">
					<div className="form-group">
						
						<div className="col-4 col-mr-auto">
							<input className="form-input"
								type="text"
								id="username"
								name="username"
								placeholder="ID"
								value={this.state.username}
								onChange={this.handleChange}
							/>
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
						</div>
					</div>
					<br></br>
					<div className="form-group">
						<div className="col-4 col-mr-auto">
						<Select placeholder=" Role" value={this.state.rolename} onChange={this.handleChange} options={this.state.departments} />
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

		)
	}
}

export default Signup
