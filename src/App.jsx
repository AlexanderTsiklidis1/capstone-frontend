import React, { useEffect, useMemo, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./Providers/UserProvider";
import Navbar from "./Components/Navbar";
import UserDashboard from "./Components/UserDashboard";
import LandingPage from './Pages/LandingPage';
import MeetingPage from './Pages/MeetingPage';
import ResourcesPage from './Pages/ResourcesPage';
import PromptsPage from './Pages/PromptsPage';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <div className="App">
      <header className="App-header"></header>
      <UserProvider>
          <Router>
          <Navbar/>
            <Routes>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/book-interview" element={<MeetingPage/>} />
              <Route path="/userDashboard" element={<UserDashboard/>} />
              <Route path="/resources" element= {<ResourcesPage/>} />
              <Route path="/prompts" element= {<PromptsPage/>} />
            </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
