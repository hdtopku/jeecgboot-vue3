import{U as f}from"./index-7711d1b4.js";import{Q as h}from"./jeecg-online-vendor-59c8fbe3.js";import{d as v,k as u,V as m,a5 as y,a6 as x,a9 as K,a7 as k,f as D,an as S,W as w}from"./vue-bcbaddf9.js";import"./antd-vue-vendor-a78909e6.js";import"./tinymce-vendor-676f8393.js";import"./lodash-es-vendor-9b741fb8.js";import"./echarts-vendor-6c8e2159.js";import"./vxe-table-vendor-173f2e92.js";var C=(a,r,n)=>new Promise((s,l)=>{var i=e=>{try{o(n.next(e))}catch(t){l(t)}},d=e=>{try{o(n.throw(e))}catch(t){l(t)}},o=e=>e.done?s(e.value):Promise.resolve(e.value).then(i,d);o((n=n.apply(a,r)).next())});const V=v({name:"LeftDepart",emits:["select"],setup(a,{emit:r}){const n=u([]),s=u([]),l=u([]);function i(t,c){let p=c.node.dataRef;s.value=[p.key],r("select",p.id)}d();function d(){return C(this,null,function*(){let t=yield f();n.value=[],t.forEach(c=>o(c))})}function o(t,c=1){if(t.slots={icon:"depIcon"},c===1&&(n.value.push(t),l.value.push(t.id)),t.children&&t.children.length>0)for(const p of t.children)o(p,c+1)}function e(){s.value=[]}return{treeData:n,expandedKeys:l,selectedKeys:s,clearSelected:e,onSelect:i}}});function B(a,r,n,s,l,i){const d=m("a-icon"),o=m("a-tree");return y(),x("div",null,[a.treeData.length>0?(y(),K(o,{key:0,showIcon:"",autoExpandParent:"",treeData:a.treeData,selectedKeys:a.selectedKeys,expandedKeys:a.expandedKeys,"onUpdate:expandedKeys":r[0]||(r[0]=e=>a.expandedKeys=e),onSelect:a.onSelect},{depIcon:k(({selected:e})=>[D(d,{style:S({color:e?"blue":""}),type:"apartment"},null,8,["style"])]),_:1},8,["treeData","selectedKeys","expandedKeys","onSelect"])):w("",!0)])}const q=h(V,[["render",B]]);export{q as default};