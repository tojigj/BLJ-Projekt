import React, { useState, useEffect } from "react";
import axios from "axios";
import Section from "./section";
import Zimmer from "./requirements/zimmer";
import PopUp from "./popUp";

let values = {
  person: 0,
  stockwerk: null,
  standort: ["Rösslimatt", "Fluhmatt"],
};

const port = 5001;
const Home = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [sitzungsZimmer, setSitzungsZimmer] = useState([]);
  const [shownData, setShownData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:${port}/sitzungszimmer/`).then((response) => {
      setSitzungsZimmer(response.data);
      setFilteredData(response.data);
    });
  }, []);

  const submitFilters = () => {
    let filteredZimmer = sitzungsZimmer.filter((item) => {
      return item.maxPersonen >= values.person;
    });

    if (values.stockwerk) {
      filteredZimmer = filteredZimmer.filter((item) => {
        return item.stockwerk == values.stockwerk;
      });
    }

    if (values.standort.length === 1) {
      filteredZimmer = filteredZimmer.filter((item) => {
        return item.standortName == values.standort[0];
      });
    }

    setFilteredData(filteredZimmer);
  };

  const handleFilterSuche = (searchItem) => {
    const filteredSuche = sitzungsZimmer.filter((item) => {
      if (searchItem == "") return item;
      else if (
        item.zimmerName
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(searchItem.split(" ").join("").toLowerCase())
      ) {
        return item;
      }
    });
    setFilteredData(filteredSuche);
  };

  const handleFilterPersonen = (anzPersonen) => {
    values.person = anzPersonen;
  };

  const generateStockwerkData = () => {
    return [...new Set(sitzungsZimmer.map((item) => item.stockwerk))];
  };

  const handleFilterStockwerke = (stockwerk) => {
    values.stockwerk = stockwerk;
  };

  const handleFilterStandorte = (standort) => {
    if (!standort.length || standort.length == 2) {
      values.standort = [];
      return;
    }
    values.standort = [standort[0].name];
  };

  const shownZimmer = () => {
    if (filteredData.length) {
      return filteredData.map((zimmer) => {
        return (
          <Zimmer
            key={zimmer.id}
            zimmername={zimmer.zimmerName}
            standort={zimmer.standortName}
            stockwerk={zimmer.stockwerk}
            maxP={zimmer.maxPersonen}
          />
        );
      });
    }
    return "Keine Ergebnisse";
  };

  const handleZimmerClick = () => {
    return filteredData;
  };

  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="Suchen..."
        onChange={(event) => {
          handleFilterSuche(event.target.value);
        }}
      />
      <div className="home">
        <Section
          stockwerke={generateStockwerkData()}
          onStockwerkChange={handleFilterStockwerke}
          onPersonenChange={handleFilterPersonen}
          onStandortChange={handleFilterStandorte}
          onSubmit={submitFilters}
        />
        <div className="Such-Ausgabe">
          <div className="standort-test">{shownZimmer()}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
