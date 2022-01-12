import React, { useState } from "react";
import "./App.css";
import SignIn from "./components/SigIn/SignIn";
import AllOffers from "./components/AllOffers/AllOffers";
import Offer from "./components/Offer/Offer";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Menu from "./components/Menu/Menu";
import AddOffer from "./components/AddOffer/AddOffer";
import MyOffers from "./components/MyOffers/MyOffers";
import About from "./components/About/About";
import { ApolloProvider } from "@apollo/client";
import client from "./Authentification/auth"
import Settings from "./components/Settings/Settings";
import Discarded from "./components/AddOffer/Discarded";
import Support from "./components/Support/Support";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";




function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [signed] = useState(false);

  return (
    <div className="App">
        <ApolloProvider client={client}>
        <NavBar
        onClick={() => setShowMenu(!showMenu)}
        show={showMenu}
      />
      {showMenu && <Menu onClick={() => setShowMenu(!showMenu)} signed={signed} />}
      <ScrollToTop />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/" component={AllOffers} />
      <Route exact path="/alloffers" component={AllOffers} />
      <Route exact path="/offer/:id" component={Offer} />
      <Route exact path="/addoffer" component={AddOffer} />
      <Route exact path="/discarded" component={Discarded} />
      <Route exact path="/myoffers" component={MyOffers} />
      <Route exact path="/about" component={About} />
      <Route exact path="/support" component={Support} />
      <Route exact path="/settings" component={Settings} />

        </ApolloProvider>
    </div>
  );
}

export default App;
