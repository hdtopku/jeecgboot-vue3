import{B as e}from"./BasicForm.d9f6c231.js";import"./helper.1c9dc9a5.js";import{u as t}from"./useForm.45d68074.js";import"./JAddInput.8c125e2c.js";import{l as a,aD as s,aB as o,b7 as i,q as r,t as n,v as p,x as d,aW as c,y as m,z as l,C as u,dp as j,dq as f}from"./index.435ab247.js";import{step1Schemas as v}from"./data.80eca3ac.js";import"./uniqBy.91f18935.js";import"./index.e1e06dd6.js";import"./BasicModal.c66de981.js";import"./useWindowSizeFn.3d5b1a05.js";import"./useFormItem.816007c4.js";import"./functional.be5901d6.js";import"./download.5dc68cfb.js";import"./base64Conver.030fa32c.js";import"./index.a5502478.js";import"./index.64086148.js";import"./useCountdown.adc4ab77.js";import"./JUpload.e164672b.js";import"./api.bc301b0f.js";import"./index.cdc49bf1.js";import"./props.5467b933.js";import"./index.713dc63d.js";import"./bem.0e923c54.js";import"./props.37836c63.js";import"./useContextMenu.82ce6d89.js";import"./index.e1ec35e6.js";import"./onMountedOrActivated.e9ddbd41.js";import"./index.627c6cd3.js";import"./htmlmixed.749cbc8c.js";import"./vue.f62dfd4a.js";/* empty css             */import"./depart.api.c07add53.js";const b=a({components:{BasicForm:e,[s.name]:s,ASelectOption:s.Option,[o.name]:o,[o.Group.name]:o.Group,[i.name]:i},emits:["next"],setup(e,{emit:a}){const[s,{validate:o}]=t({labelWidth:200,schemas:v,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:function(){return e=this,t=null,s=function*(){try{const e=yield o();a("next",e)}catch(e){}},new Promise(((a,o)=>{var i=e=>{try{n(s.next(e))}catch(t){o(t)}},r=e=>{try{n(s.throw(e))}catch(t){o(t)}},n=e=>e.done?a(e.value):Promise.resolve(e.value).then(i,r);n((s=s.apply(e,t)).next())}));var e,t,s}});return{register:s}}}),x=e=>(j("data-v-df9c4a64"),e=e(),f(),e),h={class:"step1"},y={class:"step1-form"},B=u(" 支付宝 "),F=u(" 银联 "),_=x((()=>c("h3",null,"说明",-1))),w=x((()=>c("h4",null,"转账到支付宝账户",-1))),g=x((()=>c("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1))),C=x((()=>c("h4",null,"转账到银行卡",-1))),O=x((()=>c("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1)));var U=r(b,[["render",function(e,t,a,s,o,i){const r=n("a-select-option"),u=n("a-select"),j=n("a-input"),f=n("a-input-group"),v=n("BasicForm"),b=n("a-divider");return p(),d("div",h,[c("div",y,[m(v,{onRegister:e.register},{fac:l((({model:e,field:t})=>[m(f,{compact:""},{default:l((()=>[m(u,{value:e.pay,"onUpdate:value":t=>e.pay=t,class:"pay-select"},{default:l((()=>[m(r,{value:"zfb"},{default:l((()=>[B])),_:1}),m(r,{value:"yl"},{default:l((()=>[F])),_:1})])),_:2},1032,["value","onUpdate:value"]),m(j,{class:"pay-input",value:e[t],"onUpdate:value":a=>e[t]=a},null,8,["value","onUpdate:value"])])),_:2},1024)])),_:1},8,["onRegister"])]),m(b),_,w,g,C,O])}],["__scopeId","data-v-df9c4a64"]]);export{U as default};