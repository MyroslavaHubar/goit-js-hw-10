import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as c,i as u}from"./assets/vendor-77e16229.js";const d="/goit-js-hw-10/assets/error-timer-1ff342aa.svg",e={timeInputElem:document.querySelector("#datetime-picker"),startBtnElem:document.querySelector("[data-start]"),daysElem:document.querySelector("[data-days]"),hoursElem:document.querySelector("[data-hours]"),minuteElem:document.querySelector("[data-minutes]"),secondElem:document.querySelector("[data-seconds]")};e.startBtnElem.disabled=!0;let r="";const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const o=t[0],n=Date.now();o<n?(e.startBtnElem.disabled=!0,e.startBtnElem.classList.remove("active-btn"),u.error({message:"Please choose a date in the future",messageColor:"#fff",messageSize:"16",messageLineHeight:"1.5",backgroundColor:"#ef4040",position:"topRight",imgUrl:d,theme:"dark",close:!0,closeOnEscape:!0,closeOnClick:!0,imgColor:"#fafafb",imageWidth:302})):(e.startBtnElem.disabled=!1,e.startBtnElem.classList.add("active-btn"),r=o)}};c(e.timeInputElem,f);e.startBtnElem.addEventListener("click",()=>{e.startBtnElem.classList.remove("active-btn"),e.startBtnElem.disabled=!0,e.timeInputElem.disabled=!0;const t=setInterval(()=>{const o=r-Date.now();if(o<=0){clearInterval(t),e.daysElem.textContent="00",e.hoursElem.textContent="00",e.minuteElem.textContent="00",e.secondElem.textContent="00",e.timeInputElem.disabled=!1;return}const n=E(o);e.daysElem.textContent=s(n.days),e.hoursElem.textContent=s(n.hours),e.minuteElem.textContent=s(n.minutes),e.secondElem.textContent=s(n.seconds)},1e3)});function s(t){return t.toString().padStart(2,"0")}function E(t){const a=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:l,minutes:i,seconds:m}}
//# sourceMappingURL=commonHelpers.js.map
