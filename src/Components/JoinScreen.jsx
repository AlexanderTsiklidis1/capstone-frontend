import React, { useState } from 'react';
import "./Button.css"
import "./VideoComponents.css"

function JoinScreen({ getMeetingAndToken }) {
  const [meetingId, setMeetingId] = useState(null);
  const onClick = async () => {
    await getMeetingAndToken(meetingId);
  };

  return (
    <div className="join-screen-container">
      <input
        type="text"
        placeholder="Enter Meeting Id"
        onChange={(e) => setMeetingId(e.target.value)}
      />
      <br />
      <button className='button' onClick={onClick}>Join</button>
      <button className='button' onClick={onClick}>Create Meeting</button>
    </div>
  );
}

export default JoinScreen;
