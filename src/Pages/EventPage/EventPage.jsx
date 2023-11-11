import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./eventPage.css";
import Navigation from "../../components/Navigation/Navigation";
import QuickDetails from "./Components/Quick Details Card/QuickDetails";
import EventDescription from "./Components/Description/EventDescription";
import Footer from "../../components/Footer/Footer";
import TimeLine from "./Components/TimeLine/TimeLine";
import Review from "./Components/Reviews/Review";
import { BeatLoader } from "react-spinners";

const EventPage = () => {

  const [event, setEvent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { eventId } = useParams();
  useEffect(() => {
    fetch("../events/events.json")
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setEvent(myJson[eventId]);
        
        setIsLoading(false);
      });
  }, [eventId]);
  
  if(isLoading) {
    return (
      <div className='loader' >
            <BeatLoader color="#2534dc" size={20} />
          </div>
    )
  }
    //social media share
    document.title = event.Name;
    document.querySelector("meta[name='description']").setAttribute("content", event.summary.slice(0,150));
    document.querySelector("meta[property='og:image']").setAttribute("content",event.Banner);
   
   


  return (
    <div>
      <Navigation />
      <div className="nav-ignore"></div>
      <div className="maindiv">
        <QuickDetails event={event} />
        <div className="middle-div">
          <EventDescription description={event.description}/>
        </div>

      { event.timeline && <TimeLine days={event.noOfDays} events={event.timeline}/>}
        <Review reviews={event.reviews}/>
      </div>
      <Footer />
    </div>
  );
};

export default EventPage;
