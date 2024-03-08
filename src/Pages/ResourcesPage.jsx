import React from 'react';
import './ResourcesPage.css'; // Make sure to create a corresponding CSS file for styling

const ResourcesPage = () => {
  return (
    <div className="resources-container">
      <header className="resources-header">
        <h1>AceIt Resources</h1>
      </header>

      <div className="advice-section">
        <p className="advice-quote">"Practice makes perfect – simulate real interview scenarios!"</p>
        <p className="advice-quote">"Be clear, concise, and structured – use the STAR method."</p>
        <p className="advice-quote">"Reflect on your experiences – each one has a story to tell."</p>
      </div>

      <div className="resources-list">
        <h2>Interview Preparation Resources:</h2>
        <ul>
          <li><a href="https://www.example.com/interview-questions">Top 50 Behavioral Interview Questions</a></li>
          <li><a href="https://www.example.com/interview-tips">Interview Tips for Success</a></li>
          <li><a href="https://www.example.com/star-method">Mastering the STAR Method</a></li>
          <li><a href="https://www.example.com/mindset-coaching">Mindset Coaching for Interviews</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ResourcesPage;