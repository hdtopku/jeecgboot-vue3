var P=Object.defineProperty;var S=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var _=(t,e,o)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,f=(t,e)=>{for(var o in e||(e={}))A.call(e,o)&&_(t,o,e[o]);if(S)for(var o of S(e))R.call(e,o)&&_(t,o,e[o]);return t};import{q as k,l as x,eS as u,F as y,a7 as V,b7 as D,t as p,v as i,V as a,z as v,aV as h,y as r,R as s,S as m,W as F}from"./index.23784a6b.js";import W from"./Step1.15d313f7.js";import $ from"./Step2.c61caac6.js";import w from"./Step3.33eb0925.js";import{a as b}from"./index.1525978f.js";import"./BasicForm.68eb68a1.js";import"./helper.2e61c179.js";import"./useFormItem.aa979107.js";import"./index.1660bc1f.js";import"./BasicModal.604d8318.js";import"./useWindowSizeFn.c7f5a452.js";import"./functional.a720d0df.js";import"./download.eb9b6987.js";import"./base64Conver.030fa32c.js";import"./index.52e05db7.js";import"./index.b476f533.js";import"./useCountdown.1de097ab.js";import"./JAddInput.f96768b3.js";import"./api.4ab57216.js";import"./props.b2b77096.js";import"./index.abc2a51f.js";import"./bem.8c0ec145.js";import"./props.a518648b.js";import"./useContextMenu.149fe6bb.js";import"./index.d2f7ee38.js";import"./onMountedOrActivated.20f21d4b.js";import"./index.b48c2101.js";import"./htmlmixed.97cf791a.js";import"./vue.23f9d0fa.js";/* empty css             */import"./depart.api.4e6de065.js";import"./JUpload.847bb7e8.js";import"./index.531e5b47.js";import"./uniqBy.d45e63ad.js";import"./useForm.1b67cd29.js";import"./data.80eca3ac.js";import"./useContentHeight.83e16fa4.js";import"./useContentViewHeight.6b076a37.js";import"./usePageContext.0eee1b9e.js";const q=x({name:"FormStepPage",components:{Step1:W,Step2:$,Step3:w,PageWrapper:b,[u.name]:u,[u.Step.name]:u.Step},setup(){const t=y(0),e=V({initSetp2:!1,initSetp3:!1});function o(n){t.value++,e.initSetp2=!0,console.log(n)}function c(){t.value--}function l(n){t.value++,e.initSetp3=!0,console.log(n)}function d(){t.value=0,e.initSetp2=!1,e.initSetp3=!1}return f({current:t,handleStep1Next:o,handleStep2Next:l,handleRedo:d,handleStepPrev:c},D(e))}}),z={class:"step-form-form"},I={class:"mt-5"};function j(t,e,o,c,l,d){const n=p("a-step"),B=p("a-steps"),C=p("Step1"),N=p("Step2"),g=p("Step3"),E=p("PageWrapper");return i(),a(E,{title:"\u5206\u6B65\u8868\u5355",contentBackground:"",content:" \u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6307\u5BFC\u7528\u6237\u5B8C\u6210\u3002",contentClass:"p-4"},{default:v(()=>[h("div",z,[r(B,{current:t.current},{default:v(()=>[r(n,{title:"\u586B\u5199\u8F6C\u8D26\u4FE1\u606F"}),r(n,{title:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F"}),r(n,{title:"\u5B8C\u6210"})]),_:1},8,["current"])]),h("div",I,[s(r(C,{onNext:t.handleStep1Next},null,8,["onNext"]),[[m,t.current===0]]),t.initSetp2?s((i(),a(N,{key:0,onPrev:t.handleStepPrev,onNext:t.handleStep2Next},null,8,["onPrev","onNext"])),[[m,t.current===1]]):F("",!0),t.initSetp3?s((i(),a(g,{key:1,onRedo:t.handleRedo},null,8,["onRedo"])),[[m,t.current===2]]):F("",!0)])]),_:1})}var Rt=k(q,[["render",j],["__scopeId","data-v-d9faf3e8"]]);export{Rt as default};