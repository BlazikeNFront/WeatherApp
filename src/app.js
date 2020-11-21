import { Common } from '/src/Common.js';
import { InputQuery } from '/src/inputQuery.js';
import { BackButton } from '/src/backButton.js';
import { ForecastButton }  from '/src/inputQueryForecast.js';
import { Geolocalization }  from '/src/geolocalization.js';

class WeatherApp extends Common{
    constructor(){
        super();
        this.domElements = this.createDOMObject();
      
        this.setBackgroundImage()
        new InputQuery(this.domElements['buttonSubmit']);
        new BackButton(this.domElements['backToSearchViewButton'],this.domElements['modalView'],this.domElements['inputView']);
        new ForecastButton(this.domElements['getForecastButton']);
        new Geolocalization(this.domElements['buttonGeolocation']);
       
       
    }
}

new WeatherApp();
