import{q as e,l as t,aE as n,n as a,o as s,t as i,v as d,x as l,aW as o,D as r,y as c,B as p,E as h,s as u}from"./index.435ab247.js";import{b as f}from"./index.c2611ac7.js";import"./index.65c1cb1a.js";import"./useHeaderSetting.f908897c.js";import"./useMultipleTabSetting.0b8ec692.js";var C=e(t({name:"SwitchItem",components:{Switch:n},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=a("setting-switch-item"),{t:n}=u();return{prefixCls:t,t:n,handleChange:function(t){e.event&&f(e.event,t)},getBindValue:s((()=>e.def?{checked:e.def}:{}))}}}),[["render",function(e,t,n,a,s,u){const f=i("Switch");return d(),l("div",{class:h(e.prefixCls)},[o("span",null,r(e.title),1),c(f,p(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}],["__scopeId","data-v-440e72fd"]]);export{C as default};