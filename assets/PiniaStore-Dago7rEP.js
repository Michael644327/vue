import{_ as f,n as h,s as m,r as k,o as e,c as n,b as s,i as r,v as T,F as i,d as u,u as c,j as b,m as S,t as a}from"./index-Faotc6DG.js";const V={class:"container"},y={class:"row"},F={class:"col-6"},w={class:"list2"},B=["onUpdate:modelValue","id"],P={class:"col-6"},U={class:"list3"},g={class:"item"},C={__name:"PiniaStore",setup(D){const d=h(),{finishedTodos:_}=m(d),{addTodo:p}=d,l=k(""),v=()=>{p(l.value),l.value=""};return(I,o)=>(e(),n(i,null,[o[3]||(o[3]=s("h1",null,"Pinia狀態管理",-1)),s("div",V,[s("div",y,[r(s("input",{type:"text",class:"inputbox","onUpdate:modelValue":o[0]||(o[0]=t=>l.value=t)},null,512),[[T,l.value]]),s("button",{onClick:v},"新增待辦事項"),s("div",F,[o[1]||(o[1]=s("div",null,"總清單",-1)),s("ul",w,[(e(!0),n(i,null,u(c(d).todos,t=>(e(),n("li",{class:"item",key:t.id},[r(s("input",{class:"form-check-input",type:"checkbox",value:"","onUpdate:modelValue":x=>t.isFinished=x,id:t.id},null,8,B),[[b,t.isFinished]]),S(" "+a(t.id)+". "+a(t.text),1)]))),128))])]),s("div",P,[o[2]||(o[2]=s("div",null,"已完成清單",-1)),s("ul",U,[(e(!0),n(i,null,u(c(_),t=>(e(),n("li",g,a(t.id)+". "+a(t.text),1))),256))])])])])],64))}},N=f(C,[["__scopeId","data-v-4342a757"]]);export{N as default};
