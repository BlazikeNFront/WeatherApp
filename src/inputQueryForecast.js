import { APICall } from '/src/APICall.js';
import { Common } from '/src/Common.js';

export class ForecastButton extends Common {
    constructor(button){
        super();
        this.button= button;
        this.buttonEventListener(button);
        
      
    }

    buttonEventListener(element){
        
        element.addEventListener('click' ,(e)=> {
            e.preventDefault();
            
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