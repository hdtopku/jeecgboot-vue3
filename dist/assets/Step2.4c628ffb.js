var f=(a,r,s)=>new Promise((c,i)=>{var _=o=>{try{t(s.next(o))}catch(n){i(n)}},u=o=>{try{t(s.throw(o))}catch(n){i(n)}},t=o=>o.done?c(o.value):Promise.resolve(o.value).then(_,u);t((s=s.apply(a,r)).next())});import{B as v}from"./BasicForm.10d2bac8.js";import"./componentMap.bd60345c.js";import{u as E}from"./useForm.92846014.js";import"./JAddInput.2d4443c3.js";import{j as b,bG as B,b7 as D,dG as l,q as g,r as m,s as x,t as C,v as e,w as p,y as d}from"./index.9d4ffdff.js";import{step2Schemas as h}from"./data.80eca3ac.js";import"./BasicForm.vue_vue_type_style_index_0_lang.4e84674c.js";import"./uniqBy.144d64e1.js";import"./index.fa33ec21.js";import"./BasicModal.80fe5012.js";import"./useWindowSizeFn.722b7aaa.js";import"./useFormItem.6cd3d92a.js";import"./functional.db9e0476.js";import"./download.70e251a6.js";import"./base64Conver.030fa32c.js";import"./index.fcb9611e.js";import"./index.4dc520b5.js";import"./useCountdown.11eac9c0.js";import"./JUpload.vue_vue_type_style_index_0_lang.3d564f34.js";import"./api.d12fe1c3.js";import"./index.28971d5a.js";import"./index.46008326.js";import"./areaDataUtil.d553b295.js";import"./props.b0f6852a.js";import"./index.0991c9be.js";import"./bem.393108ef.js";import"./props.2c136ce5.js";import"./useContextMenu.37312741.js";import"./index.94ebb6f8.js";import"./onMountedOrActivated.1516be09.js";import"./index.1cd463e1.js";import"./htmlmixed.e1e616a1.js";import"./vue.6aa3bd32.js";/* empty css             */import"./depart.api.57d85389.js";import"./MinusCircleOutlined.ffeee554.js";const y=b({components:{BasicForm:v,[B.name]:B,[D.name]:D,[l.name]:l,[l.Item.name]:l.Item},emits:["next","prev"],setup(a,{emit:r}){const[s,{validate:c,setProps:i}]=E({labelWidth:120,schemas:h,actionColOptions:{span:14},resetButtonOptions:{text:"\u4E0A\u4E00\u6B65"},submitButtonOptions:{text:"\u63D0\u4EA4"},resetFunc:_,submitFunc:u});function _(){return f(this,null,function*(){r("prev")})}function u(){return f(this,null,function*(){try{const t=yield c();i({submitButtonOptions:{loading:!0}}),setTimeout(()=>{i({submitButtonOptions:{loading:!1}}),r("next",t)},1500)}catch(t){}})}return{register:s}}});const A={class:"step2"};function O(a,r,s,c,i,_){const u=m("a-alert"),t=m("a-descriptions-item"),o=m("a-descriptions"),n=m("a-divider"),F=m("BasicForm");return x(),C("div",A,[e(u,{message:"\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002","show-icon":""}),e(o,{column:1,class:"mt-5"},{default:p(()=>[e(t,{label:"\u4ED8\u6B3E\u8D26\u6237"},{default:p(()=>[d(" ant-design@alipay.com ")]),_:1}),e(t,{label:"\u6536\u6B3E\u8D26\u6237"},{default:p(()=>[d(" test@example.com ")]),_:1}),e(t,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D"},{default:p(()=>[d(" Jeecg ")]),_:1}),e(t,{label:"\u8F6C\u8D26\u91D1\u989D"},{default:p(()=>[d(" 500\u5143 ")]),_:1})]),_:1}),e(n),e(F,{onRegister:a.register},null,8,["onRegister"])])}const _t=g(y,[["render",O],["__scopeId","data-v-3f7c23c8"]]);export{_t as default};