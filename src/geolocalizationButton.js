import { APICall } from "/src/APICall.js";
import { Common } from "/src/Common.js";

export class GeolocalizationButton extends Common {
  constructor(button) {
    super();
    this.button = this.button;
    this.eventListener(button);
  }

  eventListener(button) {
    button.addEventListener("click", () => {
      this.clearMainViewErrors();
      if ("geolocation" in window.navigator) {
        button.disabled = true;

        new APICall(null, "geolocation");
      } else {
        this.domElements["geolocationError"].textContent =
          "Geolocalization not avalible";
      }
    });
  }
  clearMainViewErrors() {
    this.domElements["inputErrorMsg"].textContent = "";
    this.domElements["geolocationError"].textContent = "";
  }
}
