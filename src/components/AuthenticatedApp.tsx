import React from 'react'
import { GoogleLogout } from 'react-google-login';
import PairingCardWrapper from "./pairing-card/PairingCardWrapper";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export const AuthenticatedApp = ({user, tokenId, logout} : any) => {
  return (
    <>
        <Container>
            <Row>
                <h1>
                    {`Hello, ${user.email}!`}
                </h1>
            </Row>
            <Row>
                <PairingCardWrapper tokenId = {tokenId}/>
            </Row>

        </Container>

      <GoogleLogout
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logout}
      >
      </GoogleLogout>
    </>
  )
}