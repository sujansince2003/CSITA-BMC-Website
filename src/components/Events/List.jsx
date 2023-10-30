import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Product from "./Product/Product";
import { products } from "../../data";
import "./List.css";


const List = () => {
  const [Events, setEvents] = useState([]);

  useEffect(() => {
    fetch('./events/events.json')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      setEvents(myJson);
    });
  }, []);
  
  console.log(Events);

  return (
    <>
    <div className="pl events">
      <h1 className="event-heading">Some Events Organized By CSITA-BMC</h1>
      <div className="pl-texts"></div>
      <div className="pl-list">
        {Object.keys(Events).map((event) => (
          <Product
            title={Events[event].Name}
            key={`${event}`}
            img={Events[event].Banner}
            link={`event/${event}`}
            desc={Events[event].summary.slice(0,150)}
          />
        ))}
      </div>
      <div className="">

      </div>
    </div>
      </>
  );
}


export default List