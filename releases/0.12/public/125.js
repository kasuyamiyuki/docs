webpackJsonp([125],{239:function(t,e,a){var r=a(0)(a(475),a(694),null,null,null);t.exports=r.exports},475:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{picker:null,formatted:null}}}},694:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"ma-3",attrs:{md12:"",lg4:""}},[a("table",{staticClass:"table text-xs-left",staticStyle:{width:"300px"}},[a("tbody",[a("tr",[a("th",[t._v("Original")]),a("td",[a("strong",[t._v(t._s(t.picker||"No date"))])])]),a("tr",[a("th",[t._v("Formatted")]),a("td",[a("strong",[t._v(t._s(t.formatted||"No date"))])])])])])]),a("v-flex",{staticClass:"ma-3",attrs:{md12:"",lg4:""}},[a("v-date-picker",{attrs:{"date-format":function(t){return new Date(t).toDateString()},"formatted-value":t.formatted},on:{"update:formattedValue":function(e){t.formatted=e}},model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}})],1)],1)],1)},staticRenderFns:[]}}});