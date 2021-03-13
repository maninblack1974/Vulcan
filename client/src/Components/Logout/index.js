import React from 'react';
import { useGoogleLogout } from 'react-google-login';
// import isSignedIn from "../Login"

const clientId =
  '827360591703-tgm50hh32gmsb3af5l2fi5kl8bd0v1j0.apps.googleusercontent.com';

  function LogoutHooks() {
    const onLogoutSuccess = (res) => {
      console.log('Logged out Success');
      // alert('Logged out Successfully ✌');
    };
  
    const onFailure = () => {
      console.log('Handle failure cases');
    };
  
    const { signOut } = useGoogleLogout({
      clientId,
      onLogoutSuccess,
      onFailure,
    });
  
    return (
      <button onClick={signOut} className="btn btn-outline-primary btn-sm">
        Sign out
      </button>
    );
  }

export default LogoutHooks;




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