import React, {useEffect, useState} from "react";
import {PairingCard } from "./PairingCard";
import get from "../../api/get";
import {BASE_PROD} from "../../endpoints";
import {PairingDetails} from "./types";

type StateProps = PairingDetails | null

const PairingCardWrapper = ({email, tokenId} : any) => {
    const [pairings, setPairings] = useState<Array<StateProps> | []>([])

    useEffect(() => {
        get(`${BASE_PROD}/pairings?email=${email}`, {tokenId: tokenId})
            .then(res => res.json())
            .then(data => setPairings(data))
            .catch(error => console.log(error))
    }, [tokenId])

    if (pairings.length > 1) {
        return (
            <>
                {
                    pairings.map((pairing:any) =>
                        <PairingCard pairingDetails={pairing}/>
                    )

                }
            </>
        )
    }

    return (
        <>


        </>
    )
}
export default PairingCardWrapper