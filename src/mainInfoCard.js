import { Common } from "/src/Common.js";

export class MainInfoCard extends Common {
  constructor(DOMParent, infoType, iconSrc, value, additionalInfo) {
    super();
    this.infoType = infoType;
    this.iconSrc = iconSrc;
    this.value = value;
    this.additionalInfo = additionalInfo;

    switch (this.infoType) {
      case "humidity":
        this.humidity(DOMParent);
        break;
      case "feelLike":
        this.feelLikeTemperature(DOMParent);
        break;
      case "wind":
        this.wind(DOMParent);
        break;
    }
  }

  humidity(domParent) {
    const div = document.createElement("div");
    div.classList.add("resultView__resultBox");
    const icon = document.createElement("img");
    icon.classList.add("resultView__iconImg");
    icon.src = this.iconSrc;
    icon.alt = "humidity Icon";

    const p = document.createElement("p");
    p.classList.add("resultView__additionalInfoText");
    p.textContent = `Humidity: ${this.value}`;

    div.appendChild(icon);
    div.appendChild(p);

    domParent.appendChild(div);
  }

  feelLikeTemperature(domParent) {
    const div = document.createElement("div");
    div.classList.add("resultView__resultBox");
    div.classList.add("resultView__feelLikeTempBox");
    const icon = document.createElement("img");
    icon.classList.add("resultView__iconImg");
    icon.src = this.iconSrc;
    icon.alt = "feel like icon";

    const p = document.createElement("p");
    p.classList.add("resultView__additionalInfoText");
    p.textContent = `Feel like: ${this.value}`;

    div.appendChild(icon);
    div.appendChild(p);

    domParent.appendChild(div);
  }

  wind(domParent) {
    const div = document.createElement("div");
    div.classList.add("resultView__resultBox");

    const icon = document.createElement("img");
    icon.src = this.iconSrc;
    icon.alt = "Wind Icon";
    icon.classList.add("resultView__iconImg");
    const p = document.createElement("p");
    p.classList.add("resultView__additionalInfoText");
    p.textContent = `${this.value}`;

    let windDirectionShortCut = this.additionalInfo["windDirection"];
    // API gives wind direction as 16 point compass - e.g.: NSW - code below translates it into maxiumum 8 point -e.g. NSW into NW;

    if (windDirectionShortCut.length === 3) {
      const array = windDirectionShortCut.split("");
      if (array[0] === "N" || array[0] === "S") {
        array.splice(array[1], 1);
        windDirectionShortCut = array.join("");
      } else {
        array.splice(array[0], 1);
        windDirectionShortCut = array.join("");
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

    const windDirection = windDirectionFull[`${windDirectionShortCut}`];
    const additionInfo = document.createElement("p");
    p.classList.add("resultView__additionalInfoText");
    p.textContent = ` Wind direction: ${windDirection}`;

    div.appendChild(icon);
    div.appendChild(p);

    domParent.appendChild(div);
  }
}
