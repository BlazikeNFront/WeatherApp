import { Common } from "/src/Common.js";

export class MainCardInfo extends Common {
  constructor(DOMElement, infoType, iconSrc, value, additionalInfo) {
    super();
    this.infoType = infoType;
    this.iconSrc = iconSrc;
    this.value = value;
    this.additionalInfo = additionalInfo;

    switch (this.infoType) {
      case "humidity":
        this.humidity(DOMElement);
        break;
      case "feelLike":
        this.feelLikeTemperature(DOMElement);
        break;
      case "wind":
        this.wind(DOMElement);
        break;
    }
  }

  humidity(DOMElement) {
    const div = document.createElement("div");
    div.classList.add("mainInfo__additionalResultBox");

    const icon = document.createElement("img");
    icon.classList.add("mainInfo__additionalInfoIcon");
    icon.src = this.iconSrc;
    icon.alt = "humidity Icon";

    const p = document.createElement("p");
    p.classList.add("mainInfo__additionalInfoParagraph");
    p.textContent = `Humidity: ${this.value}`;

    div.appendChild(icon);
    div.appendChild(p);
    DOMElement.appendChild(div);
  }

  feelLikeTemperature(DOMElement) {
    const div = document.createElement("div");
    div.classList.add("resultView__resultBox");
    div.classList.add("resultView__feelLikeTempBox");

    const icon = document.createElement("img");
    icon.classList.add("mainInfo__additionalInfoIcon");
    icon.src = this.iconSrc;
    icon.alt = "feel like icon";

    const p = document.createElement("p");
    p.classList.add("mainInfo__additionalInfoParagraph");
    p.textContent = `Feel like: ${this.value}`;

    div.appendChild(icon);
    div.appendChild(p);

    DOMElement.appendChild(div);
  }

  wind(DOMElement) {
    const div = document.createElement("div");
    div.classList.add("mainInfo__additionalResultBox");

    const icon = document.createElement("img");
    icon.src = this.iconSrc;
    icon.alt = "Wind Icon";
    icon.classList.add("mainInfo__additionalInfoIcon");

    const p = document.createElement("p");
    p.classList.add("mainInfo__additionalInfoParagraph");
    p.textContent = `${this.value}`;

    const windDirection = this.createShortWindDescription(
      this.additionalInfo["windDirection"]
    );
    const windDirectionParagraph = document.createElement("p");
    windDirectionParagraph.classList.add("mainInfo__additionalInfoParagraph");
    windDirectionParagraph.textContent = ` Wind direction: ${windDirection}`;

    div.appendChild(icon);
    div.appendChild(windDirectionParagraph);

    DOMElement.appendChild(div);
  }
  createShortWindDescription(windDataFromAPI) {
    // API gives wind direction as 16 point compass - e.g.: NSW - code below translates it into maxiumum 8 point --- NSW into NW;
    // API gives wind direction as 16 point compass - e.g.: NSW - code below translates it into maxiumum 8 point --- NSW into NW;
    // API gives wind direction as 16 point compass - e.g.: NSW - code below translates it into maxiumum 8 point --- NSW into NW;
    if (windDataFromAPI.length === 3) {
      const array = windDataFromAPI.split("");
      if (array[0] === "N" || array[0] === "S") {
        array.splice(array[1], 1);
        windDataFromAPI = array.join("");
      } else {
        array.splice(array[0], 1);
        windDataFromAPI = array.join("");
      }
    }

    const windDirectionFull = {
      E: "East",
      S: "South",
      N: "North",
      W: "West",
      NE: "North-East",
      NW: "North-West",
      SE: "South-East",
      SW: "South-West",
    };
    return windDirectionFull[`${windDataFromAPI}`];
  }
}
