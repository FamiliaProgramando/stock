(function(e){function n(n){for(var r,u,a=n[0],i=n[1],s=n[2],f=0,p=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(n);while(p.length)p.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var i=t[a];0!==o[i]&&(r=!1)}r&&(c.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},c=[];function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=n,a=a.slice();for(var s=0;s<a.length;s++)n(a[s]);var l=i;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"062e":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23");function o(e,n,t,o,c,u){var a=Object(r["q"])("home");return Object(r["m"])(),Object(r["c"])(a)}function c(e,n,t,o,c,u){return Object(r["m"])(),Object(r["c"])("div",null,[Object(r["d"])("p",null,Object(r["s"])(c.mensaje),1)])}t("d3b7");var u={name:"Main",data:function(){return{mensaje:"Nuevo Mensaje desde vue js"}},methods:{getMensaje:function(){var e=this,n="http://localhost:5000/vue/mensaje";fetch(n).then((function(e){if(console.log(e),e.ok)return console.log("ok"),e.json();console.log(e)})).then((function(n){console.log(n),e.mensaje=n.mensaje})).catch((function(e){console.error(e)}))}},created:function(){this.getMensaje()}};u.render=c;var a=u,i={name:"App",components:{Home:a}};t("8ee1");i.render=o;var s=i,l=t("6c02");function f(e,n){return Object(r["m"])(),Object(r["c"])("div",null,"Nueva Coccion")}const p={};p.render=f;var d=p,b=Object(l["b"])({history:Object(l["creaetWebHistory"])(),routes:[{path:"/vue",redirect:"/nuevacoccion"},{path:"/vue/nuevacoccion",component:d}]}),v=b,j=Object(r["b"])(s);j.use(v),j.mount("#app")},"8ee1":function(e,n,t){"use strict";t("062e")}});
//# sourceMappingURL=app.f9950edc.js.map