!function(e){function t(a){if(n[a])return n[a].exports;var l=n[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";var a=n(2),l=(n.n(a),n(3)),r=(n.n(l),wp.i18n.__),i=wp.blocks,o=i.registerBlockType,m=i.RichText,c=i.MediaUpload,s=i.InspectorControls,u=i.AlignmentToolbar,g=i.BlockControls,d=wp.components,p=d.Button,b=d.Dashicon,f=d.PanelBody,v=d.PanelRow,w=d.FormToggle;o("swrdlyts/tile",{title:r("Tile Layout"),description:r("Creates two columns, half image, half padded text. Use multiple, invert to tile."),icon:"shield",category:"layout",keywords:[r("tile"),r("stagger"),r("image")],attributes:{imgURL:{type:"string",source:"attribute",selector:".imageBox",attribute:"data-imgurl",default:""},imgID:{type:"number",default:""},content:{type:"array",source:"children",selector:".textBoxContent",default:""},invert:{type:"boolean",default:!1},alignment:{type:"string"}},getEditWrapperProps:function(e){return{"data-align":"full","data-move-toolbar-right":e.invert?"false":"true"}},edit:function(e){var t=e.attributes,n=e.setAttributes,a=e.className,l=e.isSelected,i=function(e){n({content:e})},o=function(){n({invert:!t.invert})},d=function(e){n({imgID:e.id,imgURL:e.url})},y=function(e){n({alignment:e})},x=t.imgID?"Change Image":"Select Image",E=t.imgID?"edit":"add";return[!!l&&wp.element.createElement(s,{key:"inspector"},wp.element.createElement(f,null,wp.element.createElement(v,null,wp.element.createElement("label",{htmlFor:"invert-form-toggle",className:"blocks-base-control__label"},r("Invert Layout")),wp.element.createElement(w,{id:"invert-form-toggle",label:r("Invert Layout"),checked:!!t.invert,onChange:o})))),wp.element.createElement("div",{className:a,"data-invert":t.invert?"true":"false","data-align":"full"},wp.element.createElement("div",{className:"imageBox",style:{backgroundImage:"url("+t.imgURL+")"},"data-imgurl":t.imgURL,"data-imgid":t.imgID,"data-hasimg":t.imgID?"true":"false"},l?wp.element.createElement(c,{buttonProps:{className:"components-button button button-large"},onSelect:d,type:"image",value:t.imgID,render:function(e){var t=e.open;return wp.element.createElement(p,{isLarge:!0,onClick:t,className:"components-button components-icon-button button button-large wp-block-image__upload-button"},wp.element.createElement(b,{icon:E}),x)}}):null),wp.element.createElement("div",{className:"textBox"},!!l&&wp.element.createElement(g,{key:"controls"},wp.element.createElement(u,{value:t.alignment,onChange:y})),wp.element.createElement(m,{tagname:"div",multiline:"p",className:"textBoxContent",placeholder:"....",style:{textAlign:t.alignment},value:t.content,onChange:i,isSelected:l})))]},save:function(e){return wp.element.createElement("div",{className:e.className,"data-invert":e.attributes.invert},wp.element.createElement("div",{className:"imageBox","data-imgurl":e.attributes.imgURL,"data-imgid":e.attributes.imgID,style:{backgroundImage:"url("+e.attributes.imgURL+")"}}),wp.element.createElement("div",{className:"textBox"},wp.element.createElement("div",{className:"textBoxContent",style:{textAlign:e.attributes.alignment}},e.attributes.content)))}})},function(e,t){},function(e,t){}]);