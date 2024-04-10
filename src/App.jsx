import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./Providers/UserProvider";
import Navbar from "./Components/Navbar";
import UserDashboard from "./Components/UserDashboard";
import LandingPage from "./Pages/LandingPage";
import MeetingPage from "./Pages/MeetingPage";
import ResourcesPage from "./Pages/ResourcesPage";
import CalendlyWidget from "./Components/CalendlyWidget";
import FeedbackPage from "./Pages/FeedbackPage";
import RankInfoPage from "./Pages/RankInfoPage";
import ZoomMeetingPage from "./Pages/ZoomMeetingPage";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <UserProvider>
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
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
