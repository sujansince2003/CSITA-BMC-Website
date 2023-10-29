import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import EventPage from "./Pages/EventPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event/:eventId" element={<EventPage />} />

      </Routes>
    </div>
  );
};

export default App;
