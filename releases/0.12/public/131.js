webpackJsonp([131],{225:function(t,e,i){var n=i(0)(i(465),i(932),null,null,null);t.exports=n.exports},465:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{showMenu:!1,x:0,y:0,items:[{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]}},methods:{show:function(t){t.preventDefault(),this.showMenu=!0,this.x=t.clientX,this.y=t.clientY}}}},932:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-layout",{attrs:{flex:"","justify-center":""}},[i("v-card",{staticClass:"portrait",attrs:{img:"/static/doc-images/cards/girl.jpg",height:"300px"},on:{contextmenu:t.show}})],1),i("v-menu",{attrs:{"offset-y":"","position-absolutely":!0,"position-x":t.x,"position-y":t.y},model:{value:t.showMenu,callback:function(e){t.showMenu=e},expression:"showMenu"}},[i("v-list",t._l(t.items,function(e){return i("v-list-tile",{key:e},[i("v-list-tile-title",[t._v(t._s(e.title))])],1)}))],1)],1)},staticRenderFns:[]}}});