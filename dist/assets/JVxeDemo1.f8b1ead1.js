var y=(A,i,l)=>new Promise((f,C)=>{var E=s=>{try{p(l.next(s))}catch(h){C(h)}},b=s=>{try{p(l.throw(s))}catch(h){C(h)}},p=s=>s.done?f(s.value):Promise.resolve(s.value).then(E,b);p((l=l.apply(A,i)).next())});import{l as O,F as D,dC as n,t as B,v as U,x as Z,y as a,z as t,aU as g,D as q,L as G,ej as X,av as z,C as c,aZ as W,eO as r,eP as K,u as Q,c2 as ee}from"./index.6c1aeca2.js";const ue=c("\u5207\u6362\u52A0\u8F7D"),te=c("\u5207\u6362\u7981\u7528"),le=c("\u8868\u5355\u9A8C\u8BC1"),oe=c("\u83B7\u53D6\u6570\u636E"),ae=c("\u8BBE\u7F6E\u503C"),ne=c("\u83B7\u53D6\u9009\u4E2D\u6570\u636E"),ie=c("\u6E05\u7A7A\u9009\u4E2D"),se=c("\u5220\u9664\u7B2C\u4E00\u884C\u6570\u636E"),ce=c("\u5220\u9664\u9009\u4E2D\u6570\u636E"),de={style:{padding:"20px"}},re=["onClick"],fe=g("a",null,"\u5220\u9664",-1),me=O({__name:"JVxeDemo1",setup(A){const{createMessage:i}=Q(),l=D(),f=D(!1),C=D(!1),E=D([{title:"ID",key:"id",type:n.hidden},{title:"\u4E0D\u53EF\u7F16\u8F91",key:"noEdit",type:n.normal,width:180,defaultValue:"noEdit-new"},{title:"\u5355\u884C\u6587\u672C",key:"input",type:n.input,width:180,defaultValue:"",placeholder:"\u8BF7\u8F93\u5165${title}",validateRules:[{required:!0,message:"\u8BF7\u8F93\u5165${title}"},{pattern:/^[a-z|A-Z][a-z|A-Z\d_-]*$/,message:"\u5FC5\u987B\u4EE5\u5B57\u6BCD\u5F00\u5934\uFF0C\u53EF\u5305\u542B\u6570\u5B57\u3001\u4E0B\u5212\u7EBF\u3001\u6A2A\u6760"},{unique:!0,message:"${title}\u4E0D\u80FD\u91CD\u590D"},{handler({cellValue:e,row:o,column:u},d,_){e==="abc"?d(!1,"${title}\u4E0D\u80FD\u662Fabc"):d(!0)},message:"${title}\u9ED8\u8BA4\u63D0\u793A"}]},{title:"\u591A\u884C\u6587\u672C",key:"textarea",type:n.textarea,width:200},{title:"\u6570\u5B57",key:"number",type:n.inputNumber,width:80,defaultValue:32,statistics:["sum","average"]},{title:"\u4E0B\u62C9\u6846",key:"select",type:n.select,width:180,options:[{title:"String",value:"string"},{title:"Integer",value:"int"},{title:"Double",value:"double"},{title:"Boolean",value:"boolean"}],allowSearch:!0,placeholder:"\u8BF7\u9009\u62E9"},{title:"\u4E0B\u62C9\u6846_\u5B57\u5178",key:"select_dict",type:n.select,width:180,options:[],dictCode:"sex",placeholder:"\u8BF7\u9009\u62E9"},{title:"\u4E0B\u62C9\u6846_\u591A\u9009",key:"select_multiple",type:n.selectMultiple,width:205,options:[{title:"String",value:"string"},{title:"Integer",value:"int"},{title:"Double",value:"double"},{title:"Boolean",value:"boolean"}],defaultValue:["int","boolean"],placeholder:"\u591A\u9009"},{title:"\u4E0B\u62C9\u6846_\u641C\u7D22",key:"select_search",type:n.selectSearch,width:180,options:[{title:"String",value:"string"},{title:"Integer",value:"int"},{title:"Double",value:"double"},{title:"Boolean",value:"boolean"}]},{title:"\u65E5\u671F\u65F6\u95F4",key:"datetime",type:n.datetime,width:200,defaultValue:"2019-04-30 14:52:22",placeholder:"\u8BF7\u9009\u62E9"},{title:"\u65F6\u95F4",key:"time",type:n.time,width:200,defaultValue:"14:52:22",placeholder:"\u8BF7\u9009\u62E9"},{title:"\u590D\u9009\u6846",key:"checkbox",type:n.checkbox,width:100,customValue:["Y","N"],defaultChecked:!1},{title:"\u64CD\u4F5C",key:"action",type:n.slot,fixed:"right",minWidth:100,align:"center",slotName:"myAction"}]),b=D([]);function p(e,o,u=!1){u&&(f.value=!0);let d=()=>{let m=r(1e3,9999999999999);return ee(new Date(m)).format("YYYY-MM-DD HH:mm:ss")},_=(e-1)*o,v=["string","int","double","boolean"],w=Date.now(),F=[];for(let m=0;m<o;m++)F.push({id:W(),noEdit:`noEdit-${_+m+1}`,input:`text-${_+m+1}`,textarea:`textarea-${_+m+1}`,number:r(0,233),select:v[r(0,3)],select_dict:r(1,2).toString(),select_multiple:(()=>{let L=r(1,4),T=[];for(let S=0;S<L;S++)K(T,v[r(0,3)]);return T.join(",")})(),select_search:v[r(0,3)],datetime:d(),checkbox:["Y","N"][r(0,1)]});b.value=F;let x=Date.now()-w;u&&x<o&&setTimeout(()=>f.value=!1,o-x)}p(0,20,!0);function s(e){i.success("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA"),console.log("\u67E5\u770B: ",{props:e})}function h(e){return y(this,null,function*(){var u;const o=yield(u=l.value)==null?void 0:u.removeRows(e.row);o&&o.rows.length>0&&i.success("\u5220\u9664\u6210\u529F")})}function V(){l.value.validateTable().then(e=>{e?(console.log("\u8868\u5355\u9A8C\u8BC1\u672A\u901A\u8FC7\uFF1A",{errMap:e}),i.error("\u9A8C\u8BC1\u672A\u901A\u8FC7\uFF0C\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\u8BE6\u7EC6")):i.success("\u9A8C\u8BC1\u901A\u8FC7")})}function R(){const e=l.value.getTableData();console.log("\u83B7\u53D6\u503C:",{values:e}),i.success("\u83B7\u53D6\u503C\u6210\u529F\uFF0C\u8BF7\u770B\u63A7\u5236\u53F0\u8F93\u51FA")}function $(){p(1,1e3,!0)}function N(){const o=l.value.getXTable().getTableData().fullData[0];l.value.removeRows(o)}function I(){l.value.getXTable().removeCheckboxRow()}function j(){i.info("\u8BF7\u770B\u63A7\u5236\u53F0"),console.log(l.value.getSelectionData())}function Y(){l.value.clearSelection()}function J(){f.value=!f.value}function M(){C.value=!C.value}function H(e){return new Promise(o=>{let u=e.map(d=>d.id);console.log("\u5220\u9664 rowId: ",u),setTimeout(()=>o(!0),1500)})}function P(e){return y(this,null,function*(){const o=i.loading("\u5220\u9664\u4E2D\u2026",0);try{(yield H(e.deleteRows))?(yield l.value.removeSelection(),i.success("\u5220\u9664\u6210\u529F\uFF01")):i.warn("\u5220\u9664\u5931\u8D25\uFF01")}finally{o()}})}return(e,o)=>{const u=B("a-button"),d=B("a-space"),_=B("a-tooltip"),v=B("a-divider"),w=B("JVxeTable");return U(),Z(z,null,[a(d,null,{default:t(()=>[a(u,{onClick:J},{default:t(()=>[ue]),_:1}),a(u,{onClick:M},{default:t(()=>[te]),_:1})]),_:1}),a(w,{ref_key:"tableRef",ref:l,stripe:"",toolbar:"",rowNumber:"",rowSelection:"",rowExpand:"",resizable:"",asyncRemove:"",clickSelectRow:"",maxHeight:480,checkboxConfig:{range:!0},disabledRows:{input:["text--16","text--18"]},loading:f.value,disabled:C.value,columns:E.value,dataSource:b.value,onRemove:P},{toolbarSuffix:t(()=>[a(u,{onClick:V},{default:t(()=>[le]),_:1}),a(_,{placement:"top",title:"\u83B7\u53D6\u503C\uFF0C\u5FFD\u7565\u8868\u5355\u9A8C\u8BC1",autoAdjustOverflow:!0},{default:t(()=>[a(u,{onClick:R},{default:t(()=>[oe]),_:1})]),_:1}),a(_,{placement:"top",title:"\u6A21\u62DF\u52A0\u8F7D1000\u6761\u6570\u636E",autoAdjustOverflow:!0},{default:t(()=>[a(u,{onClick:$},{default:t(()=>[ae]),_:1})]),_:1}),a(u,{onClick:j},{default:t(()=>[ne]),_:1}),a(u,{onClick:Y},{default:t(()=>[ie]),_:1}),a(u,{onClick:N},{default:t(()=>[se]),_:1}),a(u,{onClick:I},{default:t(()=>[ce]),_:1})]),expandContent:t(F=>[g("div",de,[g("span",null,"Hello! My name is: "+q(F.row.input)+"!",1)])]),myAction:t(F=>[g("a",{onClick:k=>s(F)},"\u67E5\u770B",8,re),a(v,{type:"vertical"}),a(G(X),{title:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",onConfirm:k=>h(F)},{default:t(()=>[fe]),_:2},1032,["onConfirm"])]),_:1},8,["loading","disabled","columns","dataSource"])],64)}}});export{me as default};