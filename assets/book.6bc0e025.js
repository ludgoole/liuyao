import{Y as j,a as z,r as v,Z as R,_ as A,$ as I,a0 as J,a1 as M,a2 as O,o as a,e as d,v as l,w as r,h as B,F as V,f as b,q as D,x as U,t as Y,u as H,g as K,T as S,B as P,y as Q}from"./vendor.0b6f4345.js";import{u as W,b as x}from"./index.9ca66d58.js";import{u as X,g as m}from"./use-mitt.9eb5fa60.js";import"./lunar-vendor.db745fad.js";function uu(h,g){j(JSON.stringify(h),g)}const eu={class:"Book"},ou={"bg-white":"","py-2":"","px-4":"","flex-center":"",justify:"around"},tu={"mt-4":""},nu=z({__name:"book",setup(h){const{zhouyi:g}=W(),q=Q(),{yijing:E}=g,w=["\u5360\u95EE","\u5360\u7C7B","\u5366\u8C61","\u7528\u795E","\u7EC6\u8282","\u542F\u793A","\u6536\u85CF"],s=v([]),p=v("\u5360\u95EE"),C=v(""),N=o=>{const t=o.split("").map(u=>Number(u)),i=t.map(u=>u===6?9:u===9?6:u),f=t.map(u=>u%2).toString(),y=i.map(u=>u%2).toString(),n=E.find(u=>u.\u5366\u8C61.toString()===f),c=E.find(u=>u.\u5366\u8C61.toString()===y);return`${n==null?void 0:n.\u5366\u540D}\u4E4B${c==null?void 0:c.\u5366\u540D}`},_=()=>{console.log("\u{1F680} ~ file: book.vue:53 ~ onLoad ~ onLoad:"),m.get().then(o=>{s.value=o})},G=()=>{console.log("\u{1F680} ~ file: book.vue:59 ~ queryGua ~ queryGua:",p.value,C.value),m.query(p.value,C.value).then(o=>{s.value=o})},Z=(o,t)=>{console.log("\u{1F680} ~ file: book.vue:56 ~ getZhigua ~ i:",t);const{\u6536\u85CF:i}=o;m.update({...o,\u6536\u85CF:i==="1"?"0":"1"}).then(()=>{S("\u6536\u85CF\u6210\u529F"),_()})},$=(o,t)=>{console.log("\u{1F680} ~ file: book.vue:56 ~ getZhigua ~ i:",t),m.remove(o.id).then(()=>{S("\u5220\u9664\u6210\u529F"),_()})},T=(o,t)=>{console.log("\u{1F680} ~ file: book.vue:56 ~ getZhigua ~ i:",t),q.push({path:"/display",query:{...o}})};return X(()=>{uu(s.value,"guali.json")}),_(),(o,t)=>{const i=R,f=A,y=I,n=P,c=J,u=M,L=O;return a(),d("div",eu,[l(y,{"offset-top":0},{default:r(()=>[B("div",ou,[(a(!0),d(V,null,b(H(w),e=>(a(),D(i,{key:e,type:p.value===e?"primary":"default",size:"large",onClick:()=>p.value=e},{default:r(()=>[U(Y(e),1)]),_:2},1032,["type","onClick"]))),128))]),l(f,{modelValue:C.value,"onUpdate:modelValue":t[0]||(t[0]=e=>C.value=e),label:"",placeholder:"\u8BF7\u8F93\u5165","right-icon":"search",onClickRightIcon:G},null,8,["modelValue"])]),_:1}),B("ul",tu,[(a(!0),d(V,null,b(s.value,(e,k)=>(a(),d("li",{key:e.\u5360\u95EE},[l(u,null,{left:r(()=>[l(n,{square:"",type:"primary",icon:e.\u6536\u85CF==="1"?"star":"star-o",text:e.\u6536\u85CF==="1"?"\u53D6\u6D88":"\u6536\u85CF",onClick:F=>Z(e,k)},null,8,["icon","text","onClick"])]),right:r(()=>[l(n,{square:"",type:"danger",text:"\u5220\u9664",onClick:F=>$(e,k)},null,8,["onClick"])]),default:r(()=>[l(c,{title:e.\u5360\u95EE,value:N(e.\u5366\u8C61),onClick:F=>T(e,k)},null,8,["title","value","onClick"])]),_:2},1024)]))),128))]),s.value.length===0?(a(),D(L,{key:0,description:"\u6682\u65E0\u6570\u636E"})):K("",!0)])}}});typeof x=="function"&&x(nu);export{nu as default};
