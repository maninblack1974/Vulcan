
import React from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout"


function UserHeader(props) {
    return (
        <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
        <Link className="h5 my-0 me-md-auto fw-normal" to="/">Vulcan</Link>
        <nav className="my-2 my-md-0 me-md-3">
          {/* <Link className="btn btn-outline-primary" to="/sign-up">Sign-Up</Link>
          <Link className="btn btn-outline-primary" to="/sign-in">Login</Link> */}
          <Link className="btn btn-outline-primary" to="/RegisterPro">Register Pro</Link>
          <Logout/>
        </nav>
      </header>
    )
  }
  
  export default UserHeader;