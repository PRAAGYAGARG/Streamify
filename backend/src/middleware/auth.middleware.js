import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized - No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); //Verifies the JWT token using your secret key

    if (!decoded) {   //extra protection
      return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }

    //find the user with the token id
    const user = await User.findById(decoded.userId).select("-password");

    //if no user found that means token is invalid or user no longer exists
    if (!user) {
      return res.status(401).json({ message: "Unauthorized - User not found" });
    }

    req.user = user;
    //user is verified hence now we can allow him to view onboard pg so we call next() ie call the next method => Onboard
    next();  
  } catch (error) {
    console.log("Error in protectRoute middleware", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};