import{B as y}from"./BasicForm.e500713f.js";import{A as _}from"./helper.15e1830a.js";import{q as L,F as r,o as v,aV as C,L as c,l as R,dz as V,aB as w,ak as M,t as p,v as O,V as U,z as n,y as t,u as j}from"./index.6c1aeca2.js";import{J as q}from"./JAddInput.5c78e955.js";import{a as J}from"./index.866fff1a.js";import{o as B}from"./select.e02915bc.js";import{t as G}from"./tree.d162f529.js";import"./uniqBy.b316cd09.js";import"./index.c1c509d9.js";import"./BasicModal.2246c02b.js";import"./useWindowSizeFn.a6a246d2.js";import"./useFormItem.63b4eda3.js";import"./functional.32464814.js";import"./download.54491438.js";import"./base64Conver.030fa32c.js";import"./index.1785e33e.js";import"./index.9d763a26.js";import"./useCountdown.c7fbe84b.js";import"./JUpload.7c7f9634.js";import"./api.52ea4d1e.js";import"./index.af09c9a6.js";import"./props.0c0dfcc6.js";import"./index.5b79f8bf.js";import"./bem.8f063110.js";import"./props.ee552767.js";import"./useContextMenu.2ad8381d.js";import"./index.3803400c.js";import"./onMountedOrActivated.0e85db74.js";import"./index.2847d809.js";import"./htmlmixed.6fb02709.js";import"./vue.ab8c7c18.js";/* empty css             */import"./usePopBiz.651349c4.js";import"./useMethods.eccfa16d.js";import"./depart.api.c664bb73.js";import"./useContentHeight.a77fa571.js";import"./useContentViewHeight.bf6f2f30.js";import"./usePageContext.5da89706.js";const A=r([]),g=r([]),E=r([]);for(let e=1;e<10;e++)E.value.push({label:"\u9009\u9879"+e,value:`${e}`});const $=v(()=>C(c(E)).map(e=>(e.disabled=c(g).indexOf(e.value)!==-1,e))),x=v(()=>C(c(E)).map(e=>(e.disabled=c(A).indexOf(e.value)!==-1,e))),f=[{id:"guangdong",label:"\u5E7F\u4E1C\u7701",value:"1",key:"1"},{id:"jiangsu",label:"\u6C5F\u82CF\u7701",value:"2",key:"2"}],h={guangdong:[{label:"\u73E0\u6D77\u5E02",value:"1",key:"1"},{label:"\u6DF1\u5733\u5E02",value:"2",key:"2"},{label:"\u5E7F\u5DDE\u5E02",value:"3",key:"3"}],jiangsu:[{label:"\u5357\u4EAC\u5E02",value:"1",key:"1"},{label:"\u65E0\u9521\u5E02",value:"2",key:"2"},{label:"\u82CF\u5DDE\u5E02",value:"3",key:"3"}]},z=[{field:"divider-basic",component:"Divider",label:"\u57FA\u7840\u5B57\u6BB5"},{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:({schema:e,formModel:i})=>(console.log("form:",e),console.log("formModel:",i),{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:a=>{console.log(a)}}),renderComponentContent:()=>({prefix:()=>"pSlot",suffix:()=>"sSlot"})},{field:"field2",component:"Input",label:"\u5B57\u6BB52",defaultValue:"111",colProps:{span:8},componentProps:{onChange:e=>{console.log(e)}},suffix:"\u5929"},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field8",component:"Checkbox",label:"\u5B57\u6BB58",colProps:{span:8},renderComponentContent:"Check"},{field:"field9",component:"Switch",label:"\u5B57\u6BB59",colProps:{span:8}},{field:"field10",component:"RadioButtonGroup",label:"\u5B57\u6BB510",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field11",component:"Cascader",label:"\u5B57\u6BB511",colProps:{span:8},componentProps:{options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]}},{field:"divider-api-select",component:"Divider",label:"\u8FDC\u7A0B\u4E0B\u62C9\u6F14\u793A"},{field:"field30",component:"ApiSelect",label:"\u61D2\u52A0\u8F7D\u8FDC\u7A0B\u4E0B\u62C9",required:!0,componentProps:{api:B,params:{id:1},resultField:"list",labelField:"name",valueField:"id",immediate:!1,onChange:e=>{console.log("selected:",e)},onOptionsChange:e=>{console.log("get options",e.length,e)}},colProps:{span:8},defaultValue:"0"},{field:"field311",component:"JAreaLinkage",label:"\u7701\u5E02\u533A\u9009\u62E9",helpMessage:["JAreaLinkage\u7EC4\u4EF6","\u7701\u5E02\u533A\u9009\u62E9"],required:!0,slot:"jAreaLinkage",colProps:{span:8},defaultValue:["130000","130200"]},{field:"field31",component:"Input",label:"\u4E0B\u62C9\u672C\u5730\u641C\u7D22",helpMessage:["ApiSelect\u7EC4\u4EF6","\u8FDC\u7A0B\u6570\u636E\u6E90\u672C\u5730\u641C\u7D22","\u53EA\u53D1\u8D77\u4E00\u6B21\u8BF7\u6C42\u83B7\u53D6\u6240\u6709\u9009\u9879"],required:!0,slot:"localSearch",colProps:{span:8},defaultValue:"0"},{field:"field32",component:"Input",label:"\u4E0B\u62C9\u8FDC\u7A0B\u641C\u7D22",helpMessage:["ApiSelect\u7EC4\u4EF6","\u5C06\u5173\u952E\u8BCD\u53D1\u9001\u5230\u63A5\u53E3\u8FDB\u884C\u8FDC\u7A0B\u641C\u7D22"],required:!0,slot:"remoteSearch",colProps:{span:8},defaultValue:"0"},{field:"field33",component:"ApiTreeSelect",label:"\u8FDC\u7A0B\u4E0B\u62C9\u6811",helpMessage:["ApiTreeSelect\u7EC4\u4EF6","\u4F7F\u7528\u63A5\u53E3\u63D0\u4F9B\u7684\u6570\u636E\u751F\u6210\u9009\u9879"],required:!0,componentProps:{api:G,resultField:"list"},colProps:{span:8}},{field:"field34",component:"ApiRadioGroup",label:"\u8FDC\u7A0BRadio",helpMessage:["ApiRadioGroup\u7EC4\u4EF6","\u4F7F\u7528\u63A5\u53E3\u63D0\u4F9B\u7684\u6570\u636E\u751F\u6210\u9009\u9879"],required:!0,componentProps:{api:B,params:{count:2},resultField:"list",labelField:"name",valueField:"id"},defaultValue:"1",colProps:{span:8}},{field:"field35",component:"ApiRadioGroup",label:"\u8FDC\u7A0BRadio",helpMessage:["ApiRadioGroup\u7EC4\u4EF6","\u4F7F\u7528\u63A5\u53E3\u63D0\u4F9B\u7684\u6570\u636E\u751F\u6210\u9009\u9879"],required:!0,componentProps:{api:B,params:{count:2},resultField:"list",labelField:"name",valueField:"id",isBtn:!0},colProps:{span:8}},{field:"divider-linked",component:"Divider",label:"\u5B57\u6BB5\u8054\u52A8"},{field:"province",component:"Select",label:"\u7701\u4EFD",colProps:{span:8},componentProps:({formModel:e,formActionType:i})=>({options:f,placeholder:"\u7701\u4EFD\u4E0E\u57CE\u5E02\u8054\u52A8",onChange:a=>{let s=a==1?h[f[0].id]:h[f[1].id];a===void 0&&(s=[]),e.city=void 0;const{updateSchema:d}=i;d({field:"city",componentProps:{options:s}})}})},{field:"city",component:"Select",label:"\u57CE\u5E02",colProps:{span:8},componentProps:{options:[],placeholder:"\u7701\u4EFD\u4E0E\u57CE\u5E02\u8054\u52A8"}},{field:"divider-selects",component:"Divider",label:"\u4E92\u65A5\u591A\u9009",helpMessage:["\u4E24\u4E2ASelect\u5171\u7528\u6570\u636E\u6E90","\u4F46\u4E0D\u53EF\u9009\u62E9\u5BF9\u65B9\u5DF2\u9009\u4E2D\u7684\u9879\u76EE"]},{field:"selectA",component:"Select",label:"\u4E92\u65A5SelectA",slot:"selectA",defaultValue:[],colProps:{span:8}},{field:"selectB",component:"Select",label:"\u4E92\u65A5SelectB",slot:"selectB",defaultValue:[],colProps:{span:8}},{field:"divider-others",component:"Divider",label:"\u5176\u5B83"},{field:"field20",component:"InputNumber",label:"\u5B57\u6BB520",required:!0,colProps:{span:8}},{field:"field21",component:"Slider",label:"\u5B57\u6BB521",componentProps:{min:0,max:100,range:!0,marks:{20:"20\xB0C",60:"60\xB0C"}},colProps:{span:8}},{field:"field22",component:"Rate",label:"\u5B57\u6BB522",defaultValue:3,colProps:{span:8},componentProps:{disabled:!1,allowHalf:!0}}],I=R({components:{BasicForm:y,CollapseContainer:V,PageWrapper:J,ApiSelect:_,JAreaLinkage:q,ASelect:w},setup(){const e=r(null),{createMessage:i}=j(),a=r(""),s=v(()=>({keyword:c(a)}));function d(m){a.value=m}return{schemas:z,optionsListApi:B,optionsA:$,optionsB:x,valueSelectA:A,valueSelectB:g,onSearch:M(d,300),searchParams:s,handleReset:()=>{a.value=""},handleSubmit:m=>{i.success("click search,values:"+JSON.stringify(m))},check:e}}});function W(e,i,a,s,d,m){const P=p("JAreaLinkage"),F=p("ApiSelect"),b=p("a-select"),D=p("BasicForm"),S=p("CollapseContainer"),k=p("PageWrapper");return O(),U(k,{title:"\u8868\u5355\u57FA\u7840\u793A\u4F8B",contentFullHeight:""},{default:n(()=>[t(S,{title:"\u57FA\u7840\u793A\u4F8B"},{default:n(()=>[t(D,{autoFocusFirstItem:"",labelWidth:200,schemas:e.schemas,actionColOptions:{span:24},labelCol:{span:8},onSubmit:e.handleSubmit,onReset:e.handleReset},{jAreaLinkage:n(({model:u,field:l})=>[t(P,{value:u[l],"onUpdate:value":o=>u[l]=o,showArea:!0,showAll:!1},null,8,["value","onUpdate:value"])]),localSearch:n(({model:u,field:l})=>[t(F,{api:e.optionsListApi,showSearch:"",value:u[l],"onUpdate:value":o=>u[l]=o,optionFilterProp:"label",resultField:"list",labelField:"name",valueField:"id"},null,8,["api","value","onUpdate:value"])]),selectA:n(({model:u,field:l})=>[t(b,{options:e.optionsA,mode:"multiple",value:u[l],"onUpdate:value":o=>u[l]=o,onChange:o=>e.valueSelectA=u[l],allowClear:""},null,8,["options","value","onUpdate:value","onChange"])]),selectB:n(({model:u,field:l})=>[t(b,{options:e.optionsB,mode:"multiple",value:u[l],"onUpdate:value":o=>u[l]=o,onChange:o=>e.valueSelectB=u[l],allowClear:""},null,8,["options","value","onUpdate:value","onChange"])]),remoteSearch:n(({model:u,field:l})=>[t(F,{api:e.optionsListApi,showSearch:"",value:u[l],"onUpdate:value":o=>u[l]=o,filterOption:!1,resultField:"list",labelField:"name",valueField:"id",onSearch:e.onSearch},null,8,["api","value","onUpdate:value","onSearch"])]),_:1},8,["schemas","onSubmit","onReset"])]),_:1})]),_:1})}var Le=L(I,[["render",W]]);export{Le as default};