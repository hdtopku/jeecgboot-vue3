import{q as p,l as _,t as n,v as f,V as k,z as t,y as a,aV as o,C as s}from"./index.b3d2a891.js";const y=[{title:"Name",dataIndex:"name",key:"name"},{title:"Platform",dataIndex:"platform",key:"platform"},{title:"Version",dataIndex:"version",key:"version"},{title:"Upgraded",dataIndex:"upgradeNum",key:"upgradeNum"},{title:"Creator",dataIndex:"creator",key:"creator"},{title:"Date",dataIndex:"createdAt",key:"createdAt"},{title:"Action",key:"operation",slots:{customRender:"operation"}}],l=[];for(let e=0;e<3;++e)l.push({key:e,name:"Screem",platform:"iOS",version:"10.3.4.5654",upgradeNum:500,creator:"Jack",createdAt:"2014-12-24 23:12:00"});const h=[{title:"Date",dataIndex:"date",key:"date"},{title:"Name",dataIndex:"name",key:"name"},{title:"Status",key:"state",slots:{customRender:"status"}},{title:"Upgrade Status",dataIndex:"upgradeNum",key:"upgradeNum"},{title:"Action",dataIndex:"operation",key:"operation",slots:{customRender:"operation"}}],c=[];for(let e=0;e<3;++e)c.push({key:e,date:"2014-12-24 23:12:00",name:"This is production name",upgradeNum:"Upgraded: 56"});const g=_({components:{},setup(){return{data:l,columns:y,innerColumns:h,innerData:c}}}),x=o("a",null,"Publish",-1),N=s(" Finished "),I={class:"table-operation"},b=o("a",null,"Pause",-1),v=o("a",null,"Stop",-1),A=s("Action 1"),C=s("Action 2"),V=o("a",null," More ",-1);function R(e,S,w,D,$,B){const u=n("a-badge"),d=n("a-menu-item"),i=n("a-menu"),m=n("a-dropdown"),r=n("a-table");return f(),k(r,{columns:e.columns,"data-source":e.data,class:"components-table-demo-nested"},{operation:t(()=>[x]),expandedRowRender:t(()=>[a(r,{columns:e.innerColumns,"data-source":e.innerData,pagination:!1},{status:t(()=>[o("span",null,[a(u,{status:"success"}),N])]),operation:t(()=>[o("span",I,[b,v,a(m,null,{overlay:t(()=>[a(i,null,{default:t(()=>[a(d,null,{default:t(()=>[A]),_:1}),a(d,null,{default:t(()=>[C]),_:1})]),_:1})]),default:t(()=>[V]),_:1})])]),_:1},8,["columns","data-source"])]),_:1},8,["columns","data-source"])}var T=p(g,[["render",R]]);export{T as default};
