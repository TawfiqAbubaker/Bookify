(this.webpackJsonpbookstore=this.webpackJsonpbookstore||[]).push([[0],{20:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(21),i=c.n(a),s=c(9),r=(c(30),c(3)),l=c(8),o=(c(31),c.p+"static/media/Reading Book 02 light.e13d415d.png"),j=c(11),b=c(23),d=(c(32),c(33),c(1));var u=function(e){var t=e.data,c=e.cartData,n=e.setCartData;return Object(d.jsxs)("div",{className:"cartItemDiv",children:[Object(d.jsx)("div",{className:"bookCartName",children:Object(d.jsx)("h4",{children:t.name})}),Object(d.jsxs)("div",{className:"changeNumberItem",children:[Object(d.jsx)("div",{className:"SubstractButton",children:Object(d.jsx)("button",{onClick:function(){n(c.map((function(e){return e.name==t.name?1!=t.number?{name:t.name,number:t.number-1}:{name:t.name,number:1}:{name:e.name,number:e.number}})))},children:"-"})}),Object(d.jsx)("p",{children:t.number}),Object(d.jsx)("div",{className:"AddButton",children:Object(d.jsx)("button",{onClick:function(){return n(c.map((function(e){return e.name==t.name?100!=t.number?{name:t.name,number:t.number+1}:{name:t.name,number:100}:{name:e.name,number:e.number}}))),void console.log(c)},children:"+"})})]})]})};var h=function(e){var t=e.inverCart,c=e.cartData,n=e.setCartData;function a(){var e=0;return c.forEach((function(t){e+=5*t.number})),e}function i(){return 0!=c.length}return Object(d.jsxs)("div",{class:"CartTotalDiv",children:[Object(d.jsx)("div",{className:"greyBackground",onClick:t}),Object(d.jsxs)("div",{className:"sideCartBar",children:[Object(d.jsx)("div",{className:"Icon",children:Object(d.jsx)(j.a,{className:"closeIcon",onClick:t})}),Object(d.jsx)("div",{className:"cartName",children:Object(d.jsx)("h2",{children:"Cart"})}),Object(d.jsx)("hr",{class:"solidLine"}),Object(d.jsx)("div",{className:"cartItems",children:c.map((function(e){return Object(d.jsx)(u,{data:e,cartData:c,setCartData:n})}))}),i()?Object(d.jsx)("hr",{class:"solidLine"}):"",Object(d.jsx)("div",{className:"Price",children:i()?Object(d.jsxs)("div",{className:"PriceDiv",children:[Object(d.jsx)("h3",{children:"Base Price:"}),Object(d.jsxs)("h3",{children:[a()," $"]}),Object(d.jsx)("h3",{children:"Delivery Fee:"}),Object(d.jsx)("h3",{children:"1.99 $"}),Object(d.jsx)("h3",{children:"Tax (10%):"}),Object(d.jsxs)("h3",{children:[a()/10," $"]}),Object(d.jsx)("h3",{children:"Final Price: "}),Object(d.jsxs)("h3",{children:[a()+a()/10+1.99," $"]})]}):Object(d.jsx)("h3",{children:"Empty Cart"})})]})]})};c(35);var m=function(e){var t=Object(n.useState)(!1),c=Object(s.a)(t,2),a=c[0],i=c[1],r=function(){return i(!a)};return Object(d.jsxs)("div",{className:"divNavBar",children:[a?Object(d.jsx)(h,{inverCart:r,setCartData:e.setCartData,cartData:e.cartData}):null,Object(d.jsx)("div",{className:"home",children:Object(d.jsxs)(l.b,{to:"/",className:"LinkHomeLeft",children:[Object(d.jsx)(b.a,{className:"book"}),Object(d.jsx)("p",{children:" Bookify"})]})}),Object(d.jsxs)("div",{className:"rightNav",children:[Object(d.jsx)(l.b,{to:"/",id:"HomeNav",className:a?"rightLink":"rightLink hover-underline-animation",children:"Home"}),Object(d.jsx)(l.b,{to:"/catalogue",className:a?"rightLink":"rightLink hover-underline-animation",children:"Catalogue"}),Object(d.jsx)(l.b,{to:"/submitBook",className:a?"rightLink":"rightLink hover-underline-animation",children:"Form"}),Object(d.jsx)("span",{className:a?"rightLink":"hover-underline-animation",children:Object(d.jsx)(j.b,{className:"Icon rightLink",onClick:e.clickable?r:null})})]})]})};var O=function(){return Object(d.jsx)("div",{className:"homeContainer",children:Object(d.jsxs)("div",{className:"Home",children:[Object(d.jsxs)("div",{className:"text",children:[Object(d.jsx)("h1",{children:"Welcome, Here you will find a grand  collection of books of any genre at the best price in Canada."}),Object(d.jsx)(l.b,{to:"/catalogue",children:Object(d.jsx)("button",{children:"View Catalogue"})})]}),Object(d.jsx)("div",{className:"girlImg",children:Object(d.jsx)("img",{src:o,alt:"girl reading book"})})]})})},x=c(25),v=(c(20),c(24));c(41);var f=function(e){var t=e.title,c=e.author,n=e.cover,a=e.setCartData,i=e.cartData,s=!0;return i.forEach((function(e){e.name==t&&(s=!1)})),Object(d.jsxs)("div",{className:"bookContainer",children:[Object(d.jsx)("div",{className:"imgDiv",children:Object(d.jsx)("img",{src:n,alt:""})}),Object(d.jsxs)("div",{className:"belowImage",children:[Object(d.jsx)("div",{className:"title",children:t}),Object(d.jsx)("div",{className:"author",children:c}),Object(d.jsx)("div",{className:"shoppingCartIcon",children:Object(d.jsx)("div",{className:"CenteringCartButton",children:Object(d.jsxs)("button",{className:"cartButton",onClick:function(){a(1==s?[].concat(Object(v.a)(i),[{name:t,number:1}]):i.filter((function(e){return e.name!=t})))},children:[s?"Add to":"Remove from"," Cart ",Object(d.jsx)(j.b,{className:"cart"})]})})})]})]})};var g=function(e){var t=e.cartData,c=e.setCartData,a=Object(n.useState)(!0),i=Object(s.a)(a,2),r=(i[0],i[1]),l=Object(n.useState)([]),o=Object(s.a)(l,2),j=o[0],b=o[1];Object(n.useEffect)((function(){r(!0),fetch("https://bookstore-e5f49-default-rtdb.firebaseio.com/books.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var c in e){var n=Object(x.a)({},e[c]);t.push(n)}r(!1),b(t)}))}),[]);var u=Object(n.useState)(""),h=Object(s.a)(u,2),m=h[0],O=h[1],v=j.filter((function(e){return e==e}));return""!=m&&(v=j.filter((function(e){return e.genre==m}))),Object(d.jsx)("div",{className:"mainCatalogueDiv",children:Object(d.jsx)("div",{className:"LoweringCatalogueOpacity",children:Object(d.jsxs)("div",{className:"secondCatalogueDiv",children:[Object(d.jsx)("div",{className:"sidePannel",children:Object(d.jsxs)("div",{className:"insideSidePannel",children:[Object(d.jsx)("div",{className:"genreText",children:Object(d.jsx)("h3",{children:"Genres"})}),Object(d.jsx)("hr",{class:"sideCataloguePanelLine"}),Object(d.jsxs)("div",{className:"genresDiv",children:[Object(d.jsx)("div",{className:"genre",children:Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",id:"All",name:"radioBtns",onChange:function(){return O("")}}),"All"]})}),Object(d.jsx)("div",{className:"journalism genre",children:Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",id:"Journalism",name:"radioBtns",onChange:function(){return O("journalism")}}),"Journalism"]})}),Object(d.jsx)("div",{className:"classics genre",children:Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",id:"classic",name:"radioBtns",onChange:function(){return O("classic")}}),"Classics"]})}),Object(d.jsx)("div",{className:"Comics genre",children:Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",id:"Comic",name:"radioBtns",onChange:function(){return O("comic")}}),"Comic"]})}),Object(d.jsx)("div",{className:"Fantasies genre",children:Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",id:"Fantasy",name:"radioBtns",onChange:function(){return O("fantasy")}}),"Fantasy"]})}),Object(d.jsx)("div",{className:"Fictions genre",children:Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",id:"Fiction",name:"radioBtns",onChange:function(){return O("fiction")}}),"Fiction"]})}),Object(d.jsx)("div",{className:"stories genre",children:Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",id:"Story",name:"radioBtns",onChange:function(){return O("story")}}),"Stories"]})}),Object(d.jsx)("div",{className:"Politics genre",children:Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",id:"politics",name:"radioBtns",onChange:function(){return O("politics")}}),"Politics"]})}),Object(d.jsx)("div",{className:"Science genre",children:Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",id:"science",name:"radioBtns",onChange:function(){return O("science")}}),"Science"]})})]})]})}),Object(d.jsx)("div",{className:"mainPannel",children:Object(d.jsx)("div",{className:"bookCards",children:v.map((function(e){return Object(d.jsx)(f,{title:e.title,author:e.author,cover:e.cover,setCartData:c,cartData:t})}))})})]})})})};c(42),c.p;var N=function(){var e=Object(r.f)(),t=Object(n.useRef)(),c=Object(n.useRef)(),a=Object(n.useRef)(),i=Object(n.useRef)();return Object(d.jsx)("div",{className:"submitFirstDiv",children:Object(d.jsx)("div",{className:"submitOpacityDiv",children:Object(d.jsx)("div",{className:"submitBookMainDiv",children:Object(d.jsxs)("div",{className:"submitBookSecondDiv",children:[Object(d.jsx)("div",{className:"SubmitMainText",children:Object(d.jsx)("h3",{children:"Help grow this Catalogue by submitting a book."})}),Object(d.jsx)("div",{className:"SubmitBookForm",children:Object(d.jsxs)("form",{action:"",onSubmit:function(n){n.preventDefault();var s={title:t.current.value,author:c.current.value,genre:a.current.value,cover:i.current.value};console.log(s),fetch("https://bookstore-e5f49-default-rtdb.firebaseio.com/books.json",{method:"POST",body:JSON.stringify(s),header:{"Content-Type":"application/json"}}).then((function(){alert("Thank you for your submission! \nYou will see your submitted book at the bottom of the catalogue page."),e.replace("/catalogue")}))},children:[Object(d.jsxs)("div",{className:"formItem",children:[Object(d.jsx)("label",{htmlFor:"bookTitle",children:"Title"}),Object(d.jsx)("input",{type:"text",id:"bookTitle",ref:t,maxLength:"50",minLength:"2",required:!0})]}),Object(d.jsxs)("div",{className:"formItem",children:[Object(d.jsx)("label",{htmlFor:"bookAuthor",children:"Author"}),Object(d.jsx)("input",{type:"text",id:"bookAuthor",ref:c,maxLength:"40",minLength:"2",required:!0})]}),Object(d.jsxs)("div",{className:"formItem",children:[Object(d.jsx)("label",{htmlFor:"bookGenre",children:"Genre"}),Object(d.jsxs)("select",{id:"bookGenre",ref:a,required:!0,children:[Object(d.jsx)("option",{value:"journalism",children:"Journalism"}),Object(d.jsx)("option",{value:"classic",selected:!0,children:"Classics"}),Object(d.jsx)("option",{value:"comic",children:"Comic"}),Object(d.jsx)("option",{value:"fantasy",children:"Fantasy"}),Object(d.jsx)("option",{value:"fiction",children:"Fiction"}),Object(d.jsx)("option",{value:"Stories",children:"Stories"}),Object(d.jsx)("option",{value:"politics",children:"Politics"}),Object(d.jsx)("option",{value:"science",children:"Science"})]})]}),Object(d.jsxs)("div",{className:"formItem",children:[Object(d.jsx)("label",{htmlFor:"bookCover",children:"Book cover link"}),Object(d.jsx)("input",{type:"url",id:"bookCover",ref:i,required:!0})]}),Object(d.jsx)("div",{className:"formSubmit",children:Object(d.jsx)("button",{children:"Submit"})})]})}),Object(d.jsxs)("div",{className:"lowerTextSubmission",children:[Object(d.jsx)("p",{children:"The submitted Book will be sent to a database, fetched and displayed instantly in the Catalogue."}),Object(d.jsx)("p",{children:"Thank you for your contribution!"})]})]})})})})};var p=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],a=t[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{cartData:c,setCartData:a,clickable:!0}),Object(d.jsx)("div",{className:"everythingButNavBar",children:Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{path:"/",exact:!0,children:Object(d.jsx)(O,{})}),Object(d.jsx)(r.a,{path:"/catalogue",exact:!0,children:Object(d.jsx)(g,{cartData:c,setCartData:a})}),Object(d.jsx)(r.a,{path:"/cart",exact:!0,children:Object(d.jsx)(h,{})}),Object(d.jsx)(r.a,{path:"/submitBook",exact:!0,children:Object(d.jsx)(N,{})})]})})]})};i.a.render(Object(d.jsx)(l.a,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.087f02d6.chunk.js.map