const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");

const jsonString = fs.readFileSync("./database.json");
const dbData = JSON.parse(jsonString);

const szRouter = require("./routes/sitzungszimmer");
const soRouter = require("./routes/standorte");

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
app.use("/standorte", soRouter);
app.use("/sitzungszimmer", szRouter);

app.post("/", async (req, res) => {
  const zimmername = req.body.zimmerName;

  dbData.Sitzungszimmer.map((item) => {
    if (item.zimmerName === zimmername) {
      item.gebucht = true;
    }
  });
  fs.writeFileSync("./database.json", JSON.stringify(dbData));
});

app.get("/", async (req, res) => {});

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
