import{B as c}from"./Bar.d8bb9298.js";import{R as i}from"./RankList.61ba66fa.js";import{j as f,r as l,s as g,Q as x,w as a,aW as o,v as t,dr as C,ds as E,q as b}from"./index.25572ab7.js";import"./useECharts.5d22346c.js";import"./echarts.e7b08381.js";const v=u=>(C("data-v-94731161"),u=u(),E(),u),y={class:"salesCard"},B={class:"extra-wrapper"},D=v(()=>o("div",{class:"extra-item"},[o("a",null,"\u4ECA\u65E5"),o("a",null,"\u672C\u5468"),o("a",null,"\u672C\u6708"),o("a",null,"\u672C\u5E74")],-1)),k=f({__name:"SaleTabCard",props:{loading:{type:Boolean}},setup(u){const n=[];for(let e=0;e<7;e++)n.push({name:"\u767D\u9E6D\u5C9B "+(e+1)+" \u53F7\u5E97",total:1234.56-e*100});const r=[];for(let e=0;e<12;e+=1)r.push({name:`${e+1}\u6708`,value:Math.floor(Math.random()*1e3)+200});return(e,S)=>{const p=l("a-range-picker"),s=l("a-col"),_=l("a-row"),d=l("a-tab-pane"),m=l("a-tabs"),h=l("a-card");return g(),x(h,{loading:u.loading,bordered:!1,"body-style":{padding:"0"}},{default:a(()=>[o("div",y,[t(m,{"default-active-key":"1",size:"large","tab-bar-style":{marginBottom:"24px",paddingLeft:"16px"}},{rightExtra:a(()=>[o("div",B,[D,t(p,{style:{width:"256px"}})])]),default:a(()=>[t(d,{loading:"true",tab:"\u9500\u552E\u989D",key:"1"},{default:a(()=>[t(_,null,{default:a(()=>[t(s,{xl:16,lg:12,md:12,sm:24,xs:24},{default:a(()=>[t(c,{chartData:r,option:{title:{text:"\u9500\u552E\u989D\u6392\u884C",textStyle:{fontWeight:"lighter"}}},height:"40vh"})]),_:1}),t(s,{xl:8,lg:12,md:12,sm:24,xs:24},{default:a(()=>[t(i,{title:"\u95E8\u5E97\u9500\u552E\u6392\u884C\u699C",list:n})]),_:1})]),_:1})]),_:1}),t(d,{tab:"\u9500\u552E\u8D8B\u52BF",key:"2"},{default:a(()=>[t(_,null,{default:a(()=>[t(s,{xl:16,lg:12,md:12,sm:24,xs:24},{default:a(()=>[t(c,{chartData:r.reverse(),option:{title:{text:"\u9500\u552E\u989D\u6392\u884C",textStyle:{fontWeight:"lighter"}}},height:"40vh"},null,8,["chartData"])]),_:1}),t(s,{xl:8,lg:12,md:12,sm:24,xs:24},{default:a(()=>[t(i,{title:"\u95E8\u5E97\u9500\u552E\u6392\u884C\u699C",list:n})]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["loading"])}}});const F=b(k,[["__scopeId","data-v-94731161"]]);export{F as default};