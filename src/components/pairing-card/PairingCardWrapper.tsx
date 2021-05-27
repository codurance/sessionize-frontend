import React, {useEffect, useState} from "react";
import {PairingCard } from "./PairingCard";
import get from "../../api/get";
import {BASE} from "../../endpoints";
import {PairingDetails} from "./types";

type StateProps = PairingDetails | null

type PairingCardProps = {
    tokenId: string,
}

const PairingCardWrapper = ({tokenId} : PairingCardProps) => {

    const [pairing, setPairing] = useState<StateProps>(null)

    useEffect(() => {
        get(BASE + "/pairings", {tokenId: tokenId})
            .then(res => res.json())
            .then(data => setPairing(data))
            .catch(error => console.log(error))
    }, [tokenId])

    return (
        <>
            {pairing && <PairingCard pairingDetails={pairing}/>}
        </>
    )
}
export default PairingCardWrapper