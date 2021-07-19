import { Common } from "/src/Common.js";
import { APICall } from "/src/APICall.js";

export class UserInput extends Common {
  constructor(input) {
    super();
    this.input = input;
    this.inputEventListener(input);
  }

  inputEventListener(element) {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      this.clearMainViewErrors();
      new APICall(this.domElements["input"], "current");
    });
  }
  clearMainViewErrors() {
    this.domElements["inputErrorMsg"].textContent = "";
    this.domElements["geolocationError"].textContent = "";
  }
}
