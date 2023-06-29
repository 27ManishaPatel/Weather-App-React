import React from "react";
import './styles.css';
import moment from 'moment';

function Weather({ weatherData }) {
  return (
    <div className="wrapper">
      <header>
        <h1>Weather in</h1>
        <div>
          <input type="text" id="search-location" placeholder="Search"></input>
          <button id="btn" type="submit"><i class="fa fa-search"></i></button>
        </div>
      </header>
      <main>
        <div>
          <h6>Weather in {weatherData.name} </h6>
          <p className="sunrise">Sunrise: {new Date(weatherData.sys.sunrise * 1000).getHours()} :{new Date(weatherData.sys.sunrise * 1000).getMinutes()}</p>
          <div class="date-box">
            <p><span>{moment().format('L')} {moment().format('dddd')}</span> <span>{new Date().getHours() + ":" + new Date().getMinutes()}</span></p>
          </div>

          <div class="weather-info">
            
            <div class="temp-icon">
              <p className="temperature">{weatherData.main.temp} &deg;C</p>
              <p>Feels Like: {weatherData.main.feels_like}&deg;</p>
              <div class="cloud-icon-text">
                <img src={"https://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png"} alt="Weathericon"></img>
                <p className="description">{weatherData.weather[0].description}</p>
              </div>
            </div>

            <div class="parameter">
              <p className="sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).getHours()}:{new Date(weatherData.sys.sunset * 1000).getMinutes()} </p>
              <p>Humadity: {weatherData.main.humidity}</p>
              <p>Wind Speed: {weatherData.wind.speed}</p>
            </div>
            <div id="map"></div>
          </div>

        </div>
      </main>
    </div>)
}
export default Weather;