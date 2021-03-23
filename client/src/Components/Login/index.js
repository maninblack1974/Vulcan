import React, {Component} from 'react';
import axios from "axios"
import styled from 'styled-components';
import LoginButton from "../LoginButton"
import LogoutButton from "../LogoutButton"
// import { Redirect } from "react-router-dom"
// import AuthContext from "../../Utils/AuthContext"

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../../Utils/refreshToken';

const LoginPage = styled.div`
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
const LoginComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2px 0;
  color: #FFE033;
  > div {
    display: flex;
    align-items: center;
    > input {
      height: 25px;
      width: 25px;
      margin: 0 10px 0 0;
      background: #ffffff;
      border: 2px solid #d3d4d5;
    }
  }
  > a {
    color: #FFE033;
    text-decoration: none;
  }
  > a:link {
    color: #FFE033;
  }
`;
const LoginChoice = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 400;
  color: #676d73;
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

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    //this.state = {isLoggedIn: false}
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
      email,
      password,

    } = this.state;
    const formData = {
      "email": email,
      "password": password,
    };

    console.log("****",this.props);
    // this.setState({isLoggedIn: true})

    // let isLoggedIn = this.context.isLoggedIn

    axios.post("/api/login", formData).then((res) => {
      console.log("*****LOGGED IN!******",res);
      if (res.data) {
        // this.setState({
        //   success: true,
        //   // isLoggedIn: true,
        // });
        console.log(res.data);
        this.props.setAuth(true);
        this.props.setUser(res.data.id);
        localStorage.setItem('user',res.data.id);
      } 
    });
  }
  
  renderSuccessMessage() {
    let result = null;
    if (this.state.success) {
      this.context.update({ isLoggedIn: true})
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
      const {
        email,
      } = this.state;
      const formData = {
        "email": res.profileObj.email,
      };
     console.log(formData)
    
    axios.post("/api/gusers", formData).then((res) => {
      console.log("*****google-login-test!******",res.data);
      localStorage.setItem('user',res.data[0].id);
      this.props.setAuth(true);
      
    });
 


    
    
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
        <LoginPage>
        <h1>Welcome Back</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={this.handleInputChange}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={this.handleInputChange}
          />
          <button type="submit">Login</button>
          {this.renderSuccessMessage()}
          <LoginComponent>
            <a href="/sign-up">Forgot password?</a>
            <a href="/sign-up">Create an account?</a>
          </LoginComponent>
          <LoginChoice>
            <span>OR</span>
          </LoginChoice>
{/*      <div className="container-sm">
      <form onSubmit={this.handleFormSubmit}>
          <fieldset
            className="form-fields container"
            disabled={this.disableForm()}>
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
              <button type="submit" className="btn btn-primary btn-block" value="Submit">Sign In</button>
              {this.renderSuccessMessage()}
              <p className="forgot-password text-right">
              <a href="/sign-up">New? Create an account</a>
              <br></br>
              <a href="/sign-up">Forgot password</a>
              </p>
      <p>OR</p>
      <div>*/}
        <GoogleLogin
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
          cookiePolicy={'single_host_origin'}
          style={{ marginTop: '100px' }}
          isSignedIn={true}
          
          // uxMode="redirect"
          // redirectURI="http://localhost:3000"
        />
{/*      </div>
</fieldset>*/}
      </form>
    </LoginPage>
    );
  } 
}

//Login.contextType = AuthContext

export default Login