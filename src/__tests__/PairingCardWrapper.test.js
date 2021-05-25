import {getByText, render} from '@testing-library/react'
import React from "react";
import PairingCardWrapper from "../components/pairing-card/PairingCardWrapper";
import {BASE} from "../endpoints";

const nock = require('nock');


describe('PairingCardWrapper', () => {

    const pairing = {
        familyName: "Dako",
        givenName: "Andras",
        imageUrl: "https://lh3.googleusercontent.com/a/AATXAJwGqOSdJZfqW9qCy7v-0M-ohyoEqHHZDSFV8FPQ=s96-c",
        language: "Java",
        time: "00:00",
        date: "00:00:00",
        status: "pending"
    }

    nock(BASE, {
        reqheaders: {
            'Content-Type': 'application/json',
            Authorization: 'abc',
        }}).get("/pairings")
        .reply(200, pairing)

    it('should render the pairing card wrapper', () => {
        const {getByText} = render(<PairingCardWrapper/>)
        expect(getByText('Upcoming Pairing')).toBeInTheDocument()
    })

    it('should render the pairing details', () =>{
        const {getByText} = render(<PairingCardWrapper/>)
        expect(getByText('Andras')).toBeInTheDocument()
    })
})