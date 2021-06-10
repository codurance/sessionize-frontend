import {render, waitFor} from '@testing-library/react'
import React from "react";
import PairingCardWrapper from "../components/pairing-card/PairingCardWrapper";
import {PairingCard} from "../components/pairing-card/PairingCard";
import {pairing} from "../__mocks__/pairing";

describe('PairingCardWrapper', () => {
    it('should render the pairing details',  async () =>{
        const {queryByText} = render(<PairingCard pairingDetails={pairing}/>)
        await waitFor(() => expect(queryByText('Andras Dako')).toBeInTheDocument())
    })
})

