var P=Object.defineProperty;var S=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var _=(t,e,o)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,f=(t,e)=>{for(var o in e||(e={}))A.call(e,o)&&_(t,o,e[o]);if(S)for(var o of S(e))R.call(e,o)&&_(t,o,e[o]);return t};import{q as k,l as x,eS as u,F as y,a7 as V,b7 as D,t as p,v as i,V as a,z as v,aV as h,y as r,R as s,S as m,W as F}from"./index.3bed7968.js";import W from"./Step1.341b6f99.js";import $ from"./Step2.d5df3b60.js";import w from"./Step3.c51919db.js";import{a as b}from"./index.e57fdc92.js";import"./BasicForm.edf8c211.js";import"./helper.4a0046bd.js";import"./useFormItem.1483bf1f.js";import"./index.2b083806.js";import"./BasicModal.63407285.js";import"./useWindowSizeFn.3a0aad8e.js";import"./functional.0ad73ef9.js";import"./download.e4a7eb34.js";import"./base64Conver.030fa32c.js";import"./index.a3670730.js";import"./index.1c9a2e2a.js";import"./useCountdown.789ced8c.js";import"./JAddInput.dd50592d.js";import"./api.9041b4ca.js";import"./props.98e0ca30.js";import"./index.ed8afd6d.js";import"./bem.c8247e3c.js";import"./props.c4c9bbde.js";import"./useContextMenu.41f709dc.js";import"./index.8d6618cf.js";import"./onMountedOrActivated.b5477b8f.js";import"./index.52c0f810.js";import"./htmlmixed.62278273.js";import"./vue.0a98e62f.js";/* empty css             */import"./depart.api.cc5e0568.js";import"./JUpload.6297877e.js";import"./index.e7272bc8.js";import"./uniqBy.be18330d.js";import"./useForm.a01ff2a7.js";import"./data.80eca3ac.js";import"./useContentHeight.2c22b941.js";import"./useContentViewHeight.1aeec0b1.js";import"./usePageContext.0bdec497.js";const q=x({name:"FormStepPage",components:{Step1:W,Step2:$,Step3:w,PageWrapper:b,[u.name]:u,[u.Step.name]:u.Step},setup(){const t=y(0),e=V({initSetp2:!1,initSetp3:!1});function o(n){t.value++,e.initSetp2=!0,console.log(n)}function c(){t.value--}function l(n){t.value++,e.initSetp3=!0,console.log(n)}function d(){t.value=0,e.initSetp2=!1,e.initSetp3=!1}return f({current:t,handleStep1Next:o,handleStep2Next:l,handleRedo:d,handleStepPrev:c},D(e))}}),z={class:"step-form-form"},I={class:"mt-5"};function j(t,e,o,c,l,d){const n=p("a-step"),B=p("a-steps"),C=p("Step1"),N=p("Step2"),g=p("Step3"),E=p("PageWrapper");return i(),a(E,{title:"\u5206\u6B65\u8868\u5355",contentBackground:"",content:" \u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6307\u5BFC\u7528\u6237\u5B8C\u6210\u3002",contentClass:"p-4"},{default:v(()=>[h("div",z,[r(B,{current:t.current},{default:v(()=>[r(n,{title:"\u586B\u5199\u8F6C\u8D26\u4FE1\u606F"}),r(n,{title:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F"}),r(n,{title:"\u5B8C\u6210"})]),_:1},8,["current"])]),h("div",I,[s(r(C,{onNext:t.handleStep1Next},null,8,["onNext"]),[[m,t.current===0]]),t.initSetp2?s((i(),a(N,{key:0,onPrev:t.handleStepPrev,onNext:t.handleStep2Next},null,8,["onPrev","onNext"])),[[m,t.current===1]]):F("",!0),t.initSetp3?s((i(),a(g,{key:1,onRedo:t.handleRedo},null,8,["onRedo"])),[[m,t.current===2]]):F("",!0)])]),_:1})}var Rt=k(q,[["render",j],["__scopeId","data-v-d9faf3e8"]]);export{Rt as default};