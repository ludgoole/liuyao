import{a as g,r as m,Y as x,a6 as D,a7 as y,e as C,f as b,i as u,t as h,v as e,w as a,x as v,a1 as w,a8 as i,B as F,y as k}from"./vendor.c1b05d7a.js";import{b as d}from"./index.1a853868.js";import"./lunar-vendor.db745fad.js";const A={class:"Login","text-center":""},E=u("div",{class:"logo","mt-32":""},[u("i",{"text-6xl":"",class:"i-codicon:color-mode"})],-1),I={style:{margin:"16px"}},N=v(" \u63D0\u4EA4 "),q=g({__name:"login",setup(G){const c=k(),p="\u6613\u65AD\u5929\u673A",n=m(""),l=m(""),_=o=>{if(o.password!=="123456")return w({message:"\u7528\u6237\u540D\u6216\u5BC6\u7801\u4E0D\u6B63\u786E"});c.push("/"),i.setItem("Authorization","token"),i.setItem("userInfo",{...o,role:o.username==="admin"?"ADMIN":""})};return(o,t)=>{const r=x,f=D,B=F,V=y;return C(),b("div",A,[E,u("h1",{class:"title","mt-4":""},h(p)),e(V,{"mt-8":"",onSubmit:_},{default:a(()=>[e(f,{inset:""},{default:a(()=>[e(r,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=s=>n.value=s),name:"username",label:"\u7528\u6237\u540D",placeholder:"\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u7528\u6237\u540D"}]},null,8,["modelValue"]),e(r,{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=s=>l.value=s),type:"password",name:"password",label:"\u5BC6\u7801",placeholder:"\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u5BC6\u7801"}]},null,8,["modelValue"])]),_:1}),u("div",I,[e(B,{round:"",block:"",type:"primary","native-type":"submit"},{default:a(()=>[N]),_:1})])]),_:1})])}}});typeof d=="function"&&d(q);export{q as default};