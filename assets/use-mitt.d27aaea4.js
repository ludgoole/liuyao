import{l as c,m as o,J as s}from"./vendor.b2a2b842.js";function m(u){return Object.keys(u).reduce((e,n,t)=>(e[10+t]=u[n],e),{})}function E(u){const e=["\u5360\u95EE","\u5360\u7C7B","\u5366\u4E3B","\u5366\u8C61","\u6708\u5EFA","\u65E5\u8FB0","\u65EC\u7A7A","\u7528\u795E","\u5409\u51F6","\u5E94\u671F","\u7EC6\u8282","\u542F\u793A"];return u.map(n=>Object.keys(n).reduce((t,r)=>(Number(r)>=10&&(t[e[Number(r)-10]]=n[r]),t),{}))}function f(u){const e=s("emitter");c(()=>{e.on("on-click-right",u)}),o(()=>{e.off("on-click-right",u)})}export{m as c,E as e,f as u};
