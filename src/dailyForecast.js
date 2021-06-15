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

    this.createForecastDisplayForDay(this.domParent);
  }
  createChartForDay(chartData, DOMElement) {
    let chartHeightMulitplier = 2;
    const rawTemperatureChartHeight = Math.abs(this.data["day"]["avgtemp_c"]);
    if (rawTemperatureChartHeight > 10) {
      chartHeightMulitplier = 2.5;
    } else if (rawTemperatureChartHeight > 20) {
      chartHeightMulitplier = 2.75;
    } else if (rawTemperatureChartHeight > 30) {
      chartHeightMulitplier = 3;
    }
    chartData.map((hour) => {
      const boxForChart = document.createElement("div");
      boxForChart.classList.add(
        "forecastChartsContainer__singleChartContainer"
      );

      const chart = document.createElement("div");
      const tempInfo = document.createElement("p");
      const hourText = document.createElement("p");

      hourText.classList.add("forecastChartsContainer__hourInfo");
      hourText.textContent = hour.time.split(" ")[1];

      chart.classList.add("forecastChartsContainer__chart");

      tempInfo.classList.add("forecastChartsContainer__tempInfo");

      let temperatureChartHeight = hour["temp_c"];

      const chartHeight = Math.abs(
        temperatureChartHeight / chartHeightMulitplier
      );
      chartHeight < 7
        ? (boxForChart.style.height = `10rem`)
        : (boxForChart.style.height = `${chartHeight + 3}rem`);
      if (temperatureChartHeight >= 0) {
        tempInfo.textContent = `${temperatureChartHeight.toFixed(1)}°C`;

        boxForChart.appendChild(tempInfo);
        boxForChart.appendChild(chart);
        boxForChart.appendChild(hourText);
      } else {
        temperatureChartHeight = Math.abs(temperatureChartHeight);
        boxForChart.style.transform = `translateY(${chartHeight + 1}rem)`;
        chart.style.backgroundColor = "#37ede4";
        chart.style.borderRadius = "0 0 10px 10px";
        tempInfo.textContent = `-${temperatureChartHeight.toFixed(1)}°C`;
        boxForChart.appendChild(hourText);
        boxForChart.appendChild(chart);
        boxForChart.appendChild(tempInfo);
      }
      setTimeout(() => {
        chart.style.height = `${chartHeight}rem`;
      }, 100);
      DOMElement.appendChild(boxForChart);
    });
  }
  createForecastDisplayForDay(DOMElement) {
    const box = document.createElement("div");
    box.classList.add("forecastChartsContainer__day");

    //resultView__iconAndDay
    //resultView__iconAndDay
    //resultView__iconAndDay
    const iconAndDayBox = document.createElement("div");
    iconAndDayBox.classList.add("forecastChartsContainer__iconAndDay");

    const weatherIcon = document.createElement("img");
    weatherIcon.classList.add("forecastChartsContainer__forecastDayIcon");

    weatherIcon.alt = "Weather Icon";

    const iconInformationSplittedArrayLength =
      this.data["day"]["condition"]["icon"].split("").length;

    const iconNumber = this.data["day"]["condition"]["icon"]
      .split("")
      .slice(
        iconInformationSplittedArrayLength - 7,
        iconInformationSplittedArrayLength - 4
      )
      .join("");
    weatherIcon.src = `icons/day/${iconNumber}.png`;

    iconAndDayBox.appendChild(weatherIcon);

    const dayInformation = document.createElement("p");
    dayInformation.classList.add("forecastChartsContainer__forecastDayText");
    dayInformation.textContent =
      this.days[Math.floor(this.data["date_epoch"] / 86400 + 4) % 7];

    iconAndDayBox.appendChild(dayInformation);

    //chart
    //chart
    //chart
    const temperetureChartBoxContainer = document.createElement("div");
    temperetureChartBoxContainer.classList.add("forecastChartsContainer");
    const evenHours = this.data["hour"].filter((hour, index) => {
      if (index % 2 === 0) {
        return true;
      }
      return false;
    });

    this.createChartForDay(evenHours, temperetureChartBoxContainer);

    //averageTempInfo
    //averageTempInfo
    //averageTempInfo
    const averageTemperatureText = document.createElement("p");
    averageTemperatureText.classList.add(
      "forecastChartsContainer__avarageTemp"
    );
    averageTemperatureText.textContent = `Average temperature ${this.data["day"]["avgtemp_c"]}°C`;

    box.appendChild(iconAndDayBox);
    box.appendChild(temperetureChartBoxContainer);
    box.appendChild(averageTemperatureText);

    //code below scales chart depenending on temperature values (higher temp === bigger scale down), without scaling chart looks weird on high values

    DOMElement.appendChild(box);
  }
}
