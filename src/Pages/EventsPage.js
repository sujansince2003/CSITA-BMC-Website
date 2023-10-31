import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import List from "../components/Events/List";

const EventsPage = () => {

  return (
    <div>
      <Navigation />
      <div className="nav-ignore"></div>
      <List showAll={true} title='All Events Organize By CSITA-BMC' />
      <Footer />
    </div>
  );
};

export default EventsPage;
