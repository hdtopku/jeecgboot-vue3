var F=Object.defineProperty,D=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var y=(o,e,t)=>e in o?F(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,b=(o,e)=>{for(var t in e||(e={}))A.call(e,t)&&y(o,t,e[t]);if(g)for(var t of g(e))S.call(e,t)&&y(o,t,e[t]);return o},B=(o,e)=>D(o,M(e));var w=(o,e,t)=>new Promise((c,l)=>{var f=n=>{try{a(t.next(n))}catch(u){l(u)}},_=n=>{try{a(t.throw(n))}catch(u){l(u)}},a=n=>n.done?c(n.value):Promise.resolve(n.value).then(f,_);a((t=t.apply(o,e)).next())});import{B as x}from"./BasicForm.2d2aa4ab.js";import"./helper.1b3fdfba.js";import{u as $}from"./useForm.96d1836c.js";import"./JAddInput.43004d14.js";import{l as N,t as k,v as q,x as z,aV as J,y as i,z as p,L as h,C as d,u as R}from"./index.b3d2a891.js";import"./uniqBy.4cec2220.js";import"./index.2d23bddf.js";import"./BasicModal.7efd78fc.js";import"./useWindowSizeFn.ab02708a.js";import"./useFormItem.c06072f5.js";import"./functional.4d8eb9e7.js";import"./download.2189cbe2.js";import"./base64Conver.030fa32c.js";import"./index.ea39cbd7.js";import"./index.792f7f1c.js";import"./useCountdown.a4eb9495.js";import"./JUpload.7bcd35c5.js";import"./api.1d3c1927.js";import"./index.96560ef2.js";import"./props.eccfb3be.js";import"./index.7afb8201.js";import"./bem.8fd44f61.js";import"./props.9df65a00.js";import"./useContextMenu.2f0b587d.js";import"./index.bc22d773.js";import"./onMountedOrActivated.12413c39.js";import"./index.bcdb3c55.js";import"./htmlmixed.6d768be1.js";import"./vue.1e0c6574.js";/* empty css             */import"./depart.api.7ce3d710.js";const L={class:"p-4"},O={class:"p-4 bg-white"},P=d("\u542F\u7528"),j=d("\u7981\u7528"),I=d("\u6821\u9A8C\u8868\u5355\u5E76\u83B7\u53D6\u503C"),T=d("\u8BBE\u7F6E\u503C"),W={title:"\u5BCC\u6587\u672C | Markdown",name:"MarkdownDemo"},vt=N(B(b({},W),{setup(o){const{createMessage:e,createSuccessModal:t}=R(),c=[{field:"name",component:"Input",label:"\u59D3\u540D",required:!0,defaultValue:"zhangsan"},{field:"tinymce",component:"JEditor",label:"\u5BCC\u6587\u672C",defaultValue:"defaultValue",required:!0},{field:"markdown",component:"JMarkdownEditor",label:"Markdown",defaultValue:"# \u5F20\u4E09",required:!0,componentProps:{height:300}}],[l,{setProps:f,validate:_,setFieldsValue:a}]=$({labelWidth:120,schemas:c,actionColOptions:{span:24},compact:!0,showResetButton:!1,showSubmitButton:!1,showAdvancedButton:!1,disabled:!1});function n(r){console.log(r)}function u(r){f({disabled:!!r})}function v(){return w(this,null,function*(){try{const r=yield _();console.log(r),t({title:"\u6821\u9A8C\u901A\u8FC7",content:`${JSON.stringify(r)}`})}catch(r){e.warning("\u68C0\u9A8C\u4E0D\u901A\u8FC7")}})}function E(){a({name:"LiSi",markdown:"# \u674E\u56DB",tinymce:'<p><strong><span style="font-size: 18pt;">\u5F20<span style="color: #e03e2d;">\u4E09</span>\u4E30</span></strong></p>'})}return(r,s)=>{const m=k("a-button"),V=k("a-button-group");return q(),z("div",L,[J("div",O,[i(V,{class:"j-table-operator"},{default:p(()=>[i(m,{type:"primary",onClick:s[0]||(s[0]=C=>u(0))},{default:p(()=>[P]),_:1}),i(m,{type:"primary",onClick:s[1]||(s[1]=C=>u(1))},{default:p(()=>[j]),_:1}),i(m,{type:"primary",onClick:s[2]||(s[2]=C=>v())},{default:p(()=>[I]),_:1}),i(m,{type:"primary",onClick:s[3]||(s[3]=C=>E())},{default:p(()=>[T]),_:1})]),_:1}),i(h(x),{onRegister:h(l),onSubmit:n},null,8,["onRegister"])])])}}}));export{vt as default};
