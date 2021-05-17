import {getByText, render} from '@testing-library/react'
import App from "../App";
import React from "react";
import userEvent from "@testing-library/user-event";

const nock = require('nock');

describe('App', () => {
    it('should render the button', () => {
        const {getByRole} = render(<App/>)
        expect(getByRole('button', {name: 'Login with Google'})).toBeInTheDocument()
    })
    it('should successfully authenticate', () => {
        nock('http://localhost:8080/')
            .post('auth', {email: "testEmail"})
            .reply(200)
        const {getByText, getByRole} = render(<App/>)
        userEvent.click(getByRole('button', {name: 'Login with Google'}))
        expect(getByText("signedIn")).toBeInTheDocument()
    })
})

