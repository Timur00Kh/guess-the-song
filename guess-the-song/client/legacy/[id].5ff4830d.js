import{_ as n,a as t,b as r,c,i as e,s as i,d as a,r as o,S as u,f as s,j as f,k as l,g as h,m as d,n as v,o as p,p as m,u as g,v as y,w as $,x as w,y as I,z as E,A as D,B as b,C as V,D as R,E as k,F as x,G as N,H as T,t as _,l as S,I as A,J as P,e as B,K as C,h as j,L as Y,M,N as O,O as L}from"./client.771e824f.js";function U(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,i=t(n);if(c){var a=t(this).constructor;e=Reflect.construct(i,arguments,a)}else e=i.apply(this,arguments);return r(this,e)}}function z(n){var t,r;return{c:function(){t=s("div"),r=s("div"),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var c=l(t);r=f(c,"DIV",{id:!0}),l(r).forEach(h),c.forEach(h),this.h()},h:function(){d(r,"id",n[0]),d(t,"class","yt-component")},m:function(n,c){v(n,t,c),p(t,r)},p:m,i:m,o:m,d:function(n){n&&h(t)}}}var F=!1;function G(n,t,r){var c,e,i=g(),a="player_"+parseInt(1e5*Math.random()).toString(),o=t.videoId,u=t.height,s=void 0===u?"390":u,f=t.width,l=void 0===f?"640":f;function h(n){i("StateChange",n)}return y((function(){var n="https://www.youtube.com/iframe_api?origin=http://localhost:3000";if(!function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=document.getElementsByTagName("script"),r=t.length;r--;)if(t[r].src==n)return!0;return!1}(n)){var t=document.createElement("script");t.src=n;var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r)}function u(){c=new YT.Player(a,{height:s,width:l,videoId:o,playerVars:{autoplay:1,disablekb:1,fs:0},events:{onStateChange:h}});var n=0;e=setInterval((function(){var t=n;c&&c.getCurrentTime&&(n=c.getCurrentTime()),n!==t&&i("timeupdate",n)}),800)}return window.onYouTubeIframeAPIReady=function(){window.dispatchEvent(new Event("YouTubeIframeAPIReady"))},window.addEventListener("YouTubeIframeAPIReady",(function(){0==F&&(F=!0,u())})),F&&u(),function(){return e&&clearInterval(e)}})),n.$$set=function(n){"videoId"in n&&r(1,o=n.videoId),"height"in n&&r(2,s=n.height),"width"in n&&r(3,l=n.width)},[a,o,s,l,function(){c.playVideo()}]}var H=function(t){n(s,u);var r=U(s);function s(n){var t;return c(this,s),t=r.call(this),e(a(t),n,G,z,i,{videoId:1,height:2,width:3,playVideo:4}),t}return o(s,[{key:"playVideo",get:function(){return this.$$.ctx[4]}}]),s}();function J(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,i=t(n);if(c){var a=t(this).constructor;e=Reflect.construct(i,arguments,a)}else e=i.apply(this,arguments);return r(this,e)}}function K(n,t,r){var c=n.slice();return c[4]=t[r],c}function q(n,t){var r,c,e=t[3].default,i=k(e,t,t[2],null);return{key:n,first:null,c:function(){r=$(),i&&i.c(),this.h()},l:function(n){r=$(),i&&i.l(n),this.h()},h:function(){this.first=r},m:function(n,t){v(n,r,t),i&&i.m(n,t),c=!0},p:function(n,t){i&&i.p&&4&t&&w(i,e,n,n[2],t,null,null)},i:function(n){c||(I(i,n),c=!0)},o:function(n){E(i,n),c=!1},d:function(n){n&&h(r),i&&i.d(n)}}}function Q(n){for(var t,r,c=[],e=new Map,i=n[1],a=function(n){return n[0]},o=0;o<i.length;o+=1){var u=K(n,i,o),s=a(u);e.set(s,c[o]=q(s,u))}return{c:function(){for(var n=0;n<c.length;n+=1)c[n].c();t=$()},l:function(n){for(var r=0;r<c.length;r+=1)c[r].l(n);t=$()},m:function(n,e){for(var i=0;i<c.length;i+=1)c[i].m(n,e);v(n,t,e),r=!0},p:function(n,r){var i=D(r,1)[0];if(4&i){var o=n[1];b(),c=V(c,i,a,1,n,o,e,t.parentNode,x,q,t,K),R()}},i:function(n){if(!r){for(var t=0;t<i.length;t+=1)I(c[t]);r=!0}},o:function(n){for(var t=0;t<c.length;t+=1)E(c[t]);r=!1},d:function(n){for(var r=0;r<c.length;r+=1)c[r].d(n);n&&h(t)}}}function W(n,t,r){var c=t.key,e=t.$$slots,i=void 0===e?{}:e,a=t.$$scope;return n.$$set=function(n){"key"in n&&r(0,c=n.key),"$$scope"in n&&r(2,a=n.$$scope)},[c,[0],a,i]}var X=function(t){n(o,u);var r=J(o);function o(n){var t;return c(this,o),t=r.call(this),e(a(t),n,W,Q,i,{key:0}),t}return o}();function Z(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,i=t(n);if(c){var a=t(this).constructor;e=Reflect.construct(i,arguments,a)}else e=i.apply(this,arguments);return r(this,e)}}function nn(n,t,r){var c=n.slice();return c[12]=t[r],c}function tn(n){var t,r,c,e,i,a,o;return{c:function(){t=s("div"),r=s("div"),c=s("div"),e=s("button"),i=_("Начать!"),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var a=l(t);r=f(a,"DIV",{class:!0});var o=l(r);c=f(o,"DIV",{class:!0});var u=l(c);e=f(u,"BUTTON",{class:!0});var s=l(e);i=S(s,"Начать!"),s.forEach(h),u.forEach(h),o.forEach(h),a.forEach(h),this.h()},h:function(){d(e,"class","btn btn-secondary btn-block btn-lg"),d(c,"class","col-md-6"),d(r,"class","row h-100 py-5 justify-content-center align-items-center"),d(t,"class","container py-5")},m:function(u,s){v(u,t,s),p(t,r),p(r,c),p(c,e),p(e,i),a||(o=A(e,"click",n[9]),a=!0)},p:m,i:m,o:m,d:function(n){n&&h(t),a=!1,o()}}}function rn(n){var t,r,c,e,i,a,o,u,m,g,y,$,w;a=new X({props:{key:n[0].yt_id,$$slots:{default:[cn]},$$scope:{ctx:n}}});var D=n[2].id&&en(n);return{c:function(){t=s("div"),r=s("div"),c=s("div"),e=s("div"),i=s("div"),P(a.$$.fragment),o=B(),D&&D.c(),u=B(),m=s("div"),g=s("a"),y=_("Следующий"),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var s=l(t);r=f(s,"DIV",{class:!0});var d=l(r);c=f(d,"DIV",{class:!0});var v=l(c);e=f(v,"DIV",{class:!0});var p=l(e);i=f(p,"DIV",{class:!0});var $=l(i);C(a.$$.fragment,$),$.forEach(h),p.forEach(h),v.forEach(h),o=j(d),D&&D.l(d),u=j(d),m=f(d,"DIV",{class:!0});var w=l(m);g=f(w,"A",{rel:!0,href:!0});var I=l(g);y=S(I,"Следующий"),I.forEach(h),w.forEach(h),d.forEach(h),s.forEach(h),this.h()},h:function(){d(i,"class","inner svelte-16iul4o"),d(e,"class","wrap svelte-16iul4o"),d(c,"class","col-12"),d(g,"rel","prefetch"),d(g,"href",$="/game/"+(Number(n[1])+1)),d(m,"class","col-auto mt-3 mx-auto"),d(r,"class","row"),d(t,"class","container py-5")},m:function(n,s){v(n,t,s),p(t,r),p(r,c),p(c,e),p(e,i),Y(a,i,null),p(r,o),D&&D.m(r,null),p(r,u),p(r,m),p(m,g),p(g,y),w=!0},p:function(n,t){var c={};1&t&&(c.key=n[0].yt_id),32785&t&&(c.$$scope={dirty:t,ctx:n}),a.$set(c),n[2].id?D?D.p(n,t):((D=en(n)).c(),D.m(r,u)):D&&(D.d(1),D=null),(!w||2&t&&$!==($="/game/"+(Number(n[1])+1)))&&d(g,"href",$)},i:function(n){w||(I(a.$$.fragment,n),w=!0)},o:function(n){E(a.$$.fragment,n),w=!1},d:function(n){n&&h(t),M(a),D&&D.d()}}}function cn(n){var t,r;return(t=new H({props:{key:n[0].yt_id,height:"100%",width:"100%",videoId:n[0].yt_id}})).$on("timeupdate",n[7]),t.$on("StateChange",n[6]),{c:function(){P(t.$$.fragment)},l:function(n){C(t.$$.fragment,n)},m:function(n,c){Y(t,n,c),r=!0},p:function(n,r){var c={};1&r&&(c.key=n[0].yt_id),1&r&&(c.videoId=n[0].yt_id),t.$set(c)},i:function(n){r||(I(t.$$.fragment,n),r=!0)},o:function(n){E(t.$$.fragment,n),r=!1},d:function(n){M(t,n)}}}function en(n){var t;function r(n,t){return void 0===n[5]?un:n[5]===n[2].rightAnswer?on:an}var c=r(n),e=c(n);return{c:function(){e.c(),t=$()},l:function(n){e.l(n),t=$()},m:function(n,r){e.m(n,r),v(n,t,r)},p:function(n,i){c===(c=r(n))&&e?e.p(n,i):(e.d(1),(e=c(n))&&(e.c(),e.m(t.parentNode,t)))},d:function(n){e.d(n),n&&h(t)}}}function an(n){var t,r,c,e,i;return{c:function(){t=s("div"),r=s("div"),c=_("Неправильный ответ"),e=B(),i=s("div"),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var a=l(t);r=f(a,"DIV",{class:!0});var o=l(r);c=S(o,"Неправильный ответ"),o.forEach(h),a.forEach(h),e=j(n),i=f(n,"DIV",{class:!0}),l(i).forEach(h),this.h()},h:function(){d(r,"class","alert alert-danger"),d(t,"class","col-md-6 mx-auto mt-3"),d(i,"class","w-100")},m:function(n,a){v(n,t,a),p(t,r),p(r,c),v(n,e,a),v(n,i,a)},p:m,d:function(n){n&&h(t),n&&h(e),n&&h(i)}}}function on(n){var t,r,c,e,i;return{c:function(){t=s("div"),r=s("div"),c=_("Правильный ответ"),e=B(),i=s("div"),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var a=l(t);r=f(a,"DIV",{class:!0});var o=l(r);c=S(o,"Правильный ответ"),o.forEach(h),a.forEach(h),e=j(n),i=f(n,"DIV",{class:!0}),l(i).forEach(h),this.h()},h:function(){d(r,"class","alert alert-success"),d(t,"class","col-md-6 mx-auto mt-3"),d(i,"class","w-100")},m:function(n,a){v(n,t,a),p(t,r),p(r,c),v(n,e,a),v(n,i,a)},p:m,d:function(n){n&&h(t),n&&h(e),n&&h(i)}}}function un(n){for(var t,r=n[2].answers,c=[],e=0;e<r.length;e+=1)c[e]=sn(nn(n,r,e));return{c:function(){for(var n=0;n<c.length;n+=1)c[n].c();t=$()},l:function(n){for(var r=0;r<c.length;r+=1)c[r].l(n);t=$()},m:function(n,r){for(var e=0;e<c.length;e+=1)c[e].m(n,r);v(n,t,r)},p:function(n,e){if(36&e){var i;for(r=n[2].answers,i=0;i<r.length;i+=1){var a=nn(n,r,i);c[i]?c[i].p(a,e):(c[i]=sn(a),c[i].c(),c[i].m(t.parentNode,t))}for(;i<c.length;i+=1)c[i].d(1);c.length=r.length}},d:function(n){L(c,n),n&&h(t)}}}function sn(n){var t,r,c,e,i,a,o=n[12]+"";function u(){for(var t,r=arguments.length,c=new Array(r),e=0;e<r;e++)c[e]=arguments[e];return(t=n)[8].apply(t,[n[12]].concat(c))}return{c:function(){t=s("div"),r=s("button"),c=_(o),e=B(),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var i=l(t);r=f(i,"BUTTON",{class:!0});var a=l(r);c=S(a,o),a.forEach(h),e=j(i),i.forEach(h),this.h()},h:function(){d(r,"class","btn btn-secondary btn-block btn-lg"),d(t,"class","col-md-6 mt-3")},m:function(n,o){v(n,t,o),p(t,r),p(r,c),p(t,e),i||(a=A(r,"click",u),i=!0)},p:function(t,r){n=t,4&r&&o!==(o=n[12]+"")&&O(c,o)},d:function(n){n&&h(t),i=!1,a()}}}function fn(n){var t,r,c,e,i=[rn,tn],a=[];function o(n,t){return n[3]?0:1}return t=o(n),r=a[t]=i[t](n),{c:function(){r.c(),c=$()},l:function(n){r.l(n),c=$()},m:function(n,r){a[t].m(n,r),v(n,c,r),e=!0},p:function(n,e){var u=D(e,1)[0],s=t;(t=o(n))===s?a[t].p(n,u):(b(),E(a[s],1,1,(function(){a[s]=null})),R(),(r=a[t])||(r=a[t]=i[t](n)).c(),I(r,1),r.m(c.parentNode,c))},i:function(n){e||(I(r),e=!0)},o:function(n){E(r),e=!1},d:function(n){a[t].d(n),n&&h(c)}}}function ln(n,t){return hn.apply(this,arguments)}function hn(){return(hn=N(T.mark((function n(t,r){var c,e,i;return T.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=t.params.id,n.next=3,this.fetch("game/".concat(c,".json"));case 3:return e=n.sent,n.next=6,e.json();case 6:return i=n.sent,n.abrupt("return",{game:i,id:c});case 8:case"end":return n.stop()}}),n,this)})))).apply(this,arguments)}function dn(n,t,r){var c,e=t.game,i=t.id,a={},o=!1,u=0;return n.$$set=function(n){"game"in n&&r(0,e=n.game),"id"in n&&r(1,i=n.id)},n.$$.update=function(){16&n.$$.dirty&&function(n){var t=e.songs.find((function(t){return n>=t.guess[0]&&n<=t.answer[1]}));t&&(t.id!==a.id&&(r(2,a=t),r(5,c=void 0)),a.id&&n>=a.answer[0]&&n<=a.answer[1]&&(c||r(5,c=!1)))}(u)},[e,i,a,o,u,c,function(n){n.detail.data},function(n){var t=n.detail;return r(4,u=t)},function(n){return r(5,c=n)},function(){return r(3,o=!0)}]}var vn=function(t){n(o,u);var r=Z(o);function o(n){var t;return c(this,o),t=r.call(this),e(a(t),n,dn,fn,i,{game:0,id:1}),t}return o}();export default vn;export{ln as preload};
