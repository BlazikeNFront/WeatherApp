import { Common } from '/src/Common.js';

export class ForecastButton extends Common {
    constructor(input){
        super();
        this.input= input;
        this.inputEventListener(input);
        this.clicked = false;
    }

    inputEventListener(element){
        
        element.addEventListener('click' ,(e)=> {
            e.preventDefault();
            
            if(this.clicked){
                this.changeVisibility(this.domElements['dailyForecastModule']);
                this.clicked = !this.clicked;
               
            }
            else {
            this.clicked = !this.clicked;
            fetch('http://api.weatherapi.com/v1/forecast.json?key=66667245d6d048b2ad9152824202510&q=07112&days=7')
            .then(data => data.json())
            .then(data => {
                console.log(data)
                // (floor(T / 86400) + 4) mod 7
                 //(Math.floor((data['forecast']['forecastday'][1]['date_epoch']/86400)+4)%7)
                this.changeVisibility(this.domElements['dailyForecastModule']);
            })
            }
            
           
            
         }
        )}
}