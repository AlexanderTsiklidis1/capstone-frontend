import React, { useState } from 'react';
import JoinScreen from '../Components/JoinScreen';
import MeetingView from '../Components/MeetingView';
import {MeetingProvider} from "@videosdk.live/react-sdk";
import { authToken, createMeeting } from '../API'; // Ensure this path matches your project structure
import '../Components/Button.css';
import '../Components/VideoComponents.css'

function MeetingPage() {
  const [meetingId, setMeetingId] = useState(null);

  const getMeetingAndToken = async (id) => {
    const newMeetingId = id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(newMeetingId);
  };

  const onMeetingLeave = () => {
    setMeetingId(null);
  };

  return (
    <>

      {authToken && meetingId ? (
    <MeetingProvider
        config={{
          meetingId,
          micEnabled: true,
          webcamEnabled: true,
          name: "Pursuit",
        }}
        token={authToken}
        >
          <MeetingView meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
          </MeetingProvider>
          ) : (
              <JoinScreen getMeetingAndToken={getMeetingAndToken} />
              )}
    </>
  );
}

export default MeetingPage;