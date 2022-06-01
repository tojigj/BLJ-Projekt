import express from "express";
const router = express.Router();
import cors from "cors";
router.use(cors());
import { bookRooms } from "../dataManipulation/bookRooms.js";

router.post("/", async (req, res) => {
  console.log("Hallo");
});

router.get("/", async (req, res) => {
  res.send("Hallo");
});

export default router;
