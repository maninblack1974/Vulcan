import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
// import Header from './Components/Header';
import Main from './Components/Main';
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import RegisterPro from "./Components/RegisterPro";
import SearchPros from "./Components/SearchPros";
import UserHeader from './Components/UserHeader';
import GuestHeader from './Components/GuestHeader';
import React, {Component, useState, useEffect} from "react";
import Saved from "../src/Pages/Saved"
import Search from "../src/Pages/Search"
import UpdatePro from "../src/Components/UpdatePro"


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setLoggedInUser] = useState("")

  const setUser = (isUser) => {
    setLoggedInUser(isUser)
  }

  const setAuth = (isAuth) => {
    console.log("we should be rerendering ...");
    setIsLoggedIn(isAuth);
  }

  const renderheader = () => {
    let result = null;
    
    if (isLoggedIn) {
      result = (
        <UserHeader/>
      );
    } else {
      result = (
        <GuestHeader/>
      );
    }

    return result;
  }

    return (

      <Router>
        {renderheader()}
        <Switch>
            <Route exact path="/"><SearchPros/></Route>
            <Route path="/registerPro" component={RegisterPro} setUser={setUser} setAuth={setAuth}/>
            {/* <Route path="/search" component={Search} />
            <Route path="/saved" component={Saved} /> */}
            <Route path="/update" component={UpdatePro}
            setUser={setUser}/>
            {/* <Route path="/searchpros" component={SearchPros} /> */}
             <Route path="/sign-in">
                  {isLoggedIn ? <Redirect to="/"/> : <Login setAuth={setAuth} setUser={setUser}/>}
            </Route> 
              <Route path="/sign-up" component={SignUp} >
                {isLoggedIn ? <Redirect to="/registerPro"/> : <SignUp setAuth={setAuth} setUser={setUser}/>}
            </Route>
        </Switch>
    </Router>
    )
}

export default App;

