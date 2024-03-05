import React, { useEffect, useMemo, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LandingPage from './Components/LandingPage';
import MeetingPage from './Pages/MeetingPage';


function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Router>
        <Navbar />
        <LandingPage/>
        <MeetingPage/>
      </Router>
    </div>
  );
}

export default App;
