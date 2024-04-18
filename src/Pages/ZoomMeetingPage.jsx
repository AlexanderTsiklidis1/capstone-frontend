import React, { useContext, useEffect, useState } from "react";
import { ZoomMtg } from "@zoom/meetingsdk";
import { UserContext } from "../Providers/UserProvider";
import { useCurrentEvent } from "../Providers/CurrentEventProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../Components/Button.css";

function ZoomMeetingPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const { currentEvent } = useCurrentEvent();
  console.log(currentEvent)

  const meetingNumber = searchParams.get("meetingNumber");
  const passWord = searchParams.get("password") || "defaultPassword";

  const authEndpoint = "https://capstone-backend-4iyt.onrender.com/zoom-signature";
  const sdkKey = "jL3bLPTT2meIBpUgElWQ";
  const userName = `${user?.displayName}`;
  const userEmail = `${user?.email}`;

  const leaveUrl =
    user?.role === "admin"
      ? "https://aceitapp.netlify.app/feedback"
      : "https://aceitapp.netlify.app/userDashboard";
  const role = user?.role === "admin" ? 1 : 0;

  const getSignature = (e) => {
    e.preventDefault();

    const meetingData = {
      meetingNumber: meetingNumber,
      role: role,
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1>Join Zoom Meeting</h1>
      <button className="button" onClick={getSignature}>
        Join Meeting
      </button>
    </div>
  );
}

export default ZoomMeetingPage;
