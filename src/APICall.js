import { Common } from '/src/Common.js';
import { MainInfoCard } from '/src/mainInfoCard.js';
import { DailyForecast } from '/src/dailyForecast.js';


export class APICall extends Common  {
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
        };
        
    
        
    }

    loader(){
        const loader = this.domElements['mainLoader']
       
       
         if(loader.style.display === '' || loader.style.display ==='none'){
            
            loader.style.display = 'block'
         }
         else {
           
            loader.style.display = 'none'
         }

        
        
    }

    forecastCAll(inputValue){
        //Free API users are able to get forcast for maximuim 3 days...

       

        this.checkIfNeedsUpdate('forecastWeather',inputValue)

        fetch(`http://api.weatherapi.com/v1/forecast.json?key=66667245d6d048b2ad9152824202510&q=${inputValue}&days=3`)
            .then(data => {
              if(data.ok){
                  
               return data.json()
              }
                else {  new Error('Server Error')
            }
            })
            .then(data => {
                
                this.domElements['dailyForecastModule'].innerHTML = '';
                


                data.forecast.forecastday.map(day => {
                   
                    new DailyForecast(this.domElements['dailyForecastModule'], day);
                  
                 })
                 this.changeVisibility(this.domElements['dailyForecastModule'])

                 setTimeout(()=>{
                    const newWidth = this.domElements['dailyForecastModule'].offsetWidth /10;
                    const elementToChangeWidth = this.domElements['weatherInfo'];
                    this.changeWidth(newWidth,elementToChangeWidth);
                },100);
                

                data.dateOfUpdate = String(new Date().getMonth()) + String(new Date().getDate());
                
            
           localStorage.setItem('forecastWeather', JSON.stringify(data));
        
            

    


            })
         
          
    }

    currentWeatherCall(input){
        this.loader()
         if(!this.checkIfNeedsUpdate('currentWeather', input.value)){
           console.log('LOCAL WAY');
           const data = JSON.parse(localStorage.getItem('currentWeather'))
           this.domElements['additionalInformationBox'].innerHTML = '';
           this.createCurrentWeatherInfo(data,input);
           return
       }  
       
        this.domElements['additionalInformationBox'].innerHTML = '';
       

        this.fetchCurrentFunction('http://api.weatherapi.com/v1/current.json?key=66667245d6d048b2ad9152824202510&q',input)

        
        input.value = '';
    }


    geolocationCall(){
       
        this.loader()

        
        navigator.geolocation.getCurrentPosition((coordinates)=> {
            const latitude  = coordinates.coords.latitude;
            const longitude = coordinates.coords.longitude;
            this.domElements['additionalInformationBox'].innerHTML = '';
            this.fetchCurrentFunction(`http://api.weatherapi.com/v1/current.json?key=66667245d6d048b2ad9152824202510&q=${latitude+','+longitude}`)
         
    })}
    


    fetchCurrentFunction(url,input){
        
           let fetchUrl;
           
           if(input){
            fetchUrl = `${url}=${input.value}`
           }
           else {
            fetchUrl = url;
           }
           



        fetch(fetchUrl)
        .then(data => {
            if(data.ok){
             return data.json()
            }})
        .then(data=>{ 
           
           
           if(input){ input.value = ''};
            const arrayFromLink = data['current']['condition']['icon'].split('');
            const iconNumber = arrayFromLink.slice(arrayFromLink.length-7,arrayFromLink.length-4).join('');
           
            if( data['current']['condition']['icon'].includes('day')){
            this.domElements['mainInfoIcon'].src=`icons/day/${iconNumber}.png`;
            }
                else { this.domElements['mainInfoIcon'].src = `icons/night/${113}.png` ;
            
            }  
            
            this.domElements['cityName'].textContent = data['location']['name'];
            this.domElements['weatherIconText'].textContent = data['current']['condition']['text'];
            this.domElements['mainInfoTemperature'].textContent = `${data['current']['temp_c']}°C`;
            


            
            new MainInfoCard(this.domElements['additionalInformationBox'],'humidity','icons/drop.svg',`${data['current']['humidity']}%`);
            new MainInfoCard(this.domElements['additionalInformationBox'],'feelLike','icons/hot.svg',`${data['current']['feelslike_c']}°C`);
            new MainInfoCard(this.domElements['additionalInformationBox'],'wind','icons/wind.svg',`${data['current']['wind_kph']}km/h`,{windDirection:data['current']['wind_dir']});
            
            


            data.dateOfUpdate =  Math.round(new Date() / 1000);
            localStorage.setItem('currentWeather', JSON.stringify(data))
           
            

           
            this.domElements['inputErrorMsg'].textContent = '';
            this.loader()
          this.switchView(this.domElements['inputView'],this.domElements['modalView']);
        }).catch(error => {
            console.log(error)
            this.loader()
            this.domElements['inputErrorMsg'].textContent = 'Wrong city!' ;
        });
       }
       

checkIfNeedsUpdate(typeOfWeatherInfo,location){
        let currentDate = String(new Date().getMonth()) + String(new Date().getDate())
        const localData = JSON.parse(localStorage.getItem(typeOfWeatherInfo));
        if(localData === null){
            return true
        }
        const dateOfLastUpdate = localData.dateOfUpdate 
       


     
        if(location.toLowerCase() !== localData.location.name.toLowerCase()){
            return true
        }
        if (typeOfWeatherInfo === 'forecastWeather'){
            
            if( currentDate - dateOfLastUpdate - 1 > 0){
                console.log('forecast FETCH ON')
                return true
            }}

        if (typeOfWeatherInfo === 'currentWeather'){
            currentDate = Math.round(new Date() / 1000)
            if( currentDate - dateOfLastUpdate - 3600 > 0){
                return true
            }}
            return false
        }


createCurrentWeatherInfo(data,input){
        
       if(input){ input.value = ''};
        const arrayFromLink = data['current']['condition']['icon'].split('');
        const iconNumber = arrayFromLink.slice(arrayFromLink.length-7,arrayFromLink.length-4).join('');
       
        if( data['current']['condition']['icon'].includes('day')){
        this.domElements['mainInfoIcon'].src=`icons/day/${iconNumber}.png`;
        }
            else { this.domElements['mainInfoIcon'].src = `icons/night/${113}.png` ;
        
        }  
        
        this.domElements['cityName'].textContent = data['location']['name'];
        this.domElements['weatherIconText'].textContent = data['current']['condition']['text'];
        this.domElements['mainInfoTemperature'].textContent = `${data['current']['temp_c']}°C`;
        


        
        new MainInfoCard(this.domElements['additionalInformationBox'],'humidity','icons/drop.svg',`${data['current']['humidity']}%`);
        new MainInfoCard(this.domElements['additionalInformationBox'],'feelLike','icons/hot.svg',`${data['current']['feelslike_c']}°C`);
        new MainInfoCard(this.domElements['additionalInformationBox'],'wind','icons/wind.svg',`${data['current']['wind_kph']}km/h`,{windDirection:data['current']['wind_dir']});
        
        


        data.dateOfUpdate =  Math.round(new Date() / 1000);
        localStorage.setItem('currentWeather', JSON.stringify(data))
       
        

       
        this.domElements['inputErrorMsg'].textContent = '';
        this.loader()
      this.switchView(this.domElements['inputView'],this.domElements['modalView']);
       }
       
}

