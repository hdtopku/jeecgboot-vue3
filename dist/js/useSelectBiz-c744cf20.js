var h=(v,e,o)=>new Promise((u,f)=>{var w=c=>{try{t(o.next(c))}catch(i){f(i)}},l=c=>{try{t(o.throw(c))}catch(i){f(i)}},t=c=>c.done?u(c.value):Promise.resolve(c.value).then(w,l);t((o=o.apply(v,e)).next())});import{l as z}from"./jeecg-online-vendor-bf2efbcb.js";import{c as y,k as d,r as D,w as A,u as g}from"./vue-c7e3516e.js";function V(v,e){const o=y("selectOptions",d([])),u=y("selectValues",D({value:[],change:!1})),f=y("loadingEcho",d(!1)),w=d([]),l=d([]),t=d([]),c=z();let i=!0;A(u,()=>{if(u.change==!1){let a={};a[e.rowKey]=u.value.join(","),f.value=i,i=!1,m(a,!0).then().finally(()=>{f.value=i})}l.value=u.value},{immediate:!0});function S(a,n){return h(this,null,function*(){if(l.value=a,e.showSelected&&g(l).length!==g(n).length){let{records:s}=yield v({code:g(l).join(","),pageSize:g(l).length});t.value=s}else t.value=n})}const E={type:e.isRadioSelection?"radio":"checkbox",columnWidth:20,selectedRowKeys:l,onChange:S,preserveSelectedRowKeys:!0},x={dataIndex:"index",width:50};function m(a,n){return h(this,null,function*(){let{records:s}=yield v(a);if(w.value=s,n){let r=[];s.forEach(K=>{r.push({label:K[e.labelKey],value:K[e.rowKey]})}),o.value=r}})}function C(){return h(this,null,function*(){let{records:a}=yield v({code:u.value.join(","),pageSize:u.value.length});l.value=u.value,t.value=a})}function b(a){return h(this,null,function*(){a&&e.showSelected&&C()})}function R(a){let n=[],s=[];if(t.value.forEach(r=>{n.push({label:r[e.labelKey],value:r[e.rowKey]})}),l.value.forEach(r=>{s.push(r)}),o.value=n,e.maxSelectCount&&s.length>e.maxSelectCount)return c.createMessage.warning(`\u6700\u591A\u53EA\u80FD\u9009\u62E9${e.maxSelectCount}\u6761\u6570\u636E`),!1;a&&a(n,s)}function j(a){l.value=l.value.filter(n=>n!=a[e.rowKey]),t.value=t.value.filter(n=>n[e.rowKey]!==a[e.rowKey])}function k(){l.value=[],t.value=[]}return[{onSelectChange:S,getDataSource:m,visibleChange:b,selectOptions:o,selectValues:u,rowSelection:E,indexColumnProps:x,checkedKeys:l,selectRows:t,dataSource:w,getSelectResult:R,handleDeleteSelected:j,reset:k}]}export{V as u};