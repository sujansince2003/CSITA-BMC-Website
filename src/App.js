import React, { useEffect, useState }  from "react";
import { Route, Routes } from "react-router-dom";


import Loader from "./components/Loader/loader";
import Aos from "aos";

import HomePage from "./Pages/HomePage";
import EventPage from "./Pages/EventPage/EventPage";
import EventsPage from "./Pages/EventsPage";
import TeamsPage from "./Pages/TeamsPage";
import AboutPage from "./Pages/AboutPage";

const App = () => {

  const [loader, setloader] = useState(true);
  useEffect(() => {
    Aos.init({ easing: "ease", duration: 700 });
  });
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 2000);
  });

  return (
    <div>
       {loader ? (
        <Loader />
      ) : (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:eventId" element={<EventPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<h1> error 404 </h1>} />
      </Routes>
      )}
    </div>
  );
};

export default App;
