import {render, waitFor} from '@testing-library/react'
import React from "react";
import {PairingCard} from "../components/pairing-card/PairingCard";



describe('PairingCardWrapper', () => {

     const pairing = {
        name: "Andras Dako",
        imageUrl: "https://lh3.googleusercontent.com/a/AATXAJwGqOSdJZfqW9qCy7v-0M-ohyoEqHHZDSFV8FPQ=s96-c",
        language: "Java",
        time: "00:00",
        date: "00:00:00",
        status: "pending"
    }

    it('should render the pairing details',  async () =>{
        const {queryByText} = render(<PairingCard pairingDetails={pairing}/>)
        await waitFor(() => expect(queryByText('Andras Dako')).toBeInTheDocument())
    })
})

