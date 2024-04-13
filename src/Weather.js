import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-app">
        <form className="mb-3">
          <div class="row">
            <div className="col-4">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autocomplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-120"
              />
            </div>
          </div>
        </form>

        <div className="weather-app-wrap">
          <div className="overview">
            <h1>Cape Town</h1>
            <ul>
              <li>Last updated: Sunday 12:00</li>
              <li>Cloudy</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <img
                  src="https://openweathermap.org/img/wn/04d@2x.png"
                  alt="Clear"
                  class="float-left"
                />
                <div className="float-left">
                  <span className="units">
                    <br />
                    <strong>8</strong> °C| <a href="/">°F</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation: 0%</li>
                <li>Humidity: 60%</li>
                <li>Wind: 20 km/h</li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast">
            <ul>
              <li>
                Sunday
                <p>⛅</p>
                <p>17°C</p>
              </li>
              <li>
                Monday
                <p>⛈️</p>
                <p>8°C</p>
              </li>
              <li>
                Tuesday
                <p>🌩️</p>
                <p>15°C</p>
              </li>
              <li>
                Wednesday
                <p>🔆</p>
                <p>25°C</p>
              </li>
              <li>
                Thursday
                <p>☁️</p>
                <p>19°C</p>
              </li>
              <li>Friday</li>
              <p>❄️</p>
              <p>13°C</p>
            </ul>
          </div>
        </div>
      </div>
      <small>
        <a href="https://github.com/MonMihle/weather-app">Open-source code</a>
        by Monica Mntanywa
      </small>
    </div>
  );
}
