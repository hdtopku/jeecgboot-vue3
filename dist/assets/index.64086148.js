import{l as t,cI as e,F as n,o as a,aa as s,q as o,s as r,L as u,aQ as l,t as i,v as c,V as d,z as p,C as f,D as m,B as v,n as b,bk as y,bc as C,X as S,bl as x,bm as g,y as h,Z as z}from"./index.435ab247.js";import{u as B}from"./useCountdown.adc4ab77.js";import{useRuleFormItem as F}from"./useFormItem.816007c4.js";var w=o(t({name:"CountButton",components:{Button:e},props:{value:{type:[Object,Number,String,Array]},count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},setup(t){const e=n(!1),{currentCount:o,isStart:i,start:c,reset:d}=B(t.count),{t:p}=r(),f=a((()=>u(i)?p("component.countdown.sendText",[u(o)]):p("component.countdown.normalText")));return s((()=>{void 0===t.value&&d()})),{handleStart:function(){return n=this,a=null,s=function*(){const{beforeStartFunc:n}=t;if(n&&l(n)){e.value=!0;try{(yield n())&&c()}finally{e.value=!1}}else c()},new Promise(((t,e)=>{var o=t=>{try{u(s.next(t))}catch(n){e(n)}},r=t=>{try{u(s.throw(t))}catch(n){e(n)}},u=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,r);u((s=s.apply(n,a)).next())}));var n,a,s},currentCount:o,loading:e,getButtonText:f,isStart:i}}}),[["render",function(t,e,n,a,s,o){const r=i("Button");return c(),d(r,v(t.$attrs,{disabled:t.isStart,onClick:t.handleStart,loading:t.loading}),{default:p((()=>[f(m(t.getButtonText),1)])),_:1},16,["disabled","onClick","loading"])}]]);const A=z(o(t({name:"CountDownInput",components:{CountButton:w},inheritAttrs:!1,props:{value:{type:String},size:{type:String,validator:t=>["default","large","small"].includes(t)},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},setup(t){const{prefixCls:e}=b("countdown-input"),[n]=F(t);return{prefixCls:e,state:n}}}),[["render",function(t,e,n,a,s,o){const r=i("CountButton"),u=i("a-input");return c(),d(u,v(t.$attrs,{class:t.prefixCls,size:t.size,value:t.state}),y({addonAfter:p((()=>[h(r,{size:t.size,count:t.count,value:t.state,beforeStartFunc:t.sendCodeApi},null,8,["size","count","value","beforeStartFunc"])])),_:2},[C(Object.keys(t.$slots).filter((t=>"addonAfter"!==t)),(e=>({name:e,fn:p((n=>[S(t.$slots,e,x(g(n||{})))]))})))]),1040,["class","size","value"])}]]));z(w);export{A as C};