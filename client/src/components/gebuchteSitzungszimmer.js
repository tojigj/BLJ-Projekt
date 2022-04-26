import React, { useState, useEffect } from "react";
import * as fs from "fs-web";
import Zimmer from "./requirements/zimmer";
import { useLocation } from "react-router-dom";
import axios from "axios";

const port = 5001;

const GebuchteSitzungszimmer = () => {
  const location = useLocation();

  const [textFilter, setTextFilter] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sitzungsZimmer, setSitzungsZimmer] = useState([]);
  const [shownData, setShownData] = useState([]);
  const [searchItem, setSearchItem] = useState([]);
  console.log(location.state);
  let savedData = [];
  savedData += location.state;

  return <div>{location.state.zimmerName}</div>;
};

export default GebuchteSitzungszimmer;
