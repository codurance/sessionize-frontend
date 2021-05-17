import React, {useState} from 'react';
import {GoogleLoginResponse, GoogleLoginResponseOffline} from "react-google-login";
import post from "./api/post";
import {AUTH, BASE} from "./endpoints";
import {UnauthenticatedApp} from "./components/UnauthenticatedApp";
import {AuthenticatedApp} from "./components/AuthenticatedApp";


function App() {

  //TODO: sort out types
  const [user, setUser] = useState<any>(null)

  const onAuthenticate = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(response);

    if ("profileObj" in response) {
      post(BASE + AUTH,
        {
          accessToken: response.accessToken,
          body: {email: response.profileObj.email}
        })
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(error => console.log(error))
    }
  }

  const onLogout = () => setUser(null)

  return user ? <AuthenticatedApp user={user} logout={onLogout}/> : <UnauthenticatedApp handleLogin={onAuthenticate}/>
}

export default App;
