var B=(t,a,r)=>new Promise((s,i)=>{var e=o=>{try{n(r.next(o))}catch(l){i(l)}},p=o=>{try{n(r.throw(o))}catch(l){i(l)}},n=o=>o.done?s(o.value):Promise.resolve(o.value).then(e,p);n((r=r.apply(t,a)).next())});import{B as h}from"./BasicForm.68eb68a1.js";import"./helper.2e61c179.js";import{u as $}from"./useForm.1b67cd29.js";import"./JAddInput.f96768b3.js";import{q as g,l as F,dw as P,aA as _,c1 as k,F as y,t as u,v as d,V as f,z as m,y as C,W as b,C as v}from"./index.23784a6b.js";import{a as I}from"./index.1525978f.js";import"./uniqBy.d45e63ad.js";import"./index.1660bc1f.js";import"./BasicModal.604d8318.js";import"./useWindowSizeFn.c7f5a452.js";import"./useFormItem.aa979107.js";import"./functional.a720d0df.js";import"./download.eb9b6987.js";import"./base64Conver.030fa32c.js";import"./index.52e05db7.js";import"./index.b476f533.js";import"./useCountdown.1de097ab.js";import"./JUpload.847bb7e8.js";import"./api.4ab57216.js";import"./index.531e5b47.js";import"./props.b2b77096.js";import"./index.abc2a51f.js";import"./bem.8c0ec145.js";import"./props.a518648b.js";import"./useContextMenu.149fe6bb.js";import"./index.d2f7ee38.js";import"./onMountedOrActivated.20f21d4b.js";import"./index.b48c2101.js";import"./htmlmixed.97cf791a.js";import"./vue.23f9d0fa.js";/* empty css             */import"./depart.api.4e6de065.js";import"./useContentHeight.83e16fa4.js";import"./useContentViewHeight.6b076a37.js";import"./usePageContext.0eee1b9e.js";const S=F({components:{BasicForm:h,CollapseContainer:P,PageWrapper:I,[_.name]:_,Button:k},setup(){const[t,{appendSchemaByField:a,removeSchemaByFiled:r,validate:s}]=$({schemas:[{field:"field0a",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"field0b",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"0",component:"Input",label:" ",colProps:{span:8},slot:"add"}],labelWidth:100,actionColOptions:{span:24}});function i(){return B(this,null,function*(){try{const o=yield s();console.log(o)}catch(o){console.log(o)}})}const e=y(1);function p(){a({field:`field${e.value}a`,component:"Input",label:"\u5B57\u6BB5"+e.value,colProps:{span:8},required:!0},""),a({field:`field${e.value}b`,component:"Input",label:"\u5B57\u6BB5"+e.value,colProps:{span:8},required:!0},""),a({field:`${e.value}`,component:"Input",label:" ",colProps:{span:8},slot:"add"},""),e.value++}function n(o){r([`field${o}a`,`field${o}b`,`${o}`]),e.value--}return{register:t,handleSubmit:i,add:p,del:n}}}),q=v("+"),W=v("-");function N(t,a,r,s,i,e){const p=u("Button"),n=u("BasicForm"),o=u("CollapseContainer"),l=u("PageWrapper");return d(),f(l,{title:"\u8868\u5355\u589E\u5220\u793A\u4F8B"},{default:m(()=>[C(o,{title:"\u8868\u5355\u589E\u5220"},{default:m(()=>[C(n,{onRegister:t.register,onSubmit:t.handleSubmit},{add:m(({field:c})=>[Number(c)===0?(d(),f(p,{key:0,onClick:t.add},{default:m(()=>[q]),_:1},8,["onClick"])):b("",!0),c>0?(d(),f(p,{key:1,onClick:V=>t.del(c)},{default:m(()=>[W]),_:2},1032,["onClick"])):b("",!0)]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var _o=g(S,[["render",N]]);export{_o as default};