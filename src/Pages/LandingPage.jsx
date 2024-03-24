import React from 'react';
import { useContext, useEffect } from "react";
import { UserContext } from "../Providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, logOut } from "../Services/Firebase.js";
import './LandingPage.css'; 
import '../Components/Button.css';

const LandingPage = () => {
  const user = useContext(UserContext);
  const navigate  = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/userDashboard");
    }
  }, [user, navigate]);
  return (
    <div className="landing-page">
      <section className="intro-section">
        <div className="content-wrapper">
          <h1>We'll elevate your interviewing skills to new heights!</h1>
          <p>Our community-driven app allows users to engage in mock interviews with professional industry leaders, fostering a supportive environment for skill honing. Earn badges and climb the ranks as you showcase your interviewing prowess. Stay tuned for exciting updates, including the integration of AI technology!</p>
        </div>
        <div className="image-wrapper">
          <img src="src/assets/interview pic landing page.jpeg" alt="Group studying" />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;