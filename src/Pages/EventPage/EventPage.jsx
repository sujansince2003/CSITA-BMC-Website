import React, { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";

import "./eventPage.css";
import Navigation from "../../components/Navigation/Navigation";
import QuickDetails from "./Components/Quick Details Card/QuickDetails";
import EventDescription from "./Components/Description/EventDescription";
import Review from "./Components/Reviews/Review";
import Footer from "../../components/Footer/Footer";

const EventPage = () => {
  const [event, setEvent] = useState([]);

  const { eventId } = useParams();
  useEffect(() => {
    fetch("../events/events.json")
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setEvent(myJson[eventId]);
      });
  }, [eventId]);

  return (
    <div>
      <Navigation />
      <div className="nav-ignore"></div>
      <div className="maindiv">
        
        <QuickDetails event={event}/>

        <div className="middle-div">
         <EventDescription />
        </div>

        <div className="lower-div">
          
           <Review />
          
       </div>
    
      </div>

      <Footer />
    </div>
  );
};

export default EventPage;
