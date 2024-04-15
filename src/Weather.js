import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-app">
        <form>
          <input type="text" placeholder="Type a location..." />
          <button type="submit"> Search </button>
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
                    <span>
                      <b>Precipitation</b>: 0%
                    </span>
                    <span>
                      <b>Humidity</b>: 60%
                    </span>
                    <span>
                      <b>Wind</b>: 20 km/h
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="weather-forecast">
            <span>
              Sunday
              <div>
                <span aria-label="emoji" role="img">
                  ⛅
                </span>
              </div>
              <p>17°C</p>
            </span>

            <span>
              Monday
              <div>
                <span aria-label="emoji" role="img">
                  ⛈️
                </span>
              </div>
              <p>8°C</p>
            </span>
            <span>
              Tuesday
              <div>
                <span aria-label="emoji" role="img">
                  🌩️
                </span>
              </div>
              <p>15°C</p>
            </span>
            <span>
              Wednesday
              <div>
                <span aria-label="emoji" role="img">
                  🔆
                </span>
              </div>
              <p>25°C</p>
            </span>
            <span>
              Thursday
              <div>
                <span aria-label="emoji" role="img">
                  ☁️
                </span>
              </div>
              <p>19°C</p>
            </span>
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
