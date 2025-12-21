import { StreamChat } from "stream-chat";  //Imports Stream’s official backend SDK
// Allows your server to create users ,generate tokens , manage chat services
import "dotenv/config";   //so that we can access variables from .env file into process.env

const apiKey = process.env.STEAM_API_KEY;
const apiSecret = process.env.STEAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("Stream API key or Secret is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);  

//Called inside auth.controller to update user details during signup and onBoarding
export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUsers([userData]);
    return userData;
  } catch (error) {
    console.error("Error upserting Stream user:", error);
  }
};

//Called inside chat.controller to generateStreamToken
export const generateStreamToken = (userId) => {
  try {
    // ensure userId is a string
    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr);
  } catch (error) {
    console.error("Error generating Stream token:", error);
  }
};


