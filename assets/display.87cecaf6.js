import{a as Fu,b as d,e as x,f as w,q as hu,a3 as O,F as iu,v as i,u as e,r as t,_ as ku,a4 as bu,a5 as wu,i as u,t as a,a6 as $u,x as Nu,w as b,g as zu,y as ju,T as Gu,D as Su}from"./vendor.63d3c1a4.js";import{u as pu,_ as Lu,b as su}from"./index.b407e2e5.js";import{l as Uu}from"./lunar-vendor.db745fad.js";import{u as Yu,g as Zu}from"./use-mitt.fab0f8ba.js";const Iu={class:"LiuyaoGua flex justify-around"},Mu=Fu({__name:"LiuyaoGua",props:{guaxiang:{default:()=>[6,7,8,9,8,7]}},setup($){const g=$,{zhouyi:S}=pu(),{yijing:_}=S,E=d(()=>g.guaxiang.map(F=>F%2)),A=d(()=>g.guaxiang.map(F=>F===6?9:F===9?6:F)),B=d(()=>_.find(F=>F.\u5366\u8C61.toString()===E.value.toString())||_[0]),o=d(()=>B.value.\u4E94\u884C),v=g.guaxiang.join()===A.value.join();return console.log("\u{1F680} ~ file: LiuyaoGua.vue:18 ~ \u53D8\u5366_\u5366\u8C61.value:",A.value),console.log("\u{1F680} ~ file: LiuyaoGua.vue:18 ~ props.guaxiang:",g.guaxiang),(F,H)=>{const y=Lu;return x(),w("div",Iu,[v?(x(),hu(y,O({key:0},F.$attrs,{guaxiang:$.guaxiang,"has-liushen":"","has-shiying":"",size:32}),null,16,["guaxiang"])):(x(),w(iu,{key:1},[i(y,O(F.$attrs,{guaxiang:$.guaxiang,"has-shiying":""}),null,16,["guaxiang"]),i(y,O(F.$attrs,{guaxiang:e(A),"bagong-wuxing":e(o),"has-dongyao":!1,"has-liushen":""}),null,16,["guaxiang","bagong-wuxing"])],64))])}}}),Ru={class:"Display","py-4":"","text-left":""},Tu={"px-4":""},qu={"flex-center":""},Ou=u("span",{"whitespace-nowrap":""},"\u6447\u5366\uFF1A",-1),Hu={"flex-center":""},Ju={"ml-2":""},Ku={"px-4":"","mt-4":""},Pu={"text-size-sm":""},Xu={"color-gray-6":""},Qu={"w-full":""},Wu={"flex-justify":"","text-size-sm":"","whitespace-nowrap":"","pr-3":""},u5={"flex-justify":"","text-size-sm":"","whitespace-nowrap":"","pr-3":""},e5=Fu({__name:"display",setup($){const{zhouyi:g}=pu(),S=Su(),_=ju(),{query:E}=S,A=Uu.Lunar.fromDate(new Date),{tiangan:B,dizhi:o,wuxing:v,yijing:F,yinyuan:H,bagua:y}=g,J=t(""),K=["\u521D\u723B","\u4E8C\u723B","\u4E09\u723B","\u56DB\u723B","\u4E94\u723B","\u4E0A\u723B"],P={111:"\u5929",110:"\u6CFD",101:"\u706B",100:"\u96F7","011":"\u98CE","010":"\u6C34","001":"\u5C71","000":"\u5730"},Cu=["\u8D35\u4EBA","\u7984\u795E","\u7F8A\u5203","\u6587\u660C"],Au=["\u9A7F\u9A6C","\u6843\u82B1","\u5C06\u661F","\u52AB\u715E","\u534E\u76D6","\u8C0B\u661F","\u707E\u715E"],ru=E.id||Date.now().toString(),c=t(E.\u5366\u8C61||"678987"),L=t(E.\u5360\u95EE||"\u4ECA\u65E5\u5929\u6C14\u5982\u4F55\uFF1F"),vu=E.\u5360\u7C7B||"\u5929\u6C14",cu=E.\u5366\u4E3B||"\u81EA\u5DF1",N=d(()=>F.find(s=>s.\u5366\u8C61.toString()===c.value.split("").map(l=>Number(l)%2).toString())||F[0]),z=t(c.value.split("").map(Number)),X=E.\u5E74\u5EFA||A.getYearZhi(),j=E.\u6708\u5EFA||A.getMonthZhi(),V=E.\u65E5\u5EFA||A.getDayInGanZhi(),Q=E.\u65F6\u5EFA||A.getTimeInGanZhi(),W=E.\u65EC\u7A7A||A.getDayXunKong(),G=j.slice(-1),r=V.slice(-1),h=V.slice(0,1),du=o[r].\u9A7F\u9A6C,mu=o[r].\u6843\u82B1,Du=B[h].\u7984\u795E,gu=B[h].\u8D35\u4EBA,Bu=t(""),yu=t(""),fu=t(""),uu=t(""),eu=t(""),lu=t(""),au=t(""),C=t(E.\u7528\u795E||""),U=t(E.\u5409\u51F6||""),Y=t(E.\u5E94\u671F||""),Z=t(E.\u7EC6\u8282||""),I=t(E.\u542F\u793A||""),m=t(0),M=t(""),R=t(""),T=t(""),nu=d(()=>c.value.slice(3).split("").map(s=>Number(s)%2).join("")),tu=d(()=>c.value.slice(0,3).split("").map(s=>Number(s)%2).join("")),xu=d(()=>m.value<3?y[tu.value]:y[nu.value]),Eu=s=>{if(!s)return;const l=s.slice(-1),p=s.slice(-2,-1),q=Cu.find(k=>B[h][k]===p)||"",f=Au.find(k=>o[r][k]===p)||"";C.value=s,Bu.value=v[l].\u5143\u795E,yu.value=v[l].\u5FCC\u795E,fu.value=v[l].\u751F+v[l].\u65FA+v[l].\u5893+v[l].\u7EDD,uu.value=o[p].\u516D\u51B2,eu.value=o[p].\u516D\u5408,lu.value=o[p].\u4E09\u5408,au.value=o[p].\u4E09\u5211,m.value=N.value.\u7EB3\u7532.indexOf(s),M.value=B[h].\u516D\u795E[m.value],T.value=[q,f].filter(Boolean).join("\u3001")||"--",R.value=H[l][r]},_u=s=>{Eu(C.value||s)},ou=()=>{Zu.add({id:ru,\u5360\u95EE:L.value,\u5360\u7C7B:vu,\u5366\u4E3B:cu,\u5366\u8C61:c.value,\u5E74\u5EFA:X,\u6708\u5EFA:j,\u65E5\u5EFA:V,\u65F6\u5EFA:Q,\u65EC\u7A7A:W,\u7528\u795E:C.value,\u5409\u51F6:U.value,\u5E94\u671F:Y.value,\u7EC6\u8282:Z.value,\u542F\u793A:I.value}).then(()=>{Gu("\u4FDD\u5B58\u6210\u529F")})},D=s=>{_.push({path:"/detail",query:s})},Vu=()=>{z.value=c.value.split("").map(Number)};return Yu(ou),(s,l)=>{const p=ku,q=Mu,f=bu,k=wu;return x(),w("div",Ru,[u("header",Tu,[u("p",qu,[Ou,i(p,{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=n=>c.value=n),class:"!p-0",placeholder:"\u8BF7\u8F93\u5165\u5366\u8C61",onChange:Vu},null,8,["modelValue"])]),u("p",Hu,[u("span",{"whitespace-nowrap":"",onClick:ou},"\u5360\u95EE\uFF1A"),i(p,{modelValue:L.value,"onUpdate:modelValue":l[1]||(l[1]=n=>L.value=n),class:"!p-0",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},null,8,["modelValue"])]),u("p",null," \u65F6\u95F4\uFF1A"+a(e($u)(new Date).format("YYYY\u5E74MM\u6708DD\u65E5HH\u65F6mm\u5206")),1),u("p",{onClick:l[2]||(l[2]=n=>e(_).push("/thoery"))},[Nu(" \u5E72\u652F\uFF1A"+a(e(X))+"\u5E74 "+a(e(j))+"\u6708 "+a(e(V))+"\u65E5 "+a(e(Q))+"\u65F6 ",1),u("span",Ju,"("+a(e(W))+")",1)]),u("p",null," \u795E\u715E\uFF1A\u9A7F\u9A6C-"+a(e(du))+"\xA0\xA0\u6843\u82B1-"+a(e(mu))+"\xA0\xA0\u7984\u795E-"+a(e(Du))+"\xA0\xA0\u8D35\u4EBA-"+a(e(gu)),1)]),u("section",Ku,[i(q,{size:24,gan:e(h),zhi:e(r),yongshen:C.value,guaxiang:z.value,onOnChange:Eu,onOnReady:_u},null,8,["gan","zhi","yongshen","guaxiang"])]),i(k,{modelValue:J.value,"onUpdate:modelValue":l[14]||(l[14]=n=>J.value=n),accordion:"",border:!1,"mt-4":""},{default:b(()=>[i(f,{title:"\u5366\u8C61",name:"\u5366\u8C61",border:!1},{default:b(()=>[u("section",Pu,[u("h3",Xu,a(e(N).\u5366\u8F9E),1),u("ul",Qu,[(x(!0),w(iu,null,zu(e(N).\u723B\u8F9E,n=>(x(),w("li",{key:n},[u("p",null,a(n),1)]))),128))])])]),_:1}),i(f,{title:"\u5409\u51F6",name:"\u5409\u51F6",border:!1},{default:b(()=>[u("section",Wu,[u("div",null,[u("p",null,"\u6708\u5EFA\uFF1A"+a(e(j)),1),u("p",null,"\u516D\u51B2\uFF1A"+a(e(o)[e(G)].\u516D\u51B2),1),u("p",null,"\u516D\u5408\uFF1A"+a(e(o)[e(G)].\u516D\u5408),1),u("p",null,"\u4E09\u5211\uFF1A"+a(e(o)[e(G)].\u4E09\u5211),1),u("p",null,"\u4E09\u5408\uFF1A"+a(e(o)[e(G)].\u4E09\u5408),1)]),u("div",null,[u("p",null,"\u65E5\u5EFA\uFF1A"+a(e(V).slice(-1)),1),u("p",null,"\u516D\u51B2\uFF1A"+a(e(o)[e(r)].\u516D\u51B2),1),u("p",null,"\u516D\u5408\uFF1A"+a(e(o)[e(r)].\u516D\u5408),1),u("p",null,"\u4E09\u5211\uFF1A"+a(e(o)[e(r)].\u4E09\u5211),1),u("p",null,"\u4E09\u5408\uFF1A"+a(e(o)[e(r)].\u4E09\u5408),1)]),u("div",null,[u("p",null,"\u7528\u795E\uFF1A"+a(C.value),1),u("p",null,"\u516D\u51B2\uFF1A"+a(uu.value),1),u("p",null,"\u516D\u5408\uFF1A"+a(eu.value),1),u("p",null,"\u4E09\u5211\uFF1A"+a(au.value),1),u("p",null,"\u4E09\u5408\uFF1A"+a(lu.value),1)])])]),_:1}),i(f,{title:"\u7EC6\u8282",name:"\u7EC6\u8282",border:!1},{default:b(()=>[u("section",u5,[u("div",null,[u("p",null,"\u5366\u540D\uFF1A"+a(e(N).\u5366\u540D),1),u("p",null,"\u5366\u8C61\uFF1A"+a(e(P)[e(nu)]+e(P)[e(tu)]),1),u("p",null,"\u516B\u5366\uFF1A"+a(e(xu)),1),u("p",{onClick:l[3]||(l[3]=n=>D({typeName:"\u723B\u4F4D",key:`${K[m.value]}`}))}," \u723B\u4F4D\uFF1A"+a(K[m.value]),1)]),u("div",null,[u("p",null,"\u9634\u9633\uFF1A"+a(z.value[m.value]%2===0?"\u9634\u723B":"\u9633\u723B"),1),u("p",null,"\u52A8\u9759\uFF1A"+a(z.value[m.value]%3===0?"\u52A8\u723B":"\u9759\u723B"),1),u("p",{onClick:l[4]||(l[4]=n=>D({typeName:"\u795E\u715E",key:`${T.value}`}))}," \u795E\u715E\uFF1A"+a(T.value),1),u("p",{onClick:l[5]||(l[5]=n=>D({typeName:"\u56E0\u7F18",key:`${R.value}`}))}," \u56E0\u7F18\uFF1A"+a(R.value),1)]),u("div",null,[u("p",{onClick:l[6]||(l[6]=n=>D({typeName:"\u5730\u652F",key:`${C.value[2]}`}))}," \u5730\u652F\uFF1A"+a(C.value[2]),1),u("p",{onClick:l[7]||(l[7]=n=>D({typeName:"\u4E94\u884C",key:`${C.value[3]}`}))}," \u4E94\u884C\uFF1A"+a(C.value[3]),1),u("p",{onClick:l[8]||(l[8]=n=>D({typeName:"\u516D\u4EB2",key:`${C.value.slice(0,2)}`}))}," \u516D\u4EB2\uFF1A"+a(C.value.slice(0,2)),1),u("p",{onClick:l[9]||(l[9]=n=>D({typeName:"\u516D\u795E",key:`${M.value}`}))}," \u516D\u795E\uFF1A"+a(M.value),1)])])]),_:1}),i(f,{title:"\u6279\u6CE8",name:"\u6279\u6CE8",border:!1},{default:b(()=>[i(p,{modelValue:U.value,"onUpdate:modelValue":l[10]||(l[10]=n=>U.value=n),label:"\u5409\u51F6",rows:"1",autosize:"",type:"textarea"},null,8,["modelValue"]),i(p,{modelValue:Y.value,"onUpdate:modelValue":l[11]||(l[11]=n=>Y.value=n),"mt-2":"",label:"\u5E94\u671F",rows:"1",autosize:"",type:"textarea"},null,8,["modelValue"]),i(p,{modelValue:Z.value,"onUpdate:modelValue":l[12]||(l[12]=n=>Z.value=n),"mt-2":"",label:"\u7EC6\u8282",rows:"1",autosize:"",type:"textarea"},null,8,["modelValue"]),i(p,{modelValue:I.value,"onUpdate:modelValue":l[13]||(l[13]=n=>I.value=n),"mt-2":"",label:"\u542F\u793A",rows:"1",autosize:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])])}}});typeof su=="function"&&su(e5);export{e5 as default};
