import { APICall } from '/src/APICall.js';
import { Common } from '/src/Common.js';

export class ForecastButton extends Common {
    constructor(button){
        super();
        this.button= button;
        this.buttonEventListener(button);
        this.getForecastButton =  false;
        
      
    }

    changeTextInForecastButton(){
      
        if(!this.getForecastButton){
            this.domElements['getForecastButton'].textContent = 'Close forecast';
            this.getForecastButton = true
      
        }
            else {
                this.domElements['getForecastButton'].textContent = 'Get forecast for 3 days !';
                this.getForecastButton = false
              
            }
    }

    buttonEventListener(element){
        
        element.addEventListener('click' ,(e)=> {
            e.preventDefault();
            this.changeTextInForecastButton();
            if(getComputedStyle(this.domElements['dailyForecastModule']).display === 'flex'){
                this.changeVisibility(this.domElements['dailyForecastModule']);
                Array.from(document.querySelectorAll('.weartherInfo__modal__dailyForecast__day__temperatureChart')).forEach(element => element.innerHTML = '')
                
            
            }
            else {
             

             new APICall(this.domElements['cityName'].textContent,'forecast')
        

            }
            
           
            
         }
        )}
}