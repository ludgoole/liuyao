import{a as Eu,b as d,e as x,f as w,q as Vu,a3 as O,F as ou,v as i,u as e,r as t,_ as hu,a4 as ku,a5 as bu,i as u,t as a,a6 as wu,x as $u,w as b,g as Nu,y as zu,T as ju,D as Gu}from"./vendor.09165d10.js";import{u as su,_ as Su,b as tu}from"./index.18af5d62.js";import{l as Lu}from"./lunar-vendor.db745fad.js";import{u as Uu,g as Yu}from"./use-mitt.99697232.js";const Zu={class:"LiuyaoGua flex justify-around"},Iu=Eu({__name:"LiuyaoGua",props:{guaxiang:{default:()=>[6,7,8,9,8,7]}},setup($){const g=$,{zhouyi:S}=su(),{yijing:_}=S,E=d(()=>g.guaxiang.map(s=>s%2)),r=d(()=>g.guaxiang.map(s=>s===6?9:s===9?6:s)),B=d(()=>_.find(s=>s.\u5366\u8C61.toString()===E.value.toString())||_[0]),o=d(()=>B.value.\u4E94\u884C),v=g.guaxiang.join()===r.value.join();return console.log("\u{1F680} ~ file: LiuyaoGua.vue:18 ~ \u53D8\u5366_\u5366\u8C61.value:",r.value),console.log("\u{1F680} ~ file: LiuyaoGua.vue:18 ~ props.guaxiang:",g.guaxiang),(s,R)=>{const y=Su;return x(),w("div",Zu,[v?(x(),Vu(y,O({key:0},s.$attrs,{guaxiang:$.guaxiang,"has-liushen":"","has-shiying":"",size:32}),null,16,["guaxiang"])):(x(),w(ou,{key:1},[i(y,O(s.$attrs,{guaxiang:$.guaxiang,"has-shiying":""}),null,16,["guaxiang"]),i(y,O(s.$attrs,{guaxiang:e(r),"bagong-wuxing":e(o),"has-dongyao":!1,"has-liushen":""}),null,16,["guaxiang","bagong-wuxing"])],64))])}}}),Mu={class:"Display","py-4":"","text-left":""},Tu={"px-4":""},qu={"flex-center":""},Hu=u("span",{"whitespace-nowrap":""},"\u6447\u5366\uFF1A",-1),Ou={"flex-center":""},Ru={"ml-2":""},Ju={"px-4":"","mt-4":""},Ku={"text-size-sm":""},Pu={"color-gray-6":""},Xu={"w-full":""},Qu={"flex-justify":"","text-size-sm":"","whitespace-nowrap":"","pr-3":""},Wu={"flex-justify":"","text-size-sm":"","whitespace-nowrap":"","pr-3":""},u5=Eu({__name:"display",setup($){const{zhouyi:g}=su(),S=Gu(),_=zu(),{query:E}=S,r=Lu.Lunar.fromDate(new Date),{tiangan:B,dizhi:o,wuxing:v,yijing:s,yinyuan:R,bagua:y}=g,J=t(""),K=["\u521D\u723B","\u4E8C\u723B","\u4E09\u723B","\u56DB\u723B","\u4E94\u723B","\u4E0A\u723B"],P={111:"\u5929",110:"\u6CFD",101:"\u706B",100:"\u96F7","011":"\u98CE","010":"\u6C34","001":"\u5C71","000":"\u5730"},Fu=["\u8D35\u4EBA","\u7984\u795E","\u7F8A\u5203","\u6587\u660C"],iu=["\u9A7F\u9A6C","\u6843\u82B1","\u5C06\u661F","\u52AB\u715E","\u534E\u76D6","\u8C0B\u661F","\u707E\u715E"],pu=E.id||Date.now().toString(),c=t(E.\u5366\u8C61||"678987"),L=t(E.\u5360\u95EE||"\u4ECA\u65E5\u5929\u6C14\u5982\u4F55\uFF1F"),Cu=E.\u5360\u7C7B||"\u5929\u6C14",ru=E.\u5366\u4E3B||"\u81EA\u5DF1",N=d(()=>s.find(F=>F.\u5366\u8C61.toString()===c.value.split("").map(l=>Number(l)%2).toString())||s[0]),z=t(c.value.split("").map(Number)),Au=E.\u5E74\u5EFA||r.getYearZhi(),j=E.\u6708\u5EFA||r.getMonthZhi(),V=E.\u65E5\u5EFA||r.getDayInGanZhi(),vu=E.\u65F6\u5EFA||r.getTimeInGanZhi(),X=E.\u65EC\u7A7A||r.getDayXunKong(),G=j,A=V.slice(-1),h=V.slice(0,1),cu=o[A].\u9A7F\u9A6C,du=o[A].\u6843\u82B1,mu=B[h].\u7984\u795E,Du=B[h].\u8D35\u4EBA,gu=t(""),Bu=t(""),yu=t(""),Q=t(""),W=t(""),uu=t(""),eu=t(""),C=t(E.\u7528\u795E||""),U=t(E.\u5409\u51F6||""),Y=t(E.\u5E94\u671F||""),Z=t(E.\u7EC6\u8282||""),I=t(E.\u542F\u793A||""),m=t(0),M=t(""),T=t(""),q=t(""),lu=d(()=>c.value.slice(3).split("").map(F=>Number(F)%2).join("")),au=d(()=>c.value.slice(0,3).split("").map(F=>Number(F)%2).join("")),fu=d(()=>m.value<3?y[au.value]:y[lu.value]),xu=F=>{if(!F)return;const l=F.slice(-1),p=F.slice(-2,-1),H=Fu.find(k=>B[h][k]===p)||"",f=iu.find(k=>o[A][k]===p)||"";C.value=F,gu.value=v[l].\u5143\u795E,Bu.value=v[l].\u5FCC\u795E,yu.value=v[l].\u751F+v[l].\u65FA+v[l].\u5893+v[l].\u7EDD,Q.value=o[p].\u516D\u51B2,W.value=o[p].\u516D\u5408,uu.value=o[p].\u4E09\u5408,eu.value=o[p].\u4E09\u5211,m.value=N.value.\u7EB3\u7532.indexOf(F),M.value=B[h].\u516D\u795E[m.value],q.value=[H,f].filter(Boolean).join("\u3001")||"--",T.value=R[l][A]},nu=()=>{Yu.add({id:pu,\u5360\u95EE:L.value,\u5360\u7C7B:Cu,\u5366\u4E3B:ru,\u5366\u8C61:c.value,\u6708\u5EFA:j,\u65E5\u5EFA:V,\u65EC\u7A7A:X,\u7528\u795E:C.value,\u5409\u51F6:U.value,\u5E94\u671F:Y.value,\u7EC6\u8282:Z.value,\u542F\u793A:I.value}).then(()=>{ju("\u4FDD\u5B58\u6210\u529F")})},D=F=>{_.push({path:"/detail",query:F})},_u=()=>{z.value=c.value.split("").map(Number)};return Uu(nu),(F,l)=>{const p=hu,H=Iu,f=ku,k=bu;return x(),w("div",Mu,[u("header",Tu,[u("p",qu,[Hu,i(p,{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=n=>c.value=n),class:"!p-0",placeholder:"\u8BF7\u8F93\u5165\u5366\u8C61",onChange:_u},null,8,["modelValue"])]),u("p",Ou,[u("span",{"whitespace-nowrap":"",onClick:nu},"\u5360\u95EE\uFF1A"),i(p,{modelValue:L.value,"onUpdate:modelValue":l[1]||(l[1]=n=>L.value=n),class:"!p-0",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},null,8,["modelValue"])]),u("p",null," \u65F6\u95F4\uFF1A"+a(e(wu)(new Date).format("YYYY\u5E74MM\u6708DD\u65E5HH\u65F6mm\u5206")),1),u("p",{onClick:l[2]||(l[2]=n=>e(_).push("/thoery"))},[$u(" \u5E72\u652F\uFF1A"+a(e(Au))+"\u5E74 "+a(e(j))+"\u6708 "+a(e(V))+"\u65E5 "+a(e(vu))+"\u65F6 ",1),u("span",Ru,"("+a(e(X))+")",1)]),u("p",null," \u795E\u715E\uFF1A\u9A7F\u9A6C-"+a(e(cu))+"\xA0\xA0\u6843\u82B1-"+a(e(du))+"\xA0\xA0\u7984\u795E-"+a(e(mu))+"\xA0\xA0\u8D35\u4EBA-"+a(e(Du)),1)]),u("section",Ju,[i(H,{size:24,gan:e(h),zhi:e(A),yongshen:C.value,guaxiang:z.value,onOnChange:xu},null,8,["gan","zhi","yongshen","guaxiang"])]),i(k,{modelValue:J.value,"onUpdate:modelValue":l[14]||(l[14]=n=>J.value=n),accordion:"",border:!1,"mt-4":""},{default:b(()=>[i(f,{title:"\u5366\u8C61",name:"\u5366\u8C61",border:!1},{default:b(()=>[u("section",Ku,[u("h3",Pu,a(e(N).\u5366\u8F9E),1),u("ul",Xu,[(x(!0),w(ou,null,Nu(e(N).\u723B\u8F9E,n=>(x(),w("li",{key:n},[u("p",null,a(n),1)]))),128))])])]),_:1}),i(f,{title:"\u5409\u51F6",name:"\u5409\u51F6",border:!1},{default:b(()=>[u("section",Qu,[u("div",null,[u("p",null,"\u6708\u5EFA\uFF1A"+a(e(j)),1),u("p",null,"\u516D\u51B2\uFF1A"+a(e(o)[e(G)].\u516D\u51B2),1),u("p",null,"\u516D\u5408\uFF1A"+a(e(o)[e(G)].\u516D\u5408),1),u("p",null,"\u4E09\u5211\uFF1A"+a(e(o)[e(G)].\u4E09\u5211),1),u("p",null,"\u4E09\u5408\uFF1A"+a(e(o)[e(G)].\u4E09\u5408),1)]),u("div",null,[u("p",null,"\u65E5\u5EFA\uFF1A"+a(e(V).slice(-1)),1),u("p",null,"\u516D\u51B2\uFF1A"+a(e(o)[e(A)].\u516D\u51B2),1),u("p",null,"\u516D\u5408\uFF1A"+a(e(o)[e(A)].\u516D\u5408),1),u("p",null,"\u4E09\u5211\uFF1A"+a(e(o)[e(A)].\u4E09\u5211),1),u("p",null,"\u4E09\u5408\uFF1A"+a(e(o)[e(A)].\u4E09\u5408),1)]),u("div",null,[u("p",null,"\u7528\u795E\uFF1A"+a(C.value),1),u("p",null,"\u516D\u51B2\uFF1A"+a(Q.value),1),u("p",null,"\u516D\u5408\uFF1A"+a(W.value),1),u("p",null,"\u4E09\u5211\uFF1A"+a(eu.value),1),u("p",null,"\u4E09\u5408\uFF1A"+a(uu.value),1)])])]),_:1}),i(f,{title:"\u7EC6\u8282",name:"\u7EC6\u8282",border:!1},{default:b(()=>[u("section",Wu,[u("div",null,[u("p",null,"\u5366\u540D\uFF1A"+a(e(N).\u5366\u540D),1),u("p",null,"\u5366\u8C61\uFF1A"+a(e(P)[e(lu)]+e(P)[e(au)]),1),u("p",null,"\u516B\u5366\uFF1A"+a(e(fu)),1),u("p",{onClick:l[3]||(l[3]=n=>D({typeName:"\u723B\u4F4D",key:`${K[m.value]}`}))}," \u723B\u4F4D\uFF1A"+a(K[m.value]),1)]),u("div",null,[u("p",null,"\u9634\u9633\uFF1A"+a(z.value[m.value]%2===0?"\u9634\u723B":"\u9633\u723B"),1),u("p",null,"\u52A8\u9759\uFF1A"+a(z.value[m.value]%3===0?"\u52A8\u723B":"\u9759\u723B"),1),u("p",{onClick:l[4]||(l[4]=n=>D({typeName:"\u795E\u715E",key:`${q.value}`}))}," \u795E\u715E\uFF1A"+a(q.value),1),u("p",{onClick:l[5]||(l[5]=n=>D({typeName:"\u56E0\u7F18",key:`${T.value}`}))}," \u56E0\u7F18\uFF1A"+a(T.value),1)]),u("div",null,[u("p",{onClick:l[6]||(l[6]=n=>D({typeName:"\u5730\u652F",key:`${C.value[2]}`}))}," \u5730\u652F\uFF1A"+a(C.value[2]),1),u("p",{onClick:l[7]||(l[7]=n=>D({typeName:"\u4E94\u884C",key:`${C.value[3]}`}))}," \u4E94\u884C\uFF1A"+a(C.value[3]),1),u("p",{onClick:l[8]||(l[8]=n=>D({typeName:"\u516D\u4EB2",key:`${C.value.slice(0,2)}`}))}," \u516D\u4EB2\uFF1A"+a(C.value.slice(0,2)),1),u("p",{onClick:l[9]||(l[9]=n=>D({typeName:"\u516D\u795E",key:`${M.value}`}))}," \u516D\u795E\uFF1A"+a(M.value),1)])])]),_:1}),i(f,{title:"\u6279\u6CE8",name:"\u6279\u6CE8",border:!1},{default:b(()=>[i(p,{modelValue:U.value,"onUpdate:modelValue":l[10]||(l[10]=n=>U.value=n),label:"\u5409\u51F6",rows:"1",autosize:"",type:"textarea"},null,8,["modelValue"]),i(p,{modelValue:Y.value,"onUpdate:modelValue":l[11]||(l[11]=n=>Y.value=n),"mt-2":"",label:"\u5E94\u671F",rows:"1",autosize:"",type:"textarea"},null,8,["modelValue"]),i(p,{modelValue:Z.value,"onUpdate:modelValue":l[12]||(l[12]=n=>Z.value=n),"mt-2":"",label:"\u7EC6\u8282",rows:"1",autosize:"",type:"textarea"},null,8,["modelValue"]),i(p,{modelValue:I.value,"onUpdate:modelValue":l[13]||(l[13]=n=>I.value=n),"mt-2":"",label:"\u542F\u793A",rows:"1",autosize:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])])}}});typeof tu=="function"&&tu(u5);export{u5 as default};