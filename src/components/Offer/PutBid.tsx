import { gql, useMutation, } from "@apollo/client";
import { useState } from "react";

interface IPutBid {
  id: number,
  minimalBid: number,
  price: number,
  currency: string,
  highestBidFrom: number,
}



export const PutBid: React.FC<IPutBid>  = (props) => {
  const PUT_BID = gql`
    mutation putBid($id: Int!, $price: Int!, $secondBid: Int!, $highestBidFrom: Int!) {
      update_Offer(where: { id: { _eq: $id } }, _set: { price: $price, secondBid: $secondBid, highestBidFrom: $highestBidFrom }) {
        affected_rows
      }
    }
  `;

  const [putBidMutation] = useMutation(PUT_BID);

  const putBid = (price:number) => {
    putBidMutation({
      variables: { id: props.id, price: price, secondBid: props.price, highestBidFrom: localStorage.getItem("user")},
      optimisticResponse: true,
    });
    
  };

  const [bid, setBid] = useState("");

  return (
    <div className="bid">
      <div className="bid__custom">
        <span className="bid__text">Enter the bid: </span>
        <input
          className="bid__ammount"
          type="number"
          placeholder="Ammount"
          value={bid}
          onChange={(e) => setBid(e.target.value)}
        />
        <input
          className="bid__submit-button"
          type="submit"
          value="Bid"
          onClick={() => (Number(bid) >= props.minimalBid + props.price ? putBid(Number(bid), ): putBid((props.price + props.minimalBid), ))}
        />
      </div>
      <div className="bid__minimal">
        <span className="bid__text">Minimal bid: </span>
        <span className="bid__ammount bid__ammount--min">
          +{props.minimalBid}
        </span>
        <input
          className="bid__submit-button"
          type="submit"
          value="+"
          onClick={() => (putBid(Number(props.price + props.minimalBid), ))}
        />
        
      </div>
    </div>
  );
};
