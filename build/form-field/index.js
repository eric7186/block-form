!function(){"use strict";var e=window.wp.element,t=window.wp.blocks,l=window.wp.i18n,a=window.wp.hooks,n=window.wp.blockEditor;const r=e=>null==e||""===e;var o=window.wp.data,s=window.wp.components;const i=()=>(0,e.createElement)(s.Icon,{icon:()=>(0,e.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"#ffffff"},(0,e.createElement)("rect",{x:"2.75",y:"3.75",width:"18.5",height:"16.5",stroke:"#0EA489",strokeWidth:"1.5"}),(0,e.createElement)("rect",{x:"6",y:"7",width:"12",height:"1",fill:"#0EA489"}),(0,e.createElement)("rect",{x:"6",y:"11",width:"12",height:"1",fill:"#0EA489"}),(0,e.createElement)("rect",{x:"6",y:"15",width:"12",height:"1",fill:"#0EA489"}))}),c=()=>{};var m=t=>{let{fieldType:a,fieldTypes:n,newFieldTypes:o,onChangeFunc:i=c}=t;const m=r(o)||0===o.length,[u,f]=(0,e.useState)(!1);return m?(0,e.createElement)("div",{className:"gf-select-field-type-input"},(0,e.createElement)("div",{className:"gf-select-field-type-control"},(0,e.createElement)(s.SelectControl,{value:a,options:n,onChange:e=>i(e),help:(0,l.__)("Select appropriate field type for input","gutena-forms"),__nextHasNoMarginBottom:!0}),(0,e.createElement)("div",{className:"gf-select-overlay",onClick:e=>{e.preventDefault(),f(!u)}})),u&&(0,e.createElement)("ul",{className:"gf-select-field-types"},n.map(((t,l)=>(0,e.createElement)("li",{key:"gf-select-option-"+l,className:"gf-select-option",onClick:()=>{i(t.value),f(!u)}},t.label))),(0,e.createElement)("li",{className:"gf-seprator"}),(0,e.createElement)("li",{className:"gf-select-pro-options"},(0,e.createElement)("div",{className:"gf-title-link-wrapper"},(0,e.createElement)("div",{className:"gf-title-icon"},(0,e.createElement)("span",{className:"gf-title"},(0,l.__)("Pro","gutena-forms")),(0,e.createElement)("span",{className:"gf-icon"},function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#606060";return(0,e.createElement)(s.Icon,{icon:()=>(0,e.createElement)("svg",{className:"gf-lock-svg",width:"11",height:"12",viewBox:"0 0 11 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M8.57143 4H9.71428C10.0299 4 10.2857 4.25584 10.2857 4.57143V11.4286C10.2857 11.7442 10.0299 12 9.71428 12H0.571429C0.25584 12 0 11.7442 0 11.4286V4.57143C0 4.25584 0.25584 4 0.571429 4H1.71429V3.42857C1.71429 1.53502 3.24931 0 5.14286 0C7.0364 0 8.57143 1.53502 8.57143 3.42857V4ZM4.57143 8.41851V9.71429H5.71429V8.41851C6.05589 8.22091 6.28571 7.8516 6.28571 7.42857C6.28571 6.79737 5.77406 6.28571 5.14286 6.28571C4.51166 6.28571 4 6.79737 4 7.42857C4 7.8516 4.22983 8.22091 4.57143 8.41851ZM7.42857 4V3.42857C7.42857 2.16621 6.4052 1.14286 5.14286 1.14286C3.88049 1.14286 2.85714 2.16621 2.85714 3.42857V4H7.42857Z",fill:t}))})}())),(0,e.createElement)("div",{className:"gf-link"},(0,e.createElement)("a",{href:gutenaFormsBlock?.pricing_link,target:"_blank"},(0,l.__)("Upgrade Now","gutena-forms")),(0,e.createElement)("br",null),(0,e.createElement)("p",{className:"gf-text-muted"},(0,l.__)("14-day free trial","gutena-forms")))),(0,e.createElement)("ul",{className:"gf-pro-fields"},["Date","Time","Rating","Phone","Country","State","File Upload","Url","Hidden","Password"].map(((t,l)=>(0,e.createElement)("li",{key:"gf-pro-fi-eld-option-"+l,className:"gf-text-muted"},t))))))):(0,e.createElement)(s.SelectControl,{value:a,options:n,onChange:e=>i(e),help:(0,l.__)("Select appropriate field type for input","gutena-forms"),__nextHasNoMarginBottom:!0})};const u=(e,t)=>{const l=(0,o.select)("core/block-editor").getClientIdsWithDescendants();return!r(l)&&l.some((l=>{const{nameAttr:a}=(0,o.select)("core/block-editor").getBlockAttributes(l);return t!==l&&a===e}))};var f=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gutena/form-field","version":"1.0.0","title":"Form Field","parent":["gutena/forms"],"category":"gutena","icon":"feedback","description":"Form field","attributes":{"nameAttr":{"type":"string","default":"input_1"},"fieldName":{"type":"string","default":"Name"},"fieldClasses":{"type":"string","default":""},"fieldType":{"type":"string","default":"text"},"isRequired":{"type":"boolean","default":false},"placeholder":{"type":"string","default":""},"defaultValue":{"type":"string","default":""},"autocomplete":{"type":"boolean","default":false},"autoCapitalize":{"type":"boolean","default":false},"textAreaRows":{"type":"number","default":5},"maxlength":{"type":"number","default":""},"minMaxStep":{"type":"object","default":{}},"preFix":{"type":"string","default":""},"sufFix":{"type":"string","default":""},"selectOptions":{"type":"array","default":["Big","Medium","Small"]},"optionsColumns":{"type":"number","default":1},"optionsInline":{"type":"boolean","default":false},"multiSelect":{"type":"boolean","default":false},"errorRequiredMsg":{"type":"string","default":"Field is required"},"errorInvalidInputMsg":{"type":"string","default":"Input is not valid"},"description":{"type":"string","default":""},"fieldStyle":{"type":"string","default":""},"settings":{"type":"object","default":{}}},"usesContext":["gutena-forms/formID"],"supports":{"__experimentalSettings":true,"align":["wide","full"],"color":{"background":true,"text":true},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}},"spacing":{"margin":true,"padding":true,"blockGap":{"__experimentalDefault":"2em","sides":["horizontal","vertical"]}},"html":false},"textdomain":"gutena-forms","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');(0,t.registerBlockType)(f,{icon:()=>(0,e.createElement)(s.Icon,{icon:()=>(0,e.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("rect",{x:"2",y:"4",width:"8",height:"2",fill:"#0EA489"}),(0,e.createElement)("rect",{x:"2",y:"11",width:"8",height:"2",fill:"#0EA489"}),(0,e.createElement)("rect",{x:"14",y:"4",width:"8",height:"2",fill:"#0EA489"}),(0,e.createElement)("rect",{x:"14",y:"11",width:"8",height:"2",fill:"#0EA489"}),(0,e.createElement)("rect",{x:"2",y:"18",width:"20",height:"2",fill:"#0EA489"}))}),edit:function(t){let{className:c,attributes:f,setAttributes:g,isSelected:p,clientId:d,context:h,gutenaExtends:E={}}=t;const{nameAttr:x,fieldName:_,fieldClasses:y,fieldType:b,isRequired:v,placeholder:w,defaultValue:C,autocomplete:k,autoCapitalize:N,textAreaRows:S,maxlength:T,minMaxStep:F,preFix:B,sufFix:A,selectOptions:q,optionsColumns:R,optionsInline:I,multiSelect:M,errorRequiredMsg:P,errorInvalidInputMsg:V,description:O,settings:D,style:H}=f,$=[{label:"Text",value:"text"},{label:"Number",value:"number"},{label:"Range",value:"range"},{label:"TextArea",value:"textarea"},{label:"Email",value:"email"},{label:"Dropdown",value:"select"},{label:"Radio",value:"radio"},{label:"Checkbox",value:"checkbox"}];let j=[];(0,a.hasFilter)("gutenaforms.field.types")&&(j=(0,a.applyFilters)("gutenaforms.field.types",j));const z=r(j)||0===j.length?$:[...$,...j],U=r(j)||0===j.length?[]:j.map((e=>e.value)),[Z,G]=(0,e.useState)(q[0]),[W,J]=(0,e.useState)(""),{selectBlock:L}=(0,o.useDispatch)(n.store),K=(0,o.useSelect)((e=>e(n.store).getBlockParentsByBlockName(d,"gutena/forms",!0)),[d]),Q=(0,o.useSelect)((e=>{let t=e(n.store).getAdjacentBlockClientId(d,-1);return r(t)&&(t=e(n.store).getAdjacentBlockClientId(d,1)),t}),[]),X=(0,o.useSelect)((e=>{if(r(Q))return null;let t=e(n.store).getBlockAttributes(Q);return r(t)||r(t.content)?"":t.content.replace(/(<([^>]+)>)|\*/gi,"").trim()}),[Q]),{updateBlockAttributes:Y}=(0,o.useDispatch)(n.store);(0,e.useEffect)((()=>{let e=!0;if(e&&("input_1"==x||""==x||!r(x)&&u(x,d)))for(let e=0;e<5e3;e++){let t="f_"+e;if(!u(t,d)){g({nameAttr:t});break}}return()=>{e=!1}}),[]);const ee=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];g({fieldName:e}),t&&!r(Q)&&Y(Q,{content:e})};(0,e.useEffect)((()=>{let e=!0;return e&&ee(X),()=>{e=!1}}),[X]);const te=()=>{let e=document.querySelector('.block-editor-block-styles__variants [aria-label="Border Style"]');r(e)||(e.style.display=p&&"range"===b?"inline-block":"none")};(0,e.useEffect)((()=>{let e=!0;return e&&te(),()=>{e=!1}}),[p]),(0,e.useEffect)((()=>{let e=!0;if(e){te();let e=`gutena-forms-field ${b}-field ${v?"required-field":""} ${k?"autocomplete":""} `;-1!==["radio","checkbox"].indexOf(b)&&(e+=I?" inline-options":" has-"+R+"-col"),g({fieldClasses:e})}return()=>{e=!1}}),[b,v,I,R,k]);const le=(0,n.useBlockProps)({className:`gutena-forms-${b}-field field-name-${x} ${I?"gf-inline-content":""}`});return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.BlockControls,null,(0,e.createElement)(s.ToolbarGroup,null,(0,e.createElement)(s.ToolbarButton,{icon:i,label:(0,l.__)("Select form block","gutena-forms"),onClick:()=>{r(K)||L(K[0])}}))),(0,e.createElement)(n.InspectorControls,null,(0,e.createElement)(s.PanelBody,{title:(0,l.__)("Field Type","gutena-forms"),initialOpen:!0},(0,e.createElement)(m,{fieldType:b,fieldTypes:z,newFieldTypes:U,onChangeFunc:e=>g({fieldType:e})}),!r(E?.gfcontrols)&&E.gfcontrols(),-1!==["select","checkbox","radio"].indexOf(b)&&(0,e.createElement)(s.FormTokenField,{label:k?(0,l.__)("Preferences","gutena-forms"):(0,l.__)("Options","gutena-forms"),value:q,suggestions:q,onChange:e=>g({selectOptions:e})}),-1!==["radio","checkbox"].indexOf(b)&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(s.ToggleControl,{label:(0,l.__)("Show Inline","gutena-forms"),className:"gf-mt-1",help:I?(0,l.__)("Toggle to make options show in columns","gutena-forms"):(0,l.__)("Toggle to make options show inline","gutena-forms"),checked:I,onChange:e=>g({optionsInline:e})}),!I&&(0,e.createElement)(s.RangeControl,{label:(0,l.__)("Columns","gutena-forms"),value:R,onChange:e=>g({optionsColumns:e}),min:1,max:6,step:1})),("number"===b||"range"===b)&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)("h2",{className:"block-editor-block-card__title gf-mt-1 "},(0,l.__)("Value","gutena-forms")),(0,e.createElement)(s.PanelRow,{className:"gf-child-mb-0 gf-mb-24"},(0,e.createElement)(s.TextControl,{label:(0,l.__)("Minimum","gutena-forms"),value:F?.min,type:"number",onChange:e=>g({minMaxStep:{...F,min:e}})}),(0,e.createElement)(s.TextControl,{label:(0,l.__)("Maximum","gutena-forms"),value:F?.max,type:"number",onChange:e=>g({minMaxStep:{...F,max:e}})}),(0,e.createElement)(s.TextControl,{label:(0,l.__)("Step","gutena-forms"),value:F?.step,type:"number",onChange:e=>g({minMaxStep:{...F,step:e}})})),(0,e.createElement)(s.PanelRow,{className:"gf-child-mb-0 gf-mb-24"},(0,e.createElement)(s.TextControl,{label:(0,l.__)("Prefix","gutena-forms"),value:B,onChange:e=>g({preFix:e})}),(0,e.createElement)(s.TextControl,{label:(0,l.__)("Suffix","gutena-forms"),value:A,onChange:e=>g({sufFix:e})})))),(0,e.createElement)(s.PanelBody,{title:(0,l.__)("Field settings","gutena-forms"),initialOpen:!0},(0,e.createElement)(s.TextControl,{label:(0,l.__)("Label","gutena-forms")+" * ",className:r(_)?" gf-required-field":"",help:r(_)?(0,l.__)("Please add label to the field","gutena-forms"):"",value:null!=_?_:"",onChange:e=>ee(e,!0)}),!r(E?.gfSettings)&&E.gfSettings(),-1!==["text","textarea"].indexOf(b)&&(0,e.createElement)(s.RangeControl,{label:(0,l.__)("Maxlength","gutena-forms"),value:T,onChange:e=>g({maxlength:e}),min:0,max:500,step:25}),"textarea"===b&&(0,e.createElement)(s.RangeControl,{label:(0,l.__)("Textarea Rows","gutena-forms"),value:S,onChange:e=>g({textAreaRows:e}),min:2,max:20,step:1}),(0,e.createElement)(s.PanelRow,null,(0,e.createElement)(s.TextControl,{label:(0,l.__)("Placeholder","gutena-forms"),value:w,onChange:e=>g({placeholder:e})})),(0,e.createElement)(s.PanelRow,null,(0,e.createElement)(s.ToggleControl,{label:(0,l.__)("Required","gutena-forms"),help:v?(0,l.__)("Toggle to make input field not required","gutena-forms"):(0,l.__)("Toggle to make input field required","gutena-forms"),checked:v,onChange:e=>g({isRequired:e})})),["text","textarea","number"].includes(b)&&(0,e.createElement)(s.TextControl,{label:(0,l.__)("Default Value","gutena-forms"),value:C,type:"text",onChange:e=>g({defaultValue:e})}))),(0,e.createElement)("div",le,b.length>0?0<=["text","email","number"].indexOf(b)?(0,e.createElement)("input",{type:b,className:y,value:null!=W?W:"",onChange:e=>J(e.target.value),placeholder:w||(0,l.__)("Placeholder…"),required:v?"required":""}):"range"===b?(0,e.createElement)("div",{className:"gf-range-container"},(0,e.createElement)("input",{type:b,className:y,required:v?"required":"",value:null!=W?W:"",onChange:e=>J(e.target.value)}),(0,e.createElement)("p",{className:"gf-range-values"},!r(F?.min)&&(0,e.createElement)("span",{className:"gf-prefix-value-wrapper"},(0,e.createElement)("span",{className:"gf-prefix"},r(B)?"":B),(0,e.createElement)("span",{className:"gf-value"},F?.min),(0,e.createElement)("span",{className:"gf-suffix"},r(A)?"":A)),!r(W)&&(0,e.createElement)("span",{className:"gf-prefix-value-wrapper"},(0,e.createElement)("span",{className:"gf-prefix"},r(B)?"":B),(0,e.createElement)("span",{className:"gf-value range-input-value"},W),(0,e.createElement)("span",{className:"gf-suffix"},r(A)?"":A)),!r(F?.max)&&(0,e.createElement)("span",{className:"gf-prefix-value-wrapper"},(0,e.createElement)("span",{className:"gf-prefix"},r(B)?"":B),(0,e.createElement)("span",{className:"gf-value"},F?.max),(0,e.createElement)("span",{className:"gf-suffix"},r(A)?"":A)))):"textarea"===b?(0,e.createElement)("textarea",{className:y,placeholder:w||(0,l.__)("Placeholder…"),required:v?"required":"",rows:S}):"select"===b?(0,e.createElement)("select",{className:y,value:Z,onChange:e=>G(e.target.value),required:v?"required":""},q.map(((t,l)=>(0,e.createElement)("option",{key:l,value:t},t)))):"radio"===b||"checkbox"===b?(0,e.createElement)("div",{className:y},q.map(((t,l)=>(0,e.createElement)("label",{key:l,className:b+"-container"},t,(0,e.createElement)("input",{type:b,name:_,value:t,checked:t===Z,onChange:e=>G(e.target.value)}),(0,e.createElement)("span",{className:"checkmark"}))))):!r(E?.inputFieldComponent)&&0<=U.indexOf(b)?E.inputFieldComponent():void 0:""))}})}();