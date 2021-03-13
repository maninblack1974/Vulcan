import { React } from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../../Utils/refreshToken';

const clientId =
  '827360591703-tgm50hh32gmsb3af5l2fi5kl8bd0v1j0.apps.googleusercontent.com';

// var isSignedIn = false;

function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    // alert(
    //   `Logged in successfully welcome ${res.profileObj.name}`
    // );

    refreshTokenSetup(res);

  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login.`
    );
  };


 
    return (
      <div>
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          style={{ marginTop: '100px' }}
          isSignedIn={true}
        />
      </div>
    );
} 


  


export default Login;




// import React, { Component } from "react";

// export default class Login extends Component {
//     render() {
//         return (
//             <form>
//                 <h3>Sign In</h3>

//                 <div className="form-group">
//                     <label>Email address</label>
//                     <input type="email" className="form-control" placeholder="Enter email" />
//                 </div>

//                 <div className="form-group">
//                     <label>Password</label>
//                     <input type="password" className="form-control" placeholder="Enter password" />
//                 </div>

//                 <div className="form-group">
//                     <div className="custom-control custom-checkbox">
//                         <input type="checkbox" className="custom-control-input" id="customCheck1" />
//                         <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
//                     </div>
//                 </div>

//                 <button type="submit" className="btn btn-primary btn-block">Submit</button>
//                 <p className="forgot-password text-right">
//                     Forgot <a href="#">password?</a>
//                 </p>
//             </form>
//         );
//     }
// }