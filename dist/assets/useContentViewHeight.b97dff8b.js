var H=(n,i,e)=>new Promise((a,o)=>{var f=t=>{try{u(e.next(t))}catch(g){o(g)}},m=t=>{try{u(e.throw(t))}catch(g){o(g)}},u=t=>t.done?a(t.value):Promise.resolve(t.value).then(f,m);u((e=e.apply(n,i)).next())});import{createPageContext as w}from"./usePageContext.2dbf8e50.js";import{useWindowSizeFn as d}from"./useWindowSizeFn.ab02708a.js";import{F as r,o as p,L as s}from"./index.b3d2a891.js";const c=r(0),h=r(0);function y(){function n(e){c.value=e}function i(e){h.value=e}return{headerHeightRef:c,footerHeightRef:h,setHeaderHeight:n,setFooterHeight:i}}function C(){const n=r(window.innerHeight),i=r(window.innerHeight),e=p(()=>s(n)-s(c)-s(h)||0);d(()=>{n.value=window.innerHeight},100,{immediate:!0});function a(o){return H(this,null,function*(){i.value=o})}w({contentHeight:e,setPageHeight:a,pageHeight:i})}export{C as a,y as u};
