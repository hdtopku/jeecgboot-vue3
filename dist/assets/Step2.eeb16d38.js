var f=(p,r,s)=>new Promise((c,i)=>{var _=e=>{try{t(s.next(e))}catch(n){i(n)}},u=e=>{try{t(s.throw(e))}catch(n){i(n)}},t=e=>e.done?c(e.value):Promise.resolve(e.value).then(_,u);t((s=s.apply(p,r)).next())});import{B as v}from"./BasicForm.2d2aa4ab.js";import"./helper.1b3fdfba.js";import{u as E}from"./useForm.96d1836c.js";import"./JAddInput.43004d14.js";import{l as b,bF as B,b6 as D,dN as l,q as h,t as a,v as x,x as C,y as o,z as m,C as d}from"./index.b3d2a891.js";import{step2Schemas as g}from"./data.80eca3ac.js";import"./uniqBy.4cec2220.js";import"./index.2d23bddf.js";import"./BasicModal.7efd78fc.js";import"./useWindowSizeFn.ab02708a.js";import"./useFormItem.c06072f5.js";import"./functional.4d8eb9e7.js";import"./download.2189cbe2.js";import"./base64Conver.030fa32c.js";import"./index.ea39cbd7.js";import"./index.792f7f1c.js";import"./useCountdown.a4eb9495.js";import"./JUpload.7bcd35c5.js";import"./api.1d3c1927.js";import"./index.96560ef2.js";import"./props.eccfb3be.js";import"./index.7afb8201.js";import"./bem.8fd44f61.js";import"./props.9df65a00.js";import"./useContextMenu.2f0b587d.js";import"./index.bc22d773.js";import"./onMountedOrActivated.12413c39.js";import"./index.bcdb3c55.js";import"./htmlmixed.6d768be1.js";import"./vue.1e0c6574.js";/* empty css             */import"./depart.api.7ce3d710.js";const y=b({components:{BasicForm:v,[B.name]:B,[D.name]:D,[l.name]:l,[l.Item.name]:l.Item},emits:["next","prev"],setup(p,{emit:r}){const[s,{validate:c,setProps:i}]=E({labelWidth:120,schemas:g,actionColOptions:{span:14},resetButtonOptions:{text:"\u4E0A\u4E00\u6B65"},submitButtonOptions:{text:"\u63D0\u4EA4"},resetFunc:_,submitFunc:u});function _(){return f(this,null,function*(){r("prev")})}function u(){return f(this,null,function*(){try{const t=yield c();i({submitButtonOptions:{loading:!0}}),setTimeout(()=>{i({submitButtonOptions:{loading:!1}}),r("next",t)},1500)}catch(t){}})}return{register:s}}}),A={class:"step2"},O=d(" ant-design@alipay.com "),S=d(" test@example.com "),$=d(" Jeecg "),w=d(" 500\u5143 ");function I(p,r,s,c,i,_){const u=a("a-alert"),t=a("a-descriptions-item"),e=a("a-descriptions"),n=a("a-divider"),F=a("BasicForm");return x(),C("div",A,[o(u,{message:"\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002","show-icon":""}),o(e,{column:1,class:"mt-5"},{default:m(()=>[o(t,{label:"\u4ED8\u6B3E\u8D26\u6237"},{default:m(()=>[O]),_:1}),o(t,{label:"\u6536\u6B3E\u8D26\u6237"},{default:m(()=>[S]),_:1}),o(t,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D"},{default:m(()=>[$]),_:1}),o(t,{label:"\u8F6C\u8D26\u91D1\u989D"},{default:m(()=>[w]),_:1})]),_:1}),o(n),o(F,{onRegister:p.register},null,8,["onRegister"])])}var _t=h(y,[["render",I],["__scopeId","data-v-98ac4578"]]);export{_t as default};
