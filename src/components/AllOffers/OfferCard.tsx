import React from "react";
import "./OfferCard.css";
import { FaClock } from "react-icons/fa";
import { GrBitcoin } from "react-icons/gr";

interface IOfferCardProps {
  title: string;
  picture: string;
  price: number;
  currency: string;
  deadline: Date;
}


const OfferCard: React.FC<IOfferCardProps> = (props) => {
  const d = new Date(props.deadline)
  return (
    <div className="card">
      <div className="image-area">
        <img className="image-area__image" src={props.picture} alt="item in auction" />
      </div>
      <span className="text-format title">{props.title}</span>
      <span className="text-format price">
        <GrBitcoin className="card__icon"/>
        {props.price} {props.currency}
      </span>
      <span className="text-format deadline">
        <FaClock className="card__icon"/>
     
        <span>
          {Intl.DateTimeFormat(undefined, {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
          }).format(d)}
        </span>

      </span>
    </div>
  );
};

export default OfferCard;
