import React from "react"

const AuthContext = React.createContext({
    isLoggedIn: false,
    setLoginState: () => { }
  });
  
export default AuthContext