import{u as d}from"./JAddInput.43004d14.js";class u{constructor(t){t||(t=d);let e=[];const r=t[86];Object.keys(r).map(i=>{e.push({id:i,text:r[i],pid:"86",index:1});const f=t[i];Object.keys(f).map(n=>{e.push({id:n,text:f[n],pid:i,index:2});const l=t[n];l&&Object.keys(l).map(o=>{e.push({id:o,text:l[o],pid:n,index:3})})})}),this.all=e}get pca(){return this.all}getCode(t){if(!t||t.length==0)return"";for(let e of this.all)if(e.text===t)return e.id}getText(t){if(!t||t.length==0)return"";let e=[];return this.getAreaBycode(t,e,3),e.join("/")}getRealCode(t){let e=[];return this.getPcode(t,e,3),e}getPcode(t,e,r){for(let i of this.all)i.id===t&&i.index==r&&(e.unshift(t),i.pid!="86"&&this.getPcode(i.pid,e,--r))}getAreaBycode(t,e,r){for(let i of this.all)i.id===t&&i.index==r&&(e.unshift(i.text),i.pid!="86"&&this.getAreaBycode(i.pid,e,--r))}}const a=new u,h=function(s){return s&&s.includes(",")&&(s=s.substr(s.lastIndexOf(",")+1)),a.getText(s)};export{h as g};
