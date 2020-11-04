import { Common } from '/src/Common.js';



export class APICall extends Common {
    constructor(location,typeOfCall){
        super();
        this.location = location;
        this.typeOfCall = typeOfCall;
        this.daysOfWeek = {
            0:'Sunday',
            1:'Monday',
            2:'Tuesday',
            3:'Wednesday',
            4:'Thursday',
            5:'Friday',
            6:'Saturday',
            
        }
        switch(typeOfCall){
            case 'current':
                this.currentWeatherCall(this.location);
                 break;
            case 'geolocation':
                this.geolocationCall();
                break;
            case 'forecast':
                this.forecastCAll(this.location);
                break;
        }
    
        
    }


    forecastCAll(inputValue){
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=66667245d6d048b2ad9152824202510&q=${inputValue}&days=4`)
            .then(data => data.json())
            .then(data => {
              
              
                Array.from(document.querySelectorAll('.weartherInfo__modal__dailyForecast__day')).map((element, index) => {
                    const arrayFromLink = data['forecast']['forecastday'][index]['day']['condition']['icon'].split('');
                    const iconNumber = arrayFromLink.slice(arrayFromLink.length-7,arrayFromLink.length-4).join('');
                    
                  element.children[0]['children'][1].textContent = this.daysOfWeek[Math.floor((data['forecast']['forecastday'][index]['date_epoch']/86400)+4)%7];
                  element.children[0]['children'][0].src = `icons/day/${iconNumber}.png`;
                  element.children[2].textContent = `Average temperature ${data['forecast']['forecastday'][index]['day']['avgtemp_c']}°C`;
                  
                })

                Array.from(document.querySelectorAll('.weartherInfo__modal__dailyForecast__day__temperatureChart')).map((element,index) => {
                 
                    
                    data['forecast']['forecastday'][index]['hour'].map((hour,hourindex) => {
                      
                        const box = document.createElement('div');
                        const chart = document.createElement('div');
                        const text = document.createElement('p');

                        chart.classList.add('weartherInfo__modal__dailyForecast__day__temperatureChart__chart');

                        let temperatureChartHeight = data['forecast']['forecastday'][index]['hour'][hourindex]['temp_c'] ;

                        if(data['forecast']['forecastday'][index]['hour'][hourindex]['temp_c']<0){
                            temperatureChartHeight = Math.abs(temperatureChartHeight)
                            chart.style.transform = `translate(0,${temperatureChartHeight/3}rem`;
                            text.style.transform = `translate(0,${temperatureChartHeight/3}rem`;
                            chart.style.backgroundColor = 'blue'
                        }


                        chart.style.height = `${temperatureChartHeight/3}rem`;

                        
                        text.textContent = `${(data['forecast']['forecastday'][index]['hour'][hourindex]['temp_c']).toFixed(1)}°C`;

                        box.appendChild(chart);
                        box.appendChild(text);
                        element.appendChild(box);

                    })
                })
                this.changeVisibility(this.domElements['dailyForecastModule']);
            })
    }

    currentWeatherCall(input){
        fetch(`http://api.weatherapi.com/v1/current.json?key=66667245d6d048b2ad9152824202510&q=${input.value}`)
        .then(data=> { return data.json()})
        .then(data=> { 
            input.value = '';
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
            this.domElements['inputErrorMsg'].textContent = '';
            
          this.switchView(this.domElements['inputView'],this.domElements['modalView']);
        }).catch(error => {
            
            this.domElements['inputErrorMsg'].textContent = 'Wrong city!' ;

            
        });
        input.value = '';
    }


    geolocationCall(){
        navigator.geolocation.getCurrentPosition((coordinates)=> {
            const latitude  = coordinates.coords.latitude;
            const longitude = coordinates.coords.longitude;
           
          
            fetch(`http://api.weatherapi.com/v1/current.json?key=66667245d6d048b2ad9152824202510&q=${latitude+','+longitude}`)
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
                this.domElements['inputErrorMsg'].textContent = '';
                
                this.switchView(this.domElements['inputView'],this.domElements['modalView']);
            }
            ,

            (error)=> {
                 this.domElements['inputErrorMsg'].textContent = 'Cannot get access to geoloaction...';
            })
        })}
    


}

