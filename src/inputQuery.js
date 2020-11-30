import { Common } from '/src/Common.js';
import { APICall } from '/src/APICall.js';


export class InputQuery extends Common {
            constructor(input){
                super();
                this.input= input;
                this.inputEventListener(input);
                
            }


            inputEventListener(element){
                element.addEventListener('click' ,(e)=> {
                 
                    e.preventDefault();
                    const currentDate  = new Date().getTime();
                    const lastUpdateDate = localStorage.getItem('lastUpdate');
                    
                    /* if( !lastUpadteDate || lastUpadteDate < currentDate){
                        console.log('work')
                    } */

                    new APICall(e.path[1][0], 'current');


                    })}


                 
                   
            

            


       }