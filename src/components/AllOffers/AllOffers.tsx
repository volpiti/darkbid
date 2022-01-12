import React from "react";
import { Link } from "react-router-dom";
import OfferCard from "./OfferCard";
import "./AllOffers.css";
import { useQuery, gql } from "@apollo/client";

export const AllOffers = () => {


  const OFFERS = gql`
    query MyQuery {
      Offer {
        title
        description
        picture
        price
        id
        deadline
        currency
      }
    }
  `;


  interface IOffer {
    id: number;
    title: string;
    picture: string;
    price: number;
    currency: string;
    deadline: Date;
    
  }

  const { loading, error, data } = useQuery(OFFERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    
  return (
    <div className="cards-list">
      {data.Offer.map((o: IOffer) => (
        <Link className="card-area" to={`/offer/${o.id}`} key={o.id}>
          <OfferCard
            title={o.title}
            picture={o.picture}
            price={o.price}
            currency={o.currency}
            deadline={o.deadline}
          />
          
        </Link>
      ))}
       <div className="footer">
        <span>Wanna add your own offer?</span>
        <Link className="footer__button" to="/addoffer">Click here!</Link>
      </div>

    </div>
  );
};
export default AllOffers;
