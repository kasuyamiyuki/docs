webpackJsonp([167],{154:function(t,e,o){var l=o(0)(o(425),o(858),null,null,null);t.exports=l.exports},425:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{dropdown_font:[{text:"Arial"},{text:"Calibri"},{text:"Courier"},{text:"Verdana"}],dropdown_edit:[{text:"100%"},{text:"75%"},{text:"50%"},{text:"25%"},{text:"0%"}],toggle_exclusive:2,toggle_multiple:[1,2,3],toggle_options:[{icon:"format_align_left",value:1},{icon:"format_align_center",value:2},{icon:"format_align_right",value:3},{icon:"format_align_justify",value:4}],toggle_options_multiple:[{icon:"format_bold",value:1},{icon:"format_italic",value:2},{icon:"format_underlined",value:3},{icon:"format_color_fill",value:4}]}}}},858:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app-bar",[o("v-btn-dropdown",{attrs:{options:t.dropdown_font,"max-height":"auto",overflow:""}}),o("v-btn-dropdown",{attrs:{options:t.dropdown_edit,"max-height":"auto",overflow:"",editable:""}}),o("v-btn-toggle",{staticClass:"hidden-md-and-down",attrs:{options:t.toggle_options_multiple,multiple:""},model:{value:t.toggle_multiple,callback:function(e){t.toggle_multiple=e},expression:"toggle_multiple"}}),o("v-btn-toggle",{staticClass:"hidden-sm-and-down",attrs:{options:t.toggle_options},model:{value:t.toggle_exclusive,callback:function(e){t.toggle_exclusive=e},expression:"toggle_exclusive"}})],1)},staticRenderFns:[]}}});