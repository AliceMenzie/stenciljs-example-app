let e,t,l,n=!1,s=!1,o=!1,i=!1;const r="undefined"!=typeof window?window:{},c=r.document||{head:{}},f={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,l,n)=>e.addEventListener(t,l,n),rel:(e,t,l,n)=>e.removeEventListener(t,l,n),ce:(e,t)=>new CustomEvent(e,t)},a=e=>Promise.resolve(e),u=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),$={},d="http://www.w3.org/1999/xlink",h=new WeakMap,p=(e,t,l)=>{let n=we.get(e);u&&l?(n=n||new CSSStyleSheet,n.replace(t)):n=t,we.set(e,n)},y=(e,t)=>{let l=m(t),n=we.get(l);if(e=11===e.nodeType?e:c,n)if("string"==typeof n){let t,s=h.get(e=e.head||e);s||h.set(e,s=new Set),s.has(l)||(e.host&&(t=e.querySelector(`[sty-id="${l}"]`))?t.innerHTML=n:(t=c.createElement("style"),t.innerHTML=n,e.insertBefore(t,e.querySelector("link"))),s&&s.add(l))}else e.adoptedStyleSheets.includes(n)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,n]);return l},m=e=>"sc-"+e.o,w=e=>e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{"),b={},k=e=>"object"==(e=typeof e)||"function"===e,g=(e,t,...l)=>{let n=null,s=null,o=null,i=!1,r=!1,c=[];const f=t=>{for(let l=0;l<t.length;l++)n=t[l],Array.isArray(n)?f(n):null!=n&&"boolean"!=typeof n&&((i="function"!=typeof e&&!k(n))&&(n+=""),i&&r?c[c.length-1].i+=n:c.push(i?v(null,n):n),r=i)};if(f(l),t){t.key&&(s=t.key),t.name&&(o=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,c,j);const a=v(e,null);return a.u=t,c.length>0&&(a.$=c),a.h=s,a.p=o,a},v=(e,t)=>({t:0,m:e,i:t,k:null,$:null,u:null,h:null,p:null}),S={},j={forEach:(e,t)=>e.map(x).forEach(t),map:(e,t)=>e.map(x).map(t).map(C)},x=e=>({vattrs:e.u,vchildren:e.$,vkey:e.h,vname:e.p,vtag:e.m,vtext:e.i}),C=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),g(e.vtag,t,...e.vchildren||[])}const t=v(e.vtag,e.vtext);return t.u=e.vattrs,t.$=e.vchildren,t.h=e.vkey,t.p=e.vname,t},M=(e,t,l,n,s,o)=>{if(l!==n){let i=he(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,s=P(l),o=P(n);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in l)n&&null!=n[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in n)l&&n[t]===l[t]||(t.includes("-")?e.style.setProperty(t,n[t]):e.style[t]=n[t])}else if("key"===t);else if("ref"===t)n&&n(e);else if(i||"o"!==t[0]||"n"!==t[1]){const r=k(n);if((i||r&&null!==n)&&!s)try{if(e.tagName.includes("-"))e[t]=n;else{let s=null==n?"":n;"list"===t?i=!1:null!=l&&e[t]==s||(e[t]=s)}}catch(e){}let f=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,f=!0),null==n||!1===n?!1===n&&""!==e.getAttribute(t)||(f?e.removeAttributeNS(d,t):e.removeAttribute(t)):(!i||4&o||s)&&!r&&(n=!0===n?"":n,f?e.setAttributeNS(d,t,n):e.setAttribute(t,n))}else t="-"===t[2]?t.slice(3):he(r,c)?c.slice(2):c[2]+t.slice(3),l&&f.rel(e,t,l,!1),n&&f.ael(e,t,n,!1)}},O=/\s/,P=e=>e?e.split(O):[],R=(e,t,l,n)=>{const s=11===t.k.nodeType&&t.k.host?t.k.host:t.k,o=e&&e.u||b,i=t.u||b;for(n in o)n in i||M(s,n,o[n],void 0,l,t.t);for(n in i)M(s,n,o[n],i[n],l,t.t)},U=(s,i,r,f)=>{let a,u,$,d=i.$[r],h=0;if(n||(o=!0,"slot"===d.m&&(e&&f.classList.add(e+"-s"),d.t|=d.$?2:1)),null!==d.i)a=d.k=c.createTextNode(d.i);else if(1&d.t)a=d.k=c.createTextNode("");else if(a=d.k=c.createElement(2&d.t?"slot-fb":d.m),R(null,d,!1),null!=e&&a["s-si"]!==e&&a.classList.add(a["s-si"]=e),d.$)for(h=0;h<d.$.length;++h)u=U(s,d,h,a),u&&a.appendChild(u);return a["s-hn"]=l,3&d.t&&(a["s-sr"]=!0,a["s-cr"]=t,a["s-sn"]=d.p||"",$=s&&s.$&&s.$[r],$&&$.m===d.m&&s.k&&L(s.k,!1)),a},L=(e,t)=>{f.t|=1;const n=e.childNodes;for(let e=n.length-1;e>=0;e--){const s=n[e];s["s-hn"]!==l&&s["s-ol"]&&(W(s).insertBefore(s,D(s)),s["s-ol"].remove(),s["s-ol"]=void 0,o=!0),t&&L(s,t)}f.t&=-2},T=(e,t,n,s,o,i)=>{let r,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===l&&(c=c.shadowRoot);o<=i;++o)s[o]&&(r=U(null,n,o,e),r&&(s[o].k=r,c.insertBefore(r,D(t))))},E=(e,t,l,n,o)=>{for(;t<=l;++t)(n=e[t])&&(o=n.k,V(n),s=!0,o["s-ol"]?o["s-ol"].remove():L(o,!0),o.remove())},I=(e,t)=>e.m===t.m&&("slot"===e.m?e.p===t.p:e.h===t.h),D=e=>e&&e["s-ol"]||e,W=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,q=(e,t)=>{const l=t.k=e.k,n=e.$,s=t.$,o=t.i;let i;null===o?("slot"===t.m||R(e,t,!1),null!==n&&null!==s?((e,t,l,n)=>{let s,o,i=0,r=0,c=0,f=0,a=t.length-1,u=t[0],$=t[a],d=n.length-1,h=n[0],p=n[d];for(;i<=a&&r<=d;)if(null==u)u=t[++i];else if(null==$)$=t[--a];else if(null==h)h=n[++r];else if(null==p)p=n[--d];else if(I(u,h))q(u,h),u=t[++i],h=n[++r];else if(I($,p))q($,p),$=t[--a],p=n[--d];else if(I(u,p))"slot"!==u.m&&"slot"!==p.m||L(u.k.parentNode,!1),q(u,p),e.insertBefore(u.k,$.k.nextSibling),u=t[++i],p=n[--d];else if(I($,h))"slot"!==u.m&&"slot"!==p.m||L($.k.parentNode,!1),q($,h),e.insertBefore($.k,u.k),$=t[--a],h=n[++r];else{for(c=-1,f=i;f<=a;++f)if(t[f]&&null!==t[f].h&&t[f].h===h.h){c=f;break}c>=0?(o=t[c],o.m!==h.m?s=U(t&&t[r],l,c,e):(q(o,h),t[c]=void 0,s=o.k),h=n[++r]):(s=U(t&&t[r],l,r,e),h=n[++r]),s&&W(u.k).insertBefore(s,D(u.k))}i>a?T(e,null==n[d+1]?null:n[d+1].k,l,n,r,d):r>d&&E(t,i,a)})(l,n,t,s):null!==s?(null!==e.i&&(l.textContent=""),T(l,null,t,s,0,s.length-1)):null!==n&&E(n,0,n.length-1)):(i=l["s-cr"])?i.parentNode.textContent=o:e.i!==o&&(l.data=o)},A=e=>{let t,l,n,s,o,i,r=e.childNodes;for(l=0,n=r.length;l<n;l++)if(t=r[l],1===t.nodeType){if(t["s-sr"])for(o=t["s-sn"],t.hidden=!1,s=0;s<n;s++)if(i=r[s].nodeType,r[s]["s-hn"]!==t["s-hn"]||""!==o){if(1===i&&o===r[s].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==r[s].textContent.trim()){t.hidden=!0;break}A(t)}},F=[],H=e=>{let t,l,n,o,i,r,c=0,f=e.childNodes,a=f.length;for(;c<a;c++){if(t=f[c],t["s-sr"]&&(l=t["s-cr"])&&l.parentNode)for(n=l.parentNode.childNodes,o=t["s-sn"],r=n.length-1;r>=0;r--)l=n[r],l["s-cn"]||l["s-nr"]||l["s-hn"]===t["s-hn"]||(N(l,o)?(i=F.find((e=>e.g===l)),s=!0,l["s-sn"]=l["s-sn"]||o,i?i.v=t:F.push({v:t,g:l}),l["s-sr"]&&F.map((e=>{N(e.g,l["s-sn"])&&(i=F.find((e=>e.g===l)),i&&!e.v&&(e.v=i.v))}))):F.some((e=>e.g===l))||F.push({g:l}));1===t.nodeType&&H(t)}},N=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,V=e=>{e.u&&e.u.ref&&e.u.ref(null),e.$&&e.$.map(V)},_=e=>ue(e).S,z=(e,t)=>{t&&!e.j&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.j=t)))},B=(e,t)=>{if(e.t|=16,!(4&e.t))return z(e,e.C),Ce((()=>G(e,t)));e.t|=512},G=(e,t)=>{const l=e.M;let n;return t&&(n=Y(l,"componentWillLoad")),Z(n,(()=>J(e,l,t)))},J=async(e,t,l)=>{const n=e.S,s=n["s-rc"];l&&(e=>{const t=e.O,l=e.S,n=t.t,s=y(l.shadowRoot?l.shadowRoot:l.getRootNode(),t);10&n&&(l["s-sc"]=s,l.classList.add(s+"-h"))})(e);K(e,t),s&&(s.map((e=>e())),n["s-rc"]=void 0);{const t=n["s-p"],l=()=>Q(e);0===t.length?l():(Promise.all(t).then(l),e.t|=4,t.length=0)}},K=(i,r)=>{try{r=r.render&&r.render(),i.t&=-17,i.t|=2,((i,r)=>{const a=i.S,u=i.O,$=i.P||v(null,null),d=(e=>e&&e.m===S)(r)?r:g(null,null,r);if(l=a.tagName,u.R&&(d.u=d.u||{},u.R.map((([e,t])=>d.u[t]=a[e]))),d.m=null,d.t|=4,i.P=d,d.k=$.k=a.shadowRoot||a,e=a["s-sc"],t=a["s-cr"],n=0!=(1&u.t),s=!1,q($,d),f.t|=1,o){let e,t,l,n,s,o;H(d.k);let i=0;for(;i<F.length;i++)e=F[i],t=e.g,t["s-ol"]||(l=c.createTextNode(""),l["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=l,t));for(i=0;i<F.length;i++)if(e=F[i],t=e.g,e.v){for(n=e.v.parentNode,s=e.v.nextSibling,l=t["s-ol"];l=l.previousSibling;)if(o=l["s-nr"],o&&o["s-sn"]===t["s-sn"]&&n===o.parentNode&&(o=o.nextSibling,!o||!o["s-nr"])){s=o;break}(!s&&n!==t.parentNode||t.nextSibling!==s)&&t!==s&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),n.insertBefore(t,s))}else 1===t.nodeType&&(t.hidden=!0)}s&&A(d.k),f.t&=-2,F.length=0})(i,r)}catch(e){pe(e,i.S)}return null},Q=e=>{const t=e.S,l=e.M,n=e.C;64&e.t?Y(l,"componentDidUpdate"):(e.t|=64,ee(t),Y(l,"componentDidLoad"),e.U(t),n||X()),e.j&&(e.j(),e.j=void 0),512&e.t&&je((()=>B(e,!1))),e.t&=-517},X=()=>{ee(c.documentElement),je((()=>(e=>{const t=f.ce("appload",{detail:{namespace:"app"}});return e.dispatchEvent(t),t})(r)))},Y=(e,t,l)=>{if(e&&e[t])try{return e[t](l)}catch(e){pe(e)}},Z=(e,t)=>e&&e.then?e.then(t):t(),ee=e=>e.classList.add("hydrated"),te=(e,t,l,n,s,o,i)=>{let r,f,a,u;if(1===o.nodeType){for(r=o.getAttribute("c-id"),r&&(f=r.split("."),f[0]!==i&&"0"!==f[0]||(a={t:0,L:f[0],T:f[1],I:f[2],D:f[3],m:o.tagName.toLowerCase(),k:o,u:null,$:null,h:null,p:null,i:null},t.push(a),o.removeAttribute("c-id"),e.$||(e.$=[]),e.$[a.D]=a,e=a,n&&"0"===a.I&&(n[a.D]=a.k))),u=o.childNodes.length-1;u>=0;u--)te(e,t,l,n,s,o.childNodes[u],i);if(o.shadowRoot)for(u=o.shadowRoot.childNodes.length-1;u>=0;u--)te(e,t,l,n,s,o.shadowRoot.childNodes[u],i)}else if(8===o.nodeType)f=o.nodeValue.split("."),f[1]!==i&&"0"!==f[1]||(r=f[0],a={t:0,L:f[1],T:f[2],I:f[3],D:f[4],k:o,u:null,$:null,h:null,p:null,m:null,i:null},"t"===r?(a.k=o.nextSibling,a.k&&3===a.k.nodeType&&(a.i=a.k.textContent,t.push(a),o.remove(),e.$||(e.$=[]),e.$[a.D]=a,n&&"0"===a.I&&(n[a.D]=a.k))):a.L===i&&("s"===r?(a.m="slot",o["s-sn"]=f[5]?a.p=f[5]:"",o["s-sr"]=!0,n&&(a.k=c.createElement(a.m),a.p&&a.k.setAttribute("name",a.p),o.parentNode.insertBefore(a.k,o),o.remove(),"0"===a.I&&(n[a.D]=a.k)),l.push(a),e.$||(e.$=[]),e.$[a.D]=a):"r"===r&&(n?o.remove():(s["s-cr"]=o,o["s-cn"]=!0))));else if(e&&"style"===e.m){const t=v(null,o.textContent);t.k=o,t.D="0",e.$=[t]}},le=(e,t)=>{if(1===e.nodeType){let l=0;for(;l<e.childNodes.length;l++)le(e.childNodes[l],t);if(e.shadowRoot)for(l=0;l<e.shadowRoot.childNodes.length;l++)le(e.shadowRoot.childNodes[l],t)}else if(8===e.nodeType){const l=e.nodeValue.split(".");"o"===l[0]&&(t.set(l[1]+"."+l[2],e),e.nodeValue="",e["s-en"]=l[3])}},ne=(e,t,l)=>{if(t.W){e.watchers&&(t.q=e.watchers);const n=Object.entries(t.W),s=e.prototype;if(n.map((([e,[n]])=>{(31&n||2&l&&32&n)&&Object.defineProperty(s,e,{get(){return((e,t)=>ue(this).A.get(t))(0,e)},set(l){((e,t,l,n)=>{const s=ue(e),o=s.S,i=s.A.get(t),r=s.t,c=s.M;if(l=((e,t)=>null==e||k(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(l,n.W[t][0]),!(8&r&&void 0!==i||l===i)&&(s.A.set(t,l),c)){if(n.q&&128&r){const e=n.q[t];e&&e.map((e=>{try{c[e](l,i,t)}catch(e){pe(e,o)}}))}2==(18&r)&&B(s,!1)}})(this,e,l,t)},configurable:!0,enumerable:!0})})),1&l){const l=new Map;s.attributeChangedCallback=function(e,t,n){f.jmp((()=>{const t=l.get(e);if(this.hasOwnProperty(t))n=this[t],delete this[t];else if(s.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==n)return;this[t]=(null!==n||"boolean"!=typeof this[t])&&n}))},e.observedAttributes=n.filter((([e,t])=>15&t[0])).map((([e,n])=>{const s=n[1]||e;return l.set(s,e),512&n[0]&&t.R.push([e,s]),s}))}}return e},se=e=>{Y(e,"connectedCallback")},oe=e=>{if(0==(1&f.t)){const t=ue(e),l=t.O,n=()=>{};if(1&t.t)se(t.M);else{let n;if(t.t|=1,n=e.getAttribute("s-id"),n){if(1&l.t){const t=y(e.shadowRoot,l);e.classList.remove(t+"-h",t+"-s")}((e,t,l,n)=>{const s=e.shadowRoot,o=[],i=s?[]:null,r=n.P=v(t,null);f.F||le(c.body,f.F=new Map),e["s-id"]=l,e.removeAttribute("s-id"),te(r,o,[],i,e,e,l),o.map((e=>{const l=e.L+"."+e.T,n=f.F.get(l),o=e.k;n&&""===n["s-en"]&&n.parentNode.insertBefore(o,n.nextSibling),s||(o["s-hn"]=t,n&&(o["s-ol"]=n,o["s-ol"]["s-nr"]=o)),f.F.delete(l)})),s&&i.map((e=>{e&&s.appendChild(e)}))})(e,l.o,n,t)}n||12&l.t&&ie(e);{let l=e;for(;l=l.parentNode||l.host;)if(1===l.nodeType&&l.hasAttribute("s-id")&&l["s-p"]||l["s-p"]){z(t,t.C=l);break}}l.W&&Object.entries(l.W).map((([t,[l]])=>{if(31&l&&e.hasOwnProperty(t)){const l=e[t];delete e[t],e[t]=l}})),(async(e,t,l,n,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=me(l)).then){const e=()=>{};s=await s,e()}s.isProxied||(l.q=s.watchers,ne(s,l,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){pe(e)}t.t&=-9,t.t|=128,e(),se(t.M)}if(s.style){let e=s.style;const t=m(l);if(!we.has(t)){const n=()=>{};p(t,e,!!(1&l.t)),n()}}}const o=t.C,i=()=>B(t,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(0,t,l)}n()}},ie=e=>{const t=e["s-cr"]=c.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},re=(e,t={})=>{const l=[],n=t.exclude||[],s=r.customElements,o=c.head,i=o.querySelector("meta[charset]"),a=c.createElement("style"),u=[],$=c.querySelectorAll("[sty-id]");let d,h=!0,y=0;for(Object.assign(f,t),f.l=new URL(t.resourcesUrl||"./",c.baseURI).href,f.t|=2;y<$.length;y++)p($[y].getAttribute("sty-id"),w($[y].innerHTML),!0);e.map((e=>{e[1].map((t=>{const o={t:t[0],o:t[1],W:t[2],H:t[3]};o.W=t[2],o.R=[],o.q={};const i=o.o,r=class extends HTMLElement{constructor(e){super(e),de(e=this,o),1&o.t&&e.attachShadow({mode:"open"})}connectedCallback(){d&&(clearTimeout(d),d=null),h?u.push(this):f.jmp((()=>oe(this)))}disconnectedCallback(){f.jmp((()=>(()=>{if(0==(1&f.t)){const e=ue(this).M;Y(e,"disconnectedCallback"),Y(e,"componentDidUnload")}})()))}componentOnReady(){return ue(this).N}};o.V=e[0],n.includes(i)||s.get(i)||(l.push(i),s.define(i,ne(r,o,1)))}))})),a.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",a.setAttribute("data-styles",""),o.insertBefore(a,i?i.nextSibling:o.firstChild),h=!1,u.length?u.map((e=>e.connectedCallback())):f.jmp((()=>d=setTimeout(X,30)))},ce=e=>{const t=new URL(e,f.l);return t.origin!==r.location.origin?t.href:t.pathname},fe=(e,t)=>t in $?$[t]:"window"===t?r:"document"===t?c:"isServer"!==t&&"isPrerender"!==t&&("isClient"===t||("resourcesUrl"===t||"publicPath"===t?ce("."):"queue"===t?{write:Ce,read:xe,tick:{then:e=>je(e)}}:void 0)),ae=new WeakMap,ue=e=>ae.get(e),$e=(e,t)=>ae.set(t.M=e,t),de=(e,t)=>{const l={t:0,S:e,O:t,A:new Map};return l.N=new Promise((e=>l.U=e)),e["s-p"]=[],e["s-rc"]=[],ae.set(e,l)},he=(e,t)=>t in e,pe=(e,t)=>(0,console.error)(e,t),ye=new Map,me=e=>{const t=e.o.replace(/-/g,"_"),l=e.V,n=ye.get(l);return n?n[t]:import(`./${l}.entry.js`).then((e=>(ye.set(l,e),e[t])),pe)},we=new Map,be=[],ke=[],ge=(e,t)=>l=>{e.push(l),i||(i=!0,t&&4&f.t?je(Se):f.raf(Se))},ve=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){pe(e)}e.length=0},Se=()=>{ve(be),ve(ke),(i=be.length>0)&&f.raf(Se)},je=e=>a().then(e),xe=ge(be,!1),Ce=ge(ke,!0);export{S as H,_ as a,re as b,fe as c,ce as g,g as h,a as p,$e as r}