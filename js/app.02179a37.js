(function(e){function t(t){for(var u,n,l=t[0],r=t[1],o=t[2],m=0,d=[];m<l.length;m++)n=l[m],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(u in r)Object.prototype.hasOwnProperty.call(r,u)&&(e[u]=r[u]);c&&c(t);while(d.length)d.shift()();return s.push.apply(s,o||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],u=!0,l=1;l<i.length;l++){var r=i[l];0!==a[r]&&(u=!1)}u&&(s.splice(t--,1),e=n(n.s=i[0]))}return e}var u={},a={app:0},s=[];function n(t){if(u[t])return u[t].exports;var i=u[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=u,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(i,u,function(t){return e[t]}.bind(null,u));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/VueJs/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var c=r;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"06cc":function(e,t,i){},"278b":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("f751"),i("097d");var u=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("AppHeader"),i("router-view")],1)},s=[],n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"header"},[i("p",[e._v("MMSA")]),i("ul",[i("router-link",{attrs:{to:"/",tag:"li"}},[i("a",[e._v("Home")])]),e._v(" |\n        "),i("router-link",{attrs:{to:"/about",tag:"li"}},[i("a",[e._v("About")])]),e._v("  |\n        "),i("router-link",{attrs:{to:"/hello",tag:"li"}},[i("a",[e._v("hello")])]),i("router-link",{attrs:{to:"/blog",tag:"li"}},[i("a",[e._v("Blog")])])],1)])},l=[],r={name:"appheader"},o=r,c=(i("cc69"),i("2877")),m=Object(c["a"])(o,n,l,!1,null,"618ba963",null),d=m.exports,p={name:"appheader",components:{AppHeader:d}},v=p,g=(i("5c0b"),Object(c["a"])(v,a,s,!1,null,null,null)),b=g.exports,h=i("8c4f"),q=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",{staticClass:"home"},[u("img",{attrs:{alt:"Vue logo",src:i("cf05")}}),u("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},f=[],_=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hello"},[i("h1",[e._v(e._s(e.msg))]),e._m(0),i("h3",[e._v("Installed CLI Plugins")]),e._m(1),i("h3",[e._v("Essential Links")]),e._m(2),i("h3",[e._v("Ecosystem")]),e._m(3)])},y=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),i("br"),e._v("\n    check out the\n    "),i("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),i("li",[i("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])]),i("li",[i("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest",target:"_blank",rel:"noopener"}},[e._v("unit-jest")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),i("li",[i("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),i("li",[i("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),i("li",[i("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),i("li",[i("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),i("li",[i("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),i("li",[i("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),i("li",[i("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),i("li",[i("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],j={name:"HelloWorld",props:{msg:String}},w=j,C=(i("9450"),Object(c["a"])(w,_,y,!1,null,"090c4fdd",null)),N=C.exports,P={name:"home",components:{HelloWorld:N}},D=P,M=Object(c["a"])(D,q,f,!1,null,null,null),I=M.exports,k=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"about"},[i("h1",[e._v(e._s(e.pageName))]),i("p",[e._v(e._s(e.pageDesc))]),e._m(0),i("div",{staticClass:"alert alert-infot"},[i("button",{on:{click:e.gotohome}},[e._v("Go To home")])])])},S=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("div",{staticClass:"alert alert-danger"},[e._v("hello")])])}],V={name:"about",data:function(){return{pageName:"About us",pageDesc:"this is about page"}},methods:{gotohome:function(){this.$router.push("/")}},beforeRouteLeave:function(e,t,i){confirm("هل ستغادر?")&&i()},beforeRouteEnter:function(e,t,i){confirm("هل ستذهب الي about?")&&i()}},x=V,A=Object(c["a"])(x,k,S,!1,null,null,null),E=A.exports,O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"about"},[i("h1",[e._v(e._s(e.pageName))]),i("p",[e._v(e._s(e.pageDesc))])])},F=[],$={name:"hello",data:function(){return{pageName:"Hello us",pageDesc:"this is hello page"}}},B=$,L=Object(c["a"])(B,O,F,!1,null,null,null),R=L.exports,Q=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"blog"},[i("h1",[e._v(e._s(e.pageName))]),i("p",[e._v(e._s(e.pageDesc))]),i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-8"},[i("div",{staticClass:"posts-area"},e._l(e.posts,function(e){return i("BlogPost",{key:e.id,attrs:{views:e.views,title:e.title,date:e.date,content:e.content,authour:e.authour,category:e.category}})}),1)]),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"sidebar"},[i("Blogsidebar")],1)])])])])},H=[],J=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"post-box"},[i("span",{staticClass:"post-views"},[e._v(e._s(e.views))]),i("h3",{staticClass:"post-title"},[e._v(e._s(e.title))]),i("span",{staticClass:"post-date"},[e._v(e._s(e.date))]),i("p",{staticClass:"post-content"},[e._v(e._s(e.content))]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("span",{staticClass:"post-author"},[e._v(e._s(e.authour))])]),i("div",{staticClass:"col-md-6 text-right"},[i("span",{staticClass:"category-name"},[e._v(" "+e._s(e.category))])])])])},T=[],U={props:["views","title","date","content","authour","category"],name:"post"},W=U,z=(i("97ff"),Object(c["a"])(W,J,T,!1,null,"2275790a",null)),K=z.exports,Y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._v("\n    testing sidebar\n")])},G=[],Z={name:"sidebar"},X=Z,ee=Object(c["a"])(X,Y,G,!1,null,null,null),te=ee.exports,ie=i("ead2"),ue={name:"blog",data:function(){return{pageName:"Blog us",pageDesc:"this is Blog page",posts:ie}},components:{BlogPost:K,Blogsidebar:te}},ae=ue,se=Object(c["a"])(ae,Q,H,!1,null,null,null),ne=se.exports,le=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},re=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",{staticClass:"center alert alert-danger"},[e._v("Not found")]),i("p",[e._v("404 ERROR")])])}],oe={},ce=Object(c["a"])(oe,le,re,!1,null,null,null),me=ce.exports;u["a"].use(h["a"]);var de=[{path:"/",component:I},{path:"/about",component:E},{path:"/blog",component:ne},{path:"/hello",component:R},{path:"*",component:me}],pe=new h["a"]({mode:"history",base:"/VueJs/",routes:de}),ve=i("2f62");u["a"].use(ve["a"]);var ge=new ve["a"].Store({state:{},mutations:{},actions:{}});i("4989"),i("ab8b"),i("b107"),i("f5df");u["a"].config.productionTip=!1,new u["a"]({router:pe,store:ge,render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";var u=i("e332"),a=i.n(u);a.a},9450:function(e,t,i){"use strict";var u=i("278b"),a=i.n(u);a.a},"97ff":function(e,t,i){"use strict";var u=i("fdc1"),a=i.n(u);a.a},b107:function(e,t,i){},cc69:function(e,t,i){"use strict";var u=i("06cc"),a=i.n(u);a.a},cf05:function(e,t,i){e.exports=i.p+"img/logo.82b9c7a5.png"},e332:function(e,t,i){},ead2:function(e){e.exports=JSON.parse('[{"id":1,"title":"Ronstring","date":"10/21/2018","content":"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.","authour":"bmeikle0","category":"turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis","views":23},{"id":2,"title":"Voyatouch","date":"6/19/2019","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\\n\\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\\n\\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.","authour":"ddyos1","category":"consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices","views":38},{"id":3,"title":"Bigtax","date":"6/30/2019","content":"Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\\n\\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\\n\\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.","authour":"hferroni2","category":"morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum","views":24},{"id":4,"title":"Fintone","date":"1/31/2019","content":"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\\n\\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.","authour":"bworrall3","category":"quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante","views":64},{"id":5,"title":"Ronstring","date":"10/3/2018","content":"Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\\n\\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\\n\\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.","authour":"ascholz4","category":"vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque","views":31},{"id":6,"title":"Lotlux","date":"8/19/2019","content":"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\\n\\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\\n\\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.","authour":"yshapera5","category":"orci eget orci vehicula condimentum curabitur in libero ut massa","views":77},{"id":7,"title":"Zathin","date":"7/4/2019","content":"Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.","authour":"mchieco6","category":"vestibulum quam sapien varius ut blandit non interdum in ante vestibulum","views":95},{"id":8,"title":"It","date":"10/26/2018","content":"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\\n\\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\\n\\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.","authour":"bcastagnier7","category":"tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien","views":51},{"id":9,"title":"Vagram","date":"7/20/2019","content":"Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\\n\\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\\n\\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.","authour":"dgerardi8","category":"sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet","views":8},{"id":10,"title":"Konklux","date":"1/29/2019","content":"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\\n\\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\\n\\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","authour":"pseeley9","category":"justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus","views":100},{"id":11,"title":"Stronghold","date":"8/31/2019","content":"Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\\n\\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\\n\\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.","authour":"mdepaolia","category":"sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet","views":78},{"id":12,"title":"Bitchip","date":"5/14/2019","content":"Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\\n\\nSed ante. Vivamus tortor. Duis mattis egestas metus.\\n\\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.","authour":"oyonb","category":"amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique","views":94},{"id":13,"title":"Subin","date":"10/10/2018","content":"Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\\n\\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\\n\\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.","authour":"slilburnc","category":"pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac","views":58},{"id":14,"title":"Veribet","date":"11/29/2018","content":"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.","authour":"jburdekind","category":"ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo","views":38},{"id":15,"title":"Voyatouch","date":"2/9/2019","content":"In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\\n\\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.","authour":"osurplicee","category":"in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem","views":36},{"id":16,"title":"Flowdesk","date":"5/17/2019","content":"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\\n\\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.","authour":"dconyersf","category":"elementum in hac habitasse platea dictumst morbi vestibulum velit id","views":71},{"id":17,"title":"Overhold","date":"6/17/2019","content":"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.","authour":"framshayg","category":"cursus vestibulum proin eu mi nulla ac enim in tempor","views":50},{"id":18,"title":"Flexidy","date":"7/10/2019","content":"Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\\n\\nIn congue. Etiam justo. Etiam pretium iaculis justo.","authour":"gmeelandh","category":"pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat","views":50},{"id":19,"title":"Cookley","date":"3/10/2019","content":"Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\\n\\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\\n\\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.","authour":"klosselyongi","category":"proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum","views":43},{"id":20,"title":"Overhold","date":"4/9/2019","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\\n\\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.","authour":"aaingerj","category":"commodo vulputate justo in blandit ultrices enim lorem ipsum dolor","views":42},{"id":21,"title":"Konklab","date":"12/19/2018","content":"Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\\n\\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\\n\\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","authour":"mdunstank","category":"non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros","views":64},{"id":22,"title":"Fixflex","date":"9/12/2018","content":"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\\n\\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.","authour":"rderingl","category":"convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet","views":75},{"id":23,"title":"Redhold","date":"3/17/2019","content":"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.","authour":"krijkeseism","category":"magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget","views":56},{"id":24,"title":"Kanlam","date":"1/28/2019","content":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\\n\\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.","authour":"snewvelln","category":"sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam","views":52},{"id":25,"title":"Rank","date":"7/26/2019","content":"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\\n\\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\\n\\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.","authour":"sgeorgievo","category":"primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio","views":22},{"id":26,"title":"Flexidy","date":"5/29/2019","content":"In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\\n\\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\\n\\nSed ante. Vivamus tortor. Duis mattis egestas metus.","authour":"dsabyp","category":"curabitur in libero ut massa volutpat convallis morbi odio odio elementum","views":99},{"id":27,"title":"Zamit","date":"4/25/2019","content":"Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\\n\\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\\n\\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.","authour":"jfancetq","category":"venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut","views":6},{"id":28,"title":"Rank","date":"5/20/2019","content":"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\\n\\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\\n\\nFusce consequat. Nulla nisl. Nunc nisl.","authour":"hcummingsr","category":"proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in","views":18},{"id":29,"title":"Biodex","date":"8/8/2019","content":"Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\\n\\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\\n\\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.","authour":"cfeenans","category":"sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis","views":10},{"id":30,"title":"Job","date":"12/3/2018","content":"Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.","authour":"asellart","category":"nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero","views":60},{"id":31,"title":"Ronstring","date":"7/11/2019","content":"Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\\n\\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\\n\\nIn congue. Etiam justo. Etiam pretium iaculis justo.","authour":"slawlingsu","category":"curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum","views":51},{"id":32,"title":"Cookley","date":"4/16/2019","content":"Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.","authour":"jlanfarev","category":"integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper","views":59},{"id":33,"title":"Y-Solowarm","date":"7/14/2019","content":"Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\\n\\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.","authour":"redmandsw","category":"id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit","views":12},{"id":34,"title":"Sonair","date":"11/26/2018","content":"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\\n\\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.","authour":"runworthx","category":"et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean","views":48},{"id":35,"title":"Prodder","date":"3/22/2019","content":"Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.","authour":"acookesy","category":"montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus","views":86},{"id":36,"title":"Span","date":"10/10/2018","content":"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\\n\\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.","authour":"ddilletz","category":"mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu","views":26},{"id":37,"title":"Y-Solowarm","date":"5/26/2019","content":"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.","authour":"wgiorgiutti10","category":"sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc","views":58},{"id":38,"title":"Bitchip","date":"7/10/2019","content":"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\\n\\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.","authour":"mmcelhinney11","category":"ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel","views":80},{"id":39,"title":"Flexidy","date":"7/13/2019","content":"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\\n\\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.","authour":"rgroger12","category":"risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam","views":16},{"id":40,"title":"Tresom","date":"4/11/2019","content":"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.","authour":"rparade13","category":"consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede","views":70},{"id":41,"title":"Cardify","date":"11/19/2018","content":"Fusce consequat. Nulla nisl. Nunc nisl.","authour":"hgriffen14","category":"orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat","views":56},{"id":42,"title":"Fintone","date":"7/12/2019","content":"Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\\n\\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.","authour":"atinham15","category":"accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat","views":62},{"id":43,"title":"Cookley","date":"7/21/2019","content":"Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\\n\\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.","authour":"mrubinfajn16","category":"in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam","views":3},{"id":44,"title":"Quo Lux","date":"8/29/2019","content":"Phasellus in felis. Donec semper sapien a libero. Nam dui.\\n\\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.","authour":"rtythacott17","category":"dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor","views":3},{"id":45,"title":"Stim","date":"8/26/2019","content":"Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\\n\\nSed ante. Vivamus tortor. Duis mattis egestas metus.\\n\\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.","authour":"epoll18","category":"rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut","views":58},{"id":46,"title":"Gembucket","date":"12/24/2018","content":"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\\n\\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.","authour":"htrevett19","category":"pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis","views":53},{"id":47,"title":"Bitchip","date":"4/27/2019","content":"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.","authour":"jdent1a","category":"dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi","views":25},{"id":48,"title":"Job","date":"2/14/2019","content":"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\\n\\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.","authour":"jgenery1b","category":"viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin","views":71},{"id":49,"title":"Duobam","date":"11/29/2018","content":"Fusce consequat. Nulla nisl. Nunc nisl.\\n\\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\\n\\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.","authour":"eroantree1c","category":"ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam","views":75},{"id":50,"title":"Stringtough","date":"2/19/2019","content":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\\n\\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.","authour":"ahanna1d","category":"non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet","views":70}]')},fdc1:function(e,t,i){}});
//# sourceMappingURL=app.02179a37.js.map