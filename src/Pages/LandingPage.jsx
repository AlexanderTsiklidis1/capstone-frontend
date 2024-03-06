import React from 'react';
import './LandingPage.css'; 
import '../Components/Button.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="intro-section">
        <div className="content-wrapper">
          <h1>Our aim is to elevate your interview skills to new heights</h1>
          <p>Our community-driven app allows users to engage in mock interviews with fellow members, fostering a supportive environment for skill honing. Earn badges and climb the ranks as you showcase your interviewing prowess. Stay tuned for exciting updates, including the integration of AI technology!</p>
          <button className="button contact-button">Contact Us</button>
        </div>
        <div className="image-wrapper">
          <img src="/path-to-your-image.jpg" alt="Group studying" />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;