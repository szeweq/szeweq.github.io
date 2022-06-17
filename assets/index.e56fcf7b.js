const $e=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};$e();const N={},Se=(e,n)=>e===n,Ce=Symbol("solid-track"),K={equals:Se};let Ne=ve;const M={},B=1,F=2,pe={owned:null,cleanups:null,context:null,owner:null};var y=null;let R=null,p=null,I=null,x=null,D=null,ne=0;function G(e,n){const t=p,l=y,s=e.length===0?pe:{owned:null,cleanups:null,context:null,owner:n||l};y=s,p=null;try{return re(()=>e(()=>ie(s)),!0)}finally{p=t,y=l}}function O(e,n){n=n?Object.assign({},K,n):K;const t={value:e,observers:null,observerSlots:null,pending:M,comparator:n.equals||void 0},l=s=>(typeof s=="function"&&(s=s(t.pending!==M?t.pending:t.value)),se(t,s));return[me.bind(t),l]}function ue(e,n,t){const l=le(e,n,!0,B);z(l)}function Z(e,n,t){const l=le(e,n,!1,B);z(l)}function Q(e,n,t){t=t?Object.assign({},K,t):K;const l=le(e,n,!0,0);return l.pending=M,l.observers=null,l.observerSlots=null,l.comparator=t.equals||void 0,z(l),me.bind(l)}function Ae(e,n,t){arguments.length===2?typeof n=="object"&&(t=n,n=e,e=!0):arguments.length===1&&(n=e,e=!0),t||(t={});const l=new Set,[s,r]=O(t.initialValue),[i,o]=O(void 0,{equals:!1}),[f,a]=O(!1),[u,g]=O();let c,d=null,m=null,A=null,E=!1,L="initialValue"in t,v=typeof e=="function"&&Q(e);N.context&&(A=`${N.context.id}${N.context.count++}`,N.load&&(m=N.load(A)));function b(h,_,C,T){return d===h&&(d=null,L=!0,m&&(h===m||_===m)&&t.onHydrated&&queueMicrotask(()=>t.onHydrated(T,{value:_})),m=null,g(c=C),$(_)),_}function $(h){J(()=>{r(()=>h),a(!1);for(const _ of l.keys())_.decrement();l.clear()})}function S(){const h=Le,_=s();if(c)throw c;return p&&!p.user&&h&&ue(()=>{i(),d&&(h.resolved||l.has(h)||(h.increment(),l.add(h)))}),_}function q(h=!0){if(h&&E)return;E=!1,g(c=void 0);const _=v?v():e;if(_==null||_===!1){b(d,U(s));return}const C=m||U(()=>n(_,{value:s(),refetching:h}));return typeof C!="object"||!("then"in C)?(b(d,C),C):(d=C,E=!0,queueMicrotask(()=>E=!1),J(()=>{a(!0),o()}),C.then(T=>b(C,T,void 0,_),T=>b(C,T,T)))}return Object.defineProperties(S,{loading:{get(){return f()}},error:{get(){return u()}},latest:{get(){if(!L)return S();if(c)throw c;return s()}}}),v?ue(()=>q(!1)):q(!1),[S,{refetch:q,mutate:r}]}function J(e){if(I)return e();let n;const t=I=[];try{n=e()}finally{I=null}return re(()=>{for(let l=0;l<t.length;l+=1){const s=t[l];if(s.pending!==M){const r=s.pending;s.pending=M,se(s,r)}}},!1),n}function U(e){let n,t=p;return p=null,n=e(),p=t,n}function Ee(e){return y===null||(y.cleanups===null?y.cleanups=[e]:y.cleanups.push(e)),e}let Le;function me(){const e=R;if(this.sources&&(this.state||e)){const n=x;x=null,this.state===B||e?z(this):W(this),x=n}if(p){const n=this.observers?this.observers.length:0;p.sources?(p.sources.push(this),p.sourceSlots.push(n)):(p.sources=[this],p.sourceSlots=[n]),this.observers?(this.observers.push(p),this.observerSlots.push(p.sources.length-1)):(this.observers=[p],this.observerSlots=[p.sources.length-1])}return this.value}function se(e,n,t){if(I)return e.pending===M&&I.push(e),e.pending=n,n;if(e.comparator&&e.comparator(e.value,n))return n;let l=!1;return e.value=n,e.observers&&e.observers.length&&re(()=>{for(let s=0;s<e.observers.length;s+=1){const r=e.observers[s];l&&R.disposed.has(r),(l&&!r.tState||!l&&!r.state)&&(r.pure?x.push(r):D.push(r),r.observers&&_e(r)),l||(r.state=B)}if(x.length>1e6)throw x=[],new Error},!1),n}function z(e){if(!e.fn)return;ie(e);const n=y,t=p,l=ne;p=y=e,Te(e,e.value,l),p=t,y=n}function Te(e,n,t){let l;try{l=e.fn(n)}catch(s){we(s)}(!e.updatedAt||e.updatedAt<=t)&&(e.observers&&e.observers.length?se(e,l):e.value=l,e.updatedAt=t)}function le(e,n,t,l=B,s){const r={fn:e,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:y,context:null,pure:t};return y===null||y!==pe&&(y.owned?y.owned.push(r):y.owned=[r]),r}function be(e){const n=R;if(e.state===0||n)return;if(e.state===F||n)return W(e);if(e.suspense&&U(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ne);)(e.state||n)&&t.push(e);for(let l=t.length-1;l>=0;l--)if(e=t[l],e.state===B||n)z(e);else if(e.state===F||n){const s=x;x=null,W(e,t[0]),x=s}}function re(e,n){if(x)return e();let t=!1;n||(x=[]),D?t=!0:D=[],ne++;try{const l=e();return De(t),l}catch(l){we(l)}finally{x=null,t||(D=null)}}function De(e){x&&(ve(x),x=null),!e&&(D.length?J(()=>{Ne(D),D=null}):D=null)}function ve(e){for(let n=0;n<e.length;n++)be(e[n])}function W(e,n){const t=R;e.state=0;for(let l=0;l<e.sources.length;l+=1){const s=e.sources[l];s.sources&&(s.state===B||t?s!==n&&be(s):(s.state===F||t)&&W(s,n))}}function _e(e){const n=R;for(let t=0;t<e.observers.length;t+=1){const l=e.observers[t];(!l.state||n)&&(l.state=F,l.pure?x.push(l):D.push(l),l.observers&&_e(l))}}function ie(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),l=e.sourceSlots.pop(),s=t.observers;if(s&&s.length){const r=s.pop(),i=t.observerSlots.pop();l<s.length&&(r.sourceSlots[i]=l,s[l]=r,t.observerSlots[l]=i)}}if(e.owned){for(n=0;n<e.owned.length;n++)ie(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function we(e){throw e}const ke=Symbol("fallback");function ae(e){for(let n=0;n<e.length;n++)e[n]()}function je(e,n,t={}){let l=[],s=[],r=[],i=0,o=n.length>1?[]:null;return Ee(()=>ae(r)),()=>{let f=e()||[],a,u;return f[Ce],U(()=>{let c=f.length,d,m,A,E,L,v,b,$,S;if(c===0)i!==0&&(ae(r),r=[],l=[],s=[],i=0,o&&(o=[])),t.fallback&&(l=[ke],s[0]=G(q=>(r[0]=q,t.fallback())),i=1);else if(i===0){for(s=new Array(c),u=0;u<c;u++)l[u]=f[u],s[u]=G(g);i=c}else{for(A=new Array(c),E=new Array(c),o&&(L=new Array(c)),v=0,b=Math.min(i,c);v<b&&l[v]===f[v];v++);for(b=i-1,$=c-1;b>=v&&$>=v&&l[b]===f[$];b--,$--)A[$]=s[b],E[$]=r[b],o&&(L[$]=o[b]);for(d=new Map,m=new Array($+1),u=$;u>=v;u--)S=f[u],a=d.get(S),m[u]=a===void 0?-1:a,d.set(S,u);for(a=v;a<=b;a++)S=l[a],u=d.get(S),u!==void 0&&u!==-1?(A[u]=s[a],E[u]=r[a],o&&(L[u]=o[a]),u=m[u],d.set(S,u)):r[a]();for(u=v;u<c;u++)u in A?(s[u]=A[u],r[u]=E[u],o&&(o[u]=L[u],o[u](u))):s[u]=G(g);s=s.slice(0,i=c),l=f.slice(0)}return s});function g(c){if(r[u]=c,o){const[d,m]=O(u);return o[u]=m,n(f[u],d)}return n(f[u])}}}function k(e,n){return U(()=>e(n||{}))}function ye(e){const n="fallback"in e&&{fallback:()=>e.fallback};return Q(je(()=>e.each,e.children,n||void 0))}function ce(e){let n=!1;const t=Q(()=>e.when,void 0,{equals:(l,s)=>n?l===s:!l==!s});return Q(()=>{const l=t();if(l){const s=e.children;return(n=typeof s=="function"&&s.length>0)?U(()=>s(l)):s}return e.fallback})}function qe(e,n,t){let l=t.length,s=n.length,r=l,i=0,o=0,f=n[s-1].nextSibling,a=null;for(;i<s||o<r;){if(n[i]===t[o]){i++,o++;continue}for(;n[s-1]===t[r-1];)s--,r--;if(s===i){const u=r<l?o?t[o-1].nextSibling:t[r-o]:f;for(;o<r;)e.insertBefore(t[o++],u)}else if(r===o)for(;i<s;)(!a||!a.has(n[i]))&&n[i].remove(),i++;else if(n[i]===t[r-1]&&t[o]===n[s-1]){const u=n[--s].nextSibling;e.insertBefore(t[o++],n[i++].nextSibling),e.insertBefore(t[--r],u),n[s]=t[r]}else{if(!a){a=new Map;let g=o;for(;g<r;)a.set(t[g],g++)}const u=a.get(n[i]);if(u!=null)if(o<u&&u<r){let g=i,c=1,d;for(;++g<s&&g<r&&!((d=a.get(n[g]))==null||d!==u+c);)c++;if(c>u-o){const m=n[i];for(;o<u;)e.insertBefore(t[o++],m)}else e.replaceChild(t[o++],n[i++])}else i++;else n[i++].remove()}}}const fe="_$DX_DELEGATE";function Oe(e,n,t){let l;return G(s=>{l=s,n===document?e():w(n,e(),n.firstChild?null:void 0,t)}),()=>{l(),n.textContent=""}}function j(e,n,t){const l=document.createElement("template");l.innerHTML=e;let s=l.content.firstChild;return t&&(s=s.firstChild),s}function Be(e,n=window.document){const t=n[fe]||(n[fe]=new Set);for(let l=0,s=e.length;l<s;l++){const r=e[l];t.has(r)||(t.add(r),n.addEventListener(r,Pe))}}function H(e,n,t){t==null?e.removeAttribute(n):e.setAttribute(n,t)}function w(e,n,t,l){if(t!==void 0&&!l&&(l=[]),typeof n!="function")return X(e,n,l,t);Z(s=>X(e,n(),s,t),l)}function Pe(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),N.registry&&!N.done&&(N.done=!0,document.querySelectorAll("[id^=pl-]").forEach(l=>l.remove()));t!==null;){const l=t[n];if(l&&!t.disabled){const s=t[`${n}Data`];if(s!==void 0?l(s,e):l(e),e.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function X(e,n,t,l,s){for(N.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const r=typeof n,i=l!==void 0;if(e=i&&t[0]&&t[0].parentNode||e,r==="string"||r==="number"){if(N.context)return t;if(r==="number"&&(n=n.toString()),i){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=P(e,t,l,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||r==="boolean"){if(N.context)return t;t=P(e,t,l)}else{if(r==="function")return Z(()=>{let o=n();for(;typeof o=="function";)o=o();t=X(e,o,t,l)}),()=>t;if(Array.isArray(n)){const o=[];if(ee(o,n,s))return Z(()=>t=X(e,o,t,l,!0)),()=>t;if(N.context){for(let f=0;f<o.length;f++)if(o[f].parentNode)return t=o}if(o.length===0){if(t=P(e,t,l),i)return t}else Array.isArray(t)?t.length===0?de(e,o,l):qe(e,t,o):(t&&P(e),de(e,o));t=o}else if(n instanceof Node){if(N.context&&n.parentNode)return t=i?[n]:n;if(Array.isArray(t)){if(i)return t=P(e,t,l,n);P(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function ee(e,n,t){let l=!1;for(let s=0,r=n.length;s<r;s++){let i=n[s],o;if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))l=ee(e,i)||l;else if((o=typeof i)=="string")e.push(document.createTextNode(i));else if(o==="function")if(t){for(;typeof i=="function";)i=i();l=ee(e,Array.isArray(i)?i:[i])||l}else e.push(i),l=!0;else e.push(document.createTextNode(i.toString()))}return l}function de(e,n,t){for(let l=0,s=n.length;l<s;l++)e.insertBefore(n[l],t)}function P(e,n,t,l){if(t===void 0)return e.textContent="";const s=l||document.createTextNode("");if(n.length){let r=!1;for(let i=n.length-1;i>=0;i--){const o=n[i];if(s!==o){const f=o.parentNode===e;!r&&!i?f?e.replaceChild(s,o):e.insertBefore(s,t):f&&o.remove()}else r=!0}}else e.insertBefore(s,t);return[s]}var Me=["second","minute","hour","day","week","month","year"];function Ue(e,n){if(n===0)return["just now","right now"];var t=Me[Math.floor(n/2)];return e>1&&(t+="s"),[e+" "+t+" ago","in "+e+" "+t]}var Ie=["\u79D2","\u5206\u949F","\u5C0F\u65F6","\u5929","\u5468","\u4E2A\u6708","\u5E74"];function Re(e,n){if(n===0)return["\u521A\u521A","\u7247\u523B\u540E"];var t=Ie[~~(n/2)];return[e+" "+t+"\u524D",e+" "+t+"\u540E"]}var te={},xe=function(e,n){te[e]=n},ze=function(e){return te[e]||te.en_US},Y=[60,60,24,7,365/7/12,12];function he(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}function He(e,n){var t=e<0?1:0;e=Math.abs(e);for(var l=e,s=0;e>=Y[s]&&s<Y.length;s++)e/=Y[s];return e=Math.floor(e),s*=2,e>(s===0?9:1)&&(s+=1),n(e,s,l)[t].replace("%s",e.toString())}function Ve(e,n){var t=n?he(n):new Date;return(+t-+he(e))/1e3}var ge=function(e,n,t){var l=Ve(e,t&&t.relativeDate);return He(l,ze(n))};xe("en_US",Ue);xe("zh_CN",Re);const Ge=j('<div class="rounded-xl sheet-1 p-2"><div class="flex justify-between"><a class="text-xl font-semibold"></a><div><span class="border-2 py-1 px-2 text-xs rounded-full border-gray-800 dark:border-gray-100"> \u2B50</span></div></div><div><p class="py-1"></p><p>Language: </p><p>License: </p></div><div class="flex mt-2 justify-between items-baseline"><div class="text-xs"><span>Created <time></time></span><span>&nbsp;&CenterDot;&nbsp;</span><span>Updated <time></time></span></div><a class="btn btn-sm tinted" target="_blank">Open repo</a></div></div>'),Ke=j('<div class="text-center">Loading...</div>'),Fe=j('<div class="flex flex-col gap-2 justify-center items-stretch"></div>'),Ze=j('<div class="text-center">Error: </div>'),Qe=j('<main class="w-full p-2 mx-auto md:w-[80%] lg:w-[70%] xl:w-[60%]" aria-live="assertive" aria-atomic="true"><div class="flex flex-row justify-between items-center py-1 mb-2"><h1 class="text-2xl font-bold">My repositories</h1><div class="flex"><select class="select h-8 border-2 stroked rounded-l" title="Sort by"></select><button class="btn h-8 tinted !rounded-l-none"></button></div></div></main>'),We=j("<option></option>"),Xe=j('<header class="flex flex-row items-center p-4 h-16 min-h-16"><h1 class="text-xl font-semibold">Szeweq</h1><div class="flex-grow"></div><a class="btn border-2 stroked" href="https://github.com/Szeweq">GitHub</a></header>'),Ye=j('<div id="page" class="sheet-0"></div>'),Je={name:"Name",stargazers_count:"Stars",created_at:"Created",updated_at:"Updated"},et=async()=>(await fetch("https://api.github.com/users/szeweq/repos")).json(),V=(e,n)=>+new Date(e)-+new Date(n),tt=({repo:e})=>{const n=()=>ge(e.created_at),t=()=>ge(e.updated_at);return(()=>{const l=Ge.cloneNode(!0),s=l.firstChild,r=s.firstChild,i=r.nextSibling,o=i.firstChild,f=o.firstChild,a=s.nextSibling,u=a.firstChild,g=u.nextSibling;g.firstChild;const c=g.nextSibling;c.firstChild;const d=a.nextSibling,m=d.firstChild,A=m.firstChild,E=A.firstChild,L=E.nextSibling,v=A.nextSibling,b=v.nextSibling,$=b.firstChild,S=$.nextSibling,q=m.nextSibling;return w(r,()=>e.name),w(o,()=>e.stargazers_count,f),w(u,()=>e.description),w(g,()=>e.language,null),w(c,()=>e.license?.name??"None",null),w(L,n),w(S,t),Z(h=>{const _=e.html_url,C=e.created_at,T=e.updated_at,oe=e.html_url;return _!==h._v$&&H(r,"href",h._v$=_),C!==h._v$2&&H(L,"datetime",h._v$2=C),T!==h._v$3&&H(S,"datetime",h._v$3=T),oe!==h._v$4&&H(q,"href",h._v$4=oe),h},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),l})()},nt=({reverse:e,sortBy:n})=>{const[t]=Ae(et),l=()=>{const s=t();if(s==null||s.length==0)return[];const r=e();switch(n()){case"name":return s.sort((i,o)=>r?o.name.localeCompare(i.name):i.name.localeCompare(o.name));case"stargazers_count":return s.sort((i,o)=>r?o.stargazers_count-i.stargazers_count:i.stargazers_count-o.stargazers_count);case"created_at":return s.sort((i,o)=>r?V(o.created_at,i.created_at):V(i.created_at,o.created_at));case"updated_at":return s.sort((i,o)=>r?V(o.updated_at,i.updated_at):V(i.updated_at,o.updated_at));default:return s}};return(()=>{const s=Fe.cloneNode(!0);return w(s,k(ce,{get when(){return t.loading},get children(){return Ke.cloneNode(!0)}}),null),w(s,k(ce,{get when(){return!t.error},get fallback(){return(()=>{const r=Ze.cloneNode(!0);return r.firstChild,w(r,()=>t.error,null),r})()},get children(){return k(ye,{get each(){return l()},children:r=>k(tt,{repo:r})})}}),null),s})()},st=()=>{const[e,n]=O("name"),[t,l]=O(!1),s=()=>t()?"\u25BC":"\u25B2";return(()=>{const r=Qe.cloneNode(!0),i=r.firstChild,o=i.firstChild,f=o.nextSibling,a=f.firstChild,u=a.nextSibling;return a.$$input=g=>n(g.currentTarget.value),w(a,k(ye,{get each(){return Object.entries(Je)},children:([g,c])=>(()=>{const d=We.cloneNode(!0);return d.value=g,w(d,c),d})()})),u.$$click=()=>l(!t()),w(u,s),w(r,k(nt,{sortBy:e,reverse:t}),null),r})()},lt=()=>[Xe.cloneNode(!0),(()=>{const e=Ye.cloneNode(!0);return w(e,k(st,{})),e})()];Be(["input","click"]);Oe(()=>k(lt,{}),document.getElementById("root"));