import React from 'react';
import { useGoogleLogout } from 'react-google-login';
// import isSignedIn from "../Login"

const clientId =
  '827360591703-tgm50hh32gmsb3af5l2fi5kl8bd0v1j0.apps.googleusercontent.com';

const LogoutHooks = (props) => {
  const onLogoutSuccess = (res) => {
    window.location.reload();
    console.log('Logged out Success');
    // alert('Logged out Successfully ✌');
  };
  
  const onFailure = () => {
    console.log('Handle failure cases');
  };
  
  const { signOut } = useGoogleLogout ({
    clientId,
    onLogoutSuccess,
    onFailure,
  });
  
  return (
    console.log("**** client/src/Components/Logout"),
    <button onClick={signOut} className="btn btn-outline-primary btn-sm">
      Sign out
    </button>
  );
};

export default LogoutHooks;