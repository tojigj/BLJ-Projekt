import express from "express";
const app = express();
import { bookRooms } from "./dataManipulation/bookRooms.js";
import { getRoomData } from "./dataManipulation/getRooms.js";
import cors from "cors";
import soRouter from "./routes/createAppointments.js";
import szRouter from "./routes/sitzungszimmer.js";
import bookedSZRouter from "./routes/bookedRoomsRoute.js";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  next();
});
//Router
app.use("/createAppointments", soRouter);
app.use("/sitzungszimmer", szRouter);
app.use("/bookedRooms", bookedSZRouter);

app.post("/", async (req, res) => {
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  const zimmerName = req.body.zimmerName;
  bookRooms(startDate, endDate, zimmerName);
  getRoomData();
});

app.get("/", async (req, res) => {});

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
