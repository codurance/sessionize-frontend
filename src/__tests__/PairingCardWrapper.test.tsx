import {render, waitFor} from '@testing-library/react'
import React from "react";
import PairingCardWrapper from "../components/pairing-card/PairingCardWrapper";

describe('PairingCardWrapper', () => {

    it('should render the pairing card wrapper', async () => {
        const {getByText} = render(<PairingCardWrapper/>)
        await waitFor(() => expect(getByText('Upcoming Pairing')).toBeInTheDocument())
    })

    // it('should render the pairing details',  async () =>{
    //     const {queryByText} = render(<PairingCardWrapper/>)
    //     await waitFor(() => expect(queryByText('Andras')).toBeInTheDocument())
    // })
})

