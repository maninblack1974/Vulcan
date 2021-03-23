import React, { Component } from "react";
import axios from "axios";
import styled from 'styled-components';
import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../../Utils/refreshToken';

const SignupPage = styled.div`
margin: 0 auto 0 auto;
@media (min-width: 482px) {
  max-width: 449px;
}

@media (min-width: 701px) {
  max-width: 668px;
}

@media (min-width: 1026px) {
  max-width: 946px;
}
> h1 {
  color: #7D7B6D;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  text-align: center;
  margin-top: 34px;
  margin-bottom: 24px;
  @media (max-width: 701px) {
    margin-top: 100px;
  }
}
> form {
  background-color: #7D7B6D;
  border: 1px solid #e9eced;
  border-radius: 4px;
  padding: 32px 72px 40px;
  margin-bottom: 40px;
  margin: auto;
  @media (max-width: 701px) {
    border: none;
  }
  > input {
    width: 100%;
    background-color: #fff;
    border: 1px solid #d3d4d5;
    border-radius: 4px;
    padding: 13px 15px;
    font-size: 16px;
    vertical-align: middle;
    line-height: 24px;
    margin: 0 0 5px;
  }
  > label {
    color: #FFE033;
    display: block;
    margin: 4px 0 4px 0;
    font-weight: 700;
  }
  > p {
    text-align: center;
    margin-top: 16px;
    font-size: 12px;
    line-height: 18px;
  }
  > button {
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    cursor: pointer;
    margin: 0;
    line-height: 24px;
    font-size: 16px;
    font-weight: 700;
    margin: 10px 0 0 0;
    user-select: none;
    border-radius: 4px;
    padding: 12px 22px;
    overflow: visible;
    background-color: #FFE033;
    border: 2px solid transparent;
    color: #7D7B6D;
  }
  > div {
    display: flex;
    align-items: center;
    font-weight: 400;
    color: #676d73;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  a {
    color: #009fd9;
    fill: #009fd9;
    cursor: pointer;
  }
}
`;
const SignupChoice = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 400;
  margin-top: 16px;
  margin-bottom: 16px;
  :before {
    content: '';
    display: block;
    flex: 1;
    background: #e9eced;
    height: 1px;
    z-index: 1;
  }
  :after {
    content: '';
    display: block;
    flex: 1;
    background: #e9eced;
    height: 1px;
    z-index: 1;
  }
  > span {
    color: #FFE033;
    margin: 0 10px 0 10px;
  }
`;

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
  
  
      console.log("****",this.props);
  
      axios.post("/api/sign-up", formData).then((res) => {
        console.log("******SIGN-UP!*****",res);
        if (res.data) {
          // this.setState({
          //   success: true,
          // });
          // console.log(this.state.success);
        //   this.props.setAuth(true);
        //   this.props.setUser(res.data.id);
        // localStorage.setItem('user',res.data.id);
        
        axios.post("/api/login", formData).then((res) => {
          console.log("*****LOGGED IN!******",res);
          if (res.data) {
            // this.setState({
            //   success: true,
            //   // isLoggedIn: true,
            // });
            localStorage.setItem('user',res.data.id);
            console.log(res.data);
            this.props.setAuth(true);
            this.props.setUser(res.data.id);
          } 
        });
        }
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
      console.log(res.profileObj.email)
      const {
        firstName,
        lastName,
        email,
        password,
  
      } = this.state;
      const formData = {
        "firstName": res.profileObj.givenName,
        "lastName": res.profileObj.familyName,
        "email": res.profileObj.email,
        "password": res.profileObj.givenName
      };

      axios.post("/api/sign-up", formData).then((res) => {
        console.log("******SIGN-UP!*****",res);
        if (res.data) {
          // this.setState({
          //   success: true,
          // });
          // console.log(this.state.success);
        //   this.props.setAuth(true);
        //   this.props.setUser(res.data.id);
        // localStorage.setItem('user',res.data.id);
        
        axios.post("/api/login", formData).then((res) => {
          console.log("*****LOGGED IN!******",res);
          if (res.data) {
            // this.setState({
            //   success: true,
            //   // isLoggedIn: true,
            // });
            localStorage.setItem('user',res.data.id);
            console.log(res.data);
            this.props.setAuth(true);
            this.props.setUser(res.data.id);
          } 
        });
        }
      });




      // this.props.setAuth(true);
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
        <SignupPage>
          <h1>Account Creation</h1>
          <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="first_name">First Name</label>
            <input
              onChange={this.handleInputChange}
              name="firstName"
              id="first_name"
              type="text"
            />
            <label htmlFor="last_name">Last Name</label>
            <input
              onChange={this.handleInputChange}
              name="lastName"
              id="last_name"
              type="text"
            />
            <label htmlFor="email">Email address</label>
            <input
              onChange={this.handleInputChange}
              name="email"
              type="text"
              id="email"
            />
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleInputChange}
              name="password"
              type="password"
              id="password"
            />
            <button type="submit">Create account</button>
            <SignupChoice>
              <span>OR</span>
            </SignupChoice>
{/*          <fieldset
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
<div>*/}
            <GoogleLogin
              clientId={clientId}
              buttonText="Log In with Google"
              onSuccess={this.onSuccess}
              onFailure={this.onFailure}
              cookiePolicy={'single_host_origin'}
              style={{ marginTop: '100px' }}
              isSignedIn={true}
          // uxMode="redirect"
          // redirectURI="http://localhost:3000/"
        />
{/*              </div>
</fieldset>*/}
        </form>
{/*        </div>*/}
        </SignupPage>
      )
    }
  }

  