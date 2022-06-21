import express from "express";
import fs from "fs";

export function getData() {
  const jsonString = fs.readFileSync("./database.json");
  const dbData = JSON.parse(jsonString);
  return dbData;
}

export function writeDbData(dbData) {
  fs.writeFileSync("./database.json", JSON.stringify(dbData));
}

export function getBookedRoomData() {
  const jsonString = fs.readFileSync("./bookedRooms.json");
  const dbData = JSON.parse(jsonString);
  return dbData;
}
