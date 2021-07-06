import { Common } from "/src/Common.js";
import { UserInput } from "/src/UserInput.js";
import { SwitchViewButton } from "/src/switchViewButton.js";
import { GetForecastButton } from "/src/getForecastButton.js";
import { GeolocalizationButton } from "/src/geolocalizationButton.js";

class WeatherApp extends Common {
  constructor() {
    super();
    this.domElements = this.createDOMObject(); //this is object that contains all DOM elements that  contains data-jslink attribute -- easy to access in code
    this.setBackgroundImage();
    new UserInput(this.domElements["buttonSubmit"]);
    new SwitchViewButton(
      this.domElements["backToSearchViewButton"],
      this.domElements["modalView"],
      this.domElements["inputView"]
    );
    new GetForecastButton(this.domElements["getForecastButton"]);
    new GeolocalizationButton(this.domElements["useGeolocationButton"]);
  }
}

new WeatherApp();
