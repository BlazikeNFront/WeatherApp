
export class Common {
        constructor(){
          this.originalAppWidth = this.getOriginalAppWidth();
          this.createDOMObject();
           
        }




        getOriginalAppWidth(){
          //This method return number WITHOUT UNIT !!!
          const regex = /\d+/g;
         const appWidth =  getComputedStyle(document.body).getPropertyValue('--app-width');
      
         return appWidth.match(regex)[0]
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
 ///// change this func - it is not workin on list off elemenets for example on loader div that contains many divs inside
      changeVisibility(element){
        
       if(getComputedStyle(element).display ==='none') {
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


    setBackgroundImage(){
     
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight
      document.body.style.backgroundImage = `url('https://picsum.photos/${screenWidth}/${screenHeight}')`;
      
    }

    
    changeWidth(newWidth,element){
     
      element.style.setProperty('--app-width',`${newWidth}rem`);
  }

  }