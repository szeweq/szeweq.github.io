const _e=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}};_e();const C={},Se=(e,r)=>e===r,$e=Symbol("solid-track"),G={equals:Se};let Ce=me;const U={},M=1,K=2,he={owned:null,cleanups:null,context:null,owner:null};var v=null;let P=null,h=null,I=null,k=null,j=null,re=0;function V(e,r){const t=h,o=v,n=e.length===0,i=n?he:{owned:null,cleanups:null,context:null,owner:r||o},s=n?e:()=>e(()=>se(i));v=i,h=null;try{return ie(s,!0)}finally{h=t,v=o}}function q(e,r){r=r?Object.assign({},G,r):G;const t={value:e,observers:null,observerSlots:null,pending:U,comparator:r.equals||void 0},o=n=>(typeof n=="function"&&(n=n(t.pending!==U?t.pending:t.value)),ne(t,n));return[we.bind(t),o]}function ae(e,r,t){const o=oe(e,r,!0,M);R(o)}function Z(e,r,t){const o=oe(e,r,!1,M);R(o)}function Q(e,r,t){t=t?Object.assign({},G,t):G;const o=oe(e,r,!0,0);return o.pending=U,o.observers=null,o.observerSlots=null,o.comparator=t.equals||void 0,R(o),we.bind(o)}function Ne(e,r,t){arguments.length===2?typeof r=="object"&&(t=r,r=e,e=!0):arguments.length===1&&(r=e,e=!0),t||(t={});const o=new Set,[n,i]=q(t.initialValue),[s,l]=q(void 0,{equals:!1}),[u,c]=q(!1),[a,p]=q();let d,f=null,w=null,N=null,A=!1,z="initialValue"in t,m=typeof e=="function"&&Q(e);C.context&&(N=`${C.context.id}${C.context.count++}`,C.load&&(w=C.load(N)));function b(g,y,$,E){return f===g&&(f=null,z=!0,w&&(g===w||y===w)&&t.onHydrated&&queueMicrotask(()=>t.onHydrated(E,{value:y})),w=null,p(d=$),_(y)),y}function _(g){J(()=>{i(()=>g),c(!1);for(const y of o.keys())y.decrement();o.clear()})}function S(){const g=ze,y=n();if(d)throw d;return h&&!h.user&&g&&ae(()=>{s(),f&&(g.resolved||o.has(g)||(g.increment(),o.add(g)))}),y}function T(g=!0){if(g&&A)return;A=!1,p(d=void 0);const y=m?m():e;if(y==null||y===!1){b(f,B(n));return}const $=w||B(()=>r(y,{value:n(),refetching:g}));return typeof $!="object"||!("then"in $)?(b(f,$),$):(f=$,A=!0,queueMicrotask(()=>A=!1),J(()=>{c(!0),l()}),$.then(E=>b($,E,void 0,y),E=>b($,E,E)))}return Object.defineProperties(S,{loading:{get(){return u()}},error:{get(){return a()}},latest:{get(){if(!z)return S();if(d)throw d;return n()}}}),m?ae(()=>T(!1)):T(!1),[S,{refetch:T,mutate:i}]}function J(e){if(I)return e();let r;const t=I=[];try{r=e()}finally{I=null}return ie(()=>{for(let o=0;o<t.length;o+=1){const n=t[o];if(n.pending!==U){const i=n.pending;n.pending=U,ne(n,i)}}},!1),r}function B(e){let r,t=h;return h=null,r=e(),h=t,r}function Ae(e){return v===null||(v.cleanups===null?v.cleanups=[e]:v.cleanups.push(e)),e}let ze;function we(){const e=P;if(this.sources&&(this.state||e)){const r=k;k=null,this.state===M||e?R(this):W(this),k=r}if(h){const r=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(r)):(h.sources=[this],h.sourceSlots=[r]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function ne(e,r,t){if(I)return e.pending===U&&I.push(e),e.pending=r,r;if(e.comparator&&e.comparator(e.value,r))return r;let o=!1;return e.value=r,e.observers&&e.observers.length&&ie(()=>{for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n];o&&P.disposed.has(i),(o&&!i.tState||!o&&!i.state)&&(i.pure?k.push(i):j.push(i),i.observers&&ye(i)),o||(i.state=M)}if(k.length>1e6)throw k=[],new Error},!1),r}function R(e){if(!e.fn)return;se(e);const r=v,t=h,o=re;h=v=e,Ee(e,e.value,o),h=t,v=r}function Ee(e,r,t){let o;try{o=e.fn(r)}catch(n){xe(n)}(!e.updatedAt||e.updatedAt<=t)&&(e.observers&&e.observers.length?ne(e,o):e.value=o,e.updatedAt=t)}function oe(e,r,t,o=M,n){const i={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:r,owner:v,context:null,pure:t};return v===null||v!==he&&(v.owned?v.owned.push(i):v.owned=[i]),i}function be(e){const r=P;if(e.state===0||r)return;if(e.state===K||r)return W(e);if(e.suspense&&B(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<re);)(e.state||r)&&t.push(e);for(let o=t.length-1;o>=0;o--)if(e=t[o],e.state===M||r)R(e);else if(e.state===K||r){const n=k;k=null,W(e,t[0]),k=n}}function ie(e,r){if(k)return e();let t=!1;r||(k=[]),j?t=!0:j=[],re++;try{const o=e();return je(t),o}catch(o){xe(o)}finally{k=null,t||(j=null)}}function je(e){k&&(me(k),k=null),!e&&(j.length?J(()=>{Ce(j),j=null}):j=null)}function me(e){for(let r=0;r<e.length;r++)be(e[r])}function W(e,r){const t=P;e.state=0;for(let o=0;o<e.sources.length;o+=1){const n=e.sources[o];n.sources&&(n.state===M||t?n!==r&&be(n):(n.state===K||t)&&W(n,r))}}function ye(e){const r=P;for(let t=0;t<e.observers.length;t+=1){const o=e.observers[t];(!o.state||r)&&(o.state=K,o.pure?k.push(o):j.push(o),o.observers&&ye(o))}}function se(e){let r;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),o=e.sourceSlots.pop(),n=t.observers;if(n&&n.length){const i=n.pop(),s=t.observerSlots.pop();o<n.length&&(i.sourceSlots[s]=o,n[o]=i,t.observerSlots[o]=s)}}if(e.owned){for(r=0;r<e.owned.length;r++)se(e.owned[r]);e.owned=null}if(e.cleanups){for(r=0;r<e.cleanups.length;r++)e.cleanups[r]();e.cleanups=null}e.state=0,e.context=null}function xe(e){throw e}const Le=Symbol("fallback");function ce(e){for(let r=0;r<e.length;r++)e[r]()}function De(e,r,t={}){let o=[],n=[],i=[],s=0,l=r.length>1?[]:null;return Ae(()=>ce(i)),()=>{let u=e()||[],c,a;return u[$e],B(()=>{let d=u.length,f,w,N,A,z,m,b,_,S;if(d===0)s!==0&&(ce(i),i=[],o=[],n=[],s=0,l&&(l=[])),t.fallback&&(o=[Le],n[0]=V(T=>(i[0]=T,t.fallback())),s=1);else if(s===0){for(n=new Array(d),a=0;a<d;a++)o[a]=u[a],n[a]=V(p);s=d}else{for(N=new Array(d),A=new Array(d),l&&(z=new Array(d)),m=0,b=Math.min(s,d);m<b&&o[m]===u[m];m++);for(b=s-1,_=d-1;b>=m&&_>=m&&o[b]===u[_];b--,_--)N[_]=n[b],A[_]=i[b],l&&(z[_]=l[b]);for(f=new Map,w=new Array(_+1),a=_;a>=m;a--)S=u[a],c=f.get(S),w[a]=c===void 0?-1:c,f.set(S,a);for(c=m;c<=b;c++)S=o[c],a=f.get(S),a!==void 0&&a!==-1?(N[a]=n[c],A[a]=i[c],l&&(z[a]=l[c]),a=w[a],f.set(S,a)):i[c]();for(a=m;a<d;a++)a in N?(n[a]=N[a],i[a]=A[a],l&&(l[a]=z[a],l[a](a))):n[a]=V(p);n=n.slice(0,s=d),o=u.slice(0)}return n});function p(d){if(i[a]=d,l){const[f,w]=q(a);return l[a]=w,r(u[a],f)}return r(u[a])}}}function L(e,r){return B(()=>e(r||{}))}function ve(e){const r="fallback"in e&&{fallback:()=>e.fallback};return Q(De(()=>e.each,e.children,r||void 0))}function de(e){let r=!1;const t=Q(()=>e.when,void 0,{equals:(o,n)=>r?o===n:!o==!n});return Q(()=>{const o=t();if(o){const n=e.children;return(r=typeof n=="function"&&n.length>0)?B(()=>n(o)):n}return e.fallback})}function Te(e,r,t){let o=t.length,n=r.length,i=o,s=0,l=0,u=r[n-1].nextSibling,c=null;for(;s<n||l<i;){if(r[s]===t[l]){s++,l++;continue}for(;r[n-1]===t[i-1];)n--,i--;if(n===s){const a=i<o?l?t[l-1].nextSibling:t[i-l]:u;for(;l<i;)e.insertBefore(t[l++],a)}else if(i===l)for(;s<n;)(!c||!c.has(r[s]))&&r[s].remove(),s++;else if(r[s]===t[i-1]&&t[l]===r[n-1]){const a=r[--n].nextSibling;e.insertBefore(t[l++],r[s++].nextSibling),e.insertBefore(t[--i],a),r[n]=t[i]}else{if(!c){c=new Map;let p=l;for(;p<i;)c.set(t[p],p++)}const a=c.get(r[s]);if(a!=null)if(l<a&&a<i){let p=s,d=1,f;for(;++p<n&&p<i&&!((f=c.get(r[p]))==null||f!==a+d);)d++;if(d>a-l){const w=r[s];for(;l<a;)e.insertBefore(t[l++],w)}else e.replaceChild(t[l++],r[s++])}else s++;else r[s++].remove()}}}const ue="_$DX_DELEGATE";function qe(e,r,t){let o;return V(n=>{o=n,r===document?e():x(r,e(),r.firstChild?null:void 0,t)}),()=>{o(),r.textContent=""}}function D(e,r,t){const o=document.createElement("template");o.innerHTML=e;let n=o.content.firstChild;return t&&(n=n.firstChild),n}function Me(e,r=window.document){const t=r[ue]||(r[ue]=new Set);for(let o=0,n=e.length;o<n;o++){const i=e[o];t.has(i)||(t.add(i),r.addEventListener(i,Oe))}}function H(e,r,t){t==null?e.removeAttribute(r):e.setAttribute(r,t)}function x(e,r,t,o){if(t!==void 0&&!o&&(o=[]),typeof r!="function")return X(e,r,o,t);Z(n=>X(e,r(),n,t),o)}function Oe(e){const r=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),C.registry&&!C.done&&(C.done=!0,document.querySelectorAll("[id^=pl-]").forEach(o=>o.remove()));t!==null;){const o=t[r];if(o&&!t.disabled){const n=t[`${r}Data`];if(n!==void 0?o.call(t,n,e):o.call(t,e),e.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function X(e,r,t,o,n){for(C.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(r===t)return t;const i=typeof r,s=o!==void 0;if(e=s&&t[0]&&t[0].parentNode||e,i==="string"||i==="number"){if(C.context)return t;if(i==="number"&&(r=r.toString()),s){let l=t[0];l&&l.nodeType===3?l.data=r:l=document.createTextNode(r),t=O(e,t,o,l)}else t!==""&&typeof t=="string"?t=e.firstChild.data=r:t=e.textContent=r}else if(r==null||i==="boolean"){if(C.context)return t;t=O(e,t,o)}else{if(i==="function")return Z(()=>{let l=r();for(;typeof l=="function";)l=l();t=X(e,l,t,o)}),()=>t;if(Array.isArray(r)){const l=[];if(ee(l,r,n))return Z(()=>t=X(e,l,t,o,!0)),()=>t;if(C.context){for(let u=0;u<l.length;u++)if(l[u].parentNode)return t=l}if(l.length===0){if(t=O(e,t,o),s)return t}else Array.isArray(t)?t.length===0?fe(e,l,o):Te(e,t,l):(t&&O(e),fe(e,l));t=l}else if(r instanceof Node){if(C.context&&r.parentNode)return t=s?[r]:r;if(Array.isArray(t)){if(s)return t=O(e,t,o,r);O(e,t,null,r)}else t==null||t===""||!e.firstChild?e.appendChild(r):e.replaceChild(r,e.firstChild);t=r}}return t}function ee(e,r,t){let o=!1;for(let n=0,i=r.length;n<i;n++){let s=r[n],l;if(s instanceof Node)e.push(s);else if(!(s==null||s===!0||s===!1))if(Array.isArray(s))o=ee(e,s)||o;else if((l=typeof s)=="string")e.push(document.createTextNode(s));else if(l==="function")if(t){for(;typeof s=="function";)s=s();o=ee(e,Array.isArray(s)?s:[s])||o}else e.push(s),o=!0;else e.push(document.createTextNode(s.toString()))}return o}function fe(e,r,t){for(let o=0,n=r.length;o<n;o++)e.insertBefore(r[o],t)}function O(e,r,t,o){if(t===void 0)return e.textContent="";const n=o||document.createTextNode("");if(r.length){let i=!1;for(let s=r.length-1;s>=0;s--){const l=r[s];if(n!==l){const u=l.parentNode===e;!i&&!s?u?e.replaceChild(n,l):e.insertBefore(n,t):u&&l.remove()}else i=!0}}else e.insertBefore(n,t);return[n]}var Ue=["second","minute","hour","day","week","month","year"];function Be(e,r){if(r===0)return["just now","right now"];var t=Ue[Math.floor(r/2)];return e>1&&(t+="s"),[e+" "+t+" ago","in "+e+" "+t]}var Ie=["\u79D2","\u5206\u949F","\u5C0F\u65F6","\u5929","\u5468","\u4E2A\u6708","\u5E74"];function Pe(e,r){if(r===0)return["\u521A\u521A","\u7247\u523B\u540E"];var t=Ie[~~(r/2)];return[e+" "+t+"\u524D",e+" "+t+"\u540E"]}var te={},ke=function(e,r){te[e]=r},Re=function(e){return te[e]||te.en_US},Y=[60,60,24,7,365/7/12,12];function ge(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}function He(e,r){var t=e<0?1:0;e=Math.abs(e);for(var o=e,n=0;e>=Y[n]&&n<Y.length;n++)e/=Y[n];return e=Math.floor(e),n*=2,e>(n===0?9:1)&&(n+=1),r(e,n,o)[t].replace("%s",e.toString())}function Fe(e,r){var t=r?ge(r):new Date;return(+t-+ge(e))/1e3}var pe=function(e,r,t){var o=Fe(e,t&&t.relativeDate);return He(o,Re(r))};ke("en_US",Be);ke("zh_CN",Pe);const Ve=D('<div class="rounded-xl sheet-1 p-2"><div class="flex justify-between"><a class="text-xl font-semibold"></a><div><span class="border-2 py-1 px-2 text-xs rounded-full border-gray-800 dark:border-gray-100"> \u2B50</span></div></div><div><p class="py-1"></p><p>Language: </p><p>License: </p></div><div class="flex mt-2 justify-between items-baseline"><div class="text-xs"><span>Created <time></time></span><span>&nbsp;&CenterDot;&nbsp;</span><span>Updated <time></time></span></div><a class="btn btn-sm tinted" target="_blank">Open repo</a></div></div>'),Ge=D('<div class="text-center">Loading...</div>'),Ke=D('<div class="flex flex-col gap-2 justify-center items-stretch"></div>'),Ze=D('<div class="text-center">Error: </div>'),Qe=D('<main class="w-full p-2 mx-auto md:w-[80%] lg:w-[70%] xl:w-[60%]" aria-live="assertive" aria-atomic="true"><div class="flex flex-row justify-between items-center py-1 mb-2"><h1 class="text-2xl font-bold">My repositories</h1><div class="flex"><select class="select h-8 border-2 stroked rounded-l" title="Sort by"></select><button class="btn h-8 tinted !rounded-l-none"></button></div></div></main>'),We=D("<option></option>"),Xe=D('<header class="flex flex-row items-center p-4 h-16 min-h-16"><h1 class="text-xl font-semibold">Szeweq</h1><div class="flex-grow"></div><a class="btn border-2 stroked mr-1" href="https://droogoo.szeweq.xyz/">Droogoo</a><a class="btn border-2 stroked" href="https://github.com/Szeweq">GitHub</a></header>'),Ye=D('<div id="page" class="sheet-0"></div>'),Je={name:"Name",stargazers_count:"Stars",created_at:"Created",updated_at:"Updated"},et=async()=>(await fetch("https://api.github.com/users/szeweq/repos")).json(),F=(e,r)=>+new Date(e)-+new Date(r),tt=({repo:e})=>{const r=()=>pe(e.created_at),t=()=>pe(e.updated_at);return(()=>{const o=Ve.cloneNode(!0),n=o.firstChild,i=n.firstChild,s=i.nextSibling,l=s.firstChild,u=l.firstChild,c=n.nextSibling,a=c.firstChild,p=a.nextSibling;p.firstChild;const d=p.nextSibling;d.firstChild;const f=c.nextSibling,w=f.firstChild,N=w.firstChild,A=N.firstChild,z=A.nextSibling,m=N.nextSibling,b=m.nextSibling,_=b.firstChild,S=_.nextSibling,T=w.nextSibling;return x(i,()=>e.name),x(l,()=>e.stargazers_count,u),x(a,()=>e.description),x(p,()=>e.language,null),x(d,()=>e.license?.name??"None",null),x(z,r),x(S,t),Z(g=>{const y=e.html_url,$=e.created_at,E=e.updated_at,le=e.html_url;return y!==g._v$&&H(i,"href",g._v$=y),$!==g._v$2&&H(z,"datetime",g._v$2=$),E!==g._v$3&&H(S,"datetime",g._v$3=E),le!==g._v$4&&H(T,"href",g._v$4=le),g},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),o})()},rt=({reverse:e,sortBy:r})=>{const[t]=Ne(et),o=()=>{const n=t();if(n==null||n.length==0)return[];const i=e();switch(r()){case"name":return n.sort((s,l)=>i?l.name.localeCompare(s.name):s.name.localeCompare(l.name));case"stargazers_count":return n.sort((s,l)=>i?l.stargazers_count-s.stargazers_count:s.stargazers_count-l.stargazers_count);case"created_at":return n.sort((s,l)=>i?F(l.created_at,s.created_at):F(s.created_at,l.created_at));case"updated_at":return n.sort((s,l)=>i?F(l.updated_at,s.updated_at):F(s.updated_at,l.updated_at));default:return n}};return(()=>{const n=Ke.cloneNode(!0);return x(n,L(de,{get when(){return t.loading},get children(){return Ge.cloneNode(!0)}}),null),x(n,L(de,{get when(){return!t.error},get fallback(){return(()=>{const i=Ze.cloneNode(!0);return i.firstChild,x(i,()=>t.error,null),i})()},get children(){return L(ve,{get each(){return o()},children:i=>L(tt,{repo:i})})}}),null),n})()},nt=()=>{const[e,r]=q("name"),[t,o]=q(!1),n=()=>t()?"\u25BC":"\u25B2";return(()=>{const i=Qe.cloneNode(!0),s=i.firstChild,l=s.firstChild,u=l.nextSibling,c=u.firstChild,a=c.nextSibling;return c.$$input=p=>r(p.currentTarget.value),x(c,L(ve,{get each(){return Object.entries(Je)},children:([p,d])=>(()=>{const f=We.cloneNode(!0);return f.value=p,x(f,d),f})()})),a.$$click=()=>o(!t()),x(a,n),x(i,L(rt,{sortBy:e,reverse:t}),null),i})()},ot=()=>[Xe.cloneNode(!0),(()=>{const e=Ye.cloneNode(!0);return x(e,L(nt,{})),e})()];Me(["input","click"]);qe(()=>L(ot,{}),document.getElementById("root"));