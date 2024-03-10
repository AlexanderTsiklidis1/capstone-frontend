let authToken = "";

// API call to fetch authToken from backend
export const fetchAuthToken = async () => {
  try {
    const res = await fetch("http://localhost:9000/get-token");
    const data = await res.json();
    authToken = data.authToken;
  } catch (error) {
    console.error(error);
  }
};

// API call to create a meeting using the fetched authToken
export const createMeeting = async () => {
  try {
    if (!authToken) {
      await fetchAuthToken();
    }
    const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
      method: "POST",
      headers: {
        authorization: `${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    const { roomId } = await res.json();
    return roomId;
  } catch (error) {
    console.error(error);
  }
};

export { authToken };
