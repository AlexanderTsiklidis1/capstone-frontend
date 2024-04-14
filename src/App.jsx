import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./Providers/UserProvider";
import { CurrentEventProvider } from "./Providers/CurrentEventProvider";
import Navbar from "./Components/Navbar";
import UserDashboard from "./Components/UserDashboard";
import LandingPage from "./Pages/LandingPage";
import MeetingPage from "./Pages/MeetingPage"; // If you're using this, ensure it's implemented
import ResourcesPage from "./Pages/ResourcesPage";
import CalendlyWidget from "./Components/CalendlyWidget";
import FeedbackPage from "./Pages/FeedbackPage";
import RankInfoPage from "./Pages/RankInfoPage"; // If you're using this, ensure it's implemented
import ZoomMeetingPage from "./Pages/ZoomMeetingPage";
import EventShowPage from "./Pages/EventShowPage"; // Make sure this path is correct

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <UserProvider>
        <CurrentEventProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/book-interview" element={<CalendlyWidget />} />
            <Route path="/userDashboard" element={<UserDashboard />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/zoomMeeting" element={<ZoomMeetingPage />} />
            {/* <Route path="/ranking" element={<RankInfoPage />} /> */}
            {/* Add the route for individual event details */}
            <Route path="/events/:id" element={<EventShowPage />} />
          </Routes>
        </Router>
        </CurrentEventProvider>
      </UserProvider>
    </div>
  );
}

export default App;
