
import { Common } from '/src/Common.js';


export class BackButton extends Common {
            constructor(button,currentView,nextView){
                super();
                this.button = button;
                this.currentView = currentView;
                this.nextView = nextView;
                this.buttonEventListener();
             }

             buttonEventListener(){
                 this.button.addEventListener('click',()=>{
                     this.switchView(this.currentView,this.nextView);
                   if(getComputedStyle(this.domElements['dailyForecastModule']).display === 'flex'){
                        this.changeVisibility(this.domElements['dailyForecastModule']);
                        Array.from(document.querySelectorAll('.weartherInfo__modal__dailyForecast__day__temperatureChart')).forEach(element => element.innerHTML = '')
                   }
                   
                 })
             }
         }