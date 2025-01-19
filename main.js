(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>l});var a=t(354),o=t.n(a),r=t(314),i=t.n(r),c=t(417),s=t.n(c),d=new URL(t(152),t.b),p=i()(o());p.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap);"]);var A=s()(d);p.push([n.id,`*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n\n    color: white;\n    background: no-repeat center/100% url(${A});\n    font-family: "Quicksand", "Roboto", Arial, Helvetica, sans-serif;\n\n    padding: 16px;\n}\n\na:link {\n    color: inherit;\n}\n\na:hover {\n    color: aquamarine;\n    text-decoration: none;\n}\n\na:visited {\n    color: aqua;\n}\n\n#header,\n#footer {\n    font-size: 24px;\n    background-color: rgba(0, 0, 0, 65%);\n    padding: 16px;\n}\n\n.nav {\n    display: flex;\n    gap: 16px;\n}\n\n.nav-button {\n    font-size: inherit;\n    font-family: inherit;\n    color: inherit;\n    background-color: transparent;\n    padding: 8px;\n    border: none;\n    border-bottom: 1px solid transparent;\n    cursor: pointer;\n    transition: .3s border-bottom ease, .05s transform ease;\n    flex: 1;\n}\n\n.nav-button.active {\n    border-bottom-color: white;\n}\n\n.nav-button:hover {\n    border-bottom-color: white;\n}\n\n.nav-button:active {\n    transform: translateY(2px);\n}\n\n\n#content {\n    width: 70vw;\n    min-height: 70vh;\n    background-color: rgba(0, 0, 0, .6);\n    margin: 16px;\n    padding: 16px;\n}\n\n.wrapper {\n    display: grid;\n    gap: 48px;\n}\n\n.desc {\n    font-size: 24px;\n}\n\n.card-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 16px;\n}\n\n.card {\n    display: flex;\n    gap: 12px;\n}\n\n.card-image {\n    width: 100px;\n    height: auto;\n    border-radius: 8px;\n}\n\n.card-text {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.card-name {\n    display: flex;\n    justify-content: space-between;\n}\n\n\n#footer {\n    display: flex;\n    justify-content: center;\n    gap: 8px;\n}\n`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAGA;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;;IAET,YAAY;IACZ,yEAA4G;IAC5G,gEAAgE;;IAEhE,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,WAAW;AACf;;AAEA;;IAEI,eAAe;IACf,oCAAoC;IACpC,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,cAAc;IACd,6BAA6B;IAC7B,YAAY;IACZ,YAAY;IACZ,oCAAoC;IACpC,eAAe;IACf,uDAAuD;IACvD,OAAO;AACX;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;AAC9B;;;AAGA;IACI,WAAW;IACX,gBAAgB;IAChB,mCAAmC;IACnC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,QAAQ;AACZ",sourcesContent:['@import url(\'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap\');\n\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n\n    color: white;\n    background: no-repeat center/100% url("./components/assets/images/clem-onojeghuo-zlABb6Gke24-unsplash.webp");\n    font-family: "Quicksand", "Roboto", Arial, Helvetica, sans-serif;\n\n    padding: 16px;\n}\n\na:link {\n    color: inherit;\n}\n\na:hover {\n    color: aquamarine;\n    text-decoration: none;\n}\n\na:visited {\n    color: aqua;\n}\n\n#header,\n#footer {\n    font-size: 24px;\n    background-color: rgba(0, 0, 0, 65%);\n    padding: 16px;\n}\n\n.nav {\n    display: flex;\n    gap: 16px;\n}\n\n.nav-button {\n    font-size: inherit;\n    font-family: inherit;\n    color: inherit;\n    background-color: transparent;\n    padding: 8px;\n    border: none;\n    border-bottom: 1px solid transparent;\n    cursor: pointer;\n    transition: .3s border-bottom ease, .05s transform ease;\n    flex: 1;\n}\n\n.nav-button.active {\n    border-bottom-color: white;\n}\n\n.nav-button:hover {\n    border-bottom-color: white;\n}\n\n.nav-button:active {\n    transform: translateY(2px);\n}\n\n\n#content {\n    width: 70vw;\n    min-height: 70vh;\n    background-color: rgba(0, 0, 0, .6);\n    margin: 16px;\n    padding: 16px;\n}\n\n.wrapper {\n    display: grid;\n    gap: 48px;\n}\n\n.desc {\n    font-size: 24px;\n}\n\n.card-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 16px;\n}\n\n.card {\n    display: flex;\n    gap: 12px;\n}\n\n.card-image {\n    width: 100px;\n    height: auto;\n    border-radius: 8px;\n}\n\n.card-text {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.card-name {\n    display: flex;\n    justify-content: space-between;\n}\n\n\n#footer {\n    display: flex;\n    justify-content: center;\n    gap: 8px;\n}\n'],sourceRoot:""}]);const l=p},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);a&&i[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),r="/*# ".concat(o," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var r={},i=[],c=0;c<n.length;c++){var s=n[c],d=a.base?s[0]+a.base:s[0],p=r[d]||0,A="".concat(d," ").concat(p);r[d]=p+1;var l=t(A),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(u);else{var m=o(u,a);a.byIndex=c,e.splice(c,0,{identifier:A,updater:m,references:1})}i.push(A)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=a(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var c=t(r[i]);e[c].references--}for(var s=a(n,o),d=0;d<r.length;d++){var p=t(r[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}r=s}}},659:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},152:(n,e,t)=>{n.exports=t.p+"92d476265039e5d27103.webp"}},e={};function t(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={id:a,exports:{}};return n[a](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=a[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var a=t(72),o=t.n(a),r=t(825),i=t.n(r),c=t(659),s=t.n(c),d=t(56),p=t.n(d),A=t(540),l=t.n(A),u=t(113),m=t.n(u),h=t(208),f={};f.styleTagTransform=m(),f.setAttributes=p(),f.insert=s().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=l(),o()(h.A,f),h.A&&h.A.locals&&h.A.locals;const b=function(){const n=document.createElement("div");n.className="wrapper";const e=document.createElement("h1");e.className="heading",e.textContent='Welcome to "The Gourmet"';const t=document.createElement("p");return t.className="desc",t.textContent='\n        Welcome to "The Gourmet," where every moment is a celebration of\n        tasty food mixed with warm hospitality. Whether you\'re here for\n        a cozy dinner or a quick bite, we promise you taste of our\n        traditional cuisine.\n    ',n.appendChild(e),n.appendChild(t),n},g=t.p+"a27420ced99a3c008b4c.webp",C=t.p+"f746e238028f87636271.webp",v=t.p+"b75733b93cb69e2b2f38.webp",x=t.p+"d09d29d7a9e0426626c2.webp",y=t.p+"8001acca663749abe3ff.webp";new class{#n;#e;#t;constructor(){this.#t=b(),this.#a(),this.#o(),this.#r()}#a(){this.#n=document.querySelector("#header"),this.#e=document.querySelector("#content")}#o(){this.#n.addEventListener("click",this.#i.bind(this))}#r(){this.#e.textContent="",this.#e.appendChild(this.#t)}#i(n){if(n.target.className.includes("nav-button")){if(n.target.className.includes("active"))return;const e=n.target.parentNode.querySelector(".active");e.className=e.className.replace(" active",""),n.target.className+=" active","home"===n.target.id?this.#c():"menu"===n.target.id?this.#s():"about"===n.target.id&&this.#d()}}#c(){this.#t=b(),this.#r()}#s(){this.#t=function(){const n=[{name:"Biryani",cost:4,description:"A fragrant rice dish cooked with tender meat,\n            aromatic spices, and herbs.",image:g},{name:"Nihari",cost:7,description:"A rich, slow-cooked stew made with succulent\n            beef or lamb, infused with spices.",image:C},{name:"Karahi",cost:5,description:"A spicy curry prepared with tomatoes, garlic,\n            ginger, and your choice of chicken or mutton.",image:v},{name:"Haleem",cost:2,description:"A hearty blend of wheat, barley, lentils, and\n            meat, slow-cooked to perfection.",image:x},{name:"Chapli Kebab",cost:8,description:"Flavorful minced meat patties, seasoned with\n            spices and herbs.",image:y}],e=document.createElement("div");e.className="wrapper";const t=document.createElement("h1");t.className="heading",t.textContent="Menu";const a=document.createElement("div");a.className="card-container";for(let e of function*(n){for(let e in n){let t=n[e];const a=document.createElement("div");a.className="card";const o=document.createElement("img");o.className="card-image",o.src=t.image,o.alt=t.description,o.width=100;const r=document.createElement("div");r.className="card-text";const i=document.createElement("div");i.className="card-name";const c=document.createElement("h3");c.textContent=t.name;const s=document.createElement("span");s.textContent=`$${t.cost}`,i.appendChild(c),i.appendChild(s);const d=document.createElement("p");d.textContent=t.description,r.appendChild(i),r.appendChild(d),a.appendChild(o),a.appendChild(r),yield a}}(n))a.appendChild(e);return e.appendChild(t),e.appendChild(a),e}(),this.#r()}#d(){this.#t=function(){const n=document.createElement("div");n.className="wrapper";const e=document.createElement("h1");e.className="heading",e.textContent="About Us";const t=document.createElement("p");return t.className="desc",t.textContent="\n        With a passion for excellence, we aim to provide an atmosphere\n        that feels like home, making every visit special and memorable.\n    ",n.appendChild(e),n.appendChild(t),n}(),this.#r()}}})();
//# sourceMappingURL=main.js.map