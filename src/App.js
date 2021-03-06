import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Components/Header';
import Main from './Components/Main';
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

function App() {
  return (
  
  <Router>
      <Header/>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
    </Router>
  );
}

export default App;
