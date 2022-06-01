import express from "express";
const router = express.Router();
import { getRoomData } from "../dataManipulation/getRooms.js";
import cors from "cors";
router.use(cors());

router.post("/", async (req, res) => {});

router.get("/", async (req, res) => {
  res.send(getRoomData().Sitzungszimmer);
});

export default router;
