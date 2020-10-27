import { Common } from '/src/Common.js';

export class ForecastButton extends Common {
    constructor(button){
        super();
        this.button= button;
        this.buttonEventListener(button);
        this.clicked = false;
        this.daysOfWeek = {
            1:'Monday',
            2:'Tuesday',
            3:'Wednesday',
            4:'Thursday',
            5:'Friday',
            6:'Saturday',
            7:'Sunday',
        }
    }

    buttonEventListener(element){
        
        element.addEventListener('click' ,(e)=> {
            e.preventDefault();
            
            if(this.clicked){
                this.changeVisibility(this.domElements['dailyForecastModule']);
                this.clicked = !this.clicked;
            
            }
            else {
            this.clicked = !this.clicked;
            fetch(`http://api.weatherapi.com/v1/forecast.json?key=66667245d6d048b2ad9152824202510&q=${this.domElements['cityName'].textContent}&days=4`)
            .then(data => data.json())
            .then(data => {
                console.log(data['forecast']['forecastday'])

                Array.from(document.querySelectorAll('.weartherInfo__modal__dailyForecast__day')).map((element, index)=>{
                    const arrayFromLink = data['forecast']['forecastday'][index]['day']['condition']['icon'].split('');
                    const iconNumber = arrayFromLink.slice(arrayFromLink.length-7,arrayFromLink.length-4).join('');
                  console.log(Math.floor((data['forecast']['forecastday'][index]['date_epoch']/86400)+4)%7)
                  console.log( element.children[0]['children'][1]);

                  
                  element.children[0]['children'][1].textContent = this.daysOfWeek[Math.floor((data['forecast']['forecastday'][index]['date_epoch']/86400)+4)%7];
                  element.children[0]['children'][0].src = `icons/day/${iconNumber}.png`;
                  element.children[1].textContent = `${data['forecast']['forecastday'][index]['day']['avgtemp_c']}°C`;
                })



               
                // (floor(T / 86400) + 4) mod 7
                 //(Math.floor((data['forecast']['forecastday'][1]['date_epoch']/86400)+4)%7)
                this.changeVisibility(this.domElements['dailyForecastModule']);
            })
            }
            
           
            
         }
        )}
}