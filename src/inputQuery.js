import { Common } from '/src/Common.js';

export class InputQuery extends Common {
            constructor(input){
                super();
                this.input= input;
                this.inputEventListener(input);
            }


            inputEventListener(element){
                element.addEventListener('click' ,(e)=> {
                 
                    e.preventDefault();
                    fetch(`http://api.weatherapi.com/v1/current.json?key=66667245d6d048b2ad9152824202510&q=${e.path[1][0].value}`)
                    .then(data=> { return data.json()})
                    .then(data=> { 
                     
                        const arrayFromLink = data['current']['condition']['icon'].split('');
                        const iconNumber = arrayFromLink.slice(arrayFromLink.length-7,arrayFromLink.length-4).join('');
                       
                        if( data['current']['condition']['icon'].includes('day')){
                        this.domElements['mainInfoIcon'].src=`icons/day/${iconNumber}.png`;
                        }
                            else { this.domElements['mainInfoIcon'].src = `icons/night/${113}.png` ;
                        
                        }  
                        
                        this.domElements['cityName'].textContent = data['location']['name'];
                        this.domElements['weatherIconText'].textContent = data['current']['condition']['text'];
                        this.domElements['additionalInfoHumidity'].textContent = `${data['current']['humidity']}%`;
                        this.domElements['additionalInfoFeellike'].textContent = `${data['current']['feelslike_c']}°C`;
                        this.domElements['additionalInfoWind'].textContent = `${data['current']['wind_kph']}km/h`;
                        this.domElements['mainInfoTemperature'].textContent = `${data['current']['temp_c']}°C`;
                  
                    
                    
                    
                    })
                    
                    
                    this.switchView(this.domElements['inputView'],this.domElements['modalView'])


                    })}


                 
                   
            

            


       }