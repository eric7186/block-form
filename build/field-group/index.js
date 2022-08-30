(()=>{"use strict";const e=window.wp.element,t=window.wp.blocks,l=(window.wp.i18n,window.wp.blockEditor),a=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gutena/field-group","version":"1.0.0","title":"Field Group","ancestor":["gutena/forms"],"category":"gutena","icon":"feedback","description":"Field Group","attributes":{"nameAttr":{"type":"string","default":"gf-input-1"},"fieldLabel":{"type":"string","default":"Label"},"fieldLabelContent":{"type":"string","default":""},"fieldType":{"type":"string","default":"text"},"isRequired":{"type":"boolean","default":false},"displayName":{"type":"string","default":"Name"},"placeholder":{"type":"string","default":""},"defaultValue":{"type":"string","default":""},"autocomplete":{"type":"boolean","default":false},"autoCapitalize":{"type":"boolean","default":false},"textAreaRows":{"type":"number","default":2},"selectOptions":{"type":"array","default":["Big","Medium","Small"]},"optionsInline":{"type":"boolean","default":false},"multiSelect":{"type":"boolean","default":false},"errorRequiredMsg":{"type":"string","default":"Field is required"},"errorInvalidInputMsg":{"type":"string","default":"Input is not valid"},"description":{"type":"string","default":""},"settings":{"type":"object","default":{}}},"supports":{"__experimentalSettings":true,"align":["wide","full"],"html":false,"spacing":{"margin":true,"padding":true,"blockGap":true},"__experimentalLayout":true},"textdomain":"gutena-forms","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),i=window.wp.components;(0,t.registerBlockType)(a,{icon:()=>(0,e.createElement)(i.Icon,{icon:()=>(0,e.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"#ffffff"},(0,e.createElement)("rect",{x:"13.75",y:"10.75",width:"7.5",height:"9.5",stroke:"#3F6DE4",strokeWidth:"1.5"}),(0,e.createElement)("rect",{x:"2",y:"4",width:"20",height:"2",fill:"#3F6DE4"}),(0,e.createElement)("rect",{x:"2",y:"11",width:"9",height:"2",fill:"#3F6DE4"}),(0,e.createElement)("rect",{x:"2",y:"18",width:"7",height:"2",fill:"#3F6DE4"}))}),edit:function(t){let{className:a,attributes:i,setAttributes:r,isSelected:n,clientId:o}=t;const s=[["core/group",{layout:{type:"flex",orientation:"vertical",className:"gutena-field-group-row"}},[["core/heading",{level:3,content:i.fieldLabelContent,placeholder:i.fieldLabel,className:"heading-input-label-gutena"}],["gutena/form-field",{fieldType:i.fieldType,fieldName:i.fieldLabelContent,nameAttr:""==i.fieldLabelContent?"":i.fieldLabelContent.toLowerCase().replace(/ /g,"_"),placeholder:i.placeholder,textAreaRows:i.textAreaRows,isRequired:i.isRequired}]]],["core/paragraph",{className:"gutena-forms-field-error-msg"}]],d=(0,l.useBlockProps)();return(0,e.createElement)("div",d,(0,e.createElement)(l.InnerBlocks,{template:s,allowedBlocks:["core/columns","core/group","core/image","core/paragraph"]}))},save:function(t){const a=l.useBlockProps.save();return(0,e.createElement)("div",a,(0,e.createElement)(l.InnerBlocks.Content,null))}})})();