<<<<<<< Updated upstream
import React from 'react';
import Section from './section';
import Suchausgabe from './SuchAusgabe';

const Home = () => {
  return <div className='home'>
      <Section />
      <Suchausgabe />
      
  </div>;
}
=======
import React, {useState, useEffect} from "react";
import axios from "axios";
import Section from "./section";
import Zimmer from "./requirements/zimmer";

const port = 5000;
const Home = () => {
  const [sitzungsZimmer, setSitzungsZimmer] = useState([]);
  const [sitzungsZimmerData, setSitzungsZimmerData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:${port}/sitzungszimmer/`).then((response) => {
      setSitzungsZimmer(response.data);
      setSitzungsZimmerData(response.data);
    });
  }, []);

  //fitered data value ?
  const handleFilterPersonen = (anzPersonen) => { 
    const filteredData = sitzungsZimmerData.filter((item) => {
      if (item.maxPersonen >= anzPersonen) {
        return item
      }
    }) 
    setSitzungsZimmerData(filteredData);
  };

  return (
    <div className="home">
      <Section onPersonenChange={handleFilterPersonen} />
      <div className="Such-Ausgabe">
        <div className="standort-test">
          {sitzungsZimmerData.map((zimmer) => {
            return <Zimmer
              zimmername={zimmer.zimmerName}
              standort={zimmer.standortName}
              stockwerk={zimmer.stockwerk}
              maxP={zimmer.maxPersonen}
            />
            })
          }
        </div>
      </div>
    </div>
  );
};
>>>>>>> Stashed changes

export default Home;
