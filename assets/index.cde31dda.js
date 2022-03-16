import{d as C,u as x,o as _,c as m,a as e,t as d,b as f,e as $,f as S,r as D,g as A,h as b,w as O,v as j,F as g,i as w,j as F,k as T,l as V,m as q,n as U,p as M,q as R}from"./vendor.0ca837e9.js";const E=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&u(a)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}};E();const H={class:"card sheet-1 my-2 p-2"},K={class:"flex justify-between"},P=["href"],I={class:"badge badge-md badge-outline"},W=["textContent"],G={class:"mt-2 justify-between items-center card-actions"},J={class:"text-xs"},Q=$("Created "),X=["datetime"],Y=e("span",null,"\xA0\xB7\xA0",-1),Z=$("Updated "),ee=["datetime"],te=["href"],se=C({props:{repo:null},setup(o){const{repo:i}=o,l=x(i.created_at),u=x(i.updated_at);return(t,r)=>{var a,h;return _(),m("li",H,[e("div",K,[e("a",{class:"card-title",href:o.repo.html_url},d(o.repo.name),9,P),e("div",null,[e("span",I,d(o.repo.stargazers_count)+" \u2B50",1)])]),e("div",null,[e("p",{textContent:d(o.repo.description)},null,8,W),e("p",null,"Language: "+d(o.repo.language),1),e("p",null,"License: "+d((h=(a=o.repo.license)==null?void 0:a.name)!=null?h:"None"),1)]),e("div",G,[e("div",J,[e("span",null,[Q,e("time",{datetime:o.repo.created_at},d(f(l)),9,X)]),Y,e("span",null,[Z,e("time",{datetime:o.repo.updated_at},d(f(u)),9,ee)])]),e("a",{class:"btn btn-sm tint-teal",href:o.repo.html_url,target:"_blank"},"Open repo",8,te)])])}}}),oe={class:"w-full p-2 md:p-4","aria-live":"assertive","aria-atomic":"true"},ne={class:"flex flex-row justify-between items-center"},re=e("h1",{class:"text-3xl mb-2 font-bold"},"My repositories",-1),ae={class:"input-group input-group-sm"},ce=["value","textContent"],ie={key:0},le={key:1},ue=C({setup(o){const i=(p,n)=>p.localeCompare(n),l=(p,n)=>p-n,u=(p,n)=>new Date(p).getTime()-new Date(n).getTime(),{statusCode:t,isFetching:r,data:a}=S("https://api.github.com/users/szeweq/repos").json(),h={name:"Name",stargazers_count:"Stars",created_at:"Created",updated_at:"Updated"},v=D("name"),[y,k]=A(!1),N=b(()=>{if(a.value===void 0||a.value===null)return[];const p=v.value,n=y.value;switch(p){case"name":return a.value.sort((c,s)=>n?i(s.name,c.name):i(c.name,s.name));case"stargazers_count":return a.value.sort((c,s)=>n?l(s.stargazers_count,c.stargazers_count):l(c.stargazers_count,s.stargazers_count));case"created_at":return a.value.sort((c,s)=>n?u(s.created_at,c.created_at):u(c.created_at,s.created_at));case"updated_at":return a.value.sort((c,s)=>n?u(s.updated_at,c.updated_at):u(c.updated_at,s.updated_at));default:return a.value}}),z=b(()=>y.value?"\u25BC":"\u25B2");return(p,n)=>{const c=se;return _(),m("main",oe,[e("div",ne,[re,e("div",null,[e("div",ae,[O(e("select",{class:"select select-sm","onUpdate:modelValue":n[0]||(n[0]=s=>v.value=s),title:"Sort by"},[(_(),m(g,null,w(h,(s,L)=>e("option",{value:L,textContent:d(s)},null,8,ce)),64))],512),[[j,v.value]]),e("button",{class:"btn btn-sm",onClick:n[1]||(n[1]=s=>f(k)())},d(f(z)),1)])])]),f(r)?(_(),m("div",ie,"Loading...")):f(t)===200?(_(),m("ul",le,[(_(!0),m(g,null,w(f(N),s=>(_(),T(c,{key:s.id,repo:s},null,8,["repo"]))),128))])):F("",!0)])}}}),de=[{name:"index",path:"/",component:ue,props:!0}];var pe=(o,i)=>{const l=o.__vccOpts||o;for(const[u,t]of i)l[u]=t;return l};const _e={},me=e("header",{class:"flex flex-row items-center p-2 h-16 min-h-16"},[e("h1",{class:"mx-1 text-xl font-semibold"}," Szeweq "),e("div",{class:"flex-grow"})],-1),fe={id:"page",class:"sheet-0 p-2"};function he(o,i){const l=V("router-view");return _(),m(g,null,[me,e("div",fe,[q(l)])],64)}var ve=pe(_e,[["render",he]]);const B=U(ve),ge=M({history:R(),routes:de});B.use(ge);B.mount("#app");