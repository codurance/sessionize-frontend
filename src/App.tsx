import React from 'react';
import GoogleLogin, {GoogleLoginResponse, GoogleLoginResponseOffline} from "react-google-login";


function App() {

  const responseGoogle = (response : GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(response);
  }

  return (
    <div className="App">
        <GoogleLogin
          clientId="614607322794-3d224njddvnkmimjf8hpudt3e1eou3tg.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
    </div>
  );
}

export default App;
