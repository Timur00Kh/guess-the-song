function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(t,e)||n(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o,i=function(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}((function(e){var n=function(e){var n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new _(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=$(a,n);if(u){if(u===l)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=f(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var l={};function p(){}function h(){}function d(){}var v={};v[i]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(S([])));y&&y!==n&&r.call(y,i)&&(v=y);var g=d.prototype=p.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(e,n){var o;this._invoke=function(i,a){function u(){return new n((function(o,u){!function o(i,a,u,c){var s=f(e[i],e,a);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"===t(p)&&r.call(p,"__await")?n.resolve(p.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):n.resolve(p).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,c)}))}c(s.arg)}(i,a,o,u)}))}return o=o?o.then(u,u):u()}}function $(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,$(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=g.constructor=d,d.constructor=h,h.displayName=c(d,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},b(w.prototype),w.prototype[a]=function(){return this},e.AsyncIterator=w,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new w(s(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(g),c(g,u,"Generator"),g[i]=function(){return this},g.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=S,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}));function a(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function u(t){a(i,r,o,u,c,"next",t)}function c(t){a(i,r,o,u,c,"throw",t)}u(void 0)}))}}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?l(e):n}function h(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||n(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e,n){return e&&v(t.prototype,e),n&&v(t,n),t}function y(){}function g(t,e){for(var n in e)t[n]=e[n];return t}function b(t){return t()}function w(){return Object.create(null)}function $(t){t.forEach(b)}function x(t){return"function"==typeof t}function E(e,n){return e!=e?n==n:e!==n||e&&"object"===t(e)||"function"==typeof e}function _(t,e,n,r){if(t){var o=S(t,e,n,r);return t[0](o)}}function S(t,e,n,r){return t[1]&&r?g(n.ctx.slice(),t[1](r(e))):n.ctx}function k(e,n,r,o,i,a,u){var c=function(e,n,r,o){if(e[2]&&o){var i=e[2](o(r));if(void 0===n.dirty)return i;if("object"===t(i)){for(var a=[],u=Math.max(n.dirty.length,i.length),c=0;c<u;c+=1)a[c]=n.dirty[c]|i[c];return a}return n.dirty|i}return n.dirty}(n,o,i,a);if(c){var s=S(n,r,o,u);e.p(s,c)}}function L(t,e){t.appendChild(e)}function R(t,e,n){t.insertBefore(e,n||null)}function j(t){t.parentNode.removeChild(t)}function O(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function P(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function N(){return A(" ")}function C(){return A("")}function q(t,e,n,r){return t.addEventListener(e,n,r),function(){return t.removeEventListener(e,n,r)}}function T(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function I(t){return Array.from(t.childNodes)}function U(t,e,n,r){for(var o=0;o<t.length;o+=1){var i=t[o];if(i.nodeName===e){for(var a=0,u=[];a<i.attributes.length;){var c=i.attributes[a++];n[c.name]||u.push(c.name)}for(var s=0;s<u.length;s++)i.removeAttribute(u[s]);return t.splice(o,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):P(e)}function D(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return A(e)}function G(t){return D(t," ")}function F(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function M(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function B(t){o=t}function J(){if(!o)throw new Error("Function called outside component initialization");return o}function H(t){J().$$.on_mount.push(t)}function K(){var t=J();return function(e,n){var r=t.$$.callbacks[e];if(r){var o=function(t,e){var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach((function(e){e.call(t,o)}))}}}var Y=[],V=[],z=[],W=[],X=Promise.resolve(),Q=!1;function Z(t){z.push(t)}var tt=!1,et=new Set;function nt(){if(!tt){tt=!0;do{for(var t=0;t<Y.length;t+=1){var e=Y[t];B(e),rt(e.$$)}for(Y.length=0;V.length;)V.pop()();for(var n=0;n<z.length;n+=1){var r=z[n];et.has(r)||(et.add(r),r())}z.length=0}while(Y.length);for(;W.length;)W.pop()();Q=!1,tt=!1,et.clear()}}function rt(t){if(null!==t.fragment){t.update(),$(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}var ot,it=new Set;function at(){ot={r:0,c:[],p:ot}}function ut(){ot.r||$(ot.c),ot=ot.p}function ct(t,e){t&&t.i&&(it.delete(t),t.i(e))}function st(t,e,n,r){if(t&&t.o){if(it.has(t))return;it.add(t),ot.c.push((function(){it.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function ft(t,e){st(t,1,1,(function(){e.delete(t.key)}))}function lt(t,e,n,r,o,i,a,u,c,s,f,l){for(var p=t.length,h=i.length,d=p,v={};d--;)v[t[d].key]=d;var m=[],y=new Map,g=new Map;for(d=h;d--;){var b=l(o,i,d),w=n(b),$=a.get(w);$?r&&$.p(b,e):($=s(w,b)).c(),y.set(w,m[d]=$),w in v&&g.set(w,Math.abs(d-v[w]))}var x=new Set,E=new Set;function _(t){ct(t,1),t.m(u,f),a.set(t.key,t),f=t.first,h--}for(;p&&h;){var S=m[h-1],k=t[p-1],L=S.key,R=k.key;S===k?(f=S.first,p--,h--):y.has(R)?!a.has(L)||x.has(L)?_(S):E.has(R)?p--:g.get(L)>g.get(R)?(E.add(L),_(S)):(x.add(R),p--):(c(k,a),p--)}for(;p--;){var j=t[p];y.has(j.key)||c(j,a)}for(;h;)_(m[h-1]);return m}function pt(t,e){for(var n={},r={},o={$$scope:1},i=t.length;i--;){var a=t[i],u=e[i];if(u){for(var c in a)c in u||(r[c]=1);for(var s in u)o[s]||(n[s]=u[s],o[s]=1);t[i]=u}else for(var f in a)o[f]=1}for(var l in r)l in n||(n[l]=void 0);return n}function ht(e){return"object"===t(e)&&null!==e?e:{}}function dt(t){t&&t.c()}function vt(t,e){t&&t.l(e)}function mt(t,e,n){var r=t.$$,o=r.fragment,i=r.on_mount,a=r.on_destroy,u=r.after_update;o&&o.m(e,n),Z((function(){var e=i.map(b).filter(x);a?a.push.apply(a,h(e)):$(e),t.$$.on_mount=[]})),u.forEach(Z)}function yt(t,e){var n=t.$$;null!==n.fragment&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function gt(t,e){-1===t.$$.dirty[0]&&(Y.push(t),Q||(Q=!0,X.then(nt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function bt(t,e,n,r,i,a){var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],c=o;B(t);var s=e.props||{},f=t.$$={fragment:null,ctx:null,props:a,update:y,not_equal:i,bound:w(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:w(),dirty:u,skip_bound:!1},l=!1;if(f.ctx=n?n(t,s,(function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return f.ctx&&i(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),l&&gt(t,e)),n})):[],f.update(),l=!0,$(f.before_update),f.fragment=!!r&&r(f.ctx),e.target){if(e.hydrate){var p=I(e.target);f.fragment&&f.fragment.l(p),p.forEach(j)}else f.fragment&&f.fragment.c();e.intro&&ct(t.$$.fragment),mt(t,e.target,e.anchor),nt()}B(c)}var wt=function(){function t(){d(this,t)}return m(t,[{key:"$destroy",value:function(){yt(this,1),this.$destroy=y}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}]),t}(),$t=[];function xt(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y,r=[];function o(n){if(E(t,n)&&(t=n,e)){for(var o=!$t.length,i=0;i<r.length;i+=1){var a=r[i];a[1](),$t.push(a,t)}if(o){for(var u=0;u<$t.length;u+=2)$t[u][0]($t[u+1]);$t.length=0}}}function i(e){o(e(t))}function a(i){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y,u=[i,a];return r.push(u),1===r.length&&(e=n(o)||y),i(t),function(){var t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(e(),e=null)}}return{set:o,update:i,subscribe:a}}var Et={};function _t(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function St(t){var e,n=t[1].default,o=_(n,t,t[0],null);return{c:function(){o&&o.c()},l:function(t){o&&o.l(t)},m:function(t,n){o&&o.m(t,n),e=!0},p:function(t,e){var i=r(e,1)[0];o&&o.p&&1&i&&k(o,n,t,t[0],i,null,null)},i:function(t){e||(ct(o,t),e=!0)},o:function(t){st(o,t),e=!1},d:function(t){o&&o.d(t)}}}function kt(t,e,n){var r=e.$$slots,o=void 0===r?{}:r,i=e.$$scope;return t.$$set=function(t){"$$scope"in t&&n(0,i=t.$$scope)},[i,o]}var Lt=function(t){f(n,wt);var e=_t(n);function n(t){var r;return d(this,n),bt(l(r=e.call(this)),t,kt,St,E,{}),r}return n}();function Rt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function jt(t){var e,n,r=t[1].stack+"";return{c:function(){e=P("pre"),n=A(r)},l:function(t){var o=I(e=U(t,"PRE",{}));n=D(o,r),o.forEach(j)},m:function(t,r){R(t,e,r),L(e,n)},p:function(t,e){2&e&&r!==(r=t[1].stack+"")&&F(n,r)},d:function(t){t&&j(e)}}}function Ot(t){var e,n,o,i,a,u,c,s,f,l=t[1].message+"";document.title=e=t[0];var p=t[2]&&t[1].stack&&jt(t);return{c:function(){n=N(),o=P("h1"),i=A(t[0]),a=N(),u=P("p"),c=A(l),s=N(),p&&p.c(),f=C(),this.h()},l:function(e){M('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(j),n=G(e);var r=I(o=U(e,"H1",{class:!0}));i=D(r,t[0]),r.forEach(j),a=G(e);var h=I(u=U(e,"P",{class:!0}));c=D(h,l),h.forEach(j),s=G(e),p&&p.l(e),f=C(),this.h()},h:function(){T(o,"class","svelte-8od9u6"),T(u,"class","svelte-8od9u6")},m:function(t,e){R(t,n,e),R(t,o,e),L(o,i),R(t,a,e),R(t,u,e),L(u,c),R(t,s,e),p&&p.m(t,e),R(t,f,e)},p:function(t,n){var o=r(n,1)[0];1&o&&e!==(e=t[0])&&(document.title=e),1&o&&F(i,t[0]),2&o&&l!==(l=t[1].message+"")&&F(c,l),t[2]&&t[1].stack?p?p.p(t,o):((p=jt(t)).c(),p.m(f.parentNode,f)):p&&(p.d(1),p=null)},i:y,o:y,d:function(t){t&&j(n),t&&j(o),t&&j(a),t&&j(u),t&&j(s),p&&p.d(t),t&&j(f)}}}function Pt(t,e,n){var r=e.status,o=e.error;return t.$$set=function(t){"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}var At=function(t){f(n,wt);var e=Rt(n);function n(t){var r;return d(this,n),bt(l(r=e.call(this)),t,Pt,Ot,E,{status:0,error:1}),r}return n}();function Nt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function Ct(t){var e,n,r,o=[t[4].props],i=t[4].component;function a(t){for(var e={},n=0;n<o.length;n+=1)e=g(e,o[n]);return{props:e}}return i&&(e=new i(a())),{c:function(){e&&dt(e.$$.fragment),n=C()},l:function(t){e&&vt(e.$$.fragment,t),n=C()},m:function(t,o){e&&mt(e,t,o),R(t,n,o),r=!0},p:function(t,r){var u=16&r?pt(o,[ht(t[4].props)]):{};if(i!==(i=t[4].component)){if(e){at();var c=e;st(c.$$.fragment,1,0,(function(){yt(c,1)})),ut()}i?(dt((e=new i(a())).$$.fragment),ct(e.$$.fragment,1),mt(e,n.parentNode,n)):e=null}else i&&e.$set(u)},i:function(t){r||(e&&ct(e.$$.fragment,t),r=!0)},o:function(t){e&&st(e.$$.fragment,t),r=!1},d:function(t){t&&j(n),e&&yt(e,t)}}}function qt(t){var e,n;return e=new At({props:{error:t[0],status:t[1]}}),{c:function(){dt(e.$$.fragment)},l:function(t){vt(e.$$.fragment,t)},m:function(t,r){mt(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i:function(t){n||(ct(e.$$.fragment,t),n=!0)},o:function(t){st(e.$$.fragment,t),n=!1},d:function(t){yt(e,t)}}}function Tt(t){var e,n,r,o,i=[qt,Ct],a=[];function u(t,e){return t[0]?0:1}return e=u(t),n=a[e]=i[e](t),{c:function(){n.c(),r=C()},l:function(t){n.l(t),r=C()},m:function(t,n){a[e].m(t,n),R(t,r,n),o=!0},p:function(t,o){var c=e;(e=u(t))===c?a[e].p(t,o):(at(),st(a[c],1,1,(function(){a[c]=null})),ut(),(n=a[e])||(n=a[e]=i[e](t)).c(),ct(n,1),n.m(r.parentNode,r))},i:function(t){o||(ct(n),o=!0)},o:function(t){st(n),o=!1},d:function(t){a[e].d(t),t&&j(r)}}}function It(t){for(var e,n,o=[{segment:t[2][0]},t[3].props],i={$$slots:{default:[Tt]},$$scope:{ctx:t}},a=0;a<o.length;a+=1)i=g(i,o[a]);return e=new Lt({props:i}),{c:function(){dt(e.$$.fragment)},l:function(t){vt(e.$$.fragment,t)},m:function(t,r){mt(e,t,r),n=!0},p:function(t,n){var i=r(n,1)[0],a=12&i?pt(o,[4&i&&{segment:t[2][0]},8&i&&ht(t[3].props)]):{};147&i&&(a.$$scope={dirty:i,ctx:t}),e.$set(a)},i:function(t){n||(ct(e.$$.fragment,t),n=!0)},o:function(t){st(e.$$.fragment,t),n=!1},d:function(t){yt(e,t)}}}function Ut(t,e,n){var r,o,i,a=e.stores,u=e.error,c=e.status,s=e.segments,f=e.level0,l=e.level1,p=void 0===l?null:l,h=e.notify;return r=h,J().$$.after_update.push(r),o=Et,i=a,J().$$.context.set(o,i),t.$$set=function(t){"stores"in t&&n(5,a=t.stores),"error"in t&&n(0,u=t.error),"status"in t&&n(1,c=t.status),"segments"in t&&n(2,s=t.segments),"level0"in t&&n(3,f=t.level0),"level1"in t&&n(4,p=t.level1),"notify"in t&&n(6,h=t.notify)},[u,c,s,f,p,a,h]}var Dt,Gt=function(t){f(n,wt);var e=Nt(n);function n(t){var r;return d(this,n),bt(l(r=e.call(this)),t,Ut,It,E,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return n}(),Ft=[/^\/game\/([^\/]+?)\.json$/],Mt=[{js:function(){return import("./index.129e6e8b.js")},css:[]},{js:function(){return import("./[id].5ff4830d.js")},css:[]}],Bt=(Dt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/game\/([^\/]+?)\/?$/,parts:[null,{i:1,params:function(t){return{id:Dt(t[1])}}}]}]);function Jt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{noscroll:!1,replaceState:!1},n=fe(new URL(t,document.baseURI));return n?(ue[e.replaceState?"replaceState":"pushState"]({id:re},"",t),pe(n,null,e.noscroll).then((function(){}))):(location.href=t,new Promise((function(t){})))}var Ht,Kt,Yt,Vt,zt,Wt="undefined"!=typeof __SAPPER__&&__SAPPER__,Xt=!1,Qt=[],Zt="{}",te={page:function(t){var e=xt(t),n=!0;return{notify:function(){n=!0,e.update((function(t){return t}))},set:function(t){n=!1,e.set(t)},subscribe:function(t){var r;return e.subscribe((function(e){(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:xt(null),session:xt(Wt&&Wt.session)};te.session.subscribe(function(){var t=u(i.mark((function t(e){var n,r,o,a,u,c;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Vt=e,Xt){t.next=3;break}return t.abrupt("return");case 3:return zt=!0,n=fe(new URL(location.href)),r=Kt={},t.next=8,ye(n);case 8:if(o=t.sent,a=o.redirect,u=o.props,c=o.branch,r===Kt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,de(a,c,u,n.page);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var ee,ne=null;var re,oe=1;var ie,ae,ue="undefined"!=typeof history?history:{pushState:function(t,e,n){},replaceState:function(t,e,n){},scrollRestoration:""},ce={};function se(e){var n=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var o=r(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),i=o[1],a=o[2],u=void 0===a?"":a;"string"==typeof n[i]&&(n[i]=[n[i]]),"object"===t(n[i])?n[i].push(u):n[i]=u})),n}function fe(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Wt.baseUrl))return null;var e=t.pathname.slice(Wt.baseUrl.length);if(""===e&&(e="/"),!Ft.some((function(t){return t.test(e)})))for(var n=0;n<Bt.length;n+=1){var r=Bt[n],o=r.pattern.exec(e);if(o){var i=se(t.search),a=r.parts[r.parts.length-1],u=a.params?a.params(o):{},c={host:location.host,path:e,query:i,params:u};return{href:t.href,route:r,match:o,page:c}}}}function le(){return{x:pageXOffset,y:pageYOffset}}function pe(t,e,n,r){return he.apply(this,arguments)}function he(){return(he=u(i.mark((function t(e,n,r,o){var a,u,c,s,f,l,p,h,d;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n?re=n:(a=le(),ce[re]=a,n=re=++oe,ce[re]=r?a:{x:0,y:0}),re=n,Ht&&te.preloading.set(!0),u=ne&&ne.href===e.href?ne.promise:ye(e),ne=null,c=Kt={},t.next=8,u;case 8:if(s=t.sent,f=s.redirect,l=s.props,p=s.branch,c===Kt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,de(f,p,l,e.page);case 16:document.activeElement&&document.activeElement.blur(),r||(h=ce[n],o&&(d=document.getElementById(o.slice(1)))&&(h={x:0,y:d.getBoundingClientRect().top+scrollY}),ce[re]=h,h&&scrollTo(h.x,h.y));case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function de(t,e,n,r){return ve.apply(this,arguments)}function ve(){return(ve=u(i.mark((function t(e,n,r,o){return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",Jt(e.location,{replaceState:!0}));case 2:if(te.page.set(o),te.preloading.set(!1),!Ht){t.next=8;break}Ht.$set(r),t.next=15;break;case 8:return r.stores={page:{subscribe:te.page.subscribe},preloading:{subscribe:te.preloading.subscribe},session:te.session},t.next=11,Yt;case 11:t.t0=t.sent,r.level0={props:t.t0},r.notify=te.page.notify,Ht=new Gt({target:ee,props:r,hydrate:!0});case 15:Qt=n,Zt=JSON.stringify(o.query),Xt=!0,zt=!1;case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function me(t,e,n,r){if(r!==Zt)return!0;var o=Qt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function ye(t){return ge.apply(this,arguments)}function ge(){return(ge=u(i.mark((function t(e){var n,r,o,a,c,s,f,l,p,h,d,v;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.route,r=e.page,o=r.path.split("/").filter(Boolean),a=null,c={error:null,status:200,segments:[o[0]]},s={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(a&&(a.statusCode!==t||a.location!==e))throw new Error("Conflicting redirects");a={statusCode:t,location:e}},error:function(t,e){c.error="string"==typeof e?new Error(e):e,c.status=t}},Yt||(f=function(){},Yt=Wt.preloaded[0]||f.call(s,{host:r.host,path:r.path,query:r.query,params:{}},Vt)),p=1,t.prev=7,h=JSON.stringify(r.query),d=n.pattern.exec(r.path),v=!1,t.next=13,Promise.all(n.parts.map(function(){var t=u(i.mark((function t(n,a){var u,f,l,m,y,g;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=o[a],me(a,u,d,h)&&(v=!0),c.segments[p]=o[a+1],n){t.next=5;break}return t.abrupt("return",{segment:u});case 5:if(f=p++,zt||v||!Qt[a]||Qt[a].part!==n.i){t.next=8;break}return t.abrupt("return",Qt[a]);case 8:return v=!1,t.next=11,we(Mt[n.i]);case 11:if(l=t.sent,m=l.default,y=l.preload,!Xt&&Wt.preloaded[a+1]){t.next=25;break}if(!y){t.next=21;break}return t.next=18,y.call(s,{host:r.host,path:r.path,query:r.query,params:n.params?n.params(e.match):{}},Vt);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:g=t.t0,t.next=26;break;case 25:g=Wt.preloaded[a+1];case 26:return t.abrupt("return",c["level".concat(f)]={component:m,props:g,segment:u,match:d,part:n.i});case 27:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()));case 13:l=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),c.error=t.t0,c.status=500,l=[];case 21:return t.abrupt("return",{redirect:a,props:c,branch:l});case 22:case"end":return t.stop()}}),t,null,[[7,16]])})))).apply(this,arguments)}function be(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise((function(t,n){var r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=function(){return t()},r.onerror=n,document.head.appendChild(r)}))}function we(t){var e="string"==typeof t.css?[]:t.css.map(be);return e.unshift(t.js()),Promise.all(e).then((function(t){return t[0]}))}function $e(t){var e=fe(new URL(t,document.baseURI));if(e)return ne&&t===ne.href||function(t,e){ne={href:t,promise:e}}(t,ye(e)),ne.promise}function xe(t){clearTimeout(ie),ie=setTimeout((function(){Ee(t)}),20)}function Ee(t){var e=Se(t.target);e&&"prefetch"===e.rel&&$e(e.href)}function _e(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var n=Se(e.target);if(n&&n.href){var r="object"===t(n.href)&&"SVGAnimatedString"===n.href.constructor.name,o=String(r?n.href.baseVal:n.href);if(o!==location.href){if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&!(r?n.target.baseVal:n.target)){var i=new URL(o);if(i.pathname!==location.pathname||i.search!==location.search){var a=fe(i);if(a)pe(a,null,n.hasAttribute("sapper:noscroll"),i.hash),e.preventDefault(),ue.pushState({id:re},"",i.href)}}}else location.hash||e.preventDefault()}}}function Se(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ke(t){if(ce[re]=le(),t.state){var e=fe(new URL(location.href));e?pe(e,t.state.id):location.href=location.href}else(function(t){re=t})(oe=oe+1),ue.replaceState({id:re},"",location.href)}ae={target:document.querySelector("#sapper")},"scrollRestoration"in ue&&(ue.scrollRestoration="manual"),addEventListener("beforeunload",(function(){ue.scrollRestoration="auto"})),addEventListener("load",(function(){ue.scrollRestoration="manual"})),function(t){ee=t}(ae.target),addEventListener("click",_e),addEventListener("popstate",ke),addEventListener("touchstart",Ee),addEventListener("mousemove",xe),Promise.resolve().then((function(){var t=location,e=t.hash,n=t.href;ue.replaceState({id:oe},"",n);var r,o,i,a,u,c,s,f,l=new URL(location.href);if(Wt.error)return r=location,o=r.host,i=r.pathname,a=r.search,u=Wt.session,c=Wt.preloaded,s=Wt.status,f=Wt.error,Yt||(Yt=c&&c[0]),void de(null,[],{error:f,status:s,session:u,level0:{props:Yt},level1:{props:{status:s,error:f},component:At},segments:c},{host:o,path:i,query:se(a),params:{}});var p=fe(l);return p?pe(p,oe,!0,e):void 0}));export{r as A,at as B,lt as C,ut as D,_ as E,ft as F,u as G,i as H,q as I,dt as J,vt as K,mt as L,yt as M,F as N,O,wt as S,f as _,c as a,p as b,d as c,l as d,N as e,P as f,j as g,G as h,bt as i,U as j,I as k,D as l,T as m,R as n,L as o,y as p,M as q,m as r,E as s,A as t,K as u,H as v,C as w,k as x,ct as y,st as z};
