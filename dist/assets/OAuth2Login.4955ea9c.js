import{j as h,C as i,eO as r,e5 as v,b5 as k,ev as A,eP as c,cM as m,o as y,s as _,t as B,u as L}from"./index.b3c2d15d.js";const O=h({__name:"OAuth2Login",setup(E){const l=i(r()),e=i({thirdApp:!1,wxWork:!1,dingtalk:!1}),{currentRoute:g}=v(),s=g.value;r()||k.replace({path:A.BASE_LOGIN,query:s.query}),l.value&&p();function p(){/wxwork/i.test(navigator.userAgent)&&(e.value.thirdApp=!0,e.value.wxWork=!0),/dingtalk/i.test(navigator.userAgent)&&(e.value.thirdApp=!0,e.value.dingtalk=!0),f()}function f(){if(e.value.thirdApp)if(s.query.oauth2LoginToken){let u=s.query.oauth2LoginToken;d({token:u,thirdType:s.query.thirdType})}else e.value.wxWork?c("wechat_enterprise"):e.value.dingtalk&&c("dingtalk")}function d(u){const n=m(),{notification:o}=L(),{t:a}=y();n.ThirdLogin(u).then(t=>{t&&t.userInfo?o.success({message:a("sys.login.loginSuccessTitle"),description:`${a("sys.login.loginSuccessDesc")}: ${t.userInfo.realname}`,duration:3}):o.error({message:"\u767B\u5F55\u5931\u8D25",description:((t.response||{}).data||{}).message||t.message||"\u8BF7\u6C42\u51FA\u73B0\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5",duration:4})})}return(u,n)=>(_(),B("div"))}});export{O as default};