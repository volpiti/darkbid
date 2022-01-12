/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import "./Offer.css";

type TParams = { id: string };

function Offer({ match }: RouteComponentProps<TParams>) {

  interface IOffer {
    id: number,
    title: string,
    picture: string,
    price: number,
    currency: string,
    minimalBid: number,
    description: string
  }

  const [offer, setOffer] = useState<IOffer>()
  useEffect(() => {
    async function getOffer() {
      const offerRequest = await fetch(`http://localhost:5000/offer/${match.params.id}`);
      const offerData = await offerRequest.json();
      setOffer(offerData);
    }
    getOffer();
  }, []);

  const putBid = async (bidAmmount: string) => {
    await fetch(`http://localhost:5000/putBid/${match.params.id}?bid=${bidAmmount}`, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json",
        "X-User": "2"
      })
    })
}


  const minBid = offer?.minimalBid.toString() + " " + offer?.currency;
  const [bid, setBid] = useState("");

  return (
    <div className="offer">
      <img className="offer__image" src={offer?.picture} alt="item in auction" />
      <span className="offer__title">{offer?.title}</span>
      <span className="offer__price">Price: {offer?.price} {offer?.currency}</span>
      <span className="offer__description">Description: {offer?.description}</span>
      <div className="bid">
        <div className="bid__custom">
          <span className="bid__text">Enter the bid: </span>
          <input className="bid__ammount"
            type="text"
            placeholder="Ammount"
            value={bid}
            onChange={(e) => setBid(e.target.value)}
          />
          <input className="bid__submit-button" type="submit" value="Bid" onClick={() => putBid(bid)} />
        </div>
        <div className="bid__minimal">
          <span className="bid__text">Minimal bid: </span>
          <span className="bid__ammount bid__ammount--min">+{minBid}</span>
          <input className="bid__submit-button" type="submit" value="+" onClick={() => putBid(bid)} />
        </div>
      </div>
    </div>
  );
}

export default Offer;