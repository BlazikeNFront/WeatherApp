import { Common } from "/src/Common.js";

export class BackButton extends Common {
  constructor(button, currentView, nextView) {
    super();
    this.button = button;
    this.currentView = currentView;
    this.nextView = nextView;
    this.buttonEventListener();
    this.changeWidthAfterClick(
      this.button,
      this.domElements["weatherInfo"],
      this.originalAppWidth
    );
    this.forecast;
  }

  buttonEventListener() {
    this.button.addEventListener("click", () => {
      this.switchView(this.currentView, this.nextView);
      this.domElements["getForecastButton"].textContent =
        "Get forecast for 3 days !";
      if (
        getComputedStyle(this.domElements["dailyForecastModule"]).display ===
        "flex"
      ) {
        this.changeVisibility(this.domElements["dailyForecastModule"]);

        Array.from(
          document.querySelectorAll(
            ".weartherInfo__modal__dailyForecast__day__temperatureChart"
          )
        ).forEach((element) => (element.innerHTML = ""));
      }
    });
  }

  changeWidthAfterClick(button, element, newWidth) {
    button.addEventListener("click", () => {
      this.changeWidth(newWidth, element);
    });
  }
}
