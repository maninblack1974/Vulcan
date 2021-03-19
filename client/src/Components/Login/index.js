import React, {Component} from 'react';
import axios from "axios"
import LoginButton from "../LoginButton"
import LogoutButton from "../LogoutButton"
// import { Redirect } from "react-router-dom"
// import AuthContext from "../../Utils/AuthContext"

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../../Utils/refreshToken';

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
        this.props.setAuth(true);
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
    // alert(
    //   `Logged in successfully welcome ${res.profileObj.name}`
    // );
    this.props.setAuth(true);
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
      <div className="container-sm">
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
      <div>
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
      </div>
      </fieldset>
      </form>
      </div>
    );
  } 
}

//Login.contextType = AuthContext

export default Login