(self.webpackChunkfe_toolkit=self.webpackChunkfe_toolkit||[]).push([[433],{37946:function(D,_,e){"use strict";e.r(_);var n=e(58826),l=e(67294),t=e(85893),u=function(){return(0,t.jsxs)(t.Fragment,{children:["Please go to the console to view",(0,t.jsx)("button",{onClick:function(){n.LS.cacheRemoveExceptKey(["LSDemo1"]),console.log("\u5220\u9664\u5176\u4F59\u7F13\u5B58\u6210\u529F, \u5F53\u524DLSDemo1\u7F13\u5B58\u7684\u503C\u4E3A\uFF1A",n.LS.get("LSDemo1"))},children:"Clear all contents in ls and ss"})]})};_.default=u},23839:function(D,_,e){"use strict";e.r(_);var n=e(58826),l=e(67294),t=e(85893),u=function(){return(0,t.jsxs)(t.Fragment,{children:["\u8BF7\u524D\u5F80\u63A7\u5236\u53F0\u67E5\u770B",(0,t.jsx)("button",{onClick:function(){n.LS.cacheRemoveExceptKey(["LSDemo1"]),console.log("\u5220\u9664\u5176\u4F59\u7F13\u5B58\u6210\u529F, \u5F53\u524DLSDemo1\u7F13\u5B58\u7684\u503C\u4E3A\uFF1A",n.LS.get("LSDemo1"))},children:"\u8DF3\u8FC7\u9009\u5B9A\u9879\uFF0C\u6E05\u9664ls\u548Css\u4E2D\u9664\u4E86LSDemo1\u5916\u7684\u5176\u4F59\u5185\u5BB9"})]})};_.default=u},39725:function(D,_,e){"use strict";e.r(_);var n=e(58826),l=e(67294),t=e(85893),u=function(){return n.LS.set("LSDemo1",1),(0,t.jsxs)(t.Fragment,{children:["The value of LSDemo1 in the current localStorage: ",(0,t.jsx)("strong",{children:n.LS.get("LSDemo1")})]})};_.default=u},34453:function(D,_,e){"use strict";e.r(_);var n=e(58826),l=e(67294),t=e(85893),u=function(){return n.LS.set("LSDemo1",1),(0,t.jsxs)(t.Fragment,{children:["\u5F53\u524DlocalStorage\u4E2DLSDemo1\u7684value: ",(0,t.jsx)("strong",{children:n.LS.get("LSDemo1")})]})};_.default=u},11429:function(D,_,e){"use strict";e.r(_);var n=e(58826),l=e(67294),t=e(85893),u=function(){return(0,t.jsxs)(t.Fragment,{children:["Please go to the console to view",(0,t.jsx)("button",{onClick:function(){n.LS.remove("LSDemo1"),console.log("Successfully deleted, the current cached value is\uFF1A",n.LS.get("LSDemo1"))},children:"Delete content"})]})};_.default=u},57442:function(D,_,e){"use strict";e.r(_);var n=e(58826),l=e(67294),t=e(85893),u=function(){return(0,t.jsxs)(t.Fragment,{children:["\u8BF7\u524D\u5F80\u63A7\u5236\u53F0\u67E5\u770B",(0,t.jsx)("button",{onClick:function(){n.LS.remove("LSDemo1"),console.log("\u5220\u9664\u6210\u529F, \u5F53\u524D\u7F13\u5B58\u7684\u503C\u4E3A\uFF1A",n.LS.get("LSDemo1"))},children:"\u5220\u9664\u7F13\u5B58\u4E2Dkey\u4E3ALSDemo1\u7684\u5185\u5BB9"})]})};_.default=u},51811:function(D,_,e){"use strict";e.r(_);var n=e(58826),l=e(67294),t=e(85893),u=function(){return(0,t.jsxs)(t.Fragment,{children:["Please go to the console to view",(0,t.jsx)("button",{onClick:function(){n.LS.removeExceptKey(["LSDemo1"]),console.log("Successfully deleted the remaining caches. The current LSDemo1 cache value is\uFF1A",n.LS.get("LSDemo1"))},children:"Clear remaining ls/ss cache"})]})};_.default=u},16568:function(D,_,e){"use strict";e.r(_);var n=e(58826),l=e(67294),t=e(85893),u=function(){return(0,t.jsxs)(t.Fragment,{children:["\u8BF7\u524D\u5F80\u63A7\u5236\u53F0\u67E5\u770B",(0,t.jsx)("button",{onClick:function(){n.LS.removeExceptKey(["LSDemo1"]),console.log("\u5220\u9664\u5176\u4F59\u7F13\u5B58\u6210\u529F, \u5F53\u524DLSDemo1\u7F13\u5B58\u7684\u503C\u4E3A\uFF1A",n.LS.get("LSDemo1"))},children:"\u8DF3\u8FC7LSDemo1\uFF0C\u6E05\u9664\u5176\u4F59ls/ss\u7F13\u5B58"})]})};_.default=u},75533:function(D,_,e){"use strict";e.r(_);var n=e(58826),l=e(67294),t=e(85893),u=(0,n.o6)(localStorage,{prefixKey:"cache-ls-",timeout:3}),o=(0,n.Yu)({prefixKey:"cache-ls-",timeout:3}),s=(0,n.fo)({prefixKey:"cache-ss-",timeout:3}),c=function(){var r=function(){u.set("demo1","demo1"),o.set("demo2","demo2"),s.set("demo3","demo3")};return(0,l.useEffect)(function(){return function(){u.remove("demo1"),o.remove("demo2"),s.remove("demo2")}},[]),(0,t.jsxs)(t.Fragment,{children:["Go to the cache to view",(0,t.jsx)("button",{onClick:function(){return r()},children:"Set cache"})]})};_.default=c},47580:function(D,_,e){"use strict";e.r(_);var n=e(58826),l=e(67294),t=e(85893),u=(0,n.o6)(localStorage,{prefixKey:"cache-ls-",timeout:3}),o=(0,n.Yu)({prefixKey:"cache-ls-",timeout:3}),s=(0,n.fo)({prefixKey:"cache-ss-",timeout:3}),c=function(){var r=function(){u.set("demo1","demo1"),o.set("demo2","demo2"),s.set("demo3","demo3")};return(0,l.useEffect)(function(){return function(){u.remove("demo1"),o.remove("demo2"),s.remove("demo2")}},[]),(0,t.jsxs)(t.Fragment,{children:["\u524D\u5F80\u7F13\u5B58\u67E5\u770B",(0,t.jsx)("button",{onClick:function(){return r()},children:"\u8BBE\u7F6E\u7F13\u5B58"})]})};_.default=c},87098:function(D,_,e){"use strict";e.r(_);var n=e(5574),l=e.n(n),t=e(58826),u=e(67294),o=e(85893),s=(0,t.y1)({key:"a36493afcf066b95",iv:"a36493afcf066b95"}),c=function(){var r=(0,u.useState)(""),a=l()(r,2),P=a[0],E=a[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{onClick:function(){return E(s.encryptByAES("123"))},children:"encryption 123"}),(0,o.jsx)("button",{onClick:function(){return E(s.decryptByAES(P))},children:"decryption"}),(0,o.jsxs)("div",{children:["value: ",P]})]})};_.default=c},34590:function(D,_,e){"use strict";e.r(_);var n=e(5574),l=e.n(n),t=e(58826),u=e(67294),o=e(85893),s=(0,t.y1)({key:"a36493afcf066b95",iv:"a36493afcf066b95"}),c=function(){var r=(0,u.useState)(""),a=l()(r,2),P=a[0],E=a[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{onClick:function(){return E(s.encryptByAES("123"))},children:"\u52A0\u5BC6123"}),(0,o.jsx)("button",{onClick:function(){return E(s.decryptByAES(P))},children:"\u89E3\u5BC6"}),(0,o.jsxs)("div",{children:["value: ",P]})]})};_.default=c},49263:function(D,_,e){"use strict";e.r(_);var n=e(5574),l=e.n(n),t=e(58826),u=e(67294),o=e(85893),s=function(){var f=(0,u.useState)(""),r=l()(f,2),a=r[0],P=r[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{onClick:function(){return P((0,t.sA)("123"))},children:"encryption 123"}),(0,o.jsx)("button",{onClick:function(){return P((0,t.VO)(a))},children:"decryption"}),(0,o.jsxs)("div",{children:["value: ",a]})]})};_.default=s},38664:function(D,_,e){"use strict";e.r(_);var n=e(5574),l=e.n(n),t=e(58826),u=e(67294),o=e(85893),s=function(){var f=(0,u.useState)(""),r=l()(f,2),a=r[0],P=r[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{onClick:function(){return P((0,t.sA)("123"))},children:"\u52A0\u5BC6123"}),(0,o.jsx)("button",{onClick:function(){return P((0,t.VO)(a))},children:"\u89E3\u5BC6"}),(0,o.jsxs)("div",{children:["value: ",a]})]})};_.default=s},16412:function(D,_,e){"use strict";e.r(_);var n=e(5574),l=e.n(n),t=e(58826),u=e(67294),o=e(85893),s=function(){var f=(0,u.useState)(""),r=l()(f,2),a=r[0],P=r[1],E=(0,u.useState)(""),d=l()(E,2),v=d[0],h=d[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("input",{value:v,type:"text",onChange:function(i){return h(i.target.value)}}),(0,o.jsx)("button",{onClick:function(){return P((0,t.LE)(a))},children:"encryption"}),(0,o.jsxs)("div",{children:["md5value: ",a]})]})};_.default=s},15653:function(D,_,e){"use strict";e.r(_);var n=e(5574),l=e.n(n),t=e(58826),u=e(67294),o=e(85893),s=function(){var f=(0,u.useState)(""),r=l()(f,2),a=r[0],P=r[1],E=(0,u.useState)(""),d=l()(E,2),v=d[0],h=d[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("input",{value:v,type:"text",onChange:function(i){return h(i.target.value)}}),(0,o.jsx)("button",{onClick:function(){return P((0,t.LE)(a))},children:"\u52A0\u5BC6"}),(0,o.jsxs)("div",{children:["md5value: ",a]})]})};_.default=s},50266:function(D,_,e){"use strict";e.r(_);var n=e(15009),l=e.n(n),t=e(99289),u=e.n(t),o=e(5574),s=e.n(o),c=e(58826),f=e(67294),r=e(85893),a=function(){var E=(0,f.useState)(),d=s()(E,2),v=d[0],h=d[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{type:"file",onChange:function(i){var O;return h((O=i.target.files)===null||O===void 0?void 0:O[0])}}),(0,r.jsx)("button",{onClick:function(){if(v){var i=new FileReader;i.readAsDataURL(v),i.onload=function(){var O=u()(l()().mark(function m(T){var C,A,L;return l()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:A=((C=T.target)===null||C===void 0?void 0:C.result)||"",L=(0,c.Bm)(A),console.log(L);case 3:case"end":return j.stop()}},m)}));return function(m){return O.apply(this,arguments)}}()}},children:"base64 data URL turn Blob\uFF08console view\uFF09"})]})};_.default=a},88946:function(D,_,e){"use strict";e.r(_);var n=e(15009),l=e.n(n),t=e(99289),u=e.n(t),o=e(5574),s=e.n(o),c=e(58826),f=e(67294),r=e(85893),a=function(){var E=(0,f.useState)(),d=s()(E,2),v=d[0],h=d[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{type:"file",onChange:function(i){var O;return h((O=i.target.files)===null||O===void 0?void 0:O[0])}}),(0,r.jsx)("button",{onClick:function(){if(v){var i=new FileReader;i.readAsDataURL(v),i.onload=function(){var O=u()(l()().mark(function m(T){var C,A,L;return l()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:A=((C=T.target)===null||C===void 0?void 0:C.result)||"",L=(0,c.Bm)(A),console.log(L);case 3:case"end":return j.stop()}},m)}));return function(m){return O.apply(this,arguments)}}()}},children:"base64\u6570\u636EURL\u8F6CBlob\uFF08\u63A7\u5236\u53F0\u67E5\u770B\uFF09"})]})};_.default=a},43062:function(D,_,e){"use strict";e.r(_);var n=e(15009),l=e.n(n),t=e(99289),u=e.n(t),o=e(5574),s=e.n(o),c=e(58826),f=e(67294),r=e(85893),a=function(){var E=(0,f.useState)(),d=s()(E,2),v=d[0],h=d[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{type:"url",placeholder:"Please enter image address",onChange:function(i){return h(i.target.value)}}),(0,r.jsx)("button",{onClick:u()(l()().mark(function M(){var i;return l()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(!v){m.next=5;break}return m.next=3,(0,c.yx)(v);case 3:i=m.sent,console.log(i);case 5:case"end":return m.stop()}},M)})),children:"Image address to base64\uFF08console view\uFF09"})]})};_.default=a},27850:function(D,_,e){"use strict";e.r(_);var n=e(15009),l=e.n(n),t=e(99289),u=e.n(t),o=e(5574),s=e.n(o),c=e(58826),f=e(67294),r=e(85893),a=function(){var E=(0,f.useState)(),d=s()(E,2),v=d[0],h=d[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{type:"url",placeholder:"\u8BF7\u8F93\u5165\u56FE\u7247\u5730\u5740",onChange:function(i){return h(i.target.value)}}),(0,r.jsx)("button",{onClick:u()(l()().mark(function M(){var i;return l()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(!v){m.next=5;break}return m.next=3,(0,c.yx)(v);case 3:i=m.sent,console.log(i);case 5:case"end":return m.stop()}},M)})),children:"\u56FE\u7247\u5730\u5740\u8F6Cbase64\uFF08\u63A7\u5236\u53F0\u67E5\u770B\uFF09"})]})};_.default=a},48955:function(D,_,e){"use strict";e.r(_);var n=e(15009),l=e.n(n),t=e(99289),u=e.n(t),o=e(5574),s=e.n(o),c=e(58826),f=e(67294),r=e(85893),a=function(){var E=(0,f.useState)(null),d=s()(E,2),v=d[0],h=d[1],M=function(){var i=u()(l()().mark(function O(){var m;return l()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:v?(m=new FileReader,m.readAsDataURL(v),m.onload=function(){var A=u()(l()().mark(function L(B){var j,R,K;return l()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return R=((j=B.target)===null||j===void 0?void 0:j.result)||"",g.next=3,(0,c.$3)(R);case 3:K=g.sent,console.log(K);case 5:case"end":return g.stop()}},L)}));return function(L){return A.apply(this,arguments)}}()):alert("please select file");case 1:case"end":return C.stop()}},O)}));return function(){return i.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{type:"file",onChange:function(O){var m;return h((m=O.target.files)===null||m===void 0?void 0:m[0])}}),"go to console",(0,r.jsx)("button",{onClick:function(){return M()},children:"decode"})]})};_.default=a},18843:function(D,_,e){"use strict";e.r(_);var n=e(5574),l=e.n(n),t=e(58826),u=e(67294),o=e(85893),s=function(){var f=(0,u.useState)(""),r=l()(f,2),a=r[0],P=r[1],E=(0,u.useState)(""),d=l()(E,2),v=d[0],h=d[1];return(0,o.jsxs)(o.Fragment,{children:[v&&(0,o.jsx)("img",{src:v,style:{width:100,height:100}}),(0,o.jsx)("input",{type:"text",value:a,onChange:function(i){return P(i.target.value)}}),(0,o.jsx)("button",{onClick:function(){return h((0,t.C7)(a))},children:"generate"})]})};_.default=s},42480:function(){}}]);
