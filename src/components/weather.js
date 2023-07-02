import React, { useState } from "react";
import './styles.css';
import Parameters from "./parameters";
import { FaSearchLocation } from "react-icons/fa";

function Weather({ weatherData , lat, long}) {
  const [input, setInput] = useState('');
  const [searchData, setSearchData] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleClick = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=0f8c88146a435b8db9d6af1cacbbc02a`)
      .then(response => response.json())
      .then(data => {
        setSearchData(data)
      });
    console.log(searchData)
    setInput('')
  }

  return (
    <div className="wrapper">
      <header>
        <h1>Weather in</h1>
        <div>
          <input
            type="text"
            id="input"
            name="input"
            value={input}
            onChange={handleChange}
            placeholder="Search"></input>
          <button
            className="btn"
            id="btn"
            type="submit"
            onClick={handleClick}><FaSearchLocation className="searchIcon" /></button>
        </div>
        <h1>{input}</h1>
      </header>
      <Parameters weatherData={weatherData} lat={lat} long={long} />
    </div>)
}
export default Weather;