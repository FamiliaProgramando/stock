(function(e){function n(n){for(var r,u,a=n[0],i=n[1],s=n[2],p=0,d=[];p<a.length;p++)u=a[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(n);while(d.length)d.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var i=t[a];0!==o[i]&&(r=!1)}r&&(c.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},c=[];function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=n,a=a.slice();for(var s=0;s<a.length;s++)n(a[s]);var l=i;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"2e1b":function(e,n,t){},"360e":function(e,n,t){"use strict";t("2e1b")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23");function o(e,n,t,o,c,u){var a=Object(r["r"])("router-view"),i=Object(r["r"])("home");return Object(r["n"])(),Object(r["d"])(r["a"],null,[Object(r["e"])(a),Object(r["e"])(i)],64)}function c(e,n,t,o,c,u){return Object(r["n"])(),Object(r["d"])("div",null,[Object(r["e"])("p",null," Nuevo mensaje: "+Object(r["t"])(c.mensaje),1)])}t("d3b7");var u={name:"Main",data:function(){return{mensaje:"Nuevo Mensaje desde vue js"}},methods:{getMensaje:function(){var e=this,n="http://localhost:5000/vue/mensaje";fetch(n).then((function(e){if(console.log(e),e.ok)return console.log("ok"),e.json();console.log(e)})).then((function(n){console.log(n),e.mensaje=n.mensaje})).catch((function(e){console.error(e)}))}},created:function(){this.getMensaje()}};u.render=c;var a=u,i={name:"App",components:{Home:a}};t("360e");i.render=o;var s=i,l=t("6c02");function p(e,n){return Object(r["n"])(),Object(r["d"])("div",null,"Nueva Coccion")}const d={};d.render=p;var f=d;function b(e,n){return Object(r["n"])(),Object(r["d"])("div",null,"Envasado")}const v={};v.render=b;var j=v;function O(e,n){return Object(r["n"])(),Object(r["d"])("div",null,"Insumos")}const h={};h.render=O;var m=h;function g(e,n){return Object(r["n"])(),Object(r["d"])("div",null,"Proveedores")}const y={};y.render=g;var w=y;function M(e,n){return Object(r["n"])(),Object(r["d"])("div",null,"Recetas")}const P={};P.render=M;var k=P;function x(e,n){return Object(r["n"])(),Object(r["d"])("div",null,"Registro")}const S={};S.render=x;var _=S;function N(e,n){return Object(r["n"])(),Object(r["d"])("div",null,"Stock")}const H={};H.render=N;var J=H,R=Object(l["a"])({history:Object(l["b"])(),routes:[{path:"/",redirect:"/nuevacoccion"},{path:"/nuevacoccion",component:f},{path:"/envasado",component:j},{path:"/Home",component:a},{path:"/insumos",component:m},{path:"/proveedores",component:w},{path:"/recetas",component:k},{path:"/registro",component:_},{path:"/stock",component:J}]}),T=R,A=Object(r["c"])(s);A.use(T),A.mount("#app")}});
//# sourceMappingURL=app.21046704.js.map