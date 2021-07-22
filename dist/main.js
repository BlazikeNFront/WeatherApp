(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var e=function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.createDOMObject()}var n,o;return n=e,(o=[{key:"createDOMObject",value:function(){var t=this;return this.domElements={},Array.from(document.querySelectorAll("[data-jsLink]")).forEach((function(e){t.domElements[e.dataset.jslink]=e})),this.domElements}},{key:"grabNewDOMElement",value:function(t){return document.querySelector("[data-jsLink=".concat(t,"]"))}},{key:"changeVisibility",value:function(t){"none"===getComputedStyle(t).display?t.classList.remove("hidden"):t.classList.add("hidden")}},{key:"switchView",value:function(t,e){t.classList.add("hidden"),e.classList.remove("hidden")}},{key:"setBackgroundImage",value:function(){var t=window.innerWidth,e=window.innerHeight;document.body.style.backgroundImage="url('https://picsum.photos/".concat(t,"/").concat(e,"')")}},{key:"changeWidth",value:function(t,e){e.style.setProperty("--app-width","".concat(t,"rem"))}}])&&t(n.prototype,o),e}(),n="66667245d6d048b2ad9152824202510";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(s,t);var e,n,o,u,l=(o=s,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=c(o);if(u){var n=c(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return a(this,t)});function s(t,e,n,o,r){var i;switch(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(i=l.call(this)).infoType=e,i.iconSrc=n,i.value=o,i.additionalInfo=r,i.infoType){case"humidity":i.humidity(t);break;case"feelLike":i.feelLikeTemperature(t);break;case"wind":i.wind(t)}return i}return e=s,(n=[{key:"humidity",value:function(t){var e=document.createElement("div");e.classList.add("mainInfo__additionalResultBox");var n=document.createElement("img");n.classList.add("mainInfo__additionalInfoIcon"),n.src=this.iconSrc,n.alt="humidity Icon";var o=document.createElement("p");o.classList.add("mainInfo__additionalInfoParagraph"),o.textContent="Humidity: ".concat(this.value),e.appendChild(n),e.appendChild(o),t.appendChild(e)}},{key:"feelLikeTemperature",value:function(t){var e=document.createElement("div");e.classList.add("mainInfo__additionalResultBox");var n=document.createElement("img");n.classList.add("mainInfo__additionalInfoIcon"),n.src=this.iconSrc,n.alt="feel like icon";var o=document.createElement("p");o.classList.add("mainInfo__additionalInfoParagraph"),o.textContent="Feel like: ".concat(this.value),e.appendChild(n),e.appendChild(o),t.appendChild(e)}},{key:"wind",value:function(t){var e=document.createElement("div");e.classList.add("mainInfo__additionalResultBox");var n=document.createElement("img");n.src=this.iconSrc,n.alt="Wind Icon",n.classList.add("mainInfo__additionalInfoIcon");var o=document.createElement("p");o.classList.add("mainInfo__additionalInfoParagraph"),o.textContent="".concat(this.value);var r=this.createShortWindDescription(this.additionalInfo.windDirection),i=document.createElement("p");i.classList.add("mainInfo__additionalInfoParagraph"),i.textContent=" Wind direction: ".concat(r),e.appendChild(n),e.appendChild(i),t.appendChild(e)}},{key:"createShortWindDescription",value:function(t){if(3===t.length){var e=t.split("");"N"===e[0]||"S"===e[0]?(e.splice(e[1],1),t=e.join("")):(e.splice(e[0],1),t=e.join(""))}return{E:"East",S:"South",N:"North",W:"West",NE:"North-East",NW:"North-West",SE:"South-East",SW:"South-West"}["".concat(t)]}}])&&r(e.prototype,n),s}(e);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=p(o);if(r){var n=p(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return d(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this)).domParent=t,n.data=e,n.days={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"},n.createForecastDisplayForDay(n.domParent),n}return e=a,(n=[{key:"createChartForDay",value:function(t,e){var n=2,o=Math.abs(this.data.day.avgtemp_c);o>10?n=2.5:o>20?n=2.75:o>30&&(n=3),t.map((function(t){var o=document.createElement("div");o.classList.add("forecastChartsContainer__singleChartContainer");var r=document.createElement("div"),i=document.createElement("p"),a=document.createElement("p");a.classList.add("forecastChartsContainer__hourInfo"),a.textContent=t.time.split(" ")[1],r.classList.add("forecastChartsContainer__chart"),i.classList.add("forecastChartsContainer__tempInfo");var c=t.temp_c,u=Math.abs(c/n);o.style.height=u<7?"10rem":"".concat(u+3,"rem"),c>=0?(i.textContent="".concat(c.toFixed(1),"°C"),o.appendChild(i),o.appendChild(r),o.appendChild(a)):(c=Math.abs(c),o.style.transform="translateY(".concat(u+1,"rem)"),r.style.backgroundColor="#37ede4",r.style.borderRadius="0 0 10px 10px",i.textContent="-".concat(c.toFixed(1),"°C"),o.appendChild(a),o.appendChild(r),o.appendChild(i)),setTimeout((function(){r.style.height="".concat(u,"rem")}),100),e.appendChild(o)}))}},{key:"createForecastDisplayForDay",value:function(t){var e=document.createElement("div");e.classList.add("forecastChartsContainer__day");var n=document.createElement("div");n.classList.add("forecastChartsContainer__iconAndDay");var o=document.createElement("img");o.classList.add("forecastChartsContainer__forecastDayIcon"),o.alt="Weather Icon";var r=this.data.day.condition.icon.split("").length,i=this.data.day.condition.icon.split("").slice(r-7,r-4).join("");o.src="icons/day/".concat(i,".png"),n.appendChild(o);var a=document.createElement("p");a.classList.add("forecastChartsContainer__forecastDayText"),a.textContent=this.days[Math.floor(this.data.date_epoch/86400+4)%7],n.appendChild(a);var c=document.createElement("div");c.classList.add("forecastChartsContainer");var u=this.data.hour.filter((function(t,e){return e%2==0}));this.createChartForDay(u,c);var l=document.createElement("p");l.classList.add("forecastChartsContainer__avarageTemp"),l.textContent="Average temperature ".concat(this.data.day.avgtemp_c,"°C"),e.appendChild(n),e.appendChild(c),e.appendChild(l),t.appendChild(e)}}])&&s(e.prototype,n),a}(e);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(c,t);var e,o,r,i,a=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(r);if(i){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return v(this,t)});function c(t,e){var n;switch(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(n=a.call(this)).location=t,n.typeOfCall=e,e){case"current":n.currentWeatherCall(n.location);break;case"geolocation":n.geolocationCall();break;case"forecast":n.forecastCall(n.location)}return n}return e=c,(o=[{key:"loader",value:function(){var t=this.domElements.mainLoader;""===t.style.display||"none"===t.style.display?t.style.display="block":t.style.display="none"}},{key:"geoloader",value:function(){var t=this.domElements.geoLoader;""===t.style.display||"none"===t.style.display?t.style.display="block":t.style.display="none"}},{key:"forecastCall",value:function(t){var e=this;if(this.checkIfNeedsUpdate("forecastWeather",t))fetch("https://api.weatherapi.com/v1/forecast.json?key=".concat(n,"&q=").concat(t,"&days=3")).then((function(t){if(t.ok)return t.json();new Error("Server Error")})).then((function(t){e.createForecastWeatherInfo(t)})).catch((function(t){console.log(t)}));else{var o=JSON.parse(localStorage.getItem("forecastWeather"));this.createForecastWeatherInfo(o)}}},{key:"currentWeatherCall",value:function(t){if(this.checkIfNeedsUpdate("currentWeather",t.value))this.domElements.additionalInformationBox.innerHTML="",this.fetchDataFromAPI("https://api.weatherapi.com/v1/current.json?key=".concat(n,"&q"),t),t.value="";else{var e=JSON.parse(localStorage.getItem("currentWeather"));this.createCurrentWeatherInfo(e,t)}}},{key:"geolocationCall",value:function(){var t=this;window.navigator.geolocation.getCurrentPosition((function(e){var o=e.coords.latitude,r=e.coords.longitude;t.domElements.additionalInformationBox.innerHTML="",t.fetchDataFromAPI("https://api.weatherapi.com/v1/current.json?key=".concat(n,"&q=").concat(o+","+r)),t.domElements.useGeolocationButton.disabled=!1,t.geoloader()}),(function(e){alert(e.code+": "+e.message),t.geoloader(),t.domElements.useGeolocationButton.disabled=!1,t.domElements.geolocationError.textContent="Geolocalization not avalible - check functionality on desktop",t.domElements.geoLoader.style.display="none"}))}},{key:"fetchDataFromAPI",value:function(t,e){var n,o=this;this.domElements.mainInfoIcon,n=e?"".concat(t,"=").concat(e.value):t,fetch(n).then((function(t){if(t.ok)return t.json()})).then((function(t){if(e&&(e.value=""),!t.current.condition)return o.domElements.mainLoader.style.display="none",o.domElements.geoLoader.style.display="none",void(o.domElements.inputErrorMsg.textContent="API doesnot information about that location, type diffrent location");console.log(t.current);var n=t.current.condition.icon.split(""),r=n.slice(n.length-7,n.length-4).join("");t.current.condition.icon.includes("day")?o.domElements.mainInfoIcon.src="icons/day/".concat(r,".png"):o.domElements.mainInfoIcon.src="icons/night/".concat(113,".png"),o.domElements.cityName.textContent=t.location.name,o.domElements.weatherIconText.textContent=t.current.condition.text,o.domElements.mainInfoTemperature.textContent="".concat(t.current.temp_c,"°C"),new u(o.domElements.additionalInformationBox,"humidity","icons/drop.svg","".concat(t.current.humidity,"%")),new u(o.domElements.additionalInformationBox,"feelLike","icons/hot.svg","".concat(t.current.feelslike_c,"°C")),new u(o.domElements.additionalInformationBox,"wind","icons/wind.svg","".concat(t.current.wind_kph,"km/h"),{windDirection:t.current.wind_dir}),t.dateOfUpdate=Math.round(new Date/1e3),localStorage.setItem("currentWeather",JSON.stringify(t)),o.domElements.inputErrorMsg.textContent="",o.switchView(o.domElements.inputView,o.domElements.modalView),o.domElements.mainLoader.style.display="none"})).catch((function(t){console.log(t),o.domElements.mainLoader.style.display="none",o.domElements.inputErrorMsg.textContent="Wrong city!"}))}},{key:"checkIfNeedsUpdate",value:function(t,e){var n=String((new Date).getMonth())+String((new Date).getDate()),o=JSON.parse(localStorage.getItem(t));if(null===o)return!0;var r=o.dateOfUpdate;return e.toLowerCase()!==o.location.name.toLowerCase()||"forecastWeather"===t&&n-r-1>0||"currentWeather"===t&&(n=Math.round(new Date/1e3))-r-3600>0}},{key:"createCurrentWeatherInfo",value:function(t,e){this.domElements.additionalInformationBox.innerHTML="",e&&(e.value="");var n=t.current.condition.icon.split(""),o=n.slice(n.length-7,n.length-4).join("");t.current.condition.icon.includes("day")?this.domElements.mainInfoIcon.src="icons/day/".concat(o,".png"):this.domElements.mainInfoIcon.src="icons/night/".concat(113,".png"),this.domElements.cityName.textContent=t.location.name,this.domElements.weatherIconText.textContent=t.current.condition.text,this.domElements.mainInfoTemperature.textContent="".concat(t.current.temp_c,"°C"),new u(this.domElements.additionalInformationBox,"humidity","icons/drop.svg","".concat(t.current.humidity,"%")),new u(this.domElements.additionalInformationBox,"feelLike","icons/hot.svg","".concat(t.current.feelslike_c,"°C")),new u(this.domElements.additionalInformationBox,"wind","icons/wind.svg","".concat(t.current.wind_kph,"km/h"),{windDirection:t.current.wind_dir}),t.dateOfUpdate=Math.round(new Date/1e3),localStorage.setItem("currentWeather",JSON.stringify(t)),this.domElements.inputErrorMsg.textContent="",this.loader(),this.switchView(this.domElements.inputView,this.domElements.modalView)}},{key:"createForecastWeatherInfo",value:function(t){var e=this;this.domElements.dailyForecastModule.innerHTML="",t.forecast.forecastday.map((function(t){new y(e.domElements.dailyForecastModule,t)})),this.changeVisibility(this.domElements.dailyForecastModule),t.dateOfUpdate=String((new Date).getMonth())+String((new Date).getDate()),localStorage.setItem("forecastWeather",JSON.stringify(t))}}])&&h(e.prototype,o),c}(e);function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function C(t,e){return(C=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function O(t,e){return!e||"object"!==E(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&C(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(o);if(r){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return O(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this)).input=t,e.inputEventListener(t),e}return e=a,(n=[{key:"inputEventListener",value:function(t){var e=this;t.addEventListener("click",(function(t){e.domElements.mainLoader.style.display="block",t.preventDefault(),e.clearMainViewErrors(),new w(e.domElements.input,"current")}))}},{key:"clearMainViewErrors",value:function(){this.domElements.inputErrorMsg.textContent="",this.domElements.geolocationError.textContent=""}}])&&_(e.prototype,n),a}(e);function I(t){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function P(t,e){return!e||"object"!==I(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function L(t){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(o);if(r){var n=L(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return P(this,t)});function a(t,e,n){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(o=i.call(this)).button=t,o.currentView=e,o.nextView=n,o.buttonEventListener(),o}return e=a,(n=[{key:"hideForecastModule",value:function(){this.domElements.geoLoader.style.display="none",this.domElements.dailyForecastModule.classList.add("hidden"),this.domElements.getForecastButton.textContent="Get forecast for 3 days !"}},{key:"buttonEventListener",value:function(){var t=this;this.button.addEventListener("click",(function(){t.switchView(t.currentView,t.nextView),t.hideForecastModule()}))}}])&&j(e.prototype,n),a}(e);function B(t){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function M(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function T(t,e){return(T=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function D(t,e){return!e||"object"!==B(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function F(t){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var W=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&T(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=F(o);if(r){var n=F(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return D(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this)).button=t,e.buttonEventListener(t),e}return e=a,(n=[{key:"changeTextInForecastButton",value:function(){"block"===window.getComputedStyle(this.domElements.dailyForecastModule).display?this.domElements.getForecastButton.textContent="Get forecast for 3 days !":this.domElements.getForecastButton.textContent="Hide forecast"}},{key:"buttonEventListener",value:function(t){var e=this;t.addEventListener("click",(function(t){t.preventDefault(),e.changeTextInForecastButton(),"block"===getComputedStyle(e.domElements.dailyForecastModule).display?e.changeVisibility(e.domElements.dailyForecastModule):new w(e.domElements.cityName.textContent,"forecast")}))}}])&&M(e.prototype,n),a}(e);function V(t){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function N(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function A(t,e){return(A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function G(t,e){return!e||"object"!==V(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function H(t){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=H(o);if(r){var n=H(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return G(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this)).button=e.button,e.eventListener(t),e}return e=a,(n=[{key:"eventListener",value:function(t){var e=this;t.addEventListener("click",(function(){e.clearMainViewErrors(),"geolocation"in window.navigator?(t.disabled=!0,new w(null,"geolocation")):e.domElements.geolocationError.textContent="Geolocalization not avalible"}))}},{key:"clearMainViewErrors",value:function(){this.domElements.inputErrorMsg.textContent="",this.domElements.geolocationError.textContent=""}}])&&N(e.prototype,n),a}(e);function J(t){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function q(t,e){return(q=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function z(t,e){return!e||"object"!==J(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Y(t){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&q(t,e)}(r,t);var e,n,o=(e=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=Y(e);if(n){var r=Y(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return z(this,t)});function r(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(t=o.call(this)).domElements=t.createDOMObject(),t.setBackgroundImage(),new k(t.domElements.buttonSubmit),new R(t.domElements.backToSearchViewButton,t.domElements.modalView,t.domElements.inputView),new W(t.domElements.getForecastButton),new U(t.domElements.useGeolocationButton),t}return r}(e))})();
//# sourceMappingURL=main.js.map