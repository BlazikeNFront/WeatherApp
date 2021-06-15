import { Common } from "/src/Common.js";

export class SwitchViewButton extends Common {
  constructor(button, currentView, nextView) {
    super();
    this.button = button;
    this.currentView = currentView;
    this.nextView = nextView;
    this.buttonEventListener();
  }

  buttonEventListener() {
    this.button.addEventListener("click", () => {
      this.switchView(this.currentView, this.nextView);
      this.changeVisibility(this.domElements["dailyForecastModule"]);
      this.domElements["getForecastButton"].textContent =
        "Get forecast for 3 days !";
    });
  }
}
