import { Common } from "/src/Common.js";
import { APIKey } from "../privates.js";
import { MainCardInfo } from "./mainInfoCard.js";
import { DailyForecast } from "./dailyForecast.js";

export class APICall extends Common {
  constructor(location, typeOfCall) {
    super();
    this.location = location;
    this.typeOfCall = typeOfCall;

    switch (typeOfCall) {
      case "current":
        this.currentWeatherCall(this.location);
        break;
      case "geolocation":
        this.geolocationCall();
        break;
      case "forecast":
        this.forecastCall(this.location);
        break;
    }
  }

  loader() {
    const loader = this.domElements["mainLoader"];
    if (loader.style.display === "" || loader.style.display === "none") {
      loader.style.display = "block";
    } else {
      loader.style.display = "none";
    }
  }
  geoloader() {
    const loader = this.domElements["geoLoader"];
    if (loader.style.display === "" || loader.style.display === "none") {
      loader.style.display = "block";
    } else {
      loader.style.display = "none";
    }
  }

  forecastCall(inputValue) {
    //Free API users are able to get forcast for maximuim 3 days...
    if (!this.checkIfNeedsUpdate("forecastWeather", inputValue)) {
      const data = JSON.parse(localStorage.getItem("forecastWeather"));
      this.createForecastWeatherInfo(data);
      return;
    }

    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${inputValue}&days=3`
    )
      .then((data) => {
        if (data.ok) {
          return data.json();
        } else {
          new Error("Server Error");
        }
      })
      .then((data) => {
        this.createForecastWeatherInfo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  currentWeatherCall(locationInput) {
    if (!this.checkIfNeedsUpdate("currentWeather", locationInput.value)) {
      const data = JSON.parse(localStorage.getItem("currentWeather"));
      this.createCurrentWeatherInfo(data, locationInput);
      return;
    }
    this.domElements["additionalInformationBox"].innerHTML = "";
    this.fetchDataFromAPI(
      `https://api.weatherapi.com/v1/current.json?key=${APIKey}&q`,
      locationInput
    );
    locationInput.value = "";
  }

  geolocationCall() {
    window.navigator.geolocation.getCurrentPosition(
      (coordinates) => {
        const latitude = coordinates.coords.latitude;
        const longitude = coordinates.coords.longitude;
        this.domElements["additionalInformationBox"].innerHTML = "";
        this.fetchDataFromAPI(
          `https://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${
            latitude + "," + longitude
          }`
        );
        this.domElements["useGeolocationButton"].disabled = false;
        this.geoloader();
      },
      (error) => {
        alert(error.code + ": " + error.message);
        this.geoloader();
        this.domElements["useGeolocationButton"].disabled = false;
        this.domElements["geolocationError"].textContent =
          "Geolocalization not avalible - check functionality on desktop";
        this.domElements["geoLoader"].style.display = "none";
      }
    );
  }

  fetchDataFromAPI(url, input) {
    let fetchUrl;
    this.domElements["mainInfoIcon"];
    if (input) {
      fetchUrl = `${url}=${input.value}`;
    } else {
      fetchUrl = url;
    }

    fetch(fetchUrl)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
      })
      .then((data) => {
        if (input) {
          input.value = "";
        }
        if (!data.current.condition) {
          this.domElements["mainLoader"].style.display = "none";
          this.domElements["geoLoader"].style.display = "none";
          this.domElements["inputErrorMsg"].textContent =
            "API doesnot information about that location, type diffrent location";
          return;
        }

        const arrayFromLink = data["current"]["condition"]["icon"].split("");
        const iconNumber = arrayFromLink
          .slice(arrayFromLink.length - 7, arrayFromLink.length - 4)
          .join("");

        if (data["current"]["condition"]["icon"].includes("day")) {
          this.domElements["mainInfoIcon"].src = `icons/day/${iconNumber}.png`;
        } else {
          this.domElements["mainInfoIcon"].src = `icons/night/${113}.png`;
        }

        this.domElements["cityName"].textContent = data["location"]["name"];
        this.domElements["weatherIconText"].textContent =
          data["current"]["condition"]["text"];
        this.domElements[
          "mainInfoTemperature"
        ].textContent = `${data["current"]["temp_c"]}°C`;

        new MainCardInfo(
          this.domElements["additionalInformationBox"],
          "humidity",
          "icons/drop.svg",
          `${data["current"]["humidity"]}%`
        );
        new MainCardInfo(
          this.domElements["additionalInformationBox"],
          "feelLike",
          "icons/hot.svg",
          `${data["current"]["feelslike_c"]}°C`
        );
        new MainCardInfo(
          this.domElements["additionalInformationBox"],
          "wind",
          "icons/wind.svg",
          `${data["current"]["wind_kph"]}km/h`,
          { windDirection: data["current"]["wind_dir"] }
        );

        data.dateOfUpdate = Math.round(new Date() / 1000);
        localStorage.setItem("currentWeather", JSON.stringify(data));

        this.domElements["inputErrorMsg"].textContent = "";

        this.switchView(
          this.domElements["inputView"],
          this.domElements["modalView"]
        );
        this.domElements["mainLoader"].style.display = "none";
      })
      .catch((error) => {
        console.log(error);
        this.domElements["mainLoader"].style.display = "none";
        this.domElements["inputErrorMsg"].textContent = "Wrong city!";
      });
  }

  checkIfNeedsUpdate(typeOfWeatherInfo, location) {
    let currentDate =
      String(new Date().getMonth()) + String(new Date().getDate());
    const localData = JSON.parse(localStorage.getItem(typeOfWeatherInfo));
    if (localData === null) {
      return true;
    }
    const dateOfLastUpdate = localData.dateOfUpdate;

    if (location.toLowerCase() !== localData.location.name.toLowerCase()) {
      return true;
    }
    if (typeOfWeatherInfo === "forecastWeather") {
      if (currentDate - dateOfLastUpdate - 1 > 0) {
        return true;
      }
    }

    if (typeOfWeatherInfo === "currentWeather") {
      currentDate = Math.round(new Date() / 1000);
      if (currentDate - dateOfLastUpdate - 3600 > 0) {
        return true;
      }
    }
    return false;
  }

  createCurrentWeatherInfo(data, input) {
    this.domElements["additionalInformationBox"].innerHTML = "";
    if (input) {
      input.value = "";
    }
    const arrayFromLink = data["current"]["condition"]["icon"].split("");
    const iconNumber = arrayFromLink
      .slice(arrayFromLink.length - 7, arrayFromLink.length - 4)
      .join("");

    if (data["current"]["condition"]["icon"].includes("day")) {
      this.domElements["mainInfoIcon"].src = `icons/day/${iconNumber}.png`;
    } else {
      this.domElements["mainInfoIcon"].src = `icons/night/${113}.png`;
    }

    this.domElements["cityName"].textContent = data["location"]["name"];
    this.domElements["weatherIconText"].textContent =
      data["current"]["condition"]["text"];
    this.domElements[
      "mainInfoTemperature"
    ].textContent = `${data["current"]["temp_c"]}°C`;

    new MainCardInfo(
      this.domElements["additionalInformationBox"],
      "humidity",
      "icons/drop.svg",
      `${data["current"]["humidity"]}%`
    );
    new MainCardInfo(
      this.domElements["additionalInformationBox"],
      "feelLike",
      "icons/hot.svg",
      `${data["current"]["feelslike_c"]}°C`
    );
    new MainCardInfo(
      this.domElements["additionalInformationBox"],
      "wind",
      "icons/wind.svg",
      `${data["current"]["wind_kph"]}km/h`,
      { windDirection: data["current"]["wind_dir"] }
    );

    data.dateOfUpdate = Math.round(new Date() / 1000);
    localStorage.setItem("currentWeather", JSON.stringify(data));

    this.domElements["inputErrorMsg"].textContent = "";
    this.loader();
    this.switchView(
      this.domElements["inputView"],
      this.domElements["modalView"]
    );
  }

  createForecastWeatherInfo(data) {
    this.domElements["dailyForecastModule"].innerHTML = "";
    data.forecast.forecastday.map((day) => {
      new DailyForecast(this.domElements["dailyForecastModule"], day);
    });
    this.changeVisibility(this.domElements["dailyForecastModule"]);

    data.dateOfUpdate =
      String(new Date().getMonth()) + String(new Date().getDate());

    localStorage.setItem("forecastWeather", JSON.stringify(data));
  }
}
