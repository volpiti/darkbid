/* eslint-disable react-hooks/exhaustive-deps */
import { gql, useQuery, useSubscription } from "@apollo/client";
import { RouteComponentProps } from "react-router-dom";
import "./Offer.css";
import { FaClock } from "react-icons/fa";
import { GrBitcoin } from "react-icons/gr";
import { PutBid } from "./PutBid";
import Timer from "../Timer/Timer";
import Login from "../../Authentification/Login";
import { AiFillFire } from "react-icons/ai";

type TParams = { id: string };

function Offer({ match }: RouteComponentProps<TParams>) {
  const OFFER = gql`
  query MyQuery {
    Offer(where: {id: {_eq: ${match.params.id}}}) {
      title
      price
      picture
      minimalBid
      id
      fromUserId
      description
      deadline
      currency
      highestBidFrom
    }
  }
  `;

  const PRICE_SUBSCRIPTION = gql`
    subscription priceSubscription {
      Offer(where: { id: { _eq: ${match.params.id} } }) {
        price,
        highestBidFrom
      }
    }
  `;

  const { data: d, loading: l } = useSubscription(PRICE_SUBSCRIPTION, {});

  console.log(d?.Offer[0].price, l);

  const { loading, error, data } = useQuery(OFFER);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const d0 = new Date(data.Offer[0]?.deadline);
  const d1 = new Date();
  const diff = d0.getTime() - d1.getTime();
  console.log(String(data.Offer[0]?.highestBidFrom));
  console.log(localStorage.getItem("user"));

  // const minBid = data?.minimalBid.toString() + " " + data?.currency;
  return (
    <div>
      <div className="offer">
        <img
          className="offer__image"
          src={data.Offer[0]?.picture}
          alt="item in auction"
        />
        <span className="offer__title">{data.Offer[0]?.title}</span>
        <span className="offer__winning">
          {localStorage.getItem("user") ===
          String(d.Offer[0]?.highestBidFrom) ? <span><AiFillFire/> Congrats, wou are winning this offer!</span> 
            : ""
          }
        </span>
        <span className="offer__price">
          <GrBitcoin className="icon" />
          {d?.Offer[0].price} {data.Offer[0]?.currency}
        </span>
        <span className="offer__deadline">
          <FaClock className="icon" />
          <Timer miliseconds={diff} />
          {}
        </span>
        <span className="offer__description">{data.Offer[0]?.description}</span>
      </div>
      {localStorage.getItem("user") !== null ? (
        <PutBid
          id={data.Offer[0]?.id}
          minimalBid={data.Offer[0]?.minimalBid}
          currency={data.Offer[0]?.currency}
          price={d.Offer[0]?.price}
          highestBidFrom={d.Offer[0]?.highestBidFrom}
        />
      ) : (
        <div className="footer">
          <span>You must be Signed In to place bids</span>
        </div>
      )}
    </div>
  );
}

export default Offer;
