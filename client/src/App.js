import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Header from './Components/Header';
import Main from './Components/Main';
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import RegisterPro from "./Components/RegisterPro";
import SearchPros from "./Components/SearchPros";
import UserHeader from './Components/UserHeader';
import GuestHeader from './Components/GuestHeader';
import Search from "./Pages/Search";
import Saved from "./Pages/Saved";

function App(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return (
      <Router>
      <UserHeader/>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path="/registerPro" component={RegisterPro} />
            <Route path="/searchpros" component={SearchPros} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route exact path="/search" component={Search}/>
            <Route exact path="/saved" component={Saved}/>
        </Switch>
    </Router>
    )
  } 
  return (
  
      <Router>
        <GuestHeader/>
          <Switch>
              <Route exact path='/' component={Main} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/searchpros" component={SearchPros} />
              <Route path="/registerPro" component={RegisterPro} />
              <Route exact path="/search" component={Search}/>
            <Route exact path="/saved" component={Saved}/>
            </Switch>
      </Router>
  )
}

export default App;


