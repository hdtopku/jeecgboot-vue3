const n=n=>{if(null==n)return"";const t=n.match(/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g);return null!=t?t[0]:n};export{n as extractUrl};
