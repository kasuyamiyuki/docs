webpackJsonp([151],{173:function(e,t,a){var l=a(0)(a(419),a(760),null,null,null);e.exports=l.exports},419:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{dialog:!1}}}},760:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-btn",{attrs:{primary:"",light:""},slot:"activator"},[e._v("Open Dialog")]),a("v-card",[a("v-card-row",[a("v-card-title",[e._v("User Profile")])],1),a("v-card-row",[a("v-card-text",[a("v-text-field",{attrs:{label:"Email",required:""}}),a("v-text-field",{attrs:{label:"Password",type:"password",required:""}}),a("v-text-field",{attrs:{label:"Legal first name",required:""}}),a("v-text-field",{attrs:{label:"Legal middle name",hint:"example of helper text only on focus"}}),a("v-text-field",{attrs:{label:"Legal last name",hint:"example of persistent helper text","persistent-hint":"",required:""}}),a("v-select",{attrs:{label:"Age",required:"",items:["0-17","18-29","30-54","54+"]}}),a("small",[e._v("*indicates required field")])],1)],1),a("v-card-row",{attrs:{actions:""}},[a("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},nativeOn:{click:function(t){e.dialog=!1}}},[e._v("Close")]),a("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},nativeOn:{click:function(t){e.dialog=!1}}},[e._v("Save")])],1)],1)],1)],1)},staticRenderFns:[]}}});