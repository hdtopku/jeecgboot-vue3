var h=Object.defineProperty,v=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var m=(e,t,r)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&m(e,r,t[r]);if(p)for(var r of p(t))x.call(t,r)&&m(e,r,t[r]);return e},u=(e,t)=>v(e,_(t));import"./BasicForm.638a5420.js";import"./helper.df0282ae.js";import{q as V,l as J,eU as S,eV as U,o as a,c as P,aN as y,aO as E,eX as B,t as $,v as b,x as k,y as w,B as N,E as A}from"./index.a86a095a.js";import{b as T}from"./JAddInput.b3ef411a.js";import"./uniqBy.37746f07.js";import"./index.6aad32b5.js";import"./BasicModal.e80a23a3.js";import"./useWindowSizeFn.b7d480b1.js";import"./useFormItem.26c7ddf2.js";import"./functional.748b14f4.js";import"./download.5ff89a13.js";import"./base64Conver.030fa32c.js";import"./index.8380ff3b.js";import"./index.ab0e3029.js";import"./useCountdown.4d86de16.js";import"./JUpload.bd403882.js";import"./api.8ffe844e.js";import"./index.2f02ed00.js";import"./props.b5573a62.js";import"./index.4e26ab6e.js";import"./bem.58472782.js";import"./props.3a3564ad.js";import"./useContextMenu.3dd9697f.js";import"./index.d3916c9f.js";import"./onMountedOrActivated.ab6edd17.js";import"./index.489fa5a0.js";import"./htmlmixed.ecc9afe5.js";import"./vue.15147809.js";/* empty css             */import"./depart.api.b742e74c.js";const j=J({name:"JVxeUserSelectCell",components:{JSelectUser:T},props:S(),setup(e){const{innerValue:t,cellProps:r,handleChangeCommon:n,useCellDesign:i}=U(e),{prefixCls:l}=i("user-select"),s=a(()=>{let o=t.value;return o==null?o:P(o)?[]:y(o)?o:E(o)?o.split(","):[o]}),d=a(()=>r.value.multi!=!1),f=a(()=>u(c({},r.value),{value:s.value,showButton:!1,showSearch:!1,maxTagCount:1,maxTagPlaceholder:({length:o})=>"+"+o}));function C(o){n(o.join(","))}return{prefixCls:l,selectedValue:s,multiple:d,cellProps:r,getProps:f,handleChange:C}},enhanced:{switches:{visible:!0},translate:{enabled:!1},aopEvents:{editActived({$event:e}){B({$event:e,props:this.props,className:".ant-select .ant-select-selection-search-input",isClick:!0})}}}});function q(e,t,r,n,i,l){const s=$("JSelectUser");return b(),k("div",{class:A([e.prefixCls])},[w(s,N(e.getProps,{onChange:e.handleChange}),null,16,["onChange"])],2)}var Ce=V(j,[["render",q]]);export{Ce as default};