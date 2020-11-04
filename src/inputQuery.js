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
                    new APICall(e.path[1][0], 'current');


                    })}


                 
                   
            

            


       }