import { Common } from '/src/Common.js';
import { APICall } from '/src/APICall.js';


export class InputQuery extends Common {
            constructor(input){
                super();
                this.input= input;
                this.inputEventListener(input);
                
            }


            inputEventListener(element){
                element.addEventListener('click' ,(event)=> {
                 
                    event.preventDefault();
              
                    new APICall(this.domElements['input'], 'current');


                    })}


                 
                   
            

            


       }