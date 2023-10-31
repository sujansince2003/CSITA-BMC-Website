import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import EventPage from "./Pages/EventPage/EventPage";
import EventsPage from "./Pages/EventsPage";
import TeamsPage from "./Pages/TeamsPage";
import AboutPage from "./Pages/AboutPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:eventId" element={<EventPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<h1> error 404 </h1>} />
      </Routes>
    </div>
  );
};

export default App;
