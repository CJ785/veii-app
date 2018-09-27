import React, { Component } from 'react';
import axios from 'axios'
import { Route, Redirect, Link } from 'react-router-dom'
// components
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Navbar from './components/navbar'
import Manager from './components/Manager'
import Employee from './components/Employee'
import EmployeesList from './components/EmployeesList'
import Clock from './components/Clock'


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      rolename: null,
      firstname: null,
      lastname: null,
      onbreak: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.renderConditionalComponent = this.renderConditionalComponent.bind(this)

  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          rolename: response.data.user.rolename,
          firstname: response.data.user.firstname,
          lastname: response.data.user.lastname,
          onbreak: response.data.onbreak,
          
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  renderConditionalComponent() {
    if (this.state.rolename === "Manager") {
      return <Manager />
    } else if (this.state.rolename === "Employee") {
      return <Employee name={`${this.state.firstname} ${this.state.lastname}`} break={this.state.onbreak} />
    }
    else {
      return <Redirect to="/login" />
    }
  }


  render() {
    return (
      <div className="App hel">

        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} name={`${this.state.firstname} ${this.state.lastname}`} />
        {/* greet user if logged in: */}

        {this.state.loggedIn}
        {this.renderConditionalComponent()}
        {/* Routes to different components */}
        <Route
          exact path="/"
        />
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup />}
        />
        <Route
          path="/employee"
          render={() =>
            <EmployeesList />}
        />

      </div>
    );
  }
}

export default App;
