(function(e){function n(n){for(var r,u,a=n[0],i=n[1],s=n[2],p=0,f=[];p<a.length;p++)u=a[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(n);while(f.length)f.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var i=t[a];0!==o[i]&&(r=!1)}r&&(c.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},c=[];function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=n,a=a.slice();for(var s=0;s<a.length;s++)n(a[s]);var l=i;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"2afb":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23");function o(e,n,t,o,c,u){var a=Object(r["q"])("router-view");return Object(r["m"])(),Object(r["c"])(a)}var c={name:"App",components:{}};t("93b0");c.render=o;var u=c,a=t("6c02");function i(e,n){return Object(r["m"])(),Object(r["c"])("div",null,"Nueva Coccion")}const s={};s.render=i;var l=s;function p(e,n){return Object(r["m"])(),Object(r["c"])("div",null,"Envasado")}const f={};f.render=p;var d=f;function v(e,n,t,o,c,u){return Object(r["m"])(),Object(r["c"])("div",null,[Object(r["d"])("p",null," Nuevo mensaje: "+Object(r["s"])(c.mensaje),1)])}t("d3b7");var b={name:"Main",data:function(){return{mensaje:"Nuevo Mensaje desde vue js"}},methods:{getMensaje:function(){var e=this,n="http://localhost:5000/vue/mensaje";fetch(n).then((function(e){if(console.log(e),e.ok)return console.log("ok"),e.json();console.log(e)})).then((function(n){console.log(n),e.mensaje=n.mensaje})).catch((function(e){console.error(e)}))}},created:function(){this.getMensaje()}};b.render=v;var j=b;function m(e,n){return Object(r["m"])(),Object(r["c"])("div",null,"Insumos")}const h={};h.render=m;var O=h;function g(e,n){return Object(r["m"])(),Object(r["c"])("div",null,"Proveedores")}const y={};y.render=g;var w=y;function M(e,n){return Object(r["m"])(),Object(r["c"])("div",null,"Recetas")}const P={};P.render=M;var k=P;function x(e,n){return Object(r["m"])(),Object(r["c"])("div",null,"Registro")}const S={};S.render=x;var _=S;function N(e,n){return Object(r["m"])(),Object(r["c"])("div",null,"Stock")}const J={};J.render=N;var R=J,T=Object(a["a"])({history:Object(a["b"])(),routes:[{path:"/",redirect:"/nuevacoccion"},{path:"/nuevacoccion",component:l},{path:"/envasado",component:d},{path:"/Home",component:j},{path:"/insumos",component:O},{path:"/proveedores",component:w},{path:"/recetas",component:k},{path:"/registro",component:_},{path:"/stock",component:R}]}),q=T,A=Object(r["b"])(u);A.use(q),A.mount("#app")},"93b0":function(e,n,t){"use strict";t("2afb")}});
//# sourceMappingURL=app.e01a3548.js.map