import React from "react";
import { Link } from "react-router-dom";
import OfferCard from "../AllOffers/OfferCard";
import "../AllOffers/AllOffers.css";
import { useQuery, gql } from "@apollo/client";
import Login from "../../Authentification/Login";

export const MyOffers = () => {


  const OFFERS = gql`
    query MyQuery {
      Offer (where: {User: {id: {_eq: ${Number(localStorage.getItem('user'))}}}}){
        id
        title
        description
        picture
        price
        deadline
      }
    }
  `;

  interface IOffer {
    id: number,
    title: string,
    picture: string,
    price: number,
    currency: string,
    deadline: Date
  }


  const { loading, error, data } = useQuery(OFFERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (localStorage.getItem("user") === null) {
    return (
      <div className="text">
    <p>You need to be logged in to see your offers</p>
    <p>Wanna login now ? Use the form below. Just simply enter your secret ID</p>
    <Login/>
    
    </div>
    );
  } else {
    return (
      <div className="cards-list">
        {data.Offer.map((o: IOffer) => (
          <Link className="card-area" to={`/offer/${o.id}`} key={o.id}>
            <OfferCard
              key={o.id}
              title={o.title}
              picture={o.picture}
              price={o.price}
              currency={o.currency}
              deadline={o.deadline}
            />
          </Link>
        ))}
        
      </div>
      
      
    );
  }
};
export default MyOffers;
