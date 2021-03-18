import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Header from './Components/Header';
import Main from './Components/Main';
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import RegisterPro from "./Components/RegisterPro";
import SearchPros from "./Components/SearchPros";
import UserHeader from './Components/UserHeader';
import GuestHeader from './Components/GuestHeader';
import AuthContext from "./Utils/AuthContext"
import React, {Component, useState, useEffect} from "react";

export default class App extends Component {
  static contentType = AuthContext

  constructor(props) {
    super(props);

    // this.state = {
    //   isLoggedIn: false,
    // };

  }


    render () {
      let isLoggedIn = this.context;
      if (isLoggedIn) {
        console.log(isLoggedIn)
      return (
        <Router>
            <UserHeader/>
              <Switch>
                  <Route exact path='/' component={Main} />
                  <Route path="/registerPro" component={RegisterPro} />
                  <Route path="/searchpros" component={SearchPros} />
                  {/* <Route path="/sign-in" component={Login} />
                  <Route path="/sign-up" component={SignUp} /> */}
              </Switch>
        </Router>
      )
    } else {
      console.log(isLoggedIn)
      return (
        <Router>
            <GuestHeader/>
              <Switch>
                  <Route exact path='/' component={Main} />
                  {/* <Route path="/registerPro" component={RegisterPro} />
                  <Route path="/searchpros" component={SearchPros} /> */}
                  <Route path="/sign-in" component={Login} />
                  <Route path="/sign-up" component={SignUp} />
              </Switch>
        </Router>
      )
    }
    }
}

  // if (this.state.isLoggedIn) {
  //       render (); {
  //         return (
  //         // <AuthContext.Provider value={AuthContext}>
  //         <Router>
  //           <UserHeader/>
  //             <Switch>
  //                 <Route exact path='/' component={Main} />
  //                 <Route path="/registerPro" component={RegisterPro} />
  //                 <Route path="/searchpros" component={SearchPros} />
  //                 <Route path="/sign-in" component={Login} />
  //                 <Route path="/sign-up" component={SignUp} />
  //             </Switch>
  //       </Router>
  //       // </AuthContext.Provider>
  //       )
  //     }
  //     } else  
  //     render(); {
  //       return (
  //       // <AuthContext.Provider value="false">
  //         <Router>
  //           <GuestHeader/>
  //             <Switch>
  //                 <Route exact path='/' component={Main} />
  //                 <Route path="/sign-in" component={Login} />
  //                 <Route path="/sign-up" component={SignUp} />
  //                 <Route path="/searchpros" component={SearchPros} />
  //                 <Route path="/registerPro" component={RegisterPro} />
  //               </Switch>
  //         </Router>
  //         // </AuthContext.Provider>
  //       )
  //       }
  //   }
  // }


    

// function App() {
// // function App(props) {

//   const [authState, setAuthState] = 
//   useState({
//     isLoggedIn: true,
//     })
    
//   // const isLoggedIn = props.isLoggedIn;
//   if (AuthContext.provider = {isLoggedIn}) {
//     return (
//       <AuthContext.Provider value={AuthContext}>
//       <Router>
//         <UserHeader/>
//           <Switch>
//               <Route exact path='/' component={Main} />
//               <Route path="/registerPro" component={RegisterPro} />
//               <Route path="/searchpros" component={SearchPros} />
//               <Route path="/sign-in" component={Login} />
//               <Route path="/sign-up" component={SignUp} />
//           </Switch>
//     </Router>
//     </AuthContext.Provider>
//     )
//   } 
//   return (
//     <AuthContext.Provider value="false">
//       <Router>
//         <GuestHeader/>
//           <Switch>
//               <Route exact path='/' component={Main} />
//               <Route path="/sign-in" component={Login} />
//               <Route path="/sign-up" component={SignUp} />
//               <Route path="/searchpros" component={SearchPros} />
//               <Route path="/registerPro" component={RegisterPro} />
//             </Switch>
//       </Router>
//       </AuthContext.Provider>
//   )
// }

// export default App;
