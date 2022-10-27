var l=(u,n,e)=>new Promise((t,r)=>{var a=o=>{try{p(e.next(o))}catch(s){r(s)}},i=o=>{try{p(e.throw(o))}catch(s){r(s)}},p=o=>o.done?t(o.value):Promise.resolve(o.value).then(a,i);p((e=e.apply(u,n)).next())});import{B as c}from"./BasicForm.68eb68a1.js";import"./helper.2e61c179.js";import{u as F}from"./useForm.1b67cd29.js";import"./JAddInput.f96768b3.js";import{q as d,l as B,t as m,v as E,V as C,z as b,y as f,u as A}from"./index.23784a6b.js";import{a as _}from"./index.1525978f.js";import"./uniqBy.d45e63ad.js";import"./index.1660bc1f.js";import"./BasicModal.604d8318.js";import"./useWindowSizeFn.c7f5a452.js";import"./useFormItem.aa979107.js";import"./functional.a720d0df.js";import"./download.eb9b6987.js";import"./base64Conver.030fa32c.js";import"./index.52e05db7.js";import"./index.b476f533.js";import"./useCountdown.1de097ab.js";import"./JUpload.847bb7e8.js";import"./api.4ab57216.js";import"./index.531e5b47.js";import"./props.b2b77096.js";import"./index.abc2a51f.js";import"./bem.8c0ec145.js";import"./props.a518648b.js";import"./useContextMenu.149fe6bb.js";import"./index.d2f7ee38.js";import"./onMountedOrActivated.20f21d4b.js";import"./index.b48c2101.js";import"./htmlmixed.97cf791a.js";import"./vue.23f9d0fa.js";/* empty css             */import"./depart.api.4e6de065.js";import"./useContentHeight.83e16fa4.js";import"./useContentViewHeight.6b076a37.js";import"./usePageContext.0eee1b9e.js";const D=[{field:"title",component:"Input",label:"\u6807\u9898",componentProps:{placeholder:"\u7ED9\u76EE\u6807\u8D77\u4E2A\u540D\u5B57"},required:!0},{field:"time",component:"RangePicker",label:"\u8D77\u6B62\u65E5\u671F",required:!0},{field:"target",component:"InputTextArea",label:"\u76EE\u6807\u63CF\u8FF0",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u9636\u6BB5\u6027\u5DE5\u4F5C\u76EE\u6807",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"\u8861\u91CF\u6807\u51C6",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u8861\u91CF\u6807\u51C6",rows:4},required:!0},{field:"client",component:"Input",label:"\u5BA2\u6237",helpMessage:"\u76EE\u6807\u7684\u670D\u52A1\u5BF9\u8C61",subLabel:"( \u9009\u586B )",componentProps:{placeholder:"\u8BF7\u63CF\u8FF0\u4F60\u670D\u52A1\u7684\u5BA2\u6237\uFF0C\u5185\u90E8\u5BA2\u6237\u76F4\u63A5 @\u59D3\u540D\uFF0F\u5DE5\u53F7"}},{field:"inviteer",component:"Input",label:"\u9080\u8BC4\u4EBA",subLabel:"( \u9009\u586B )",componentProps:{placeholder:"\u8BF7\u76F4\u63A5 @\u59D3\u540D\uFF0F\u5DE5\u53F7\uFF0C\u6700\u591A\u53EF\u9080\u8BF7 5 \u4EBA"}},{field:"weights",component:"InputNumber",label:"\u6743\u91CD",subLabel:"( \u9009\u586B )",componentProps:{formatter:u=>u?`${u}%`:"",parser:u=>u.replace("%",""),placeholder:"\u8BF7\u8F93\u5165"}},{field:"disclosure",component:"RadioGroup",label:"\u76EE\u6807\u516C\u5F00",itemProps:{extra:"\u5BA2\u6237\u3001\u9080\u8BC4\u4EBA\u9ED8\u8BA4\u88AB\u5206\u4EAB"},componentProps:{options:[{label:"\u516C\u5F00",value:"1"},{label:"\u90E8\u5206\u516C\u5F00",value:"2"},{label:"\u4E0D\u516C\u5F00",value:"3"}]}},{field:"disclosurer",component:"Select",label:" ",show:({model:u})=>u.disclosure==="2",componentProps:{placeholder:"\u516C\u5F00\u7ED9",mode:"multiple",options:[{label:"\u540C\u4E8B1",value:"1"},{label:"\u540C\u4E8B2",value:"2"},{label:"\u540C\u4E8B3",value:"3"}]}}];const g=B({name:"FormBasicPage",components:{BasicForm:c,PageWrapper:_},setup(){const{createMessage:u}=A(),[n,{validate:e,setProps:t}]=F({labelCol:{span:8},wrapperCol:{span:10},schemas:D,actionColOptions:{offset:8,span:12},submitButtonOptions:{text:"\u63D0\u4EA4"},submitFunc:r});function r(){return l(this,null,function*(){try{yield e(),t({submitButtonOptions:{loading:!0}}),setTimeout(()=>{t({submitButtonOptions:{loading:!1}}),u.success("\u63D0\u4EA4\u6210\u529F\uFF01")},2e3)}catch(a){}})}return{register:n}}});function P(u,n,e,t,r,a){const i=m("BasicForm"),p=m("PageWrapper");return E(),C(p,{title:"\u57FA\u7840\u8868\u5355",contentBackground:"",content:" \u8868\u5355\u9875\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u6216\u9A8C\u8BC1\u4FE1\u606F\uFF0C\u57FA\u7840\u8868\u5355\u5E38\u89C1\u4E8E\u6570\u636E\u9879\u8F83\u5C11\u7684\u8868\u5355\u573A\u666F\u3002",contentClass:"p-4"},{default:b(()=>[f(i,{onRegister:u.register},null,8,["onRegister"])]),_:1})}var au=d(g,[["render",P],["__scopeId","data-v-43737a82"]]);export{au as default};