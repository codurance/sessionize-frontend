import React, {useState} from 'react';
import GoogleLogin, {GoogleLoginResponse, GoogleLoginResponseOffline} from "react-google-login";
import {AUTH, BASE} from "../endpoints";
import post from "../api/post";

function Login() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(response);

    if ("profileObj" in response) {
      post(BASE + AUTH,
        {
          accessToken: response.accessToken,
          body: {email: response.profileObj.email}
        }).then(r => r.status === 200
        ? setIsAuthenticated(true)
        : setIsAuthenticated(false))
        .catch(error => console.log(error));
    }
  }
  return (
    <>
      {
        isAuthenticated ? "signedIn"
          :
          <GoogleLogin
            clientId="614607322794-3d224njddvnkmimjf8hpudt3e1eou3tg.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />}
    </>
  )
}

export default Login;