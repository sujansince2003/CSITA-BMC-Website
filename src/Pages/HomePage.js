import React from "react";

import Header from "../components/Header/Header";
import About from "../components/About/About";
import Navigation from "../components/Navigation/Navigation";
import List from "../components/Events/List";
import Tlist from "../components/Tlist/Tlist";
import Footer from "../components/Footer/Footer";
import Testimonials from "../components/Testimonials/Testimonials";
import "aos/dist/aos.css";



const HomePage = () => {

  return (
    <div>
        <>
          <Navigation />
          <Header />
          <About />
          <List showAll={false} title='Some Events Organize By CSITA-BMC' />
          <Tlist />
          <Testimonials />
          <Footer />
        </>

    </div>
  );
};

export default HomePage;
