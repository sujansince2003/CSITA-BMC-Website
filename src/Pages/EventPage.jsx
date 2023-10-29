import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";

import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

const EventPage = () => {
  const [Event, setEvent] = useState([]);

  const { eventId } = useParams();
  useEffect(() => {
    fetch("../events.json")
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setEvent(myJson[eventId]);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <meta property="og:image" content={Event.Banner} />
        <meta name="title" content={`${Event.Name} | BMC CSIT `} />
        <meta name="description" content={Event.summary} />
        <meta name="keywords" content="react, js, ts" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English"></meta>
      </Helmet>
      <Navigation />
      <div className="nav-ignore"></div>
      this is event page
      <Link to="/">Home</Link>
      <div>
        <div>
          <img src={Event.Banner} alt="" />
          <h2>{Event.Name}</h2>
          <p>{Event.summary}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventPage;
