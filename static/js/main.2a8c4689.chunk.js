(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(5),a=n.n(o),i=(n(10),n(2)),s=(n(11),n(4)),u=n(0);var l=function(){var e=Object(c.useState)(20),t=Object(i.a)(e,2),n=t[0],r=(t[1],Object(c.useState)(22)),o=Object(i.a)(r,2),a=o[0],l=(o[1],function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=[],c=0;c<e;c++)t.push(Array.from(Array(e),(function(){return 0})));return t}),j=Object(c.useState)((function(){return l()})),f=Object(i.a)(j,2),d=f[0],b=f[1],h=[[0,1],[0,-1],[1,-1],[-1,1],[1,1],[-1,-1],[1,0],[-1,0]],m=Object(c.useState)(!1),p=Object(i.a)(m,2),g=p[0],O=p[1],v=Object(c.useRef)(g);v.current=g;var x=Object(c.useCallback)((function(){v.current&&(b((function(e){return Object(s.a)(e,(function(t){for(var c=function(c){for(var r=function(r){var o=0;h.forEach((function(t){var a=Object(i.a)(t,2),s=a[0],u=a[1],l=c+s,j=r+u;l>=0&&l<n&&j>=0&&j<n&&(o+=e[l][j])})),o<2||o>3?t[c][r]=0:0===e[c][r]&&3===o&&(t[c][r]=1)},o=0;o<n;o++)r(o)},r=0;r<n;r++)c(r)}))})),setTimeout(x,200))}),[]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsxs)("button",{onClick:function(){O(!g),g||(v.current=!0,x())},children:[g?"Stop":"Start"," Sim"]}),Object(u.jsx)("button",{onClick:function(){for(var e=[],t=0;t<n;t++)e.push(Array.from(Array(n),(function(){return Math.random()>.8?1:0})));b(e)},children:"Generate Random"}),Object(u.jsx)("button",{onClick:function(){b(l(n))},children:"Clear All"})]}),Object(u.jsx)("div",{className:"grid",id:"grid",style:{gridTemplateColumns:"repeat(".concat(n,", ").concat(a+1,"px)"),gridTemplateRows:"repeat(".concat(n,", ").concat(a+1,"px)")},children:d.map((function(e,t){return e.map((function(e,n){return Object(u.jsx)("div",{className:"cell",onClick:function(){var e=Object(s.a)(d,(function(e){e[t][n]=d[t][n]?0:1}));b(e)},style:{width:a,height:a,border:d[t][n]?"6px solid var(--accent)":"1px solid var(--bgSec)"}},"".concat(t,"-").concat(n))}))}))})]}),Object(u.jsxs)("div",{className:"smolscreen",children:[Object(u.jsx)("p",{children:"Smol screen"}),Object(u.jsx)("img",{src:"https://icon2.cleanpng.com/20180401/zww/kisspng-shiba-inu-dogecoin-clip-art-doge-5ac19a4e7ef1f4.89995344152263739052.jpg",alt:""}),Object(u.jsx)("span",{children:"Fake png :("})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),j()}},[[13,1,2]]]);
//# sourceMappingURL=main.2a8c4689.chunk.js.map