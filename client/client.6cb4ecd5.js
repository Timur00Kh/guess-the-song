function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}function i(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function l(t,e,n,r,o,s,c){const a=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(a){const o=i(e,n,r,c);t.p(o,a)}}function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function y(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return Array.from(t.childNodes)}function w(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):h(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function _(t){return E(t," ")}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}let k;function R(t){k=t}function A(){if(!k)throw new Error("Function called outside component initialization");return k}function P(t){A().$$.on_mount.push(t)}function L(){const t=A();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}const C=[],j=[],N=[],q=[],O=Promise.resolve();let U=!1;function T(t){N.push(t)}let B=!1;const D=new Set;function I(){if(!B){B=!0;do{for(let t=0;t<C.length;t+=1){const e=C[t];R(e),M(e.$$)}for(C.length=0;j.length;)j.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];D.has(e)||(D.add(e),e())}N.length=0}while(C.length);for(;q.length;)q.pop()();U=!1,B=!1,D.clear()}}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const J=new Set;let H;function K(){H={r:0,c:[],p:H}}function V(){H.r||o(H.c),H=H.p}function z(t,e){t&&t.i&&(J.delete(t),t.i(e))}function F(t,e,n,r){if(t&&t.o){if(J.has(t))return;J.add(t),H.c.push(()=>{J.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function G(t,e){F(t,1,1,()=>{e.delete(t.key)})}function Y(t,e,n,r,o,s,c,a,i,l,u,f){let p=t.length,d=s.length,h=p;const m={};for(;h--;)m[t[h].key]=h;const g=[],$=new Map,y=new Map;for(h=d;h--;){const t=f(o,s,h),a=n(t);let i=c.get(a);i?r&&i.p(t,e):(i=l(a,t),i.c()),$.set(a,g[h]=i),a in m&&y.set(a,Math.abs(h-m[a]))}const b=new Set,v=new Set;function w(t){z(t,1),t.m(a,u),c.set(t.key,t),u=t.first,d--}for(;p&&d;){const e=g[d-1],n=t[p-1],r=e.key,o=n.key;e===n?(u=e.first,p--,d--):$.has(o)?!c.has(r)||b.has(r)?w(e):v.has(o)?p--:y.get(r)>y.get(o)?(v.add(r),w(e)):(b.add(o),p--):(i(n,c),p--)}for(;p--;){const e=t[p];$.has(e.key)||i(e,c)}for(;d;)w(g[d-1]);return g}function W(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[s]=a}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function X(t){return"object"==typeof t&&null!==t?t:{}}function Q(t){t&&t.c()}function Z(t,e){t&&t.l(e)}function tt(t,e,r){const{fragment:c,on_mount:a,on_destroy:i,after_update:l}=t.$$;c&&c.m(e,r),T(()=>{const e=a.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(T)}function et(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function nt(t,e){-1===t.$$.dirty[0]&&(C.push(t),U||(U=!0,O.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function rt(e,n,s,c,a,i,l=[-1]){const u=k;R(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(d.ctx=s?s(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),h&&nt(e,t)),n}):[],d.update(),h=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=v(n.target);d.fragment&&d.fragment.l(t),t.forEach(p)}else d.fragment&&d.fragment.c();n.intro&&z(e.$$.fragment),tt(e,n.target,n.anchor),I()}R(u)}class ot{$destroy(){et(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const st=[];function ct(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!st.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),st.push(n,e)}if(t){for(let t=0;t<st.length;t+=2)st[t][0](st[t+1]);st.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return o.push(i),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const at={};function it(t){let e;const n=t[1].default,r=a(n,t,t[0],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,[e]){r&&r.p&&1&e&&l(r,n,t,t[0],e,null,null)},i(t){e||(z(r,t),e=!0)},o(t){F(r,t),e=!1},d(t){r&&r.d(t)}}}function lt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class ut extends ot{constructor(t){super(),rt(this,t,lt,it,c,{})}}function ft(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=m(r)},l(t){e=w(t,"PRE",{});var o=v(e);n=E(o,r),o.forEach(p)},m(t,r){f(t,e,r),u(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&x(n,r)},d(t){t&&p(e)}}}function pt(e){let n,r,o,s,c,a,i,l,d,y=e[1].message+"";document.title=n=e[0];let k=e[2]&&e[1].stack&&ft(e);return{c(){r=g(),o=h("h1"),s=m(e[0]),c=g(),a=h("p"),i=m(y),l=g(),k&&k.c(),d=$(),this.h()},l(t){S('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(p),r=_(t),o=w(t,"H1",{class:!0});var n=v(o);s=E(n,e[0]),n.forEach(p),c=_(t),a=w(t,"P",{class:!0});var u=v(a);i=E(u,y),u.forEach(p),l=_(t),k&&k.l(t),d=$(),this.h()},h(){b(o,"class","svelte-8od9u6"),b(a,"class","svelte-8od9u6")},m(t,e){f(t,r,e),f(t,o,e),u(o,s),f(t,c,e),f(t,a,e),u(a,i),f(t,l,e),k&&k.m(t,e),f(t,d,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&x(s,t[0]),2&e&&y!==(y=t[1].message+"")&&x(i,y),t[2]&&t[1].stack?k?k.p(t,e):(k=ft(t),k.c(),k.m(d.parentNode,d)):k&&(k.d(1),k=null)},i:t,o:t,d(t){t&&p(r),t&&p(o),t&&p(c),t&&p(a),t&&p(l),k&&k.d(t),t&&p(d)}}}function dt(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class ht extends ot{constructor(t){super(),rt(this,t,dt,pt,c,{status:0,error:1})}}function mt(t){let n,r,o;const s=[t[4].props];var c=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(a())),{c(){n&&Q(n.$$.fragment),r=$()},l(t){n&&Z(n.$$.fragment,t),r=$()},m(t,e){n&&tt(n,t,e),f(t,r,e),o=!0},p(t,e){const o=16&e?W(s,[X(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){K();const t=n;F(t.$$.fragment,1,0,()=>{et(t,1)}),V()}c?(n=new c(a()),Q(n.$$.fragment),z(n.$$.fragment,1),tt(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&z(n.$$.fragment,t),o=!0)},o(t){n&&F(n.$$.fragment,t),o=!1},d(t){t&&p(r),n&&et(n,t)}}}function gt(t){let e,n;return e=new ht({props:{error:t[0],status:t[1]}}),{c(){Q(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,r){tt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(z(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}function $t(t){let e,n,r,o;const s=[gt,mt],c=[];function a(t,e){return t[0]?0:1}return e=a(t),n=c[e]=s[e](t),{c(){n.c(),r=$()},l(t){n.l(t),r=$()},m(t,n){c[e].m(t,n),f(t,r,n),o=!0},p(t,o){let i=e;e=a(t),e===i?c[e].p(t,o):(K(),F(c[i],1,1,()=>{c[i]=null}),V(),n=c[e],n||(n=c[e]=s[e](t),n.c()),z(n,1),n.m(r.parentNode,r))},i(t){o||(z(n),o=!0)},o(t){F(n),o=!1},d(t){c[e].d(t),t&&p(r)}}}function yt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[$t]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new ut({props:s}),{c(){Q(n.$$.fragment)},l(t){Z(n.$$.fragment,t)},m(t,e){tt(n,t,e),r=!0},p(t,[e]){const r=12&e?W(o,[4&e&&{segment:t[2][0]},8&e&&X(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(z(n.$$.fragment,t),r=!0)},o(t){F(n.$$.fragment,t),r=!1},d(t){et(n,t)}}}function bt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:a}=e,{level1:i=null}=e,{notify:l}=e;var u,f,p;return u=l,A().$$.after_update.push(u),f=at,p=r,A().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,c,a,i,r,l]}class vt extends ot{constructor(t){super(),rt(this,t,bt,yt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const wt=[/^\/game\/([^\/]+?)\.json$/],Et=[{js:()=>import("./index.f9f6899b.js"),css:[]},{js:()=>import("./[id].90155013.js"),css:[]}],_t=(xt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/game\/([^\/]+?)\/?$/,parts:[null,{i:1,params:t=>({id:xt(t[1])})}]}]);var xt;const St="undefined"!=typeof __SAPPER__&&__SAPPER__;let kt,Rt,At,Pt=!1,Lt=[],Ct="{}";const jt={page:function(t){const e=ct(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:ct(null),session:ct(St&&St.session)};let Nt,qt;jt.session.subscribe(async t=>{if(Nt=t,!Pt)return;qt=!0;const e=Jt(new URL(location.href)),n=Rt={},{redirect:r,props:o,branch:s}=await zt(e);n===Rt&&await Vt(r,s,o,e.page)});let Ot,Ut=null;let Tt,Bt=1;const Dt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},It={};function Mt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Jt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(St.baseUrl))return null;let e=t.pathname.slice(St.baseUrl.length);if(""===e&&(e="/"),!wt.some(t=>t.test(e)))for(let n=0;n<_t.length;n+=1){const r=_t[n],o=r.pattern.exec(e);if(o){const n=Mt(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},a={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:a}}}}function Ht(){return{x:pageXOffset,y:pageYOffset}}async function Kt(t,e,n,r){if(e)Tt=e;else{const t=Ht();It[Tt]=t,e=Tt=++Bt,It[Tt]=n?t:{x:0,y:0}}Tt=e,kt&&jt.preloading.set(!0);const o=Ut&&Ut.href===t.href?Ut.promise:zt(t);Ut=null;const s=Rt={},{redirect:c,props:a,branch:i}=await o;if(s===Rt&&(await Vt(c,i,a,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=It[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}It[Tt]=t,t&&scrollTo(t.x,t.y)}}async function Vt(t,e,n,r){if(t)return function(t,e={noscroll:!1,replaceState:!1}){const n=Jt(new URL(t,document.baseURI));return n?(Dt[e.replaceState?"replaceState":"pushState"]({id:Tt},"",t),Kt(n,null,e.noscroll).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});jt.page.set(r),jt.preloading.set(!1),kt?kt.$set(n):(n.stores={page:{subscribe:jt.page.subscribe},preloading:{subscribe:jt.preloading.subscribe},session:jt.session},n.level0={props:await At},n.notify=jt.page.notify,kt=new vt({target:Ot,props:n,hydrate:!0})),Lt=e,Ct=JSON.stringify(r.query),Pt=!0,qt=!1}async function zt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!At){const t=()=>{};At=St.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},Nt)}let a,i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=await Promise.all(e.parts.map(async(e,a)=>{const f=r[a];if(function(t,e,n,r){if(r!==Ct)return!0;const o=Lt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(a,f,l,o)&&(u=!0),s.segments[i]=r[a+1],!e)return{segment:f};const p=i++;if(!qt&&!u&&Lt[a]&&Lt[a].part===e.i)return Lt[a];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Ft);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Et[e.i]);let m;return m=Pt||!St.preloaded[a+1]?h?await h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Nt):{}:St.preloaded[a+1],s["level"+p]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}function Ft(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Gt(t){const e=Jt(new URL(t,document.baseURI));if(e)return Ut&&t===Ut.href||function(t,e){Ut={href:t,promise:e}}(t,zt(e)),Ut.promise}let Yt;function Wt(t){clearTimeout(Yt),Yt=setTimeout(()=>{Xt(t)},20)}function Xt(t){const e=Zt(t.target);e&&"prefetch"===e.rel&&Gt(e.href)}function Qt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Zt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Jt(o);if(s){Kt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),Dt.pushState({id:Tt},"",o.href)}}function Zt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function te(t){if(It[Tt]=Ht(),t.state){const e=Jt(new URL(location.href));e?Kt(e,t.state.id):location.href=location.href}else Bt=Bt+1,function(t){Tt=t}(Bt),Dt.replaceState({id:Tt},"",location.href)}var ee;ee={target:document.querySelector("#sapper")},"scrollRestoration"in Dt&&(Dt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Dt.scrollRestoration="auto"}),addEventListener("load",()=>{Dt.scrollRestoration="manual"}),function(t){Ot=t}(ee.target),addEventListener("click",Qt),addEventListener("popstate",te),addEventListener("touchstart",Xt),addEventListener("mousemove",Wt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Dt.replaceState({id:Bt},"",e);const n=new URL(location.href);if(St.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:c,error:a}=St;At||(At=s&&s[0]),Vt(null,[],{error:a,status:c,session:o,level0:{props:At},level1:{props:{status:c,error:a},component:ht},segments:s},{host:e,path:n,query:Mt(r),params:{}})}();const r=Jt(n);return r?Kt(r,Bt,!0,t):void 0});export{y as A,Q as B,Z as C,tt as D,et as E,x as F,d as G,ot as S,g as a,w as b,_ as c,p as d,h as e,v as f,E as g,b as h,rt as i,f as j,u as k,L as l,$ as m,t as n,P as o,z as p,S as q,F as r,c as s,m as t,l as u,K as v,Y as w,V as x,a as y,G as z};
