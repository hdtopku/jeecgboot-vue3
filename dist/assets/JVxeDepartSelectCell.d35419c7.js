var C=Object.defineProperty,v=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var m=(e,t,r)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&m(e,r,t[r]);if(l)for(var r of l(t))x.call(t,r)&&m(e,r,t[r]);return e},u=(e,t)=>v(e,_(t));import"./BasicForm.2d2aa4ab.js";import"./helper.1b3fdfba.js";import{q as S,l as J,eR as V,eS as D,o as a,c as P,aN as y,aO as E,eU as w,t as B,v as $,x as k,y as N,B as b,E as A}from"./index.b3d2a891.js";import{f as T}from"./JAddInput.43004d14.js";import"./uniqBy.4cec2220.js";import"./index.2d23bddf.js";import"./BasicModal.7efd78fc.js";import"./useWindowSizeFn.ab02708a.js";import"./useFormItem.c06072f5.js";import"./functional.4d8eb9e7.js";import"./download.2189cbe2.js";import"./base64Conver.030fa32c.js";import"./index.ea39cbd7.js";import"./index.792f7f1c.js";import"./useCountdown.a4eb9495.js";import"./JUpload.7bcd35c5.js";import"./api.1d3c1927.js";import"./index.96560ef2.js";import"./props.eccfb3be.js";import"./index.7afb8201.js";import"./bem.8fd44f61.js";import"./props.9df65a00.js";import"./useContextMenu.2f0b587d.js";import"./index.bc22d773.js";import"./onMountedOrActivated.12413c39.js";import"./index.bcdb3c55.js";import"./htmlmixed.6d768be1.js";import"./vue.1e0c6574.js";/* empty css             */import"./depart.api.7ce3d710.js";const j=J({name:"JVxeDepartSelectCell",components:{JSelectDept:T},props:V(),setup(e){const{innerValue:t,cellProps:r,handleChangeCommon:p,useCellDesign:n}=D(e),{prefixCls:i}=n("depart-select"),s=a(()=>{let o=t.value;return o==null?o:P(o)?[]:y(o)?o:E(o)?o.split(","):[o]}),d=a(()=>r.value.multi!=!1),f=a(()=>u(c({},r.value),{value:s.value,showButton:!1,showSearch:!1,maxTagCount:1,maxTagPlaceholder:({length:o})=>"+"+o}));function h(o){p(o.join(","))}return{prefixCls:i,selectedValue:s,multiple:d,cellProps:r,getProps:f,handleChange:h}},data(){return{}},computed:{},watch:{},methods:{},enhanced:{switches:{visible:!0},translate:{enabled:!1},aopEvents:{editActived({$event:e}){w({$event:e,props:this.props,className:".ant-select .ant-select-selection-search-input",isClick:!0})}}}});function q(e,t,r,p,n,i){const s=B("JSelectDept");return $(),k("div",{class:A([e.prefixCls])},[N(s,b(e.getProps,{onChange:e.handleChange}),null,16,["onChange"])],2)}var he=S(j,[["render",q]]);export{he as default};
