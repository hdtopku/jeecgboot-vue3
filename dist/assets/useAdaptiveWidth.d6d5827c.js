import{F as n,am as e,al as t,ak as i}from"./index.435ab247.js";const o={"<=565":"100%","<=1366":"800px","<=1600":"600px","<=1920":"600px",">1920":"500px"};function r(r=o,a=!0,s=50){const c=a?Object.assign({},o,r):r,d=Object.keys(c),u=n();function f(n){let e;for(const i of d)try{if(new Function(`return ${n} ${i}`)()){e=c[i];break}}catch(t){}e&&(u.value=e)}f(window.innerWidth);const{removeEvent:p}=e({el:window,name:"resize",listener:t((()=>f(window.innerWidth)),s)});return i((()=>p())),{adaptiveWidth:u}}function a(){return r({"<=620":"100%","<=1600":600,"<=1920":650,">1920":700},!1)}export{r as useAdaptiveWidth,a as useDrawerAdaptiveWidth};