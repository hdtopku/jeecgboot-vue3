var h=(y,f,r)=>new Promise((o,n)=>{var p=t=>{try{u(r.next(t))}catch(l){n(l)}},c=t=>{try{u(r.throw(t))}catch(l){n(l)}},u=t=>t.done?o(t.value):Promise.resolve(t.value).then(p,c);u((r=r.apply(y,f)).next())});import{u as b,D as A}from"./jeecg-online-vendor-885afdd4.js";import{_ as B}from"./index-b8c8f01c.js";import{n as N,s as P}from"./depart.user.api-04f5b351.js";import{d as M,c as V,k as i,V as g,a5 as d,a6 as x,f as q,a7 as F,u as s,F as I,a9 as k,W as L,q as D}from"./vue-bcbaddf9.js";import"./antd-vue-vendor-a78909e6.js";import"./tinymce-vendor-676f8393.js";import"./vxe-table-vendor-9edfd3ae.js";import"./lodash-es-vendor-9b741fb8.js";import"./index-4b015b65.js";import"./echarts-vendor-6c8e2159.js";import"./bem-2f6fe1be.js";import"./props-c7c3390f.js";import"./useContextMenu-790e41ea.js";const R={class:"bg-white m-4 mr-0 overflow-hidden"},W=M({__name:"DepartTree",emits:["select"],setup(y,{emit:f}){V("prefixCls");const{createMessage:r}=b();let o=i(!1),n=i([]),p=i([]),c=i([]),u=i(!0),t=i("2"),l=i(!1);function v(){o.value=!0,n.value=[],N().then(e=>{e.success?Array.isArray(e.result)&&(n.value=e.result,t.value=e.message,w()):r.warning(e.message)}).finally(()=>o.value=!1)}v();function w(){let e=[];n.value.forEach((a,m)=>{a.children&&a.children.length>0&&e.push(a.key),m===0&&_(a.id,a)}),e.length>0&&(E(),p.value=e)}function E(){return h(this,null,function*(){yield D(),l.value=!0,yield D(),l.value=!1})}function _(e,a){c.value=[e],a&&f("select",a)}function T(e){e?(o.value=!0,P({keyWord:e,myDeptSearch:"1"}).then(a=>{Array.isArray(a)?n.value=a:(r.warning("未查询到部门信息"),n.value=[])}).finally(()=>o.value=!1)):v()}function K(e,a){e.length>0&&c.value[0]!==e[0]?_(e[0],a.selectedNodes[0]):_(c.value[0])}function C(e){p.value=e,u.value=!1}return(e,a)=>{const m=g("a-empty"),S=g("a-spin");return d(),x("div",R,[q(S,{spinning:s(o)},{default:F(()=>[s(t)==="2"?(d(),x(I,{key:0},[s(l)?L("",!0):(d(),k(s(B),{key:0,title:"部门列表",toolbar:"",search:"",showLine:"",checkStrictly:!0,clickRowToExpand:!1,treeData:s(n),selectedKeys:s(c),expandedKeys:s(p),autoExpandParent:s(u),onSelect:K,onExpand:C,onSearch:T},null,8,["treeData","selectedKeys","expandedKeys","autoExpandParent"]))],64)):(d(),k(m,{key:1,description:"普通员工无此权限"}))]),_:1},8,["spinning"])])}}});const te=A(W,[["__scopeId","data-v-892b3d18"]]);export{te as default};