import { Common } from '/src/Common.js';


 export class  DailyForecast extends Common {
    constructor(domParent){
        super();
        this.domParent = domParent;
        this.createBox(this.domParent)
    }
    createBox(DOMElement){
        const box =document.createElement('div');
        box.classList.add('weartherInfo__modal__dailyForecast__day');

        const iconAndDayBox = document.createElement('div');
        iconAndDayBox.classList.add('weartherInfo__modal__dailyForecast__day__iconAndDay');
        const icon = document.createElement('img');
        icon.src = '#';
        icon.alt = 'Weather Icon';

        const day = document.createElement('p');
        day.classList.add('weartherInfo__modal__dailyForecast__day__text');
        iconAndDayBox.appendChild(icon);
        iconAndDayBox.appendChild(day);

        const temperetureChartBox = document.createElement('div');

        temperetureChartBox.classList.add('weartherInfo__modal__dailyForecast__day__temperatureChart');

        const averageTemperatureText = document.createElement('p');
        averageTemperatureText.classList.add('weartherInfo__modal__dailyForecast__day__temperature');

        box.appendChild(iconAndDayBox);
        box.appendChild(temperetureChartBox);
        box.appendChild(averageTemperatureText);
        
        DOMElement.appendChild(box);
      
    }

    createTemperatureChart(){

    }

} 



/*<div class="weartherInfo__modal__dailyForecast__day">
    <div class="weartherInfo__modal__dailyForecast__day__iconAndDay">
        <img src='#' alt='Weather Icon'>
        <p class="weartherInfo__modal__dailyForecast__day__text">wednesday</p>
    </div>
    <div class='weartherInfo__modal__dailyForecast__day__temperatureChart'>
  
    </div>
    <p class='weartherInfo__modal__dailyForecast__day__temperature'>21</p>
</div>*/