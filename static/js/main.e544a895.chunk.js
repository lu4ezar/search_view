(this.webpackJsonpsearch_view=this.webpackJsonpsearch_view||[]).push([[0],{20:function(e,t,a){e.exports=a(44)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),o=a(3),s=(a(25),a(26),a(4)),i=(a(27),a(28),function(e){var t=e.onClick,a=e.collapsed;return l.a.createElement("button",{className:a?"button":"button opened",onClick:t},l.a.createElement("div",{className:"nav-button"}))}),m=function(){return l.a.createElement("div",null,l.a.createElement(o.c,{exact:!0,to:"/",activeClassName:"active"},"Home"),l.a.createElement(o.c,{exact:!0,to:"search",activeClassName:"active"},"Search"),l.a.createElement(o.c,{exact:!0,to:"gallery",activeClassName:"active"},"Gallery"))},u=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],r=t[1],c=function(){r(!a)};return l.a.createElement("header",null,l.a.createElement("div",{className:"container"},l.a.createElement("nav",null,l.a.createElement(m,null),l.a.createElement("div",{className:"nav-mobile"},l.a.createElement(i,{onClick:c,collapsed:a}),!a&&l.a.createElement("div",{className:"mobile-menu",onClick:c},l.a.createElement(m,null))))))},p=a(7),h=(a(34),function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"main-header"},"Home"),l.a.createElement("article",{className:"description"},l.a.createElement("p",null,"This is a simple, mobile-friendly demo"," ",l.a.createElement("a",{href:"https://github.com/lu4ezar/search_view"},"app")," written in"," ",l.a.createElement("a",{href:"https://www.typescriptlang.org/"},"TypeScript"),". It was bootstrapped with"," ",l.a.createElement("a",{href:"https://github.com/facebook/create-react-app"},"Create React App"),". ",l.a.createElement("a",{href:"https://sass-lang.com/"},"SCSS")," was used for styling. Navigation was implemented with"," ",l.a.createElement("a",{href:"https://github.com/ReactTraining/react-router"},"React Router"),". No state management tools were involved, just"," ",l.a.createElement("a",{href:"https://reactjs.org/docs/hooks-reference.html#usestate"},"useState")," ","hook. The app consists of 2 parts:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/search"},l.a.createElement("h3",null,"part I . search ")),l.a.createElement("p",null,l.a.createElement("em",null,"Enter id ",l.a.createElement("span",null,"(int, [1..493])"),", hit 'ok' and get card with one of \"Rick and Morty\"'s character. Find your favorite one!")),l.a.createElement("p",null,"All the data comes from"," ",l.a.createElement("a",{href:"https://rickandmortyapi.com/"},"Rick and Morty API")," via"," ",l.a.createElement("a",{href:"https://graphql.org/"},"GraphQl")," query. No library was used, bare manual"," ",l.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"fetch")," ","call from custom ",l.a.createElement("span",{title:"src/hooks/useFetch.ts"},"useFetch")," ","hook. It handles ",l.a.createElement("em",null,"loading")," and ",l.a.createElement("em",null,"error")," states and uses"," ",l.a.createElement("em",null,"async/await")," syntax. Types were auto-generated with"," ",l.a.createElement("a",{href:"https://www.npmjs.com/package/@graphql-codegen/cli"},"@graphql-codegen/cli"),".")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/gallery"},l.a.createElement("h3",null,"part II . gallery")),l.a.createElement("p",null,l.a.createElement("em",null,"Get some image urls and create your own gallery.")),l.a.createElement("p",null,"Also, you can use buttons placed below input to get hardcoded urls of hi-res images from"," ",l.a.createElement("a",{href:"https://unsplash.com"},"unsplash.com"),". Click button once to insert link into input and submit it manually. Double-click will auto-submit image. Gallery layout was made with"," ",l.a.createElement("code",null,"display: grid;",l.a.createElement("br",null),"grid-template-areas: 'img img img';"))))))}),d=(a(35),function(e){var t=e.label,a=e.type,n=e.value,r=e.onChange,c=e.onSubmit,o=t.toLowerCase();return l.a.createElement("div",{className:"input"},l.a.createElement("form",null,l.a.createElement("label",{htmlFor:o},t),l.a.createElement("input",{id:o,type:a,value:n,onChange:function(e){var t=e.currentTarget.value;r(t)}}),l.a.createElement("input",{type:"submit",value:"Ok",onClick:function(e){e.preventDefault(),""!==n&&c(n)}})))}),E=(a(36),function(e){var t=e.src;return l.a.createElement("div",{className:"img-outer"},l.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",title:"view full image"},l.a.createElement("img",{key:t,className:"img",src:t,alt:""})))}),f=(a(37),function(e){var t=e.isLoading,a=e.data,n=e.error,r=function(){switch(!0){case!!n:return l.a.createElement("div",null,n);case t:return l.a.createElement("div",null,"Loading...");case null!=a:var e=a.character,r=e.name,c=e.species,o=e.status,s=e.origin,i=e.image;return l.a.createElement("div",{className:"card"},l.a.createElement(E,{src:i}),l.a.createElement("div",{className:"info"},l.a.createElement("h4",null,r),l.a.createElement("p",null,l.a.createElement("span",null,"Species: "),c),l.a.createElement("p",null,l.a.createElement("span",null,"Status: "),o),l.a.createElement("p",null,l.a.createElement("span",null,"Origin: "),null===s||void 0===s?void 0:s.name)));default:return null}}();return l.a.createElement("div",{className:"card-outer"},r)}),g=a(13),b=a.n(g),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0";return"\n\t{\n\t\tcharacter(id: ".concat(e,") {\n\t\t\tname\n\t\t\tspecies\n\t\t\tstatus\n\t\t\torigin {\n\t\t\t\tname\n\t\t\t}\n\t\t\timage\n\t\t}\n\t}\n")},y=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(null),c=Object(s.a)(r,2),o=c[0],i=c[1],m=Object(n.useState)(null),u=Object(s.a)(m,2),p=u[0],h=u[1],d=Object(n.useCallback)((function(e){var t,n;return b.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return l(!0),h(null),r.prev=2,"https://rickandmortyapi.com/graphql",t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:v(e)})},r.next=7,b.a.awrap(fetch("https://rickandmortyapi.com/graphql",t).then((function(e){return e.json()})));case 7:if(!(n=r.sent).errors){r.next=10;break}throw new Error("GraphQL Error");case 10:i(n.data),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(2),h(r.t0.message);case 16:return r.prev=16,l(!1),r.finish(16);case 19:return r.abrupt("return",{isLoading:a,data:o,error:p});case 20:case"end":return r.stop()}}),null,null,[[2,13,16,19]])}),[o,p,a]);return[{isLoading:a,data:o,error:p},d]},k=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],c=y(),o=Object(s.a)(c,2),i=o[0],m=o[1];return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"main-header"},"Search"),l.a.createElement(d,{label:"character id:",value:a,type:"text",onChange:r,onSubmit:function(){m(a)}}),l.a.createElement(f,i))},w=a(19),N=(a(39),["https://images.unsplash.com/photo-1565234329639-27fd21c04edb","https://images.unsplash.com/photo-1554171275-74ed5cb916cc","https://images.unsplash.com/photo-1575367725486-4183db79e018","https://images.unsplash.com/photo-1543637942-8127d74e9d3d","https://images.unsplash.com/photo-1516908205727-40afad9449a8","https://images.unsplash.com/photo-1518365658347-c4906efc5636","https://images.unsplash.com/photo-1540155993474-052b670771fc","https://images.unsplash.com/photo-1507150080056-79542bdb9c59","https://images.unsplash.com/photo-1421977870504-378093748ae6","https://images.unsplash.com/photo-1455889267303-a5ec970d6d43","https://images.unsplash.com/photo-1522871631682-a54fc957080e"]),S=(a(40),function(e){var t=e.onClick,a=e.onSubmit,n=N.map((function(e,n){return l.a.createElement("button",{key:n,className:"test-img-btn",onClick:function(){return t(e)},onDoubleClick:function(){return a(e)},title:"click to set image link, double click to auto-submit"},"#".concat(n+1))}));return l.a.createElement("div",{className:"test-images"},n)}),j=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(s.a)(c,2),i=o[0],m=o[1],u=function(e){e&&(r([e].concat(Object(w.a)(a))),m(""))},p=function(e){return e.map((function(e){return l.a.createElement(E,{key:e,src:e})}))}(a);return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"main-header"},"Gallery"),l.a.createElement(d,{label:"Picture URL:",type:"url",value:i,onChange:m,onSubmit:u}),l.a.createElement(S,{onClick:m,onSubmit:u}),l.a.createElement("div",{className:"gallery"},p))},C=(a(41),function(){return l.a.createElement("div",{className:"container not-found"},l.a.createElement("div",null,"Not Found"),l.a.createElement("div",{className:"home-link"},l.a.createElement(o.b,{to:"/"},"Back to Homepage")))}),O=function(){return l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/"},l.a.createElement(h,null)),l.a.createElement(p.a,{path:"/search"},l.a.createElement(k,null)),l.a.createElement(p.a,{path:"/gallery"},l.a.createElement(j,null)),l.a.createElement(p.a,null,l.a.createElement(C,null)))},x=(a(42),function(){return l.a.createElement("main",null,l.a.createElement(O,null))}),I=(a(43),function(){return l.a.createElement("footer",null,l.a.createElement("a",{title:"open project's github page in new tab",href:"https://github.com/lu4ezar/search_view",target:"_blank",rel:"noopener noreferrer"},"https://github.com/lu4ezar"))}),T=function(){return l.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},l.a.createElement(u,null),l.a.createElement(x,null),l.a.createElement(I,null))};c.a.render(l.a.createElement(o.a,{basename:"/search_view"},l.a.createElement(T,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.e544a895.chunk.js.map