import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
// import Header from './Components/Header';
import Main from './Components/Main';
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import RegisterPro from "./Components/RegisterPro";
import SearchPros from "./Components/SearchPros";
import UserHeader from './Components/UserHeader';
import GuestHeader from './Components/GuestHeader';
import Search from "./Pages/Search";
import Saved from "./Pages/Saved"
import React, {Component, useState, useEffect} from "react";



function App() {
  //const isLoggedIn = props.isLoggedIn;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  //if (isLoggedIn) {
    return (
      <Router>
        {renderheader()}
        <Switch>
              
            <Route exact path="/"><Main/></Route>
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

             <Route path="/sign-in">
                  {isLoggedIn ? <Redirect to="/"/> : <Login setAuth={setAuth}/>}
            </Route> 
              <Route path="/sign-up" component={SignUp} >
                {isLoggedIn ? <Redirect to="/registerPro"/> : <SignUp setAuth={setAuth}/>}
            </Route>
        </Switch>
    </Router>
    )
}

export default App;

// class App extends Component {
//   static contentType = AuthContext

//   constructor(props) {
//     super(props);

//     this.state = {
//       isLoggedIn: false,
//     };

//   }

//     render () {
//       let isLoggedIn = this.context.isLoggedIn;
//       if (isLoggedIn === true) {
//         console.log(isLoggedIn)
//       return (
//         <AuthContext.Provider value={{isLoggedIn: this.state.isLoggedIn,
//           setLoginState: (loginState) => {
//             this.setState({
//               isLoggedIn:loginState
//             })
//           }
//         }}>
//         <Router>
//             <UserHeader/>
//               <Switch>
//                   <Route exact path='/' component={Main} />
//                   <Route path="/registerPro" component={RegisterPro} />
//                   <Route path="/searchpros" component={SearchPros} />
//                   {/* <Route path="/sign-in" component={Login} />
//                   <Route path="/sign-up" component={SignUp} /> */}
//               </Switch>
//         </Router>
//         </AuthContext.Provider>
//       )
//     }  {
//       console.log(isLoggedIn)
//       return (
//         <AuthContext.Provider value={{
//           isLoggedIn: this.state.isLoggedIn,
//           setLoginState: (loginState) => {
//             this.setState({
//               isLoggedIn:loginState
//             })
//           }
//         }}>
//         <Router>
//             <GuestHeader/>
//               <Switch>
//                   <Route exact path='/' component={Main} />
//                   {/* <Route path="/registerPro" component={RegisterPro} />
//                   <Route path="/searchpros" component={SearchPros} /> */}
//                   <Route path="/sign-in" component={Login} />
//                   <Route path="/sign-up" component={SignUp} />
//               </Switch>
//         </Router>
//         </AuthContext.Provider>

//       )
//     }
//     }
// }

// App.contextType = AuthContext

// export default App

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
