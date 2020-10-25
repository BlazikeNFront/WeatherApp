import { Common } from '/src/Common.js';
import { InputQuery } from '/src/inputQuery.js';
import { BackButton } from '/src/backButton.js';


class WeatherApp extends Common{
    constructor(){
        super();
        this.domElements = this.createDOMObject();
        new InputQuery(this.domElements['buttonSubmit']);
        new BackButton(this.domElements['backToSearchViewButton'],this.domElements['modalView'],this.domElements['inputView']);
       
    }
}

new WeatherApp();
