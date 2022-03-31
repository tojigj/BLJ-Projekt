import React, { useState, useEffect } from "react";
import axios from "axios";
import Section from "./section";
import Zimmer from "./requirements/zimmer";
import PopUp from "./popUp";

const port = 5001;
const Home = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [sitzungsZimmer, setSitzungsZimmer] = useState([]);
  const [shownData, setShownData] = useState([]);
  let filters = [];

  useEffect(() => {
    axios.get(`http://localhost:${port}/sitzungszimmer/`).then((response) => {
      setSitzungsZimmer(response.data);
      setFilteredData(response.data);
    });
  }, []);

  const handleFilterPersonen = (anzPersonen) => {
    setShownData(filteredData);
    let filteredPersonen;
    if (!anzPersonen) {
      filteredPersonen = shownData;
      setFilteredData(filteredPersonen);
      if (filters.includes("standort")) filters -= "person";
      return;
    } else {
      filteredPersonen = filteredData.filter((item) => {
        return item.maxPersonen >= anzPersonen;
      });
    }
    filters += "person";
    setFilteredData(filteredPersonen);
  };

  const generateStockwerkData = () => {
    return [...new Set(sitzungsZimmer.map((item) => item.stockwerk))];
  };

  const handleFilterStockwerke = (stockwerk) => {
    setShownData(filteredData);
    let filteredStockwerk;
    if (stockwerk === "") {
      filteredStockwerk = shownData;
      setFilteredData(filteredStockwerk);
      if (filters.includes("standort")) filters -= "stockwerk";
      return;
    } else {
      filteredStockwerk = filteredData.filter((item) => {
        return item.stockwerk == stockwerk;
      });
    }
    filters += "stockwerk";
    console.log(stockwerk);
    setFilteredData(filteredStockwerk);
    console.log(filteredStockwerk);
  };

  const handleFilterStandorte = (standort) => {
    setShownData(filteredData);
    let filteredStandorte;
    console.log(standort);
    if (!standort.length) {
      filteredStandorte = shownData;
      setFilteredData(filteredStandorte);
      if (filters.includes("standort")) filters -= "standort";
      return;
    } else if (standort.length === 2) filteredStandorte = sitzungsZimmer;
    else {
      filteredStandorte = filteredData.filter((item) => {
        return item.standortName == standort[0].name;
      });
    }
    filters += "standort";
    setFilteredData(filteredStandorte);
  };

  const handleZimmerClick = () => {
    return filteredData;
  };

  return (
    <div className="home">
      <Section
        stockwerke={generateStockwerkData()}
        onStockwerkChange={handleFilterStockwerke}
        onPersonenChange={handleFilterPersonen}
        onStandortChange={handleFilterStandorte}
      />
      <div className="Such-Ausgabe">
        <div className="standort-test">
          {filteredData.map((zimmer) => {
            return (
              <Zimmer
                key={zimmer.id}
                id={zimmer.id}
                zimmername={zimmer.zimmerName}
                standort={zimmer.standortName}
                stockwerk={zimmer.stockwerk}
                maxP={zimmer.maxPersonen}
                OnZimmerClick={handleZimmerClick()}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
