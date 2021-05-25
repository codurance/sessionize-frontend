import React from 'react'
import { GoogleLogout } from 'react-google-login';
import {PairingCard} from "./PairingCard";

export const AuthenticatedApp = ({user, logout} : any) => {
  return (
    <>
      <h1>
        {`Hello, ${user.email}!`}
      </h1>
        <PairingCard/>
      <GoogleLogout
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logout}
      >
      </GoogleLogout>
    </>
  )
}