(this.webpackJsonpshowcase=this.webpackJsonpshowcase||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(6),r=c.n(s),i=c(0);var o=function(){return Object(i.jsx)("nav",{className:"nav-extended #00c853 green accent-4",children:Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsx)("a",{href:"#",className:"brand-logo",children:"Fortnite shop"}),Object(i.jsxs)("ul",{className:"right hide-on-med-and-down",children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://github.com/AstakhovV",children:Object(i.jsx)("i",{className:"material-icons",alt:"https://github.com/AstakhovV",children:"person"})})}),"GitHub"]})]})})};var l=function(){return Object(i.jsx)("footer",{className:"#00c853 green accent-4",children:Object(i.jsx)("div",{className:"footer-copyright",children:Object(i.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(i.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/AstakhovV",children:"AstakhovV"})]})})})},d="".concat("1c11f058-b34b100f-9dad180c-d4afc1b9");function j(){return Object(i.jsx)("div",{className:"progress",children:Object(i.jsx)("div",{className:"indeterminate"})})}var u=c(1),b=c(7),O=c(8);function h(e,t){var c=t.type,a=t.payload;switch(c){case"SET_GOODS":return Object(u.a)(Object(u.a)({},e),{},{goods:a||[],loading:!1});case"ADD_TO_BASKET":var n=e.order.findIndex((function(e){return e.id===a.id})),s=null;if(n<0){var r=Object(u.a)(Object(u.a)({},a),{},{quantity:1});s=[].concat(Object(O.a)(e.order),[r])}else s=e.order.map((function(e,t){return t===n?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity+1}):e}));return Object(u.a)(Object(u.a)({},e),{},{order:s,alertName:a.name});case"REMOVE_FROM_BASKET":return Object(u.a)(Object(u.a)({},e),{},{order:e.order.filter((function(e){return e.id!==a.id}))});case"INCREASE_QUANTITY":return Object(u.a)(Object(u.a)({},e),{},{order:e.order.map((function(e){if(e.id===a.id){var t=e.quantity+1;return Object(u.a)(Object(u.a)({},e),{},{quantity:t})}return e}))});case"DECREASE_QUANTITY":return Object(u.a)(Object(u.a)({},e),{},{order:e.order.map((function(e){if(e.id===a.id){var t=e.quantity-1;return Object(u.a)(Object(u.a)({},e),{},{quantity:t>=0?t:0})}return e}))});case"CLOSE_ALERT":return Object(u.a)(Object(u.a)({},e),{},{alertName:""});case"ORDER_DONE":return Object(u.a)(Object(u.a)({},e),{},{alertName:"\u2116".concat(Math.ceil(1e8*Math.random()))});case"TOGGLE_BASKET":return Object(u.a)(Object(u.a)({},e),{},{isBasketShow:!e.isBasketShow});default:return e}}var m=Object(a.createContext)(),x=function(e){var t=e.children,c=Object(a.useReducer)(h,{goods:[],loading:!0,order:[],isBasketShow:!1,alertName:""}),n=Object(b.a)(c,2),s=n[0],r=n[1];return s.closeAlert=function(){r({type:"CLOSE_ALERT"})},s.orderDone=function(){r({type:"ORDER_DONE"})},s.removeFromBasket=function(e){r({type:"REMOVE_FROM_BASKET",payload:{id:e}})},s.addToBasket=function(e){r({type:"ADD_TO_BASKET",payload:e})},s.incQuantity=function(e){r({type:"INCREASE_QUANTITY",payload:{id:e}})},s.decQuantity=function(e){r({type:"DECREASE_QUANTITY",payload:{id:e}})},s.handleBasketShow=function(){r({type:"TOGGLE_BASKET"})},s.setGoods=function(e){r({type:"SET_GOODS",payload:e})},Object(i.jsx)(m.Provider,{value:s,children:t})};function f(e){var t=e.id,c=e.name,n=e.icon,s=e.description,r=e.price,o=e.full_background,l=Object(a.useContext)(m).addToBasket;return Object(i.jsxs)("div",{className:"card",id:t,children:[Object(i.jsx)("div",{className:"card-image",children:Object(i.jsx)("img",{src:o,alt:c})}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsx)("span",{className:"card-title",children:c}),Object(i.jsx)("p",{children:s})]}),Object(i.jsxs)("div",{className:"card-action",children:[Object(i.jsx)("button",{className:"btn",onClick:function(){return l({id:t,name:c,price:r,icon:n,full_background:o})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(i.jsxs)("span",{className:"right",style:{fontSize:"1.5rem"},children:[r," \u0440\u0443\u0431."]})]})]})}var v=function(){var e=Object(a.useContext)(m).goods,t=void 0===e?[]:e;return t.length?Object(i.jsx)("div",{className:"goods",children:t.map((function(e){return Object(i.jsx)(f,Object(u.a)({},e),e.id)}))}):Object(i.jsx)("h3",{children:"Nothing was found"})};function N(){var e=Object(a.useContext)(m),t=e.order,c=e.handleBasketShow,n=t.length;return Object(i.jsxs)("div",{className:"cart #01579b light-blue darken-4 white-text",onClick:c,children:[Object(i.jsx)("i",{className:"material-icons",children:"shopping_cart"}),n?Object(i.jsx)("span",{className:"card-quantity",children:n}):null]})}function p(e){var t=e.id,c=e.name,n=e.price,s=e.icon,r=e.quantity,o=Object(a.useContext)(m),l=o.decQuantity,d=o.incQuantity,j=o.removeFromBasket;return Object(i.jsxs)("li",{className:"collection-item avatar",children:[s?Object(i.jsx)("img",{src:s,alt:s,className:"circle basket-avatar"}):Object(i.jsx)("img",{src:"https://via.placeholder.com/50x50?text=".concat(c),alt:c,className:"circle"}),Object(i.jsx)("span",{className:"title",children:c}),Object(i.jsxs)("p",{children:[c,Object(i.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return l(t)},children:"remove"}),"x",r,Object(i.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return d(t)},children:"add"})," = ",n*r," \u0440\u0443\u0431."]}),Object(i.jsx)("span",{className:"secondary-content",children:Object(i.jsx)("i",{className:"material-icons basket-delete",onClick:function(){return j(t)},children:"close"})})]})}function g(){var e=Object(a.useContext)(m),t=e.order,c=void 0===t?[]:t,n=e.handleBasketShow,s=e.orderDone,r=c.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(i.jsxs)("ul",{className:"collection basket-list",children:[Object(i.jsx)("li",{className:"collection-item active",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),c.length?c.map((function(e){return Object(i.jsx)(p,Object(u.a)({},e),e.id)})):Object(i.jsx)("li",{className:"collection-item",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(i.jsxs)("li",{className:"collection-item active",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",r," \u0440\u0443\u0431."]}),Object(i.jsx)("li",{className:"collection-item",children:c.length?Object(i.jsx)("button",{className:"btn-small",onClick:s,children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u043f\u043e\u043a\u0443\u043f\u043a\u0443"}):Object(i.jsx)("button",{className:"btn disabled",onClick:s,children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u043f\u043e\u043a\u0443\u043f\u043a\u0443"})}),Object(i.jsx)("i",{className:"material-icons basket-close",onClick:n,children:"close"})]})}function y(){var e=Object(a.useContext)(m),t=e.alertName,c=void 0===t?"":t,n=e.closeAlert;return Object(a.useEffect)((function(){var e=setTimeout(n,3e3);return function(){clearTimeout(e)}}),[c]),Object(i.jsx)("div",{id:"toast-container",children:"\u2116"===c.charAt(0)?Object(i.jsxs)("div",{className:"toast rounded",children:["\u0417\u0430\u043a\u0430\u0437 ",c," \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d"]}):Object(i.jsxs)("div",{className:"toast rounded",children:[c," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})}function E(){var e=Object(a.useContext)(m),t=e.loading,c=e.isBasketShow,n=e.alertName,s=e.setGoods;return Object(a.useEffect)((function(){fetch("https://fortniteapi.io/v1/shop?lang=ru",{headers:{Authorization:d}}).then((function(e){return e.json()})).then((function(e){s(e.featured)}))}),[]),Object(i.jsxs)("main",{className:"container content",children:[Object(i.jsx)(N,{}),t?Object(i.jsx)(j,{}):Object(i.jsx)(v,{}),c&&Object(i.jsx)(g,{}),n&&Object(i.jsx)(y,{})]})}var k=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{}),Object(i.jsx)(x,{children:Object(i.jsx)(E,{})}),Object(i.jsx)(l,{})]})};c(14);r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(k,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d85a5835.chunk.js.map