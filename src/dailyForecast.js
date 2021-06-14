import { Common } from "/src/Common.js";

export class DailyForecast extends Common {
  constructor(domParent, data) {
    super();
    this.domParent = domParent;

    this.data = data;
    this.days = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
    };

    this.createBox(this.domParent);
  }
  createBox(DOMElement) {
    const box = document.createElement("div");
    box.classList.add("resultView__day");

    const iconAndDayBox = document.createElement("div");
    iconAndDayBox.classList.add("resultView__iconAndDay");

    const icon = document.createElement("img");
    icon.classList.add("resultView__forecastDayIcon");
    icon.src = "#";
    icon.alt = "Weather Icon";

    const arrayFromLink = this.data["day"]["condition"]["icon"].split("");
    const iconNumber = arrayFromLink
      .slice(arrayFromLink.length - 7, arrayFromLink.length - 4)
      .join("");

    const day = document.createElement("p");

    iconAndDayBox.appendChild(icon);
    iconAndDayBox.appendChild(day);

    const temperetureChartBoxContainer = document.createElement("div");
    temperetureChartBoxContainer.classList.add(
      "resultView__temperatureChartContainer"
    );

    const averageTemperatureText = document.createElement("p");
    averageTemperatureText.classList.add("resultView__chartTemperature");

    averageTemperatureText.classList.add("resultView__avarageTemp");

    box.appendChild(iconAndDayBox);
    box.appendChild(temperetureChartBoxContainer);
    box.appendChild(averageTemperatureText);

    day.textContent =
      this.days[Math.floor(this.data["date_epoch"] / 86400 + 4) % 7];

    if (day.textContent === "Wednesday") {
      iconAndDayBox.style.paddingLeft = "0";
    }

    iconAndDayBox["children"][0].src = `icons/day/${iconNumber}.png`;
    averageTemperatureText.textContent = `Average temperature ${this.data["day"]["avgtemp_c"]}°C`;

    const widthOfScreen = window.innerWidth;

    if (widthOfScreen >= 768) {
      if (this.data["day"]["avgtemp_c"] < -10) {
        temperetureChartBoxContainer.style.transform = "translate(0, -7rem)";
      } else if (this.data["day"]["avgtemp_c"] < -7) {
        temperetureChartBoxContainer.style.transform = "translate(0, -4.5rem)";
      } else if (this.data["day"]["avgtemp_c"] < -3) {
        temperetureChartBoxContainer.style.transform = "translate(0, -3.5rem)";
      }
    }

    if (this.data["day"]["avgtemp_c"] > -40) {
      setTimeout(() => {
        temperetureChartBoxContainer.scrollTo({
          left: 0,
          top: 100,
        });
      }, 100);
    }
    //code below scales chart depenending on temperature values (higher temp === bigger scale down), without scaling chart looks weird on high values
    let chartHeightMulitplier = 2;
    const rawTemperatureChartHeight = Math.abs(this.data["day"]["avgtemp_c"]);
    if (rawTemperatureChartHeight > 10) {
      chartHeightMulitplier = 2.5;
    } else if (rawTemperatureChartHeight > 20) {
      chartHeightMulitplier = 2.75;
    } else if (rawTemperatureChartHeight > 30) {
      chartHeightMulitplier = 3;
    }
    const evenHours = this.data["hour"].filter((hour, index) => {
      if (index % 2 === 0) {
        return true;
      }
      return false;
    });

    evenHours.map((hour) => {
      const boxForChart = document.createElement("div");
      boxForChart.classList.add("singleChartContainer");

      const chart = document.createElement("div");
      const tempInfo = document.createElement("p");
      const hourText = document.createElement("p");
      hourText.classList.add("resultView__hourInfo");
      tempInfo.classList.add("resultView__tempInfo");

      let temperatureChartHeight = hour["temp_c"]; // this constant is widely used in this map function , not only as temperatur chart height attribute

      if (temperatureChartHeight >= 0) {
        setTimeout(() => {
          hourText.style.transform = `rotate(-90deg) translate(-1rem)`;
        }, 100);
        tempInfo.textContent = `${temperatureChartHeight.toFixed(1)}°C`;
      }

      chart.classList.add("resultView__chart");

      if (temperatureChartHeight < 0) {
        temperatureChartHeight = Math.abs(temperatureChartHeight);
        chart.style.transform = `translate(0,${
          temperatureChartHeight / chartHeightMulitplier
        }rem`;

        chart.style.backgroundColor = "#37ede4";
        chart.style.borderRadius = "0 0 10px 10px";
        chart.classList.add("below-0-chartAnimation");
        setTimeout(() => {
          hourText.style.transform = `rotate(-90deg)`;
        }, 100);
        tempInfo.textContent = `-${temperatureChartHeight.toFixed(1)}°C`;
      }

      chart.style.height = 0;
      chart.style.transition = "2s";
      const chartHeight = temperatureChartHeight / chartHeightMulitplier;
      //set wrapper height to the highest chart value
      chartHeight < 7
        ? (boxForChart.style.height = `10rem`)
        : (boxForChart.style.height = `${chartHeight + 3}rem`);

      setTimeout(() => {
        chart.style.height = `${chartHeight}rem`;
      }, 100);
      hourText.textContent = hour.time.split(" ")[1];

      boxForChart.appendChild(tempInfo);
      boxForChart.appendChild(chart);
      boxForChart.appendChild(hourText);

      temperetureChartBoxContainer.appendChild(boxForChart);
    });

    DOMElement.appendChild(box);
  }
}
