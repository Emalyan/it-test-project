(this["webpackJsonpfirst-test-project"]=this["webpackJsonpfirst-test-project"]||[]).push([[0],{10:function(e,n,t){"use strict";var r=t(32),a=t(14),o=t.n(a),i=t(6),c=t(4),u=i.b.model("Movie",{id:i.b.string,name:i.b.string,image:i.b.string,countries:i.b.string,vote:i.b.string,count_vote:i.b.string,actors:i.b.string,order:i.b.number}),s=i.b.model("Movies",{targetCardId:"",movies:i.b.array(u)}).actions((function(e){return{setTargetCardId:function(n){e.targetCardId=n},loadMovies:Object(i.a)(o.a.mark((function n(){var t,r,a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=sessionStorage.getItem("cardsPositions"),n.next=3,l();case 3:r=n.sent,t&&(a=JSON.parse(t),r.forEach((function(e){var n=a.find((function(n){return n.id===e.id}));n&&(e.order=n.order)}))),e.movies=r;case 6:case"end":return n.stop()}}),n)})))}})).actions((function(e){return{afterCreate:function(){e.loadMovies()}}})),l=function(){var e=Object(r.a)(o.a.mark((function e(){var n,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(c.c);case 2:return n=e.sent,e.next=5,n.json();case 5:return(t=e.sent).result.forEach((function(e,n){e.order=n+1})),e.abrupt("return",t.result);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=t(0),f=t.n(d),m=t(19);t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return g}));var v=f.a.createContext(null),p=function(){return s.create({})},b=function(e){var n=Object(m.b)(p);return f.a.createElement(v.Provider,{value:n},e.children)},g=function(){var e=Object(d.useContext)(v);if(!e)throw new Error("Error");return e}},12:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(8),i=t(10),c=t(19),u=t(17),s=t(2);function l(){var e=Object(s.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    font-size: 20px;\n    font-style: italic;\n    justify-content: center;\n"]);return l=function(){return e},e}var d={MoviesBoard:t(3).b.div(l())},f=Object(c.a)((function(){var e=Object(i.b)();return a.a.createElement(d.MoviesBoard,{id:"movies-board"},e.movies.map((function(e){return a.a.createElement(u.Card,{key:e.id,id:e.id,name:e.name,image:e.image,countries:e.countries,actors:e.actors,vote:e.vote,count_vote:e.count_vote,order:e.order})})))})),m=function(){return a.a.createElement(i.a,null,a.a.createElement(o.a,{path:"/gallery",component:f}))},v=function(){var e=document.getElementById("movies-board");if(null!=e){var n=[];e.childNodes.forEach((function(e){var t=e,r={id:t.id,order:+t.style.order};n.push(r)}));var t=JSON.stringify(n);sessionStorage.setItem("cardsPositions",t)}},p=function(e,n){var t=Date.now(),r=setInterval((function(){var a=e.style.order,o=n.style.order,i=Date.now()-t;if(i>=100)return e.style.order=o,n.style.order=a,n.style.transform="",e.style.transform="",void clearInterval(r);b({timePassed:i,firstElement:e,secondElement:n,orderFirstElement:+a,orderSecondElement:+o})}),5)},b=function(e){e.orderFirstElement>e.orderSecondElement+1?(e.firstElement.style.transform="translateY(-".concat(2.5*e.timePassed,"px)"),e.secondElement.style.transform="translateY(".concat(2.5*e.timePassed,"px)")):e.orderFirstElement+1<e.orderSecondElement?(e.firstElement.style.transform="translateY(".concat(2.5*e.timePassed,"px)"),e.secondElement.style.transform="translateY(-".concat(2.5*e.timePassed,"px)")):+e.orderFirstElement>+e.orderSecondElement?(e.firstElement.style.transform="translateX(-".concat(2*e.timePassed,"px)"),e.secondElement.style.transform="translateX(".concat(2*e.timePassed,"px)")):+e.orderFirstElement<+e.orderSecondElement&&(e.firstElement.style.transform="translateX(".concat(2*e.timePassed,"px)"),e.secondElement.style.transform="translateX(-".concat(2*e.timePassed,"px)"))};t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return v})),t.d(n,"c",(function(){return p}))},17:function(e,n,t){"use strict";var r=t(28);t.d(n,"Card",(function(){return r.a}));var a=t(27);t.o(a,"MoviesBoardRoute")&&t.d(n,"MoviesBoardRoute",(function(){return a.MoviesBoardRoute}))},18:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(2);function i(){var e=Object(o.a)(["\n  min-width: 120px;\n  height: 30px;\n  border-radius: 7px;\n  font-weight: 700;\n  cursor: pointer;\n  position: absolute;\n  bottom: 15px;\n  right: 15px;\n  border: none;\n  background: rgb(138, 200, 88)\n    linear-gradient(rgb(138, 200, 88), rgb(60, 200, 88));\n  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0),\n    inset 0 1px 2px rgba(0, 0, 0, 0), inset 0 0 0 60px rgba(255, 255, 0, 0);\n\n  &:hover {\n    background-color: #59f23a;\n    box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0),\n      inset 0 1px 2px rgba(0, 0, 0, 0), inset 0 0 0 60px rgba(255, 255, 0, 0.5);\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:active {\n    padding: 6px 8px 6px;\n    border-color: rgba(177, 159, 0, 1);\n    box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.1),\n      inset 0 1px 2px rgba(0, 0, 0, 0.3),\n      inset 0 0 0 60px rgba(255, 255, 0, 0.45);\n  }\n"]);return i=function(){return e},e}var c={Button:t(3).b.button(i())},u=function(e){return a.a.createElement(c.Button,null,e.text)};t.d(n,"a",(function(){return u}))},27:function(e,n){},28:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(18),i=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,e.name),a.a.createElement("div",null,e.countries),a.a.createElement("div",null,e.count_vote),a.a.createElement("div",null,"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 ".concat(e.vote)),""!==e.actors[0]&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,"\u0410\u043a\u0442\u0435\u0440\u044b:"),a.a.createElement("ul",null,e.actors.map((function(e,n){return a.a.createElement("li",{key:n},e)})))))},c=t(4),u=t(12),s=function(e,n){var t=document.getElementById("main");null!=t&&(e.style.left=n.pageX-e.offsetWidth/2+"px",e.style.top=n.pageY+t.scrollTop-e.offsetHeight+c.b+"px")},l=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";e.style.opacity=n,document.querySelectorAll('div[draggable="true"]').forEach((function(e){if(null!=e.firstChild&&null!==e.lastChild){var n=e.firstChild,a=e.lastChild;n.style.display=t,a.style.display=r}}))},d=t(10),f=t(2),m=t(3);function v(){var e=Object(f.a)(["\n  display: none;\n"]);return v=function(){return e},e}function p(){var e=Object(f.a)(["\n  display: none;\n  padding: 10px;\n\n  ",":hover & {\n    display: block;\n  }\n\n  div {\n    padding: 2px 0;\n  }\n\n  ul {\n    margin: 5px 0;\n  }\n\n  h3 {\n    margin: 0;\n  }\n"]);return p=function(){return e},e}function b(){var e=Object(f.a)(["\n  width: inherit;\n  height: inherit;\n  border-radius: 13px;\n\n  ",":hover & {\n    display: none;\n  }\n\n  #clone: focus {\n    display: none;\n  }\n"]);return b=function(){return e},e}function g(){var e=Object(f.a)(["\n  position: relative;\n  margin: 15px 25px;\n  width: 250px;\n  height: 400px;\n  border: 2px solid #8ac858;\n  border-radius: 15px;\n  word-break: break-word;\n  cursor: grab;\n"]);return g=function(){return e},e}var h=m.b.div(g()),E={Img:m.b.img(b(),h),Card:h,Description:m.b.div(p(),h),Id:m.b.div(v())};t.d(n,"a",(function(){return x}));var x=function(e){var n=Object(d.b)(),t=function(e){return e.replace(/<[^>]+>/g,"").split(", ")}(e.actors),r=e.image.replace("sm_","");return a.a.createElement(E.Card,{id:e.id,draggable:!0,onDragStart:function(e){var t=e.target,r=function(e){var n=e.cloneNode(!0);return n.style.position="absolute",n.style.pointerEvents="none",n.setAttribute("id","clone"),n}(t);t.parentNode&&t.parentNode.appendChild(r),s(r,e),l(t,"0.5","block","none"),n.setTargetCardId(t.id),e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("data",t.id);var a=document.createElement("div");e.dataTransfer.setDragImage(a,0,0)},onDragOver:function(e){e.preventDefault()},onDragEnter:function(e){var t=e.target.parentNode;if(+t.id&&""!==n.targetCardId){var r=document.getElementById(n.targetCardId);r&&t!==r&&Object(u.c)(t,r)}},onDragEnd:function(e){var n=e.target;l(n);var t=document.getElementById("clone"),r=document.getElementById("movies-board");null!==r&&null!==t&&r.removeChild(t),Object(u.b)()},onDrag:function(e){var n=document.getElementById("clone");null!==n&&s(n,e)},style:{order:e.order}},a.a.createElement(E.Img,{src:"".concat(c.d).concat(r)}),a.a.createElement(E.Description,null,a.a.createElement(i,{name:e.name,countries:e.countries,count_vote:e.count_vote,vote:e.vote,actors:t}),a.a.createElement(o.a,{text:"hello"})))}},31:function(e,n,t){"use strict";var r=t(17);t.o(r,"MoviesBoardRoute")&&t.d(n,"MoviesBoardRoute",(function(){return r.MoviesBoardRoute}));var a=t(12);t.d(n,"MoviesBoardRoute",(function(){return a.a}));t(18)},37:function(e,n,t){e.exports=t(49)},4:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return a})),t.d(n,"d",(function(){return o})),t.d(n,"c",(function(){return i}));var r=50,a=50,o="https://kinoafisha.ua",i="https://kinoafisha.herokuapp.com/api/kinoafisha_load"},49:function(e,n,t){"use strict";t.r(n);var r=t(21),a=t(0),o=t.n(a),i=t(13),c=t.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=t(8),s=t(2),l=t(3),d=t(4);function f(){var e=Object(s.a)(["\n  overflow: auto;\n  position: fixed;\n  height: calc(100% - (","px + ","px));\n  background-color: #f4f4f4;\n"]);return f=function(){return e},e}var m={Body:l.b.main(f(),d.a,d.b)},v=function(e){return o.a.createElement(m.Body,{id:"main"},e.children)};function p(){var e=Object(s.a)(["\n  height: ","px;\n  background-color: #8ac858;\n"]);return p=function(){return e},e}var b={Header:l.b.header(p(),d.b)},g=function(){return o.a.createElement(b.Header,null)};function h(){var e=Object(s.a)(["\n  width: 100%;\n  height: ","px;\n  background-color: #8ac858;\n  position: absolute;\n  bottom: 0;\n"]);return h=function(){return e},e}var E={Footer:l.b.footer(h(),d.a)},x=function(){return o.a.createElement(E.Footer,null)},y=t(31);function w(){var e=Object(s.a)(["\n    body {\n        margin: 0;        \n    }             \n"]);return w=function(){return e},e}var j=Object(l.a)(w()),O=function(){return o.a.createElement(u.c,null,o.a.createElement(y.MoviesBoardRoute,null))};c.a.render(o.a.createElement(r.a,null,o.a.createElement((function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(j,null),o.a.createElement(g,null),o.a.createElement(v,null,o.a.createElement(O,null)),o.a.createElement(x,null))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.79ef66db.chunk.js.map