import React, { useState } from "react";
import "./timeLine.css";
import { FaChalkboardTeacher } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimeLine = ({days, events }) => {
  const [day, setDay] = useState(1);
let daysElement = [];
  const DaySelect = () =>{
    for (let i=1; i <= days ; i++)
    {
          daysElement.push(
            <div key={i} onClick={() => setDay(i)} className={`days-set ${i ===day  && 'active-day-select'}`}>
            Day {i}
          </div>
            )
      }
      return daysElement;
  }


  return (
    <>
    <div className="TimeLine">
      <h2 className="timeLine-title">Timeline of Event</h2>
      {/* <div className="day-Select">
      <DaySelect/>
      </div> */}
      <VerticalTimeline>
        {events.map((event, index) => 
          {if(Number(event.day) === day)
            return <TimeBlock event={event} key={index} /> 
          else
          return null
          }
          
)}
      </VerticalTimeline>
      <div className="day-Select">
      <DaySelect/>
    </div>
      </div>
    </>
  );
};

export default TimeLine;



const TimeBlock = ({ event }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date={event.time}
      iconStyle={{ background: "#1c67a8", color: "#fff" }}
      icon={<FaChalkboardTeacher />}
    >
      <h3 className="timeline-primary">{event.primary}</h3>
      <p>Day {event.day}</p>
    </VerticalTimelineElement>
  );
};
