import React, { useState } from 'react';
import { useMeeting } from '@videosdk.live/react-sdk';
import ParticipantView from './ParticipantView';
import Controls from './Controls';

function MeetingView({ meetingId, onMeetingLeave }) {
  const [joined, setJoined] = useState(null);
  const { join, participants } = useMeeting({
    onMeetingJoined: () => setJoined("JOINED"),
    onMeetingLeft: () => onMeetingLeave(),
  });

  const joinMeeting = () => {
    setJoined("JOINING");
    join();
  };

  return (
    <div className="container">
      <h3>Meeting Id: {meetingId}</h3>
      {joined === "JOINED" ? (
        <div>
          <Controls />
          {[...participants.keys()].map((participantId) => (
            <ParticipantView participantId={participantId} key={participantId} />
          ))}
        </div>
      ) : joined === "JOINING" ? (
        <p>Joining the meeting...</p>
      ) : (
        <button className='button' onClick={joinMeeting}>Join</button>
      )}
    </div>
  );
}

export default MeetingView;