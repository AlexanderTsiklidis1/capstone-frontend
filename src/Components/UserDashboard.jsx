import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Providers/UserProvider';
import { logOut } from '../Services/Firebase.js';

import './UserDashboard.css'; // Make sure to create a corresponding CSS file for styling

const UserDashboard = ({currentUser}) => {
    const navigate = useNavigate();
    const user = useContext(UserContext);
    console.log(user)


    useEffect(() => {
      if (!user) {
        navigate("/");
      }
    }, [user, navigate]);

  // Function to handle user logout
  const handleLogout = async () => {
    await logOut();
    alert("You've been logged out");
  };
  

  return (
    <div className="user-dashboard">
      <header className="dashboard-header">
        <h1>User Dashboard</h1>
        {/* Logout Button */}
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>

      {/* Placeholder for future user content */}
      <section className="dashboard-content">
        <p>User content will go here.</p>
      </section>
    </div>
  );
};

export default UserDashboard;