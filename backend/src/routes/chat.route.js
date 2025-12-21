import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getStreamToken } from "../controllers/chat.controller.js";

const router = express.Router();

// getStreamToken functn is coming from chat.controller(imported on top)
//which inside chat.controller is coming from stream.js
// so stream.js -> chat.controller -> chat.route
router.get("/token", protectRoute, getStreamToken);

export default router;  