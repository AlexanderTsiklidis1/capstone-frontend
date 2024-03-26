import React, { useState, useEffect } from "react";
import ZoomMtgEmbedded from "@zoom/meetingsdk/embedded";

function ZoomMeetingComponent() {
  const [signature, setSignature] = useState("");
  const authEndpoint = "http://localhost:9000/zoom-signature";
  const sdkKey = "xi3DG16cRN2Rt1sbtTMwLw";
  const meetingNumber = "86804714220";
  const passWord = "2BYgnS";
  const role = 0;
  const userName = "Anthony";

  useEffect(() => {
    const client = ZoomMtgEmbedded.createClient();
    client.init({
      zoomAppRoot: document.getElementById("meetingSDKElement"),
      language: "en-US",
      patchJsMedia: true
    }).catch(error => {
      console.error("Zoom SDK initialization failed:", error);
    });
  }, []);

  function getSignature(e) {
    e.preventDefault();

    fetch(authEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        meetingNumber: meetingNumber,
        role: role
      })
    })
      .then((res) => res.json())
      .then((response) => {
        setSignature(response.signature);
        startMeeting(response.signature);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function startMeeting(signature) {
    if (!signature) {
      console.error("Signature is missing.");
      return;
    }

    const client = ZoomMtgEmbedded.createClient();
    client.join({
      signature: signature,
      sdkKey: sdkKey,
      meetingNumber: meetingNumber,
      userName: userName,
      password: passWord
    })
      .then(() => {
        console.log("Joined meeting successfully.");
      })
      .catch((error) => {
        console.error("Failed to join meeting:", error);
      });
  }

  return (
    <div className="App">
      <main>
        <h1>Zoom Meeting SDK Sample React</h1>
        <div id="meetingSDKElement"></div>
        <button onClick={getSignature}>Join Meeting</button>
      </main>
    </div>
  );
}

export default ZoomMeetingComponent;
