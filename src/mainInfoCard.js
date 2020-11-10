import { Common } from '/src/Common.js';



export class MainInfoCard extends Common {
    constructor(DOMParent,infoType,iconSrc,value){
        super();
        this.infoType =  infoType;
        this.iconSrc = iconSrc;
        this.value = value ;
        this.humidity(DOMParent);

    }


    humidity(domParent){
        const div = document.createElement('div');
        div.classList.add('weartherInfo__modal__additionalInfomations__box');
        div.classList.add('weartherInfo__modal__additionalInfomations__box__humidity');
        const icon = document.createElement('img');
        icon.src = this.iconSrc;
        icon.alt = 'humidity Icon';

        const p = document.createElement('p');
        p.classList.add('weartherInfo__modal__additionalInfomations__text');
        p.textContent = this.value;

        div.appendChild(icon);
        div.appendChild(p);

        domParent.appendChild(div);
        
    }

    feelLikeTemperature(){

    }

    wind(){

    }
}

/*<div class="weartherInfo__modal__additionalInfomations__box weartherInfo__modal__additionalInfomations__box__humidity">
                    <img src='icons\drop.svg' alt='humidity Icon' data-jsLink='additionalInfoIcon1'>
                    <p class='weartherInfo__modal__additionalInfomations__text' data-jsLink='additionalInfoHumidity'>53%</p>
 </div>*/