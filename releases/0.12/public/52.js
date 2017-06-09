webpackJsonp([52],{383:function(e,t,s){var r=s(0)(s(574),s(873),null,null,null);e.exports=r.exports},574:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{doc:{component:"steppers",edit:"SteppersView",title:"stepper",desc:"The <code>v-stepper</code> component displays progress through numbered steps.",examples:[{header:"Example",file:"steppers/1",desc:"A stepper can be used for a multitude of scenarios, including shopping carts, record creation and more."},{header:"Editable steps",file:"steppers/2",desc:"An editable step can be selected by a user at any point and will navigate them to that step."},{header:"Non-editable steps",file:"steppers/3",desc:"Non-editable steps force a user to process linearly through your process."},{header:"Optional steps",file:"steppers/4",desc:"An optional step can be called out with sub-text."},{header:"Horizontal steps",file:"steppers/5",desc:"Horizontal steppers move users along the x-axis through the defined steps."},{header:"Vertical steppers",file:"steppers/6",desc:"Vertical steppers move users along the y-axis and otherwise work exactly the same as their horizontal counterpart."},{header:"Linear steppers",file:"steppers/7",desc:"Linear steppers will always move a user through your defined path."},{header:"Non-linear steppers",file:"steppers/8",desc:"Non-linear steppers allow the user to move through your process in whatever way they choose."},{header:"Alternate labels",file:"steppers/9",desc:"Steppers also have an alternative label style which places the title under the step itself."},{header:"Multi-line error state",file:"steppers/10",desc:"An error state can be displayed to notify the user of some action that must be taken."},{header:"Alternative label multi-line error state",file:"steppers/11",desc:"The error state can also be applied to the alternative label style."},{header:"Vertical multi-line error state",file:"steppers/12",desc:"The same state also applies to Vertical steppers."}],props:{"v-stepper":{params:[["non-linear","Boolean","False","Allow user to jump to any step"],["alt-labels","Boolean","False","Places the labels beneath the step"],["vertical","Boolean","False","Display steps vertically"]],model:{type:["Number","String"],default:"-",description:"Sets current selected step"}},"v-stepper-step":{params:[["completed","Boolean","False","Marks step as completed"],["complete-icon","String","check","Icon to display when step is marked as completed"],["edit-icon","String","edit","Icon to display when step is editable"],["error-icon","String","warning","Icon to display when step has an error"],["editable","Boolean","False","Marks step as editable"],["rules","Array","[]","If any rule is falsy, step will be marked with error"],["step","Number, String","-","Will be displayed inside the step circle"]]},"v-stepper-content":{params:[["step","Number, String","-","Sets step to associate the content to"]]}},functional:{"v-stepper":{params:[["v-stepper-header",".stepper__header"]]}},events:{"v-stepper":{params:[["input","Number, String","Current step"]]}}}}}}},873:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("component-view",{attrs:{doc:e.doc}})},staticRenderFns:[]}}});