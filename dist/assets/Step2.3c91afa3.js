var f=(p,r,s)=>new Promise((c,i)=>{var _=o=>{try{t(s.next(o))}catch(n){i(n)}},u=o=>{try{t(s.throw(o))}catch(n){i(n)}},t=o=>o.done?c(o.value):Promise.resolve(o.value).then(_,u);t((s=s.apply(p,r)).next())});import{B as v}from"./BasicForm.e500713f.js";import"./helper.15e1830a.js";import{u as E}from"./useForm.f4b29e26.js";import"./JAddInput.5c78e955.js";import{l as b,bE as B,b5 as D,dS as l,q as h,t as a,v as x,x as C,y as e,z as m,C as d}from"./index.6c1aeca2.js";import{step2Schemas as g}from"./data.80eca3ac.js";import"./uniqBy.b316cd09.js";import"./index.c1c509d9.js";import"./BasicModal.2246c02b.js";import"./useWindowSizeFn.a6a246d2.js";import"./useFormItem.63b4eda3.js";import"./functional.32464814.js";import"./download.54491438.js";import"./base64Conver.030fa32c.js";import"./index.1785e33e.js";import"./index.9d763a26.js";import"./useCountdown.c7fbe84b.js";import"./JUpload.7c7f9634.js";import"./api.52ea4d1e.js";import"./index.af09c9a6.js";import"./props.0c0dfcc6.js";import"./index.5b79f8bf.js";import"./bem.8f063110.js";import"./props.ee552767.js";import"./useContextMenu.2ad8381d.js";import"./index.3803400c.js";import"./onMountedOrActivated.0e85db74.js";import"./index.2847d809.js";import"./htmlmixed.6fb02709.js";import"./vue.ab8c7c18.js";/* empty css             */import"./usePopBiz.651349c4.js";import"./useMethods.eccfa16d.js";import"./depart.api.c664bb73.js";const y=b({components:{BasicForm:v,[B.name]:B,[D.name]:D,[l.name]:l,[l.Item.name]:l.Item},emits:["next","prev"],setup(p,{emit:r}){const[s,{validate:c,setProps:i}]=E({labelWidth:120,schemas:g,actionColOptions:{span:14},resetButtonOptions:{text:"\u4E0A\u4E00\u6B65"},submitButtonOptions:{text:"\u63D0\u4EA4"},resetFunc:_,submitFunc:u});function _(){return f(this,null,function*(){r("prev")})}function u(){return f(this,null,function*(){try{const t=yield c();i({submitButtonOptions:{loading:!0}}),setTimeout(()=>{i({submitButtonOptions:{loading:!1}}),r("next",t)},1500)}catch(t){}})}return{register:s}}}),A={class:"step2"},O=d(" ant-design@alipay.com "),S=d(" test@example.com "),$=d(" Jeecg "),w=d(" 500\u5143 ");function I(p,r,s,c,i,_){const u=a("a-alert"),t=a("a-descriptions-item"),o=a("a-descriptions"),n=a("a-divider"),F=a("BasicForm");return x(),C("div",A,[e(u,{message:"\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002","show-icon":""}),e(o,{column:1,class:"mt-5"},{default:m(()=>[e(t,{label:"\u4ED8\u6B3E\u8D26\u6237"},{default:m(()=>[O]),_:1}),e(t,{label:"\u6536\u6B3E\u8D26\u6237"},{default:m(()=>[S]),_:1}),e(t,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D"},{default:m(()=>[$]),_:1}),e(t,{label:"\u8F6C\u8D26\u91D1\u989D"},{default:m(()=>[w]),_:1})]),_:1}),e(n),e(F,{onRegister:p.register},null,8,["onRegister"])])}var dt=h(y,[["render",I],["__scopeId","data-v-98ac4578"]]);export{dt as default};