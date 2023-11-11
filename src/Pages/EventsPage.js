import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import List from "../components/Events/List";
import BeatLoader from "react-spinners/BeatLoader";
import './loader.css';



function EventsPage() {

  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    SetLoading(true);
    setTimeout(() => {
      SetLoading(false)
    }, 500)
  }, [])


  return (
    <div className="App">
      <Navigation />

      {
        loading ?
          <div className='loader' >
            <BeatLoader color="#000fff" size={20} />
          </div>

          :

          <div>
          <div className="nav-ignore"></div>
            <List showAll={true} title="Events Organized By CSITA-BMC" />
            <Footer />
          </div>
      }

    </div>

  );
}

export default EventsPage;

