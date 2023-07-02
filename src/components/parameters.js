import React from 'react';
import './styles.css';
import moment from 'moment';
import Map from './map';

const Parameters = ({ weatherData , lat, long}) => {
  console.log(lat)
  const location = {
    address: weatherData.name,
    lat: lat,
    lng: long,
  }
  return (
    <main>
      <div>
        <h6>Weather in {weatherData.name}</h6>
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
          <div className="map-box">

            <div id="map">
              <Map location={location} />
            </div>

            <div class="parameter">
              <p className="sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).getHours()}:{new Date(weatherData.sys.sunset * 1000).getMinutes()} </p>
              <p>Humadity: {weatherData.main.humidity}</p>
              <p>Wind Speed: {weatherData.wind.speed}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Parameters;