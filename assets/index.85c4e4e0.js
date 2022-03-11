import{d as h,u as g,o as i,c,a as u,b as t,F as p,r as y,e as v,t as d,f as b,g as x,h as w,i as L,j as k}from"./vendor.26745e33.js";const N=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}};N();const O={class:"w-full"},B={key:0},C={key:1,class:"m-2"},F=t("h1",{class:"text-3xl mb-2 font-bold"},"My repositories",-1),j={class:"flex justify-between"},q=["href"],z={class:"badge badge-md badge-outline"},A={class:"mt-2 justify-end card-actions"},S=["href"],V=h({setup(l){const{statusCode:n,isFetching:r,data:a}=g("https://api.github.com/users/szeweq/repos").json();return(e,s)=>(i(),c("main",O,[u(r)?(i(),c("div",B,"Loading...")):u(n)===200?(i(),c("div",C,[F,t("ul",null,[(i(!0),c(p,null,y(u(a),o=>{var f,_;return i(),c("li",{key:o.id,class:"card sheet-1 my-2 p-2"},[t("div",j,[t("a",{class:"card-title",href:o.html_url},d(o.name),9,q),t("div",null,[t("span",z,d(o.stargazers_count)+" \u2B50",1)])]),t("div",null,[t("p",null,"Language: "+d(o.language),1),t("p",null,"License: "+d((_=(f=o.license)==null?void 0:f.name)!=null?_:"None"),1)]),t("div",A,[t("a",{class:"btn btn-sm tint-teal",href:o.html_url,target:"_blank"},"Open repo",8,S)])])}),128))])])):v("",!0)]))}}),$=[{name:"index",path:"/",component:V,props:!0}];var E=(l,n)=>{const r=l.__vccOpts||l;for(const[a,e]of n)r[a]=e;return r};const H={},M=t("header",{class:"flex flex-row items-center p-2 h-16 min-h-16"},[t("h1",{class:"mx-1 text-xl font-semibold"}," Szeweq "),t("div",{class:"flex-grow"})],-1),P={id:"page",class:"sheet-0"};function D(l,n){const r=b("router-view");return i(),c(p,null,[M,t("div",P,[x(r)])],64)}var I=E(H,[["render",D]]);const m=w(I),K=L({history:k(),routes:$});m.use(K);m.mount("#app");
