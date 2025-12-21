import { generateStreamToken } from "../lib/stream.js";

export async function getStreamToken(req, res) {
  try {
    //generating token so that later we can visit the Chat pg, video Calling pg
    const token = generateStreamToken(req.user.id); 

    res.status(200).json({ token });
  } catch (error) {
    console.log("Error in getStreamToken controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}