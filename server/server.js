import express from "express";
const app = express();
import { bookRooms } from "./dataManipulation/bookRooms.js";
import { getRoomData } from "./dataManipulation/getRooms.js";
import { deleteBuchung } from "./dataManipulation/deleteBuchung.js";
import { editBuchung } from "./dataManipulation/editBuchung.js";
import cors from "cors";
import szRouter from "./routes/sitzungszimmer.js";

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
app.use("/sitzungszimmer", szRouter);

app.post("/", async (req, res) => {
  if (req.body.type === "create") {
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const zimmerName = req.body.zimmerName;
    try {
      const returnValue = bookRooms(startDate, endDate, zimmerName);
      return res.send(returnValue);
    } catch (e) {
      return res.status(400).send(e);
    }
  } else if (req.body.type === "delete") {
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const zimmerName = req.body.zimmerName;
    deleteBuchung(startDate, endDate, zimmerName);
  } else if (req.body.type === "edit") {
    const oldStartDate = req.body.oldStartDate;
    const oldEndDate = req.body.oldEndDate;
    const newStartDate = req.body.newStartDate;
    const newEndDate = req.body.newEndDate;
    const zimmerName = req.body.zimmerName;
    editBuchung(oldStartDate, oldEndDate, newStartDate, newEndDate, zimmerName);
  }
  getRoomData();
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    req.sendFile(path.join(__dirname, "build", "index.html"));
  });
}
app.get("/", async (req, res) => {});

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
