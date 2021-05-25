import React from "react";
import {PairingDetails} from "./types";

type Props = {
    pairingDetails : PairingDetails
}

export const PairingCard = ({pairingDetails} : Props) => {
    return (
        <>
           <p>Upcoming Pairing</p>
            <p>{pairingDetails.givenName}</p>
        </>
    )
}