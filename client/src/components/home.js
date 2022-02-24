import React, {useState, useEffect} from "react";
import axios from "axios";
import Section from "./section";
import Zimmer from "./requirements/zimmer";

const port = 5001;
const Home = () => {
  const [sitzungsZimmer, setSitzungsZimmer] = useState([]);
  const [sitzungsZimmerData, setSitzungsZimmerData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:${port}/sitzungszimmer/`).then((response) => {
      setSitzungsZimmer(response.data);
      setSitzungsZimmerData(response.data);
    });
  }, []);

  const handleFilterPersonen = (anzPersonen) => {
    const filteredData = sitzungsZimmer.filter((item) => {
      if (item.maxPersonen >= anzPersonen) {
        return item;
      }
    })
    setSitzungsZimmerData(filteredData);
  };

  console.log(sitzungsZimmer)
  console.log(sitzungsZimmerData)

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

export default Home;
