import React from "react";
import {PairingDetails} from "./types";
import Card from "react-bootstrap/Card";
import {ListGroup, ListGroupItem} from "react-bootstrap";

type Props = {
    pairingDetails : PairingDetails
}

export const PairingCard = ({pairingDetails} : Props) => {
    return (
        <>

            <Card style={{ width: '18rem' }}>
                {/*<Card.Img variant="top" style={{ height: '18vw' }} src={pairingDetails.imageUrl} />*/}
                <Card.Body>
                    <Card.Title>{pairingDetails.givenName} {pairingDetails.familyName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Upcoming Pairing</Card.Subtitle>
                    <Card.Text>
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Language: {pairingDetails.language}</ListGroupItem>
                        <ListGroupItem>Date {pairingDetails.date} <br/>
                            Time  {pairingDetails.time}
                        </ListGroupItem>
                        <ListGroupItem>Status: {pairingDetails.status}</ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
        </>
    )
}