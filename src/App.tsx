import React, {useState} from 'react';
import {GoogleLoginResponse, GoogleLoginResponseOffline} from "react-google-login";
import {AUTH, BASE_PROD} from "./endpoints";
import {UnauthenticatedApp} from "./components/UnauthenticatedApp";
import {AuthenticatedApp} from "./components/AuthenticatedApp";
import get from "./api/get";


function App() {

  const [user, setUser] = useState<any>(null)
  const [tokenId, setTokenId] = useState<string>("")

  const onAuthenticate = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(response);

    if ("profileObj" in response) {
      setTokenId(response.tokenId)

      get(BASE_PROD + AUTH,
        {
          tokenId: response.tokenId,
        })
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(error => console.log(error))
    }
  }

  const onLogout = () => setUser(null)

  return (user ? <AuthenticatedApp user={user} tokenId={tokenId} logout={onLogout}/> : <UnauthenticatedApp handleLogin={onAuthenticate}/>)
}

export default App;
