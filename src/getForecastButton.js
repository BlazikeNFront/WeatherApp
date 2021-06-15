import { APICall } from "/src/APICall.js";
import { Common } from "/src/Common.js";

export class GetForecastButton extends Common {
  constructor(button) {
    super();
    this.button = button;
    this.buttonEventListener(button);
  }

  changeTextInForecastButton() {
    if (
      window.getComputedStyle(this.domElements["dailyForecastModule"])
        .display === "block"
    ) {
      this.domElements["getForecastButton"].textContent =
        "Get forecast for 3 days !";
    } else {
      this.domElements["getForecastButton"].textContent = "Hide forecast";
    }
  }

  buttonEventListener(element) {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      this.changeTextInForecastButton();
      if (
        getComputedStyle(this.domElements["dailyForecastModule"]).display ===
        "block"
      ) {
        this.changeVisibility(this.domElements["dailyForecastModule"]);
      } else {
        new APICall(this.domElements["cityName"].textContent, "forecast");
      }
    });
  }
}
