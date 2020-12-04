import { Common } from '/src/Common.js';


 export class  DailyForecast extends Common {
    constructor(domParent,data){
        super();
        this.domParent = domParent;
      
        this.data = data;
        this.days = {
            0:'Sunday',
            1:'Monday',
            2:'Tuesday',
            3:'Wednesday',
            4:'Thursday',
            5:'Friday',
            6:'Saturday',
            
        }
        
        this.createBox(this.domParent);
   
    
      
    }
    createBox(DOMElement){

        
        
        


        const box =document.createElement('div');
        box.classList.add('weartherInfo__modal__dailyForecast__day');

        const iconAndDayBox = document.createElement('div');
        iconAndDayBox.classList.add('weartherInfo__modal__dailyForecast__day__iconAndDay');
        const icon = document.createElement('img');
        icon.src = '#';
        icon.alt = 'Weather Icon';

          
        const arrayFromLink = this.data['day']['condition']['icon'].split('');
        const iconNumber = arrayFromLink.slice(arrayFromLink.length-7,arrayFromLink.length-4).join('');

        const day = document.createElement('p');
        day.classList.add('weartherInfo__modal__dailyForecast__day__text');
        iconAndDayBox.appendChild(icon);
        iconAndDayBox.appendChild(day);

        const  temperetureChartBoxContainer = document.createElement('div')
        temperetureChartBoxContainer.classList.add('weartherInfo__modal__dailyForecast__day__temperatureChart__container');
        const temperetureChartBox = document.createElement('div');
        temperetureChartBox.classList.add('weartherInfo__modal__dailyForecast__day__temperatureChart');
        const hourInfo = document.createElement('p');

        const averageTemperatureText = document.createElement('p');
        averageTemperatureText.classList.add('weartherInfo__modal__dailyForecast__day__temperature');

        hourInfo.textContent = 'HOUR'
        
        if(this.data['hour'][0]['temp_c'] >  0){
            hourInfo.style.transform = 'translate(0,1.5rem)';
            
        }
            else {
                hourInfo.style.transform = 'translate(0,-0.5rem)';
            }
        
        temperetureChartBox.appendChild(hourInfo)
        averageTemperatureText.classList.add('weartherInfo__modal__dailyForecast__avarageTemp')
        
        box.appendChild(iconAndDayBox);
       temperetureChartBoxContainer.appendChild(temperetureChartBox);
        box.appendChild(temperetureChartBoxContainer);
        box.appendChild(averageTemperatureText);


        

        
        iconAndDayBox['children'][1].textContent = this.days[Math.floor((this.data['date_epoch']/86400)+4)%7];
        iconAndDayBox['children'][0].src = `icons/day/${iconNumber}.png`;
        averageTemperatureText.textContent = `Average temperature ${this.data['day']['avgtemp_c']}°C`;


       
            
         if(this.data['day']['avgtemp_c'] <-10){
           
            
            box.children[1].style.transform='translate(0, -7rem)';
          }
          else if(this.data['day']['avgtemp_c'] <-7){
            
            box.children[1].style.transform='translate(0, -4.5rem)';
          }
        else if(this.data['day']['avgtemp_c'] <-3){
            
           box.children[1].style.transform='translate(0, -3.5rem)';
         }


        let chartHeightMulitplier = 2 ;
        const rawTemperatureChartHeight = Math.abs(this.data['day']['avgtemp_c'])
       if( rawTemperatureChartHeight > 10){
        chartHeightMulitplier = 2.5
       }
       else if(rawTemperatureChartHeight > 20){
        chartHeightMulitplier =2.75
       }
       else if(rawTemperatureChartHeight > 30){
        chartHeightMulitplier =3
       }
  
        


          this.data['hour'].map((hour,hourindex) => {
        
            
            const boxForChart = document.createElement('div');
            const chart = document.createElement('div');
            const tempInfo = document.createElement('p');
            const hourText = document.createElement('p');
            hourText.classList.add('weartherInfo__modal__additionalInfomations__box__hourInfo')

            tempInfo.classList.add('weartherInfo__modal__additionalInfomations__box__tempInfo');
            
           
      

            let temperatureChartHeight = hour['temp_c'] ;  // this constant is widely used in this map function , not only as temperatur chart height attribute

            hourText.style.transitionDuration = '2s';

            if(temperatureChartHeight >= 0){
            setTimeout(()=>{
              
            hourText.style.transform = `rotate(-90deg) translate(-${(temperatureChartHeight)/chartHeightMulitplier + 0.2}rem,0)`},100)
            tempInfo.textContent = `${(temperatureChartHeight).toFixed(1)}°C`;
          }
    
            chart.classList.add('weartherInfo__modal__dailyForecast__day__temperatureChart__chart');
            

         
           
    
            if(temperatureChartHeight < 0){
                
                temperatureChartHeight = Math.abs(temperatureChartHeight)
                chart.style.transform = `translate(0,${temperatureChartHeight/chartHeightMulitplier}rem`;
                tempInfo.style.transform = `translate(0,${temperatureChartHeight/chartHeightMulitplier + 0.2}rem`;
                chart.style.backgroundColor = 'blue';
                chart.classList.add('below-0-chartAnimation')
                setTimeout(()=>{hourText.style.transform = `rotate(-90deg) translate(2.7rem, 0)`},100)
                tempInfo.textContent = `-${(temperatureChartHeight).toFixed(1)}°C`;
            
            }
           
            
            
      


         
            chart.style.height = 0;
            chart.style.transition = '2s'
            setTimeout(()=> {chart.style.height = `${temperatureChartHeight/chartHeightMulitplier}rem`},100);
    
            
          
            
            hourText.textContent = `${hourindex}:00`;
            
    
            
            
            
            chart.appendChild(tempInfo);
            chart.appendChild(hourText);
            boxForChart.appendChild(chart);
            
            
            box.children[1].appendChild(boxForChart)
    
        })
     
        DOMElement.appendChild(box);   
       
     
      
    }

    createTemperatureChart(){

    }

} 




