import{l as B,t as d,v as i,V as h,z as e,y as o,aV as t,C as l,D as a}from"./index.a1b4e527.js";const b=l("\u6B21\u6570"),x=l("\u8D26\u5BC6"),D=l("\u9996\u6B21"),g=l("\u6700\u8FD1"),F=l("\u5C5E\u5730"),T=l("\u7CFB\u7EDF"),w=l("\u9996\u6B21"),V=l("\u6700\u8FD1"),N=B({__name:"IdeaSysIpInfo",props:{ipIdeaItem:{type:Object}},setup(c){const C=(_,r)=>`\u8D26\u53F7\u3010${_}\u3011
\u5BC6\u7801\u3010${r}\u3011`;return(_,r)=>{const s=d("a-typography-text"),n=d("a-tag"),p=d("a-list-item"),f=d("a-list");return c.ipIdeaItem.showIp?(i(),h(f,{key:0,size:"small",bordered:"","data-source":c.ipIdeaItem.ideaUsages},{renderItem:e(({item:u})=>[o(p,null,{default:e(()=>[t("div",null,[t("div",null,[o(n,null,{default:e(()=>[o(s,null,{default:e(()=>[b]),_:1})]),_:1}),o(n,{color:"blue"},{default:e(()=>[l("\u5171"+a(u.useCount)+"\u6B21",1)]),_:2},1024)]),t("div",null,[o(n,null,{default:e(()=>[o(s,null,{default:e(()=>[x]),_:1})]),_:1}),t("span",null,[o(s,{delete:(u==null?void 0:u.status)===-1,copyable:{text:C(u.account,u.password)}},{default:e(()=>[o(s,{copyable:""},{default:e(()=>[l(a(u.account),1)]),_:2},1024),o(s,{copyable:""},{default:e(()=>[l(a(u.password),1)]),_:2},1024),l(" "+a(u==null?void 0:u.invalidTime),1)]),_:2},1032,["delete","copyable"])])]),t("div",null,[o(n,null,{default:e(()=>[D]),_:1}),l(a(u.createTime),1)]),t("div",null,[o(n,null,{default:e(()=>[g]),_:1}),l(a(u.updateTime),1)])])]),_:2},1024)]),_:1},8,["data-source"])):(i(),h(f,{key:1,size:"small",bordered:"","data-source":c.ipIdeaItem.sysIps},{renderItem:e(({item:u})=>[o(p,null,{default:e(()=>{var y,I,v;return[t("div",null,[t("div",null,[o(n,null,{default:e(()=>[F]),_:1}),l(a(((y=u==null?void 0:u.country)==null?void 0:y.indexOf("\u4E2D\u56FD"))>-1||((v=(I=u==null?void 0:u.country)==null?void 0:I.toUpperCase())==null?void 0:v.indexOf("CHINA"))>-1?"":u.country)+" "+a(u.province)+a(u.city)+a(u.county)+" | "+a(u.ip),1)]),t("div",null,[o(n,null,{default:e(()=>[T]),_:1}),l(a(u.operator)+" | "+a(u.model)+" | "+a(u.system)+"|"+a(u.browser),1)]),t("div",null,[o(n,null,{default:e(()=>[w]),_:1}),l(a(u.createTime),1)]),t("div",null,[o(n,null,{default:e(()=>[V]),_:1}),l(a(u.updateTime)+" ",1),o(n,{color:"blue"},{default:e(()=>[l("\u5171"+a(u.visitCount)+"\u6B21",1)]),_:2},1024)])])]}),_:2},1024)]),_:1},8,["data-source"]))}}});export{N as default};