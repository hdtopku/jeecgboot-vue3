var F=Object.defineProperty,D=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var y=(o,e,t)=>e in o?F(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,b=(o,e)=>{for(var t in e||(e={}))A.call(e,t)&&y(o,t,e[t]);if(g)for(var t of g(e))S.call(e,t)&&y(o,t,e[t]);return o},B=(o,e)=>D(o,M(e));var w=(o,e,t)=>new Promise((c,l)=>{var f=n=>{try{a(t.next(n))}catch(u){l(u)}},_=n=>{try{a(t.throw(n))}catch(u){l(u)}},a=n=>n.done?c(n.value):Promise.resolve(n.value).then(f,_);a((t=t.apply(o,e)).next())});import{B as x}from"./BasicForm.edf8c211.js";import"./helper.4a0046bd.js";import{u as $}from"./useForm.a01ff2a7.js";import"./JAddInput.dd50592d.js";import{l as N,t as k,v as q,x as z,aV as J,y as i,z as p,L as h,C as d,u as R}from"./index.3bed7968.js";import"./uniqBy.be18330d.js";import"./index.2b083806.js";import"./BasicModal.63407285.js";import"./useWindowSizeFn.3a0aad8e.js";import"./useFormItem.1483bf1f.js";import"./functional.0ad73ef9.js";import"./download.e4a7eb34.js";import"./base64Conver.030fa32c.js";import"./index.a3670730.js";import"./index.1c9a2e2a.js";import"./useCountdown.789ced8c.js";import"./JUpload.6297877e.js";import"./api.9041b4ca.js";import"./index.e7272bc8.js";import"./props.98e0ca30.js";import"./index.ed8afd6d.js";import"./bem.c8247e3c.js";import"./props.c4c9bbde.js";import"./useContextMenu.41f709dc.js";import"./index.8d6618cf.js";import"./onMountedOrActivated.b5477b8f.js";import"./index.52c0f810.js";import"./htmlmixed.62278273.js";import"./vue.0a98e62f.js";/* empty css             */import"./depart.api.cc5e0568.js";const L={class:"p-4"},O={class:"p-4 bg-white"},P=d("\u542F\u7528"),j=d("\u7981\u7528"),I=d("\u6821\u9A8C\u8868\u5355\u5E76\u83B7\u53D6\u503C"),T=d("\u8BBE\u7F6E\u503C"),W={title:"\u5BCC\u6587\u672C | Markdown",name:"MarkdownDemo"},vt=N(B(b({},W),{setup(o){const{createMessage:e,createSuccessModal:t}=R(),c=[{field:"name",component:"Input",label:"\u59D3\u540D",required:!0,defaultValue:"zhangsan"},{field:"tinymce",component:"JEditor",label:"\u5BCC\u6587\u672C",defaultValue:"defaultValue",required:!0},{field:"markdown",component:"JMarkdownEditor",label:"Markdown",defaultValue:"# \u5F20\u4E09",required:!0,componentProps:{height:300}}],[l,{setProps:f,validate:_,setFieldsValue:a}]=$({labelWidth:120,schemas:c,actionColOptions:{span:24},compact:!0,showResetButton:!1,showSubmitButton:!1,showAdvancedButton:!1,disabled:!1});function n(r){console.log(r)}function u(r){f({disabled:!!r})}function v(){return w(this,null,function*(){try{const r=yield _();console.log(r),t({title:"\u6821\u9A8C\u901A\u8FC7",content:`${JSON.stringify(r)}`})}catch(r){e.warning("\u68C0\u9A8C\u4E0D\u901A\u8FC7")}})}function E(){a({name:"LiSi",markdown:"# \u674E\u56DB",tinymce:'<p><strong><span style="font-size: 18pt;">\u5F20<span style="color: #e03e2d;">\u4E09</span>\u4E30</span></strong></p>'})}return(r,s)=>{const m=k("a-button"),V=k("a-button-group");return q(),z("div",L,[J("div",O,[i(V,{class:"j-table-operator"},{default:p(()=>[i(m,{type:"primary",onClick:s[0]||(s[0]=C=>u(0))},{default:p(()=>[P]),_:1}),i(m,{type:"primary",onClick:s[1]||(s[1]=C=>u(1))},{default:p(()=>[j]),_:1}),i(m,{type:"primary",onClick:s[2]||(s[2]=C=>v())},{default:p(()=>[I]),_:1}),i(m,{type:"primary",onClick:s[3]||(s[3]=C=>E())},{default:p(()=>[T]),_:1})]),_:1}),i(h(x),{onRegister:h(l),onSubmit:n},null,8,["onRegister"])])])}}}));export{vt as default};