webpackJsonp([58],{348:function(e,t,a){var s=a(0)(a(530),a(877),null,null,null);e.exports=s.exports},530:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{doc:{title:"Grid",component:"grid",edit:"GridView",desc:"Vuetify.js uses a 12 point grid system. The grid is used to layout an application's content and contains 5 types of media breakpoints. The 5 ranges of breakpoints are used for targeting specific screen sizes or orientations.",examples:[{header:"Grid",file:"grid/1",desc:"The <code>v-container</code> can be used for a center focused page, or given the <code>fluid</code> prop to extend its full width. <code>v-layout</code> is used for separating sections and contains the <code>v-flex</code>. The structure of your layout will be as follows, <strong>v-layout</strong> &raquo; <strong>v-flex</strong>."},{header:"Offset",file:"grid/2",desc:"Offsets are useful for compensating for elements that may not be visible yet, or to control the position of content. Just as with breakpoints, you can set an offset for any available sizes."},{header:"Order",file:"grid/3",desc:"You can control the ordering of grid items. As with offsets, you can set different orders for different sizes"},{header:"Direction and Align",file:"grid/4",desc:"Designate the direction and alignment in a variety of ways."},{header:"Row and column based on breakpoint",file:"grid/5",desc:"Dynamically change your layout based upon resolution. <strong>(resize your screen and watch the layout change on small breakpoints)</strong>"}],props:{"v-container":{params:[["fluid","Boolean","False","Applies the .container--fluid class"]]},"v-layout":{params:[["row[-size]","Boolean","False","Applies the .row class align elements horizontal. Available for all breakpoints xs => xl."],["reverse","Boolean","False","Reverses the currently selected direction (column, row)."],["column[-size]","Boolean","False","Applies the .column class align elements vertical. Available for all breakpoints xs => xl."],["child-flex[-size]","Boolean","False",'Applies the .flex class (flex: 1) to the first child of layout. Available for all breakpoints xs => xl. Hint: You can use class="flex" on specific child element.'],["flex[-size]","Class","False",'Applies the .flex class (flex: 1). Available for all breakpoints xs => xl."'],["justify-space-around","Boolean","False","Justify content to the space around."],["justify-space-between","Boolean","False","Justify content to the space between."],["justify-center","Boolean","False","Justify content to the center.."],["justify-start","Boolean","False","Space between child elements."],["justify-end","Boolean","False","Space between child elements."],["align-center","Boolean","False","Align items to the center."],["align-baseline","Boolean","False","Align items to the baseline."],["align-start","Boolean","False","Align items to the start."],["align-end","Boolean","False","Align items to the end."],["wrap","Boolean","False","Allows children to wrap within the container if the elements use more than 100%."]]},"v-flex":{params:[["xs(1-12)","Boolean","False","xs:extra small, sm:small, md:medium, lg:large, xl:extra large - 1 through 12"],["offset-[size](1-12)","Boolean","False","offset-xs:extra small, offset-sm:small, offset-md:medium, offset-lg:large, offset-xl:extra large. Example: offset-xs3"],["order-[size](1-12)","Boolean","False","order-xs:extra small, order-sm:small, order-md:medium, order-lg:large, order-xl:extra large. Example: order-xs1"],["fill-height","Boolean","False","Make sure that col element height is filled with parent and child. Important for Safari/Firefox if children is column element."]]}},functional:{grid:{params:[["v-content","The main content wrapper for your application"],["v-spacer","Spacer for flexbox grids"]]}}}}}}},877:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("component-view",{attrs:{doc:e.doc}},[a("v-card",{staticClass:"mb-5",slot:"top"},[a("v-table-overflow",[a("table",{staticClass:"table"},[a("caption",{staticClass:"mt-3"},[a("strong",[e._v("Material Design Viewport Breakpoints")])]),a("thead",[a("tr",{staticClass:"text-xs-left"},[a("th",[e._v("Device")]),a("th",[e._v("Types")]),a("th",[e._v("Range")])])]),a("tbody",[a("tr",[a("td",[a("v-icon",{staticClass:"mr-3",attrs:{dark:"dark"}},[e._v("phone_iphone")]),a("span",[e._v("Extra small")])],1),a("td",[e._v("small to large handset")]),a("td",[e._v("< 600px")])]),a("tr",[a("td",[a("v-icon",{staticClass:"mr-3",attrs:{dark:"dark"}},[e._v("tablet")]),a("span",[e._v("Small")])],1),a("td",[e._v("small to medium tablet")]),a("td",[e._v("600px > < 1024px")])]),a("tr",[a("td",[a("v-icon",{staticClass:"mr-3",attrs:{dark:"dark"}},[e._v("laptop")]),a("span",[e._v("Medium")])],1),a("td",[e._v("large tablet to laptop")]),a("td",[e._v("1024px > < 1440px")])]),a("tr",[a("td",[a("v-icon",{staticClass:"mr-3",attrs:{dark:"dark"}},[e._v("desktop_windows")]),a("span",[e._v("Large")])],1),a("td",[e._v("desktop")]),a("td",[e._v("1440px > < 1920px")])]),a("tr",[a("td",[a("v-icon",{staticClass:"mr-3",attrs:{dark:"dark"}},[e._v("tv")]),a("span",[e._v("Extra large")])],1),a("td",[e._v("4k and ultra-wides")]),a("td",[e._v("> 1920px")])])])])])],1)],1)},staticRenderFns:[]}}});