webpackJsonp([99],{264:function(t,e,a){var r=a(0)(a(476),a(818),null,null,null);t.exports=r.exports},476:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){var t={1:"/static/doc-images/lists/1.jpg",2:"/static/doc-images/lists/2.jpg",3:"/static/doc-images/lists/3.jpg",4:"/static/doc-images/lists/4.jpg",5:"/static/doc-images/lists/5.jpg"};return{e11:[],people:[{header:"Group 1"},{name:"Sandra Adams",group:"Group 1",avatar:t[1]},{name:"Ali Connors",group:"Group 1",avatar:t[2]},{name:"Trevor Hansen",group:"Group 1",avatar:t[3]},{name:"Tucker Smith",group:"Group 1",avatar:t[2]},{divider:!0},{header:"Group 2"},{name:"Britta Holt",group:"Group 2",avatar:t[4]},{name:"Jane Smith ",group:"Group 2",avatar:t[5]},{name:"John Smith",group:"Group 2",avatar:t[1]},{name:"Sandra Williams",group:"Group 2",avatar:t[3]}]}}}},818:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"grey lighten-4 elevation-0"},[a("v-card-text",[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-subheader",{domProps:{textContent:t._s("Slots")}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-select",{attrs:{label:"Select",items:t.people,"item-text":"name","item-value":"name",multiple:"",chips:"",dark:"","max-height":"auto",autocomplete:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[a("v-chip",{key:e.item,staticClass:"chip--select-multi",attrs:{close:""},on:{input:function(t){e.parent.selectItem(e.item)}},nativeOn:{click:function(t){t.stopPropagation()}}},[a("v-avatar",[a("img",{attrs:{src:e.item.avatar}})]),t._v("\n                "+t._s(e.item.name)+"\n              ")],1)]}},{key:"item",fn:function(e){return[a("v-list-tile-avatar",[a("img",{attrs:{src:e.item.avatar}})]),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{innerHTML:t._s(e.item.name)}}),a("v-list-tile-sub-title",{domProps:{innerHTML:t._s(e.item.group)}})],1)]}}]),model:{value:t.e11,callback:function(e){t.e11=e},expression:"e11"}})],1)],1)],1)],1)],1)},staticRenderFns:[]}}});