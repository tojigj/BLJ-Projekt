import React, { useState, useEffect } from "react";
import axios from "axios";
import Section from "./section";
import Zimmer from "./requirements/zimmer";

const port = 5001;
const Home = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [sitzungsZimmer, setSitzungsZimmer] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:${port}/sitzungszimmer/`).then((response) => {
      setSitzungsZimmer(response.data);
      setFilteredData(response.data);
    });
  }, []);

  const generateStockwerkData = () => {
    return [...new Set(sitzungsZimmer.map((item) => item.stockwerk))];
  };

  const handleFilterPersonen = (anzPersonen) => {
    const filteredPersonen = sitzungsZimmer.filter((item) => {
      return item.maxPersonen >= anzPersonen;
    });
    setFilteredData(filteredPersonen);
  };

  const handleFilterStockwerke = (stockwerk) => {
    const filteredStockwerk = sitzungsZimmer.filter((item) => {
      return item.stockwerk === stockwerk;
    });
    setFilteredData(filteredStockwerk);
  };

  return (
    <div className="home">
      <Section
        stockwerke={generateStockwerkData()}
        onStockwerkChange={handleFilterStockwerke}
        onPersonenChange={handleFilterPersonen}
      />
      <div className="Such-Ausgabe">
        <div className="standort-test">
          {filteredData.map((zimmer) => {
            return (
              <Zimmer
                key={zimmer.id}
                zimmername={zimmer.zimmerName}
                standort={zimmer.standortName}
                stockwerk={zimmer.stockwerk}
                maxP={zimmer.maxPersonen}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
