//This is the Auth token, you will use it to generate a meeting and connect to it


/* 

 *** ABSOLUTELY make sure new server is spun and brand new token is fetched from URL/get-token EVERY 1000minutes!!! Token below will not work as it was fetched days ago & possibly from a new server instance!!!***

*/

//This is the Auth token, you will use it to generate a meeting and connect to it
export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJhYjk2YzRkZi1kOTFjLTRjODgtYjE0Zi1iZmU1MDk0M2JmNDIiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIiwiYWxsb3dfbW9kIl0sImlhdCI6MTcwOTQ3OTc0OSwiZXhwIjoxNzA5NTM5NzQ5fQ._r5dLBvPurJkVy-QXoNw3AfuxhQ-bE3CzDAa94sfWT0";
// API call to create a meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  //Destructuring the roomId from the response
  const { roomId } = await res.json();
  return roomId;
};