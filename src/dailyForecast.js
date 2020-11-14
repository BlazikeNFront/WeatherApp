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

        const temperetureChartBox = document.createElement('div');
        temperetureChartBox.classList.add('weartherInfo__modal__dailyForecast__day__temperatureChart');

        const averageTemperatureText = document.createElement('p');
        averageTemperatureText.classList.add('weartherInfo__modal__dailyForecast__day__temperature');

        
        box.appendChild(iconAndDayBox);
        box.appendChild(temperetureChartBox);
        box.appendChild(averageTemperatureText);




       
        
        iconAndDayBox['children'][1].textContent = this.days[Math.floor((this.data['date_epoch']/86400)+4)%7];
        iconAndDayBox['children'][0].src = `icons/day/${iconNumber}.png`;
        box.children[2].textContent = `Average temperature ${this.data['day']['avgtemp_c']}°C`;
            
    
         if(this.data['day']['avgtemp_c'] <-3){
            box.children[1].style.transform='translate(0, -2rem)';
          }

         

          this.data['hour'].map((hour,hourindex) => {
        
            
            const boxForChart = document.createElement('div');
            const chart = document.createElement('div');
            const text = document.createElement('p');
            const hourText = document.createElement('p');
            const chartHeightMulitplier = 2;
           
      

            let temperatureChartHeight = hour['temp_c'] ; // this constant is widely used in this map function , not only as temperatur chart height attribute

            hourText.style.transform = `rotate(-90deg) translate(-${(temperatureChartHeight)/2}rem,0)`
    
            chart.classList.add('weartherInfo__modal__dailyForecast__day__temperatureChart__chart');
    
           
    
            if(temperatureChartHeight<0){
                temperatureChartHeight = Math.abs(temperatureChartHeight)
                chart.style.transform = `translate(0,${temperatureChartHeight/chartHeightMulitplier}rem`;
                text.style.transform = `translate(0,${temperatureChartHeight/chartHeightMulitplier}rem`;
                chart.style.backgroundColor = 'blue';
                hourText.style.transform = ' rotate(-90deg) translate(2.3rem, 0)';
            }
           
    
    
            chart.style.height = `${temperatureChartHeight/chartHeightMulitplier}rem`;
    
            
            text.textContent = `${(temperatureChartHeight).toFixed(1)}°C`;
            
            hourText.textContent = `${hourindex}:00`;
            hourText.classList.add('weartherInfo__modal__additionalInfomations__box__hourInfo')
    
            
            
            text.classList.add('weartherInfo__modal__additionalInfomations__box__tempInfo');
            chart.appendChild(text);
            chart.appendChild(hourText);
            boxForChart.appendChild(chart);
            
            
            box.children[1].appendChild(boxForChart)
    
        })

    



     
        

       



    
        
        DOMElement.appendChild(box);
      
    }

    createTemperatureChart(){

    }

} 




/*Array.from(document.querySelectorAll('.weartherInfo__modal__dailyForecast__day__temperatureChart')).map((element,index) => {
                 

    data['forecast']['forecastday'][index]['hour'].map((hour,hourindex) => {
        

        const box = document.createElement('div');
        const chart = document.createElement('div');
        const text = document.createElement('p');
        const hourText = document.createElement('p');
        const chartHeightMulitplier = 2;
       
        
        hourText.style.transform = `rotate(-90deg) translate(-${(data['forecast']['forecastday'][index]['hour'][hourindex]['temp_c'])/2}rem,0)`

        chart.classList.add('weartherInfo__modal__dailyForecast__day__temperatureChart__chart');

        let temperatureChartHeight = data['forecast']['forecastday'][index]['hour'][hourindex]['temp_c'] ;

        if(data['forecast']['forecastday'][index]['hour'][hourindex]['temp_c']<0){
            temperatureChartHeight = Math.abs(temperatureChartHeight)
            chart.style.transform = `translate(0,${temperatureChartHeight/chartHeightMulitplier}rem`;
            text.style.transform = `translate(0,${temperatureChartHeight/chartHeightMulitplier}rem`;
            chart.style.backgroundColor = 'blue';
            hourText.style.transform = ' rotate(-90deg) translate(2.3rem, 0)';
        }
       


        chart.style.height = `${temperatureChartHeight/chartHeightMulitplier}rem`;

        
        text.textContent = `${(data['forecast']['forecastday'][index]['hour'][hourindex]['temp_c']).toFixed(1)}°C`;
        
        hourText.textContent = `${hourindex}:00`;
        hourText.classList.add('weartherInfo__modal__additionalInfomations__box__hourInfo')

        
        
        text.classList.add('weartherInfo__modal__additionalInfomations__box__tempInfo');
        chart.appendChild(text);
        chart.appendChild(hourText);
        box.appendChild(chart);
        
        
        element.appendChild(box);

    })*/


  
        /*    if( data['current']['condition']['icon'].includes('day')){
            this.domElements['mainInfoIcon'].src=`icons/day/${iconNumber}.png`;
            }
                else { this.domElements['mainInfoIcon'].src = `icons/night/${113}.png` ;
            
            }  

/*<div class="weartherInfo__modal__dailyForecast__day">
    <div class="weartherInfo__modal__dailyForecast__day__iconAndDay">
        <img src='#' alt='Weather Icon'>
        <p class="weartherInfo__modal__dailyForecast__day__text">wednesday</p>
    </div>
    <div class='weartherInfo__modal__dailyForecast__day__temperatureChart'>
  
    </div>
    <p class='weartherInfo__modal__dailyForecast__day__temperature'>21</p>
</div>*/