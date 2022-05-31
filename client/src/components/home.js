import React, { useState, useEffect } from "react";
import axios from "axios";
import Section from "./section";
import Zimmer from "./requirements/zimmer";

let values = {
  person: 0,
  stockwerk: null,
  standort: [],
  startDate: null,
  endDate: null,
};

let shownFilters = ["", "", "", ""];

const port = 5001;
const Home = () => {
  const [textFilter, setTextFilter] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sitzungsZimmer, setSitzungsZimmer] = useState([]);
  const [shownData, setShownData] = useState([]);
  const [searchItem, setSearchItem] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:${port}/sitzungszimmer/`).then((response) => {
      setSitzungsZimmer(response.data);
      setShownData(response.data);
    });
  }, []);

  const handleFilterSuche = () => {
    let data = [];
    if (filteredData.length) {
      data = shownData;
    } else {
      data = sitzungsZimmer;
    }
    if (searchItem == "") {
      setShownData(data);
      return;
    }

    const filteredSuche = data.filter((item) => {
      if (
        item.zimmerName
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(searchItem.toLowerCase().split(" ").join(""))
      ) {
        return item;
      }
    });

    setShownData(filteredSuche);
  };

  const handleTextFilter = () => {
    setTextFilter(
      sitzungsZimmer.filter((item) => {
        if (
          item.zimmerName
            .toString()
            .toLowerCase()
            .split(" ")
            .join("")
            .includes(searchItem.toString().toLowerCase().split(" ").join(""))
        ) {
          return item;
        }
      })
    );
  };

  const submitFilters = () => {
    let data = [];
    if (searchItem != "") {
      data = textFilter;
    } else {
      data = sitzungsZimmer;
    }

    shownFilters[0] = values.person;
    let filteredZimmer = data.filter((item) => {
      return item.maxPersonen >= values.person;
    });

    shownFilters[1] = values.stockwerk;
    if (values.stockwerk) {
      filteredZimmer = filteredZimmer.filter((item) => {
        return item.stockwerk == values.stockwerk;
      });
    }
    shownFilters[2] = values.standort;
    if (values.standort.length == 2)
      shownFilters[2] = ["Rösslimatt & Fluhmatt"];
    if (values.standort.length === 1) {
      filteredZimmer = filteredZimmer.filter((item) => {
        return item.standortName == values.standort[0];
      });
    }

    shownFilters[3] = values.startDate
      ? values.startDate + " - " + values.endDate
      : null;
    if (values.startDate && values.endDate) {
      filteredZimmer = filteredZimmer.filter((item) => {
        for (let i = 0; i < item.appointments.length; i++) {
          console.log(values.startDate <= item.appointments[i].startDate);
          console.log(values.endDate <= item.appointments[i].endDate);
          console.log(values.startDate);
          console.log(values.endDate);
          console.log(item.appointments[i].startDate);
          console.log(item.appointments[i].endDate);
          if (
            (item.appointments[i].startDate >= values.startDate &&
              item.appointments[i].endDate >= values.startDate) ||
            (item.appointments[i].startDate <= values.endDate &&
              item.appointments[i].endDate <= values.endDate)
          ) {
            return item;
          }
          return null;
        }
      });
    }
    showSelectedFilters();
    setFilteredData(filteredZimmer);
    setShownData(filteredZimmer);
  };

  const showSelectedFilters = () => {
    let filtersThatAreShown = [];
    if (
      (shownFilters[0] == "" || shownFilters[0] === 0) &&
      (!shownFilters[1] || shownFilters[1] == "") &&
      (shownFilters[2] == "" || shownFilters[2] == []) &&
      (shownFilters[3] == "" || shownFilters[3] == null)
    ) {
      return;
    }

    if (shownFilters[0] != "") {
      filtersThatAreShown[0] = "Personen: " + shownFilters[0];
    }

    if (shownFilters[1] != "" && shownFilters[1] != null) {
      filtersThatAreShown[1] = "Stockwerk: " + shownFilters[1];
    }

    if (shownFilters[2] != "" && shownFilters[2] != []) {
      filtersThatAreShown[2] = shownFilters[2];
    }

    if (shownFilters[3] != "" && shownFilters[3] != null) {
      filtersThatAreShown[3] = shownFilters[3];
    }

    return filtersThatAreShown.map((item) => {
      return <div className="single-filter">{item}</div>;
    });
  };

  const handleTyping = (e) => {
    e.preventDefault();
    const filteredSuche = sitzungsZimmer.filter((item) => {
      if (
        item.zimmerName
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(e.target.value.toString().split(" ").join("").toLowerCase())
      ) {
        return item;
      }
    });
    setTextFilter(filteredSuche);
  };

  const handleFilterPersonen = (anzPersonen) => {
    values.person = anzPersonen;
  };

  const handleFilterStartDate = (startDate, startTime) => {
    if (!startDate) {
      values.startDate = null;
    } else {
      values.startDate = startDate.toDateString() + " " + startTime;
    }
  };

  const handleFilterEndDate = (endDate, endTime) => {
    if (!endDate) {
      values.startDate = null;
    } else {
      values.endDate = endDate.toDateString() + " " + endTime;
    }
  };

  const generateStockwerkData = () => {
    return [...new Set(sitzungsZimmer.map((item) => item.stockwerk))];
  };

  const handleFilterStockwerke = (stockwerk) => {
    values.stockwerk = stockwerk;
  };

  const handleFilterStandorte = (standort) => {
    if (!standort.length) {
      values.standort = [];
      return;
    } else if (standort.length == 2) {
      values.standort = ["Rösslimatt", "Fluhmatt"];
      return;
    }
    values.standort = [standort[0].name];
  };

  const handleZimmername = (index) => {
    return filteredData[index];
  };

  const shownZimmer = () => {
    if (shownData.length) {
      return shownData.map((zimmer) => {
        return (
          <Zimmer
            key={zimmer.id}
            zimmername={zimmer.zimmerName}
            standort={zimmer.standortName}
            stockwerk={zimmer.stockwerk}
            maxP={zimmer.maxPersonen}
            OnZimmerClick={handleZimmername}
          />
        );
      });
    }
    return "Keine Ergebnisse";
  };

  return (
    <div className="home-div">
      <form onSubmit={handleTyping}>
        <input
          className="search-bar"
          type="text"
          placeholder="Suchen..."
          onChange={(event) => {
            setSearchItem(event.target.value);
            handleTyping(event);
          }}
        />
        <button
          className="search-bar-button"
          onClick={() => {
            handleTextFilter();
            handleFilterSuche();
            submitFilters();
          }}
        >
          Suchen
        </button>
      </form>
      <div className="home-top">
        <Section
          stockwerke={generateStockwerkData()}
          onStockwerkChange={handleFilterStockwerke}
          onPersonenChange={handleFilterPersonen}
          onStandortChange={handleFilterStandorte}
          onStartDateChange={handleFilterStartDate}
          onEndDateChange={handleFilterEndDate}
          onSubmit={() => {
            handleFilterSuche();
            submitFilters();
          }}
        />
      </div>
      <div className="shown-filters">{showSelectedFilters()}</div>
      <div className="home">
        <div className="Such-Ausgabe">{shownZimmer()}</div>
      </div>
    </div>
  );
};

export default Home;
