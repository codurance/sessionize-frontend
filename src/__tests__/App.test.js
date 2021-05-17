import {getByText, render} from '@testing-library/react'
import App from "../App";
import React from "react";
import userEvent from "@testing-library/user-event";

const nock = require('nock');

describe('App', () => {


    jest.mock("react-google-login", () => ({
        profileObj: {
            email: "andras.dako@codurance.com",
            familyName: "Dako",
            givenName: "Andras",
            googleId: "108600738721139660571",
            imageUrl: "https://lh3.googleusercontent.com/a/AATXAJwGqOSdJZfqW9qCy7v-0M-ohyoEqHHZDSFV8FPQ=s96-c",
            name: "Andras Dako"
        }
    }))

    it('should render the button', () => {
        const {getByRole} = render(<App/>)
        expect(getByRole('button', {name: 'Login with Google'})).toBeInTheDocument()
    })

    /*
    it('should successfully authenticate', () => {
        nock('http://localhost:8080')
            .post('/auth', {email: "testEmail"})
            .reply(200)
        const {getByText, getByRole} = render(<App/>)
        userEvent.click(getByRole('button', {name: 'Login with Google'}))
        expect(getByText("signedIn")).toBeInTheDocument()
    })
     */
})

