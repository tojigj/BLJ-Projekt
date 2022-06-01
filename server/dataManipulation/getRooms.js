import express from "express";
import { getData } from "../dbAccess.js";

export function getRoomData() {
  const allData = getData();
  return allData;
}
