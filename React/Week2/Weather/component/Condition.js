import React, { useState } from "react";
import Select from "react-select";


export default function Weatherrep() {

  const info = [
    {
      temp: "38'c",
      humidity: "85%",
      wind: "5km/hr",
      climate: "Sunny",
      label: "Chennai"
    },
    {
      temp: "30'c",
      humidity: "70%",
      wind: "5km/hr",
      climate:"Cloudy",
      label: "Pune"
    },
  ];
  const [obj1, setobj1] = useState(info.temp);
  const [obj2, setobj2] = useState(info.humidity);
  const [obj3, setobj3] = useState(info.wind);
  const [obj4,setobj4] = useState(info.climate);

  const handleChange = (event) => {
    setobj1(event.temp);
    setobj2(event.humidity);
    setobj3(event.wind);
    setobj4(event.climate);
  };


  return (
    <div style={{color: 'red', textAlign:"center", textSizeAdjust:"20%"}}>
      Weather Condition
      <br></br>
      <br></br>
      <div style={{width: "30%", marginLeft:"35%"}}>

        <Select style ={{width:"10px"}} name="City" options={info} onChange={handleChange} />
        <br></br>
        {obj1 ? (
         <h1>
            <h4>Temp: {obj1}</h4>
         <h4>Humidity: {obj2}</h4> 
         <h4> Wind: {obj3}</h4>
         <h4> Climate: {obj4}</h4>
         </h1>  
        ) : (
          <p>Happy Day!!!</p>
        )}

      </div>

    </div>

  )
}