import {getByText, render} from '@testing-library/react'
import React from "react";
import {PairingCard} from "../components/PairingCard";

const nock = require('nock');


describe('PairingCard', () => {
    // pairing: {
    //     familyName: "Dako",
    //         givenName: "Andras",
    //         imageUrl: "https://lh3.googleusercontent.com/a/AATXAJwGqOSdJZfqW9qCy7v-0M-ohyoEqHHZDSFV8FPQ=s96-c",
    //         name: "Andras Dako",
    //         email: "andras.dako@codurance.com",
    //         language: "Java",
    //         time: "00:00",
    //         date: "00:00:00",
    //         status: "pending",
    // }

    it('should render the display', () => {
        const {getByText} = render(<PairingCard/>)
        expect(getByText('Upcoming Pairing')).toBeInTheDocument()
    })
})