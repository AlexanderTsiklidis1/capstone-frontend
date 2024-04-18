import React, {useContext}from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { UserProvider, UserContext } from "./Providers/UserProvider";
import { CurrentEventProvider } from "./Providers/CurrentEventProvider";
import Navbar from "./Components/Navbar";
import UserDashboard from "./Components/UserDashboard";
import LandingPage from "./Pages/LandingPage";
import ResourcesPage from "./Pages/ResourcesPage";
import CalendlyWidget from "./Components/CalendlyWidget";
import FeedbackPage from "./Pages/FeedbackPage";
import ZoomMeetingPage from "./Pages/ZoomMeetingPage";
import EventShowPage from "./Pages/EventShowPage";
import RankInfoPage from "./Pages/RankInfoPage";
import FeedbackDetails from "./Components/FeedbackDetails";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const currentUser = useContext(UserContext);

  return (
      currentUser && allowedRoles.includes(currentUser.role)
          ? children
          : <Navigate to="/" replace />
  );
};


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
            <Route path="/feedback/details/:id" element={<FeedbackDetails />} />
            <Route path="/feedback" element={<ProtectedRoute allowedRoles={['admin']}>
                <FeedbackPage />
              </ProtectedRoute>} />
            <Route path="/zoomMeeting" element={<ZoomMeetingPage />} />
            <Route path="/events/:id" element={<EventShowPage />} />
            {/* Protecting the RankInfoPage */}
            <Route path="/ranking" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <RankInfoPage />
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
        </CurrentEventProvider>
      </UserProvider>
    </div>
  );
}

export default App;