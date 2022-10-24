import{_ as T}from"./index.8c0f1045.js";import{t as C}from"./data.5e96733f.js";import{a as E}from"./index.6fc95f6c.js";import{q as B,l as k,dn as A,c7 as v,bX as K,aK as L,F as d,t as r,v as R,V as $,z as n,y as e,aW as y,Q as b,L as D,aN as w,dE as P,C as g}from"./index.a1b4e527.js";import"./bem.ff3a25b6.js";import"./props.40d423fa.js";import"./useContextMenu.259c847c.js";import"./useContentHeight.d2359e54.js";import"./onMountedOrActivated.e88e16f1.js";import"./useWindowSizeFn.cf93ddee.js";import"./useContentViewHeight.79642745.js";import"./usePageContext.e993a792.js";const W=k({name:"system-testtree",components:{BasicTree:T,PageWrapper:E,Card:A,Row:v,Col:K,Spin:L},setup(){const a=d(null),c=d(null),_=d(null),p=d([]),l=d(!1);function F(t,s){console.log("onChecked",t,s)}function u(){l.value=!0,setTimeout(()=>{p.value=y(C),l.value=!1,b(()=>{var t;console.log(D(c)),(t=D(c))==null||t.expandAll(!0)})},2e3)}function o(){l.value=!0,setTimeout(()=>{p.value=y(C),l.value=!1},2e3)}const f=d([{title:"parent ",key:"0-0"}]);function m(t){return new Promise(s=>{if(w(t.children)&&t.children.length>0){s();return}setTimeout(()=>{const i=D(a);if(i){const h=[{title:`Child Node ${t.eventKey}-0`,key:`${t.eventKey}-0`},{title:`Child Node ${t.eventKey}-1`,key:`${t.eventKey}-1`}];i.updateNodeByKey(t.eventKey,{children:h}),i.setExpandedKeys(P([t.eventKey,...i.getExpandedKeys()]))}s()},300)})}return{treeData:C,handleCheck:F,tree:f,onLoadData:m,asyncTreeRef:a,asyncExpandTreeRef:c,loadTreeRef:_,tree2:p,loadTreeData:u,treeLoading:l,loadTreeData2:o}}}),x=g("\u52A0\u8F7D\u6570\u636E"),S=g("\u8BF7\u6C42\u6570\u636E");function V(a,c,_,p,l,F){const u=r("BasicTree"),o=r("Col"),f=r("a-button"),m=r("Spin"),t=r("Card"),s=r("Row"),i=r("PageWrapper");return R(),$(i,{title:"Tree\u57FA\u7840\u793A\u4F8B"},{default:n(()=>[e(s,{gutter:[16,16]},{default:n(()=>[e(o,{span:8},{default:n(()=>[e(u,{title:"\u57FA\u7840\u793A\u4F8B\uFF0C\u9ED8\u8BA4\u5C55\u5F00\u7B2C\u4E00\u5C42",treeData:a.treeData,defaultExpandLevel:"1"},null,8,["treeData"])]),_:1}),e(o,{span:8},{default:n(()=>[e(u,{title:"\u53EF\u52FE\u9009\uFF0C\u9ED8\u8BA4\u5168\u90E8\u5C55\u5F00",treeData:a.treeData,checkable:!0,defaultExpandAll:"",onCheck:a.handleCheck},null,8,["treeData","onCheck"])]),_:1}),e(o,{span:8},{default:n(()=>[e(u,{title:"\u6307\u5B9A\u9ED8\u8BA4\u5C55\u5F00/\u52FE\u9009\u793A\u4F8B",treeData:a.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])]),_:1}),e(o,{span:8},{default:n(()=>[e(u,{title:"\u61D2\u52A0\u8F7D\u5F02\u6B65\u6811",ref:"asyncTreeRef",treeData:a.tree,"load-data":a.onLoadData},null,8,["treeData","load-data"])]),_:1}),e(o,{span:8},{default:n(()=>[e(t,{title:"\u5F02\u6B65\u6570\u636E\uFF0C\u9ED8\u8BA4\u5C55\u5F00"},{extra:n(()=>[e(f,{onClick:a.loadTreeData,loading:a.treeLoading},{default:n(()=>[x]),_:1},8,["onClick","loading"])]),default:n(()=>[e(m,{spinning:a.treeLoading},{default:n(()=>[e(u,{ref:"asyncExpandTreeRef",treeData:a.tree2},null,8,["treeData"])]),_:1},8,["spinning"])]),_:1})]),_:1}),e(o,{span:8},{default:n(()=>[e(t,{title:"BasicTree\u5185\u7F6E\u52A0\u8F7D"},{extra:n(()=>[e(f,{onClick:a.loadTreeData2,loading:a.treeLoading},{default:n(()=>[S]),_:1},8,["onClick","loading"])]),default:n(()=>[e(u,{ref:"loadTreeRef",treeData:a.tree2,loading:a.treeLoading},null,8,["treeData","loading"])]),_:1})]),_:1})]),_:1})]),_:1})}var Y=B(W,[["render",V]]);export{Y as default};