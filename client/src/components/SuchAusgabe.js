import React, {useState, useEffect} from 'react'
import axios from 'axios'


const SuchAusgabe = () => {

  const [standOrte, setStandOrte] = useState([])

  useEffect(() => {
    axios.get("https://localhost:5000/sitzungszimmer").then((response) => {
      setStandOrte(response.data)
    })
  }, [])

  return <div className='Such-Ausgabe'>
     {standOrte.map((value, key) => {
       return <div>value.standortName</div>
     })}
      
    
  </div>;
};

export default SuchAusgabe;
