(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(21),c=n.n(o),i=(n(68),n(52)),l=n(53),s=n(59),m=n(54),u=n(60),d=n(5),f=n(114),p=n(115),g=n(112),h=n(6),v=n(74),b=n(113),E=n(55),x=n.n(E);function w(){var t=Object(d.a)(["\n\tbackground-color: #ff6600;\n\tz-index: 999;\n\theight: 55px;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\n\t.inner {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tjustify-content: flex-start;\n\t\tmax-width: 800px;\n\t\tbox-sizing: border-box;\n\t\tmargin: 0px auto;\n\t\tpadding: 15px 5px;\n\t}\n\t.logo {\n\t\twidth: 24px;\n\t\tdisplay: inline-block;\n\t\tvertical-align: middle;\n\t}\n\ta {\n\t\tcolor: white;\n\t\tfont-weight: 300;\n\t\tline-height: 24px;\n\t\tletter-spacing: .075em;\n\t\tvertical-align: middle;\n\t\tmargin-right: 1.8em;\n\t}\n\t.active {\n\t\tfont-weight: 600;\n\t}\n\t@media (max-width: 600px) {\n\t\t.inner {\n\t\t\tpadding: 15px;\n\t\t}\n\t\ta {\n\t\t\tmargin-right: 1em;\n\t\t}\n\t}\n"]);return w=function(){return t},t}var A=h.a.header(w());function k(){return r.a.createElement(A,null,r.a.createElement("nav",{className:"inner"},r.a.createElement(v.a,{to:"/"},r.a.createElement("img",{src:x.a,alt:"Hacker News Logo",className:"logo"})),r.a.createElement(b.a,{exact:!0,to:"/",activeClassName:"active"},"Top"),r.a.createElement(b.a,{to:"/new",activeClassName:"active"},"New"),r.a.createElement(b.a,{to:"/show",activeClassName:"active"},"Show"),r.a.createElement(b.a,{to:"/ask",activeClassName:"active"},"Ask"),r.a.createElement(b.a,{to:"/jobs",activeClassName:"active"},"Jobs")))}var j=n(16),y=n(34),N=n.n(y);n(80);N.a.initializeApp({databaseURL:"https://hacker-news.firebaseio.com"});var C=N.a.database().ref("/v0");function O(t){return C.child("item/"+t)}function D(t){var e=Object(a.useState)({}),n=Object(j.a)(e,2),r=n[0],o=n[1];return Object(a.useEffect)(function(){var e=O(t);return e.on("value",function(t){o(t.val())}),function(){e.off()}},[t]),r}function M(t){var e=Object(a.useState)({}),n=Object(j.a)(e,2),r=n[0],o=n[1];return Object(a.useEffect)(function(){var e,n=(e=t,C.child(e));return n.on("value",function(t){var e=t.val().slice(0,30);o(e)}),function(){n.off()}},[t]),r}function B(t){var e=t.replace(/^https?:\/\//,"").replace(/\/.*$/,"").split(".").slice(-3);return"www"===e[0]&&e.shift(),e.join(".")}function Z(t){var e=Date.now()/1e3-Number(t);return e<3600?z(~~(e/60)," minute"):e<86400?z(~~(e/3600)," hour"):z(~~(e/86400)," day")}function z(t,e){return 1===t?t+e:t+e+"s"}function S(){var t=Object(d.a)(["\n\tbackground-color: #fff;\n\tpadding: 20px 30px 20px 80px;\n\tline-height: 20px;\n\tposition: relative;\n\tborder-bottom: 1px solid #eee\n\n\t.score {\n\t\tcolor: #f60;\n\t\tposition: absolute;\n\t\tfont-size: 1.1em;\n\t\tfont-weight: 700;\n\t\ttop: 50%;\n\t\tleft: 0;\n\t\twidth: 80px;\n\t\tmargin-top: -10px;\n\t\ttext-align: center;\n\t\t}\n\t.meta, .host {\n\t\tfont-size: .85em;\n\t\tcolor: #828282;\n\t\ta {\n\t\t\tcolor: #828282;\n\t\t\ttext-decoration: underline;\n\t\t\t&:hover {\n\t\t\t\tcolor: #ff6600\n\t\t\t}\n\t\t}\n\t}\n"]);return S=function(){return t},t}var G=h.a.div(S());function L(t){var e=D(t);return r.a.createElement(G,{key:t},r.a.createElement("span",{className:"score"},e.score),r.a.createElement("span",{className:"title"},r.a.createElement("a",{href:e.url},e.title),e.url?r.a.createElement("span",{className:"host"}," (".concat(B(e.url),")")):null),r.a.createElement("br",null),r.a.createElement("span",{className:"meta"},"by ",e.by," ",Z(e.time)," | ",r.a.createElement("a",{href:"item/".concat(e.id)},e.descendants?"".concat(e.descendants," comments"):"discuss")))}function P(t){var e=M(function(t){switch(t){case"new":return"newstories";case"show":return"showstories";case"ask":return"askstories";case"jobs":return"jobstories";case"best":return"beststories";case"top":default:return"topstories"}}(t.match.path.substring(1)));return r.a.createElement("div",{style:{margin:"30px 0"}},e.length>0&&e.map(L))}var F=n(23),H=n.n(F);function I(){var t=Object(d.a)(["\n\t","\n\tmargin-left: 1.5em;\n"]);return I=function(){return t},t}function Q(){var t=Object(d.a)(["\n  background-color: #fff;\n  border-top: 1px solid #eee;\n  position: relative;\n  .by, .text, .toggle {\n    font-size: .9em;\n\tmargin: 1em 0;\n  }\n  .by {\n    color: #828282;\n\ta {\n      color: #828282;\n      text-decoration: underline;\n\t}\n  }\n  .text {\n    overflow-wrap break-word\n\ta:hover {\n      color #ff6600\n\t}\n\tpre {\n\t  white-space pre-wrap\t\n\t}\n  }\n  .toggle {\n\tbackground-color: #fffbf2;\n\tpadding: .3em .5em;\n\tborder-radius: 4px;\n\t&.open {\n\t\tbackground-color: transparent;\n\t}\n  }\n"]);return Q=function(){return t},t}var U=h.a.div(Q()),T=h.a.div(I(),function(t){return t.open?null:"display: none;"});function W(t){var e=t.open,n=t.onClick,a=t.kidCount;return r.a.createElement("span",{className:"toggle ".concat(e?"open":null),onClick:n},e?"[-]":"[+".concat(a+1,"]"))}function R(t){var e=D(t.id),n=e.by,o=e.time,c=e.text,i=e.kids,l=void 0===i?[]:i,s=e.deleted,m=e.dead,u=Object(a.useState)(!0),d=Object(j.a)(u,2),f=d[0],p=d[1];return s?(l.length&&console.log("Deleted has children!"),r.a.createElement(U,null,r.a.createElement("div",{className:"by"},"[deleted]"))):m?(l.length&&console.log("Dead has children!"),null):r.a.createElement(U,null,r.a.createElement("div",{className:"by toggle ".concat(f?"open":null)},n,o&&Z(o)," ago",r.a.createElement(W,{open:f,onClick:function(){p(!f)},kidCount:l.length})),r.a.createElement(T,{open:f},r.a.createElement("div",{className:"text"},c&&H()(c)),l.length?l.map(function(t){return r.a.createElement(R,{key:t,id:t})}):null))}function Y(){var t=Object(d.a)(["\n\tbackground-color: #fff;\n\tmargin-top: 10px;\n\tpadding: 0 2em .5em;\n\n\t.comments-header {\n\t\tmargin: 0;\n\t\tfont-size: 1.1em;\n\t\tpadding: 1em 0;\n\t\tposition: relative;\n\t}\n\n"]);return Y=function(){return t},t}function V(){var t=Object(d.a)(["\n  background-color: #fff;\n  padding: 1.8em 2em 1em;\n  box-shadow: 0 1px 2px rgba(0,0,0,.1);\n\n  a {\n\tcolor: #34495e;\n  }\n  h1 {\n    display: inline;\n    font-size: 1.5em;\n    margin: 0;\n    margin-right: .5em;\n  }\n  .host, .meta, .meta a {\n    color: #828282;\n  }\n  .meta a {\n\ttext-decoration: underline;\n\t}\n  @media (max-width: 600px) {\n\th1 {\n\t font-size: 1.25em;\n\t}\n  }\n"]);return V=function(){return t},t}var J=h.a.div(V()),q=h.a.div(Y());function K(t){var e=t.url,n=t.title;return console.log(e),r.a.createElement("span",null,r.a.createElement("a",{href:e},r.a.createElement("h1",null,n)),r.a.createElement("a",{className:"host",href:e},"(",B(e),")"))}function X(t){var e=D(t.match.params.id),n=e.title,a=e.by,o=e.url,c=e.score,i=e.time,l=e.text,s=e.kids,m=void 0===s?[]:s,u=e.descendants;return r.a.createElement("div",null,r.a.createElement(J,null,o?r.a.createElement(K,{url:o,title:n}):r.a.createElement("h1",null,n),r.a.createElement("p",{className:"meta"},c&&c," points | by ",a&&a," ",i&&Z(i)," ago"),l?r.a.createElement("div",{className:"ask-text"},H()(l)):null),r.a.createElement(q,null,r.a.createElement("div",{className:"comments-header"},u&&u>0?"".concat(u," comments"):"No comments"),m.length?m.map(function(t){return r.a.createElement(R,{key:t,id:t})}):null))}function $(t){return r.a.createElement(P,{match:t.match})}function _(){var t=Object(d.a)(["\n\tmax-width: 800px;\n\tmargin: 0 auto;\n\tposition: relative;\n"]);return _=function(){return t},t}var tt=function(){return r.a.createElement("h1",null,"404")},et=h.a.div(_()),nt=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(f.a,{basename:"https://jonchurch.github.io/hn-react-hooks"},r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(et,null,r.a.createElement(p.a,null,r.a.createElement(g.a,{exact:!0,path:"/",component:P}),r.a.createElement(g.a,{exact:!0,path:"/top",component:P}),r.a.createElement(g.a,{exact:!0,path:"/new",component:P}),r.a.createElement(g.a,{exact:!0,path:"/show",component:P}),r.a.createElement(g.a,{exact:!0,path:"/ask",component:P}),r.a.createElement(g.a,{exact:!0,path:"/jobs",component:$}),r.a.createElement(g.a,{exact:!0,path:"/item/:id",component:X}),r.a.createElement(g.a,{component:tt})))))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(nt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},55:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAiRJREFUSA1j/A8EDAMAmAbATrCVLDCLP6Qawpg0pQVmnwebP2A+HjCL4UGNLXyZxEUYGIUlwVL/3z5n+PfyDTZlCDE2ZgZmFS0I//8/hr/XryLk0Fh4LWZgZmbgzV/AwMDExPDvwyuGT9VeDAy//qIZgeCye8YxcPrkgQW+75qN12K8Qf3v2UuG7/uAFgMBk4AYA5tHDJiNjWAU4mPg8MgES/37/Jbh56ZZ2JTBxfBaDFL1a+MMhn9f3oM1cHpkMTAK8sE1IzM4wioZGFlYwULfljcwMPz8gyyNwSZo8f8fvxm+rWgCa2RkZWPgCC/HMIRZVY2B3dgDLP779mmGP6ePYKhBFyBoMUjDn5MHGH7fg+Q/dmMvYAJSQZjDxMjAGQ1xGMO/fwzfF9cg5PCwiLIYpB9sILR05YwCWsTICDaW1dqdgUVaHcwGpYd/z1+B2YQIoi3+9+QZw48Di8HmschqMrBauzIwcrAxcAZDgv7f53cMP4HpgVhAtMUgA3+un8rw7+sHsNmcwZUMHJFlDEzcAmD+t5XAUACmB2IBSRb///6L4fvqVrDZTDwCDOxWwWD277vngOngILF2QvSTpBqo+PexvQx/HlxGaAPG+/fF1Qg+kSySfAw2E2TRuk648T/PbGH49/QFnE8sg3SLgSb///oRbv5/YKIiB5BlMTkWoesZtRg9RGjGH3lBjb8FgiOg/z16wkBpq3TkBfWA+ZhxxPWdACF6m6mcsEGuAAAAAElFTkSuQmCC"},63:function(t,e,n){t.exports=n(111)},68:function(t,e,n){},95:function(t,e){},97:function(t,e){}},[[63,2,1]]]);
//# sourceMappingURL=main.fced32de.chunk.js.map