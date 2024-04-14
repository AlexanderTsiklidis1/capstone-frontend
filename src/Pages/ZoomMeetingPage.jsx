import React, { useContext, useEffect, useState } from "react";
import { ZoomMtg } from "@zoom/meetingsdk";
import { UserContext } from "../Providers/UserProvider";
import { useNavigate } from "react-router-dom";
import "../Components/Button.css";
import { useSearchParams } from "react-router-dom";

function ZoomMeetingPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const user = useContext(UserContext);

  const meetingNumber = searchParams.get("meetingNumber");
  const passWord = searchParams.get("password") || "defaultPassword";

  const authEndpoint = "http://localhost:9000/zoom-signature";
  const sdkKey = "Jrss6ZCZQMKAfiycYmQgWA";
  const userName = `${user?.displayName}`;
  const userEmail = `${user?.email}`;
  const leaveUrl = "http://localhost:5173/userDashboard";

  const getSignature = (e) => {
    e.preventDefault();

    const meetingData = {
      meetingNumber: meetingNumber,
      role: 0,
    };

    fetch(authEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(meetingData),
    })
      .then((response) => response.json())
      .then((data) => {
        startMeeting(data.signature);
      })
      .catch((error) => {
        console.error("Error fetching signature:", error);
      });
  };

  const startMeeting = (signature) => {
    ZoomMtg.init({
      leaveUrl: leaveUrl,
      success: () => {
        ZoomMtg.join({
          signature,
          meetingNumber,
          userName,
          sdkKey,
          userEmail,
          passWord,
          success: (success) => {
            console.log("Join meeting success", success);
          },
          error: (error) => {
            console.error("Join meeting error", error);
          },
        });
      },
      error: (error) => {
        console.error("Init meeting error", error);
      },
    });
  };

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // 100% of the viewport height
        textAlign: 'center'
      }}
    >
      <h1>Join Zoom Meeting With {}</h1>
      <button className="button" onClick={getSignature}>
        Join Meeting
      </button>
    </div>
  );
  
}

export default ZoomMeetingPage;
