import { APICall } from "/src/APICall.js";
import { Common } from "/src/Common.js";

export class Geolocalization extends Common {
  constructor(button) {
    super();
    this.button = this.button;
    this.eventListener(button);
  }
  eventListener(button) {
    button.addEventListener("click", () => {
      new APICall(null, "geolocation");
    });
  }
}
