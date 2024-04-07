import React from 'react';
import { ZoomMtg } from '@zoom/meetingsdk';
import { UserContext } from '../Providers/UserProvider';

// ZoomMtg.preLoadWasm();
// ZoomMtg.prepareWebSDK();

function ZoomMeetingPage() {
  const authEndpoint = 'http://localhost:9000/zoom-signature';
  const sdkKey = 'Jrss6ZCZQMKAfiycYmQgWA';
  const meetingNumber = '87153880315';
  const passWord = 'T6ApzqLSfUaW0lOkvRsV7TrbnB3sns.1';
  const userName = `${user.displayName}`;
  const userEmail = `${user.email}`;
  const leaveUrl = 'http://localhost:5173/userDashboard';

  const getSignature = (e) => {
    e.preventDefault();


    const meetingData = {
      meetingNumber: meetingNumber,
      role: 0
    };

    fetch(authEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(meetingData)
    })
    .then(response => response.json())
    .then(data => {
      startMeeting(data.signature);
    })
    .catch(error => {
      console.error('Error fetching signature:', error);
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
            console.log('Join meeting success', success);
          },
          error: (error) => {
            console.error('Join meeting error', error);
          }
        });
      },
      error: (error) => {
        console.error('Init meeting error', error);
      }
    });
  };

  return (
    <div className="App">
      <h1>Join Zoom Meeting</h1>
      <button onClick={getSignature}>Join Meeting</button>
    </div>
  );
}

export default ZoomMeetingPage;
