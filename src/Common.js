
export class Common {
        constructor(){
           this.createDOMObject();
        }

      createDOMObject(){
        this.domElements = {}
            Array.from(document.querySelectorAll('[data-jsLink]')).forEach(element => {
                
                this.domElements[element.dataset.jslink] = element;
               
            })
            return this.domElements;
      }

      grabNewDOMElement(dataAttributeValue){
        return document.querySelector(`[data-jsLink=${dataAttributeValue}]`);
      }

      changeVisibility(element,value){
        
       if(value) {
        element.classList.remove('hidden')
        }
         else {
          
           element.classList.add('hidden')
          }
      }

      switchView(element,element2){
        element.classList.add('hidden');
        element2.classList.remove('hidden');
    }
  }