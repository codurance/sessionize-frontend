import React, {useEffect, useState} from "react";
import {PairingCard} from "./PairingCard";
import get from "../../api/get";
import {BASE} from "../../endpoints";

const PairingCardWrapper = () => {
    const [pairing, setPairing] = useState(null)
    useEffect(() => {
        get(BASE + "/pairings", "abc")
            .then(res => res.json())
            .then(data => setPairing(data))
            .catch(error => console.log(error))
    }, [get])
    return (
        <>
            {pairing && <PairingCard pairingDetails={pairing}/>}
        </>
    )
}
export default PairingCardWrapper