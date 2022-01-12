import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { Link } from "react-router-dom";
import Login from "../../Authentification/Login";
import "./AddOffer.css";

export const AddOffer = () => {
  const [image, setImage] = useState({});
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [minimalBid, setMinimalBid] = useState("");
  const [deadline, setDeadline] = useState("");
  const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");
  const [currency, setCurrency] = useState("");

  const object = {
      fromUserId: localStorage.getItem("user"),
      title: title || "default title",
      price: price || 10,
      minimalBid: minimalBid || 10,
      deadline: deadline || new Date(),
      picture:  picture || "https://cdn.statically.io/img/www.smarterhealth.sg/wp-content/uploads/sites/3/2020/04/hormon-pertumbuhan-768x460.jpg?quality=90&f=autopg",
      description: description ,
      currency: currency || "Be"
  };

  const POST_OFFER = gql`
    mutation insert_single_article($object: Offer_insert_input!) {
      insert_Offer_one(object: $object) {
        id
        title
      }
    }
  `;

  const [postOfferMutation] = useMutation(POST_OFFER);

  const postOffer = (object: any) => {
    postOfferMutation({
      variables: { object },
      optimisticResponse: true,
    });
  };

  if (localStorage.getItem("user") === null) {
    return (
      <div className="text">
        <p>You must be logged in to add some offers</p>
        <p>Login Now using the form below!</p>
        <Login />
      </div>
    );
  }
  return (
    <form className="form-page">
      <label className="form-page__image">
        <input
          className="upload-image-button"
          type="file"
          onChange={(e) => {
            setImage(e.target.files![0]);
          }}
        />
        <BiImageAdd className="upload-image-icon" />
      </label>

      <input
        className="form-page__text-field form-page__text-field--obligatory title-input"
        type="text"
        placeholder="* Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="form-page__text-field form-page__text-field--obligatory price-input"
        type="number"
        placeholder="* Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        className="form-page__text-field minbid-input"
        type="number"
        placeholder="Minimal bid"
        value={minimalBid}
        onChange={(e) => setMinimalBid(e.target.value)}
      />

      <input
        className="form-page__text-field currency-input"
        type="string"
        placeholder="Currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      />
      <input
        className="form-page__text-field deadline-input"
        type="datetime-local"
        placeholder="Expiration date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />

      <input
        className="form-page__text-field image-url-input"
        type="string"
        placeholder="Or simply drop the url of any picture"
        value={picture}
        onChange={(e) => setPicture(e.target.value)}
      />

      <textarea
        className="form-page__text-field description-input"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <div className="form-page__buttons">
        <Link className="button button--discard" to="/discarded">
          Discard
        </Link>

        <Link  to="/myOffers">
        <input
          className="button button--submit"
          type="button"
          value="List"
          onClick={() => postOffer(object)}
        />
        </Link>
      </div>
      <span className="form-page__message">* Fields marked with an asterisk are mandatory.</span>
    </form>
  );
};

export default AddOffer;
