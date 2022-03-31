const fs = require("fs");
const express = require("express");
const jsonString = fs.readFileSync("./database.json", "utf-8");
let dbData = JSON.parse(jsonString);

const soData = dbData.Standorte;
const szData = dbData.Sitzungszimmer;

const Standorte = [
  {
    ID: 0,
    StandortName: "Fluhmatt",
  },
  {
    ID: 1,
    StandortName: "Röslimatt",
  },
];
const Sitzungszimmer = {
  Standorte: Standorte,
};

const Sitzungszimmer01 = {
  Standorte: Sitzungszimmer.Standorte[0],
};

const Sitzungszimmer02 = {
  Standorte: Sitzungszimmer.Standorte[1],
};

const Sitzungszimmer03 = {
  Standorte: Sitzungszimmer.Standorte[0],
};

const Sitzungszimmer04 = {
  Standorte: Sitzungszimmer.Standorte[0],
};

dbData = [
  { Sitzungszimmer01, Sitzungszimmer02, Sitzungszimmer03, Sitzungszimmer04 },
];

fs.writeFileSync("./database.json", JSON.stringify(dbData), (err) => {
  if (err) {
    console.log("no");
  } else {
    console.log("yes");
  }
});
