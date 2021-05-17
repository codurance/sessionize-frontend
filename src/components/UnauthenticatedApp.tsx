import React from 'react';
import GoogleLogin from "react-google-login";

export const UnauthenticatedApp = ({handleLogin} : any) => {
  return (
    <>
      <GoogleLogin
        clientId="614607322794-3d224njddvnkmimjf8hpudt3e1eou3tg.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={'single_host_origin'}
      />
    </>
  )
}