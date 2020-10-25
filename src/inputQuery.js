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
                    this.switchView(this.domElements['inputView'],this.domElements['modalView'])
            })

            }


       }