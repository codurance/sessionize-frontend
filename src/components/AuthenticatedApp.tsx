import React from 'react'
import { GoogleLogout } from 'react-google-login';
import PairingCardWrapper from "./pairing-card/PairingCardWrapper";

export const AuthenticatedApp = ({user, logout} : any) => {
  return (
    <>
      <h1>
        {`Hello, ${user.email}!`}
      </h1>
        <PairingCardWrapper/>
      <GoogleLogout
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logout}
      >
      </GoogleLogout>
    </>
  )
}