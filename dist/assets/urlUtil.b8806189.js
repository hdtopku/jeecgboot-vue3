const e=t=>{if(t==null)return"";const n=/(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g,r=t.match(n);return r!=null?r[0]:t};export{e as extractUrl};
