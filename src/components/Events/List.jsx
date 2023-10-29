import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const List = () => {
  const [Events, setEvents] = useState([]);

  useEffect(() => {
    fetch('./events.json')
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
    this is evetn
    <div>
      {Object.keys(Events).map(event => (
        <div
        key={`${event}`}
        >
      <Link 
      to={`event/${event}`}
      // to={`event/`}
      >
          <h2>{Events[event].Name}</h2>
      </Link>
          <img src={Events[event].Banner} alt="" />
          <p>{Events[event].summary}</p>
        </div>
      ))}
    </div>
      </>
  );
}


export default List