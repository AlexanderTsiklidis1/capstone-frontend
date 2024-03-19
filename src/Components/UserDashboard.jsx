import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Providers/UserProvider";
import ProfileImg from "../assets/Aisha.jpeg";

import "./UserDashboard.css"; // Make sure to create a corresponding CSS file for styling

import { CiUser } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

const UserDashboard = ({ currentUser }) => {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  console.log(user);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="user-dashboard">
      <div className="user-dashboard-profile">
        <img
          className="user-dashboard-profile-image"
          src={ProfileImg}
          alt="Picture of Aisha Kleemoff"
        />
      </div>
      <div className="user-dasboard-stats">
        <section className="dashboard-header">
          <h1>User Dashboard</h1>
        </section>
        <section className="dashboard-content">
          <p>
            Aisha Kleemoff <CiUser />
          </p>
          <hr />
          <p>
            Gold Star Fellow <IoIosStarOutline />
          </p>
          <hr />
          <p>
            aishakleemoff@pursuit.org <AiOutlineMail />
          </p>
          <hr />
        </section>
      </div>
      <div className="user-dashboard-book-interview">
        <button className="user-dashboad-book-interview-btn">
          Book Interview
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
