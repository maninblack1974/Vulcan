import React, { Component } from "react";
import axios from "axios";

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../../Utils/refreshToken';

const clientId =
  '827360591703-tgm50hh32gmsb3af5l2fi5kl8bd0v1j0.apps.googleusercontent.com';

export default class SignUp extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        firstName: "",
        lastname: "",
        email: "",
        password: "",
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
  
    handleInputChange(event) {
      const formType = event.target.id;
      this.setState({
        [formType]: event.target.value,
      });
    }
  
    handleFormSubmit(event) {
      event.preventDefault();
      const {
        firstName,
        lastName,
        email,
        password,
  
      } = this.state;
      const formData = {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": password,
      };
  
  
      console.log("****",formData);
  
      axios.post("/api/sign-up", formData).then((res) => {
        console.log("***********",res.data);
        if (res.data.success) {
          this.setState({
            success: true,
          });
          console.log(this.state.success)
        }
        return this.state.success
      });
    }
  
    renderSuccessMessage() {
      let result = null;
      if (this.state.success) {
        result = (
          <div className="success-message">
            You've officially signed up!
          </div>
        );
      }
  
      return result;
    }
  
    disableForm() {
      let result = false;
      if (this.state.success) {
        result = true;
      }
      return result;
    }

     onSuccess = (res) => {
      console.log('Login Success: currentUser:', res.profileObj);
      // alert(
      //   `Logged in successfully welcome ${res.profileObj.name}`
      // );
  
      refreshTokenSetup(res);
  
    };

     onFailure = (res) => {
      console.log('Login failed: res:', res);
      alert(
        `Failed to login.`
      );
    };

    render() {
      return (
        <div className="container">
        <form onSubmit={this.handleFormSubmit}>
          <fieldset
            className="form-fields container"
            disabled={this.disableForm()}>
            <div className="form-group">
              <label>First Name</label>
                <input 
                type="text" 
                className="form-control" 
                placeholder="Enter email"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label>Last Name</label>
                <input 
                type="text" 
                className="form-control" 
                placeholder="Enter email"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label>Email</label>
                <input 
                type="email" 
                className="form-control" 
                placeholder="Enter email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label>Password</label>
                <input 
                type="password" 
                className="form-control" 
                placeholder="Enter email"
                id="password"
                name="password"
                placeholder="Password"
                onChange={this.handleInputChange} />
            </div>
              <button type="submit" className="btn btn-primary btn-block" value="Submit">Sign Up</button>
              {this.renderSuccessMessage()}
              <p className="forgot-password text-right">
              <a href="/sign-in">Already a member? Sign in</a>
              </p>
              <p>OR</p>
              <div>
              <GoogleLogin
          clientId={clientId}
          buttonText="Sign-up with Google"
          // onSuccess={onSuccess}
          // onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          style={{ marginTop: '100px' }}
          isSignedIn={true}
          uxMode="redirect"
          redirectURI="http://localhost:3000/"
        />
              </div>
          </fieldset>
        </form>
        </div>
      )
    }
  }

  