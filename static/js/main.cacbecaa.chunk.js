(this.webpackJsonpcalc=this.webpackJsonpcalc||[]).push([[0],[,,,,,,,,,,function(e,t,u){},function(e,t,u){},function(e,t,u){},,function(e,t,u){},function(e,t,u){"use strict";u.r(t);var a=u(1),c=u.n(a),r=u(4),n=u.n(r),o=(u(10),u(2)),l=(u(11),u(12),u(0));var i=function(e){return Object(l.jsxs)("div",{className:"containerDisplay",children:[Object(l.jsxs)("p",{className:"numeros",children:[e.numero1," ",e.operador," ",e.numero2]}),Object(l.jsx)("p",{className:"resultado",children:e.resultado})]})},s=(u(14),u(5));var j=function(e){return Object(l.jsxs)("div",{className:"botoes",children:[Object(l.jsx)("button",{value:"backspace",onClick:function(t){return e.calcula(t.target.value)},children:Object(l.jsx)(s.a,{})}),Object(l.jsx)("button",{value:"C",onClick:function(t){return e.calcula(t.target.value)},children:" C "}),Object(l.jsx)("button",{value:"%",onClick:function(t){return e.calcula(t.target.value)},children:" % "}),Object(l.jsx)("button",{value:"/",onClick:function(t){return e.calcula(t.target.value)},className:"operador",children:"/"}),Object(l.jsx)("button",{value:"1",onClick:function(t){return e.calcula(t.target.value)},children:" 1 "}),Object(l.jsx)("button",{value:"2",onClick:function(t){return e.calcula(t.target.value)},children:" 2 "}),Object(l.jsx)("button",{value:"3",onClick:function(t){return e.calcula(t.target.value)},children:"3 "}),Object(l.jsx)("button",{value:"*",onClick:function(t){return e.calcula(t.target.value)},className:"operador",children:"*"}),Object(l.jsx)("button",{value:"4",onClick:function(t){return e.calcula(t.target.value)},children:"4"}),Object(l.jsx)("button",{value:"5",onClick:function(t){return e.calcula(t.target.value)},children:"5"}),Object(l.jsx)("button",{value:"6",onClick:function(t){return e.calcula(t.target.value)},children:"6"}),Object(l.jsx)("button",{value:"-",onClick:function(t){return e.calcula(t.target.value)},className:"operador",children:"-"}),Object(l.jsx)("button",{value:"7",onClick:function(t){return e.calcula(t.target.value)},children:"7"}),Object(l.jsx)("button",{value:"8",onClick:function(t){return e.calcula(t.target.value)},children:"8"}),Object(l.jsx)("button",{value:"9",onClick:function(t){return e.calcula(t.target.value)},children:"9"}),Object(l.jsx)("button",{value:"+",onClick:function(t){return e.calcula(t.target.value)},className:"operador",children:"+"}),Object(l.jsx)("button",{value:".",onClick:function(t){return e.calcula(t.target.value)},children:"."}),Object(l.jsx)("button",{value:"0",onClick:function(t){return e.calcula(t.target.value)},children:"0"}),Object(l.jsx)("button",{value:"=",onClick:function(t){return e.calcula(t.target.value)},className:"operador",children:"="})]})};var b=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),u=t[0],c=t[1],r=Object(a.useState)(""),n=Object(o.a)(r,2),s=n[0],b=n[1],d=Object(a.useState)(""),m=Object(o.a)(d,2),p=m[0],O=m[1],v=Object(a.useState)(""),N=Object(o.a)(v,2),f=N[0],g=N[1],x=Object(a.useState)(!1),h=Object(o.a)(x,2),k=h[0],C=h[1],F=Object(a.useState)(!0),S=Object(o.a)(F,2),w=S[0],y=S[1],E=Object(a.useState)(!1),J=Object(o.a)(E,2),B=J[0],D=J[1],I=Object(a.useState)(!1),M=Object(o.a)(I,2),q=M[0],z=M[1],A=Object(a.useState)({primeiroNum:"",operador:"",segundoNum:"",ultimoNumero:""}),G=Object(o.a)(A,2),H=G[0],K=G[1],L=function(e,t){t?(K({primeiroNum:e,operador:H.operador,segundoNum:""}),D(!1),g(""),c(""),b(""),O("")):(K({primeiroNum:"",operador:H.operador,segundoNum:""}),D(!1),g(""),c(""),b(""),O(""))};return Object(l.jsxs)("section",{className:"calculadora",children:[Object(l.jsx)(i,{resultado:f,numero1:H.primeiroNum,numero2:H.segundoNum,operador:p}),Object(l.jsx)(j,{calcula:function(e){isNaN(e)&&"."!==e&&"backspace"!==e?("+"===e||"-"===e||"/"===e||"*"===e||"%"===e)&w?function(e){H.operador=e,O(e),C(!0),y(!1),B&&(K({primeiroNum:H.ultimoNumero,operador:H.operador,segundoNum:""}),c(H.ultimoNumero),b("")),D(!0)}(e):"C"===e?L():"="===e&&(""!==H.segundoNum?function(e){var t={"+":function(e,t){return parseFloat(e)+parseFloat(t)},"-":function(e,t){return parseFloat(e)-parseFloat(t)},"/":function(e,t){return parseFloat(e)/parseFloat(t)},"%":function(e,t){return parseFloat(e)%parseFloat(t)},"*":function(e,t){return parseFloat(e)*parseFloat(t)}}[H.operador](H.primeiroNum,H.segundoNum);H.ultimoNumero=t,g(t),y(!0),C(!1),z(!0)}():g("Error")):function(e){!1===k?(q&&(L(e,!0),z(!1)),"."===e?(H.primeiroNum+=e,c(u+e),H.ultimoNumero=""):"backspace"===e?(K({primeiroNum:H.primeiroNum.slice(0,-1),operador:"",segundoNum:""}),c(u)):(H.primeiroNum+=e,c(u+e),H.ultimoNumero="")):"."===e?(H.segundoNum+=e,b(s+e)):"backspace"===e?K({primeiroNum:H.primeiroNum,operador:H.operador,segundoNum:H.segundoNum.slice(0,-1)}):(H.segundoNum+=e,b(s+e))}(e)}})]})};var d=function(){return Object(l.jsx)("main",{className:"container",children:Object(l.jsx)(b,{})})};n.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.cacbecaa.chunk.js.map