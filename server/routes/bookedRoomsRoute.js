import express from "express";
const router = express.Router();
import { getBookedRoomData } from "../dbAccess.js";
import cors from "cors";
router.use(cors());

router.post("/", async (req, res) => {});

router.get("/", async (req, res) => {
  res.send(getBookedRoomData().Sitzungszimmer);
});

export default router;
