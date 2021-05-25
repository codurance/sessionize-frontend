import React from "react";

interface PairingDetails {
    familyName: string,
    givenName: string,
    imageUrl: string,
    language: string,
    time: string,
    date: string,
    status: string
}

type PairingCardProps = PairingDetails

export const PairingCard = ({pairingDetails} : any) => {
    return (
        <>
           <p>Upcoming Pairing</p>
            <p>{pairingDetails.givenName}</p>
        </>
    )
}