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
                Array.from(document.querySelectorAll('.weartherInfo__modal__dailyForecast__day__temperatureChart')).forEach(element => element.innerHTML = '')
                this.clicked = !this.clicked;
            
            }
            else {
            this.clicked = !this.clicked;
            fetch(`http://api.weatherapi.com/v1/forecast.json?key=66667245d6d048b2ad9152824202510&q=${this.domElements['cityName'].textContent}&days=4`)
            .then(data => data.json())
            .then(data => {
                
                console.log(data)
                Array.from(document.querySelectorAll('.weartherInfo__modal__dailyForecast__day')).map((element, index) => {
                    const arrayFromLink = data['forecast']['forecastday'][index]['day']['condition']['icon'].split('');
                    const iconNumber = arrayFromLink.slice(arrayFromLink.length-7,arrayFromLink.length-4).join('');
    
                  element.children[0]['children'][1].textContent = this.daysOfWeek[Math.floor((data['forecast']['forecastday'][index]['date_epoch']/86400)+4)%7];
                  element.children[0]['children'][0].src = `icons/day/${iconNumber}.png`;
                  element.children[2].textContent = `${data['forecast']['forecastday'][index]['day']['avgtemp_c']}°C`;
                  
                })

                Array.from(document.querySelectorAll('.weartherInfo__modal__dailyForecast__day__temperatureChart')).map((element,index) => {
                 
                    
                    data['forecast']['forecastday'][index]['hour'].map((hour,hourindex) => {
                      
                        const box = document.createElement('div');
                        const chart = document.createElement('div');
                        const text = document.createElement('p');

                        chart.classList.add('weartherInfo__modal__dailyForecast__day__temperatureChart__chart');
                        chart.style.height = `${data['forecast']['forecastday'][index]['hour'][hourindex]['temp_c']/3}rem`;
                        text.textContent = `${(data['forecast']['forecastday'][index]['hour'][hourindex]['temp_c']/3).toFixed(1)}°C`;

                        box.appendChild(chart);
                        box.appendChild(text);
                        element.appendChild(box);

                    })

                   /*Array.from(element.children).map((element,hour,array) => {
                    console.log(array.length)
                         element.style.height = `${data['forecast']['forecastday'][index]['hour'][hour]['temp_c']/3}rem`
                    })*/
                   
                })
                


        
                this.changeVisibility(this.domElements['dailyForecastModule']);
            })
            }
            
           
            
         }
        )}
}