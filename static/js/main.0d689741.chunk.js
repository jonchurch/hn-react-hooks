(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(t,e){},115:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(22),i=n.n(o),c=(n(66),n(55)),l=n(56),s=n(74),m=n(57),u=n(75),p=n(5),d=n(119),f=n(120),g=n(116),h=n(118),v=n(6),x=n(72),b=n(117),w=n(58),E=n.n(w);function A(){var t=Object(p.a)(["\n\tbackground-color: #ff6600;\n\tposition: fixed;\n\tz-index: 999;\n\theight: 55px;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\n\t.inner {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tjustify-content: flex-start;\n\t\tmax-width: 800px;\n\t\tbox-sizing: border-box;\n\t\tmargin: 0px auto;\n\t\tpadding: 15px 5px;\n\t}\n\t.logo {\n\t\twidth: 24px;\n\t\tdisplay: inline-block;\n\t\tvertical-align: middle;\n\t}\n\ta {\n\t\tcolor: white;\n\t\tfont-weight: 300;\n\t\tline-height: 24px;\n\t\tletter-spacing: .075em;\n\t\tvertical-align: middle;\n\t\tmargin-right: 1.8em;\n\t}\n\t.active {\n\t\tfont-weight: 600;\n\t}\n\t@media (max-width: 600px) {\n\t\t.inner {\n\t\t\tpadding: 15px;\n\t\t}\n\t\ta {\n\t\t\tmargin-right: 1em;\n\t\t}\n\t}\n"]);return A=function(){return t},t}var j=v.a.header(A());function k(){return r.a.createElement(j,null,r.a.createElement("nav",{className:"inner"},r.a.createElement(x.a,{to:"/"},r.a.createElement("img",{src:E.a,alt:"Hacker News Logo",className:"logo"})),r.a.createElement(b.a,{exact:!0,to:"/",activeClassName:"active"},"Top"),r.a.createElement(b.a,{to:"/new",activeClassName:"active"},"New"),r.a.createElement(b.a,{to:"/show",activeClassName:"active"},"Show"),r.a.createElement(b.a,{to:"/ask",activeClassName:"active"},"Ask"),r.a.createElement(b.a,{to:"/jobs",activeClassName:"active"},"Jobs")))}var y=n(9),N=n(36),O=n.n(N),C=n(73),D=n(37),M=n.n(D);n(84);M.a.initializeApp({databaseURL:"https://hacker-news.firebaseio.com"});var B=M.a.database().ref("/v0");function S(t){return B.child("item/"+t)}var z="https://hn.algolia.com/api/v1/search_by_date?tags=story,author_whoishiring";function Z(t){var e=Object(a.useState)({}),n=Object(y.a)(e,2),r=n[0],o=n[1];return Object(a.useEffect)(function(){var e=S(t);return e.on("value",function(t){null!==t.val()&&o(t.val())}),function(){e.off()}},[t]),r}function L(){var t=Object(a.useState)([]),e=Object(y.a)(t,2),n=e[0],r=e[1];return Object(a.useEffect)(Object(C.a)(O.a.mark(function t(){var e,n;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(z).then(function(t){return t.json()});case 2:e=t.sent,n=e.hits.slice(0,3),r(n);case 5:case"end":return t.stop()}},t,this)})),[]),n}function P(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=function(t){switch(t){case"new":return"newstories";case"show":return"showstories";case"ask":return"askstories";case"jobs":return"jobstories";case"best":return"beststories";case"top":default:return"topstories"}}(t),r=Object(a.useState)([]),o=Object(y.a)(r,2),i=o[0],c=o[1],l=Object(a.useState)(1),s=Object(y.a)(l,2),m=s[0],u=s[1],p=40*(e-1),d=p+40;return Object(a.useEffect)(function(){var t,e=(t=n,B.child(t));return e.on("value",function(t){var e=t.val(),n=e.slice(p,d);console.log("LIST LENGTH:",t.val().length),c(n),u(Math.ceil(e.length/40))}),function(){e.off()}},[t,e]),[i,m]}function G(t){var e=t.replace(/^https?:\/\//,"").replace(/\/.*$/,"").split(".").slice(-3);return"www"===e[0]&&e.shift(),e.join(".")}function I(t){var e=Date.now()/1e3-Number(t);return e<60?"a moment ago":e<3600?H(~~(e/60)," minute"):e<86400?H(~~(e/3600)," hour"):H(~~(e/86400)," day")}function H(t,e){return 1===t?t+e:t+e+"s"}function T(){var t=Object(p.a)(["\n\tbackground-color: #fff;\n\tpadding: 20px 30px 20px 80px;\n\tline-height: 20px;\n\tposition: relative;\n\tborder-bottom: 1px solid #eee\n\n\t.score {\n\t\tletter-spacing: 0.5px;\n\t\tcolor: #f60;\n\t\tposition: absolute;\n\t\tfont-size: 1.1em;\n\t\tfont-weight: 700;\n\t\ttop: 50%;\n\t\tleft: 0;\n\t\twidth: 80px;\n\t\tmargin-top: -10px;\n\t\ttext-align: center;\n\t\t}\n\t.meta, .host {\n\t\tfont-size: .85em;\n\t\tcolor: #828282;\n\t\ta {\n\t\t\tcolor: #828282;\n\t\t\ttext-decoration: underline;\n\t\t\t&:hover {\n\t\t\t\tcolor: #ff6600\n\t\t\t}\n\t\t}\n\t}\n\t@media (max-width: 600px) {\n\t\tpadding: 20px 30px 20px 60px;\n\t\t.score {\n\t\twidth: 60px;\n\t\t}\n\t}\n"]);return T=function(){return t},t}var F=v.a.div(T());function Q(t){var e=Z(t.id);return r.a.createElement(F,null,r.a.createElement("span",{className:"score"},e.score),r.a.createElement("span",null,r.a.createElement("a",{href:e.url},e.title),e.url?r.a.createElement("span",{className:"host"}," (".concat(G(e.url),")")):null),r.a.createElement("br",null),r.a.createElement("span",{className:"meta"},"by ",e.by," ",I(e.time)," | ",r.a.createElement(x.a,{to:"/item/".concat(e.id)},e.descendants?"".concat(e.descendants," comments"):"discuss")))}function U(){var t=Object(p.a)(["\n\tposition: relative;\n\t\n\t.list-nav {\n\t\tbackground-color: #fff;\n\t\tborder-radius: 2px;\n\t\tpadding: 15px 30px;\n\t\tposition: fixed;\n\t\ttext-align: center;\n\t\ttop: 55px;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tz-index: 998\n\t\tbox-shadow: 0 1px 2px rgba(0,0,0,.1);\n\n\t\ta {\n\t\t\tmargin: 0 1em;\n\t\t}\n\t}\n\n\t.list {\n\t\tpadding-top: 100px;\n\t\tposition: absolute;\n\t\tmargin: 30px 0\n\t}\n\t@media (max-width: 600px) {\n\t\t.list {\n\t\t\tmargin: 10px 0\n\t\t}\n\t}\n\t.disabled {\n\t\tpointer-events: none;\n\t\tcolor: #d3d3d3;\n\t}\n"]);return U=function(){return t},t}var W=v.a.div(U()),R=function(t){var e=t.filter,n=t.page,a=t.maxPages;return r.a.createElement("div",{className:"list-nav"},r.a.createElement(x.a,{to:"/".concat(e,"/").concat(n-1),className:n<=1?"disabled":null},"< prev"),r.a.createElement("span",null,n,"/",a),r.a.createElement(x.a,{to:"/".concat(e,"/").concat(Number(n)+1),className:n>=a?"disabled":null},"next >"))};function Y(t){t.history;var e=t.match;console.log(e.params);var n=e.params.filter||"top",a=e.params.page||1,o=P(n,a),i=Object(y.a)(o,2),c=i[0],l=i[1],s=L();return"jobs"===n&&(c=s.map(function(t){return t.objectID}).concat(c)),a>l||a<1?r.a.createElement(h.a,{to:"/".concat(n)}):r.a.createElement(W,{style:{position:"relative"}},l>1?r.a.createElement(R,{filter:n,page:a,maxPages:l}):null,r.a.createElement("div",{className:"list"},c.length>0&&c.map(function(t){return r.a.createElement(Q,{id:t,key:t})})))}var V=n(25),J=n.n(V);function q(){var t=Object(p.a)(["\n\t","\n\tmargin-left: 1.25em;\n"]);return q=function(){return t},t}function K(){var t=Object(p.a)(["\n  background-color: #fff;\n  border-top: 1px solid #eee;\n  position: relative;\n  .by, .text, .toggle {\n    font-size: .9em;\n\tmargin: 1em 0;\n  }\n  .by {\n    color: #828282;\n\ta {\n      color: #828282;\n      text-decoration: underline;\n\t}\n  }\n  .text {\n\toverflow-wrap: break-word;\n\tword-wrap: break-word;\n\ta:hover {\n      color: #ff6600;\n\t}\n\tpre {\n\t  white-space: pre-wrap;\n\t}\n  }\n  .toggle {\n\tbackground-color: #fffbf2;\n\tpadding: .3em .5em;\n\tborder-radius: 4px;\n\t&.open {\n\t\tbackground-color: transparent;\n\t}\n  }\n"]);return K=function(){return t},t}var X=v.a.div(K()),_=v.a.div(q(),function(t){return t.open?null:"display: none;"});function $(t){var e=t.open,n=t.onClick,a=t.kidCount;return r.a.createElement("span",{className:"toggle ".concat(e?"open":null),onClick:n},e?"[-]":"[+".concat(a+1,"]"))}function tt(t){var e=Z(t.id),n=e.by,o=e.time,i=e.text,c=e.kids,l=void 0===c?[]:c,s=e.deleted,m=e.dead,u=Object(a.useState)(!0),p=Object(y.a)(u,2),d=p[0],f=p[1];return s?(l.length&&console.log("Deleted has children!"),r.a.createElement(X,null,r.a.createElement("div",{className:"by"},"[deleted]"))):m?(l.length&&console.log("Dead has children!"),null):r.a.createElement(X,null,r.a.createElement("div",{className:"by toggle ".concat(d?"open":null)},n,o&&I(o)," ago",r.a.createElement($,{open:d,onClick:function(){f(!d)},kidCount:l.length})),r.a.createElement(_,{open:d},r.a.createElement("div",{className:"text"},i&&J()(i)),l.length?l.map(function(t){return r.a.createElement(tt,{key:t,id:t})}):null))}function et(){var t=Object(p.a)(["\n\tbackground-color: #fff;\n\tmargin-top: 10px;\n\tpadding: 0 2em .5em;\n\n\t.comments-header {\n\t\tmargin: 0;\n\t\tfont-size: 1.1em;\n\t\tpadding: 1em 0;\n\t\tposition: relative;\n\t}\n\n\t@media (max-width: 600px) {\n\t\tpadding: 0em 0.5em .5em\n\t\tcode {\n\t\t\twhite-space: pre-line;\n\t\t\tfont-size: 12px;\n\t}\n\t}\n\n"]);return et=function(){return t},t}function nt(){var t=Object(p.a)(["\n  background-color: #fff;\n  padding: 1.8em 2em 1em;\n  box-shadow: 0 1px 2px rgba(0,0,0,.1);\n\tpadding-top: 55px;\n\tposition: relative;\n\tmargin: 30px 0;\n\n  a {\n\tcolor: #34495e;\n  }\n  h1 {\n    display: inline;\n    font-size: 1.5em;\n    margin: 0;\n    margin-right: .5em;\n  }\n  .host, .meta, .meta a {\n    color: #828282;\n  }\n  .meta a {\n\ttext-decoration: underline;\n\t}\n  @media (max-width: 600px) {\n\tmargin: 10px 0;\n\tpadding-top: 75px\n\th1 {\n\t font-size: 1.25em;\n\t}\n  }\n"]);return nt=function(){return t},t}var at=v.a.div(nt()),rt=v.a.div(et());function ot(t){var e=t.url,n=t.title;return console.log(e),r.a.createElement("span",null,r.a.createElement("a",{href:e},r.a.createElement("h1",null,n)),r.a.createElement("a",{className:"host",href:e},"(",G(e),")"))}function it(t){var e=Z(t.match.params.id),n=e.title,a=e.by,o=e.url,i=e.score,c=e.time,l=e.text,s=e.kids,m=void 0===s?[]:s,u=e.descendants;return r.a.createElement("div",null,r.a.createElement(at,null,o?r.a.createElement(ot,{url:o,title:n}):r.a.createElement("h1",null,n),r.a.createElement("p",{className:"meta"},i&&i," points | by ",a&&a," ",c&&I(c)," ago"),l?r.a.createElement("div",{className:"ask-text"},J()(l)):null),r.a.createElement(rt,null,r.a.createElement("div",{className:"comments-header"},u&&u>0?"".concat(u," comments"):"No comments"),m.length?m.map(function(t){return r.a.createElement(tt,{key:t,id:t})}):null))}function ct(){var t=Object(p.a)(["\n\tmax-width: 800px;\n\tmargin: 0 auto;\n\tposition: relative;\n"]);return ct=function(){return t},t}var lt=v.a.div(ct()),st=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(lt,null,r.a.createElement(f.a,null,r.a.createElement(g.a,{exact:!0,path:"/",component:Y}),r.a.createElement(g.a,{path:"/:filter(top|jobs|new|show|ask)/:page?",component:Y}),r.a.createElement(g.a,{exact:!0,path:"/item/:id",component:it}),r.a.createElement(h.a,{to:"/"})))))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(st,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},58:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAiRJREFUSA1j/A8EDAMAmAbATrCVLDCLP6Qawpg0pQVmnwebP2A+HjCL4UGNLXyZxEUYGIUlwVL/3z5n+PfyDTZlCDE2ZgZmFS0I//8/hr/XryLk0Fh4LWZgZmbgzV/AwMDExPDvwyuGT9VeDAy//qIZgeCye8YxcPrkgQW+75qN12K8Qf3v2UuG7/uAFgMBk4AYA5tHDJiNjWAU4mPg8MgES/37/Jbh56ZZ2JTBxfBaDFL1a+MMhn9f3oM1cHpkMTAK8sE1IzM4wioZGFlYwULfljcwMPz8gyyNwSZo8f8fvxm+rWgCa2RkZWPgCC/HMIRZVY2B3dgDLP779mmGP6ePYKhBFyBoMUjDn5MHGH7fg+Q/dmMvYAJSQZjDxMjAGQ1xGMO/fwzfF9cg5PCwiLIYpB9sILR05YwCWsTICDaW1dqdgUVaHcwGpYd/z1+B2YQIoi3+9+QZw48Di8HmschqMrBauzIwcrAxcAZDgv7f53cMP4HpgVhAtMUgA3+un8rw7+sHsNmcwZUMHJFlDEzcAmD+t5XAUACmB2IBSRb///6L4fvqVrDZTDwCDOxWwWD277vngOngILF2QvSTpBqo+PexvQx/HlxGaAPG+/fF1Qg+kSySfAw2E2TRuk648T/PbGH49/QFnE8sg3SLgSb///oRbv5/YKIiB5BlMTkWoesZtRg9RGjGH3lBjb8FgiOg/z16wkBpq3TkBfWA+ZhxxPWdACF6m6mcsEGuAAAAAElFTkSuQmCC"},61:function(t,e,n){t.exports=n(115)},66:function(t,e,n){},99:function(t,e){}},[[61,2,1]]]);
//# sourceMappingURL=main.0d689741.chunk.js.map