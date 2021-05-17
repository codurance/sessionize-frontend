import React, {useState} from 'react';
import GoogleLogin, {GoogleLoginResponse, GoogleLoginResponseOffline} from "react-google-login";
const base_url = "http://localhost:8080/";
const auth_url = "auth"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const responseGoogle = (response : GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(response);
    if ("profileObj" in response) {
      fetch(base_url + auth_url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({email : response.profileObj.email})
      }).then(r => r.status === 200
          ? setIsAuthenticated(true)
          : setIsAuthenticated(false))
          .catch(error => console.log(error));
    }

  }

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
