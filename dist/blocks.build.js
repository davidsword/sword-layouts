/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_ds_block_js__ = __webpack_require__(/*! ./block/ds-block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript.\n * You can create a new block folder in\n * this dir and include code for that block\n * here as well.\n *\n * All blocks should be included here since\n * this is the file that Webpack is compiling.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/Mjc5MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdC5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpblxuICogdGhpcyBkaXIgYW5kIGluY2x1ZGUgY29kZSBmb3IgdGhhdCBibG9ja1xuICogaGVyZSBhcyB3ZWxsLlxuICpcbiAqIEFsbCBibG9ja3Mgc2hvdWxkIGJlIGluY2x1ZGVkIGhlcmUgc2luY2VcbiAqIHRoaXMgaXMgdGhlIGZpbGUgdGhhdCBXZWJwYWNrIGlzIGNvbXBpbGluZy5cbiAqL1xuXG5pbXBvcnQgJy4vYmxvY2svZHMtYmxvY2suanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*******************************!*\
  !*** ./src/block/ds-block.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: _sandbox-layouts\n */\n/* eslint-disable react/jsx-key */\n\n//import classnames from 'classnames';\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar _wp$blocks = wp.blocks,\n    registerBlockType = _wp$blocks.registerBlockType,\n    Editable = _wp$blocks.Editable,\n    MediaUpload = _wp$blocks.MediaUpload,\n    InspectorControls = _wp$blocks.InspectorControls,\n    BlockDescription = _wp$blocks.BlockDescription;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    Dashicon = _wp$components.Dashicon,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    FormToggle = _wp$components.FormToggle;\n\n\nregisterBlockType('cgb/block-sandbox-layouts', {\n\ttitle: __('Sword Layouts', 'CGB'),\n\ticon: 'shield',\n\tcategory: 'common',\n\tkeywords: [__('_sandbox-layouts — CGB Block'), __('CGB Example'), __('create-guten-block')],\n\tattributes: {\n\t\timgURL: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'attribute',\n\t\t\tselector: '.imageBox',\n\t\t\tattribute: 'data-imgurl',\n\t\t\tdefault: ''\n\t\t},\n\t\timgID: {\n\t\t\ttype: 'number',\n\t\t\tdefault: ''\n\t\t},\n\t\tcontent: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: '.textBoxContent',\n\t\t\tdefault: ''\n\t\t},\n\t\tinvert: {\n\t\t\ttype: 'boolean',\n\t\t\tdefault: false\n\t\t}\n\t},\n\n\t// 🔥 not working\n\tgetEditWrapperProps: function getEditWrapperProps(attributes) {\n\t\treturn { 'data-align': 'full' };\n\t},\n\n\n\t// Edit --------------------------------\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes,\n\t\t    className = _ref.className,\n\t\t    focus = _ref.focus;\n\n\t\tvar onChangeContent = function onChangeContent(value) {\n\t\t\tsetAttributes({ content: value });\n\t\t};\n\t\tvar togglePosition = function togglePosition() {\n\t\t\tsetAttributes({ invert: !attributes.invert });\n\t\t};\n\t\tvar onSelectImage = function onSelectImage(img) {\n\t\t\tsetAttributes({\n\t\t\t\timgID: img.id,\n\t\t\t\timgURL: img.url\n\t\t\t});\n\t\t};\n\t\tvar buttonText = !attributes.imgID ? 'Select Image' : 'Change Image';\n\t\tvar buttonIcon = !attributes.imgID ? 'add' : 'edit';\n\t\treturn [!!focus && wp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\t{ key: 'inspector' },\n\t\t\twp.element.createElement(\n\t\t\t\tBlockDescription,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\t__('Block controls.  Do more.')\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{ title: __('Invert Layout') },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tPanelRow,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'label',\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\thtmlFor: 'invert-form-toggle',\n\t\t\t\t\t\t\tclassName: 'blocks-base-control__label'\n\t\t\t\t\t\t},\n\t\t\t\t\t\t__('Invert Layout')\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement(FormToggle, {\n\t\t\t\t\t\tid: 'invert-form-toggle',\n\t\t\t\t\t\tlabel: __('Invert Layout'),\n\t\t\t\t\t\tchecked: !!attributes.invert,\n\t\t\t\t\t\tonChange: togglePosition\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t)\n\t\t), wp.element.createElement(\n\t\t\t'div',\n\t\t\t{\n\t\t\t\tclassName: className,\n\t\t\t\t'data-invert': attributes.invert ? 'true' : 'false',\n\t\t\t\t'data-align': 'full'\n\t\t\t},\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{\n\t\t\t\t\tclassName: 'imageBox',\n\t\t\t\t\tstyle: { backgroundImage: 'url(' + attributes.imgURL + ')' },\n\t\t\t\t\t'data-imgurl': attributes.imgURL,\n\t\t\t\t\t'data-imgid': attributes.imgID\n\t\t\t\t},\n\t\t\t\tfocus ? wp.element.createElement(MediaUpload, {\n\t\t\t\t\tbuttonProps: {\n\t\t\t\t\t\tclassName: 'components-button button button-large'\n\t\t\t\t\t},\n\t\t\t\t\tonSelect: onSelectImage,\n\t\t\t\t\ttype: 'image',\n\t\t\t\t\tvalue: attributes.imgID,\n\t\t\t\t\trender: function render(_ref2) {\n\t\t\t\t\t\tvar open = _ref2.open;\n\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\tButton,\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tisLarge: true,\n\t\t\t\t\t\t\t\tonClick: open,\n\t\t\t\t\t\t\t\tclassName: 'components-button components-icon-button button button-large wp-block-image__upload-button'\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\twp.element.createElement(Dashicon, { icon: buttonIcon }),\n\t\t\t\t\t\t\tbuttonText\n\t\t\t\t\t\t);\n\t\t\t\t\t}\n\t\t\t\t}) : null\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'textBox' },\n\t\t\t\twp.element.createElement(Editable, {\n\t\t\t\t\ttagname: 'div',\n\t\t\t\t\tmultiline: 'p',\n\t\t\t\t\tclassName: 'textBoxContent',\n\t\t\t\t\tplaceholder: '....',\n\t\t\t\t\tvalue: attributes.content,\n\t\t\t\t\tonChange: onChangeContent\n\t\t\t\t})\n\t\t\t)\n\t\t)];\n\t},\n\n\t// Save --------------------------------\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className, 'data-invert': props.attributes.invert },\n\t\t\twp.element.createElement('div', {\n\t\t\t\tclassName: 'imageBox',\n\t\t\t\t'data-imgurl': props.attributes.imgURL,\n\t\t\t\t'data-imgid': props.attributes.imgID,\n\t\t\t\tstyle: { backgroundImage: 'url(' + props.attributes.imgURL + ')' }\n\t\t\t}),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'textBox' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'textBoxContent' },\n\t\t\t\t\tprops.attributes.content\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9kcy1ibG9jay5qcz81Njk2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IF9zYW5kYm94LWxheW91dHNcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWtleSAqL1xuXG4vL2ltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbnZhciBfXyA9IHdwLmkxOG4uX187IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuXG52YXIgX3dwJGJsb2NrcyA9IHdwLmJsb2NrcyxcbiAgICByZWdpc3RlckJsb2NrVHlwZSA9IF93cCRibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUsXG4gICAgRWRpdGFibGUgPSBfd3AkYmxvY2tzLkVkaXRhYmxlLFxuICAgIE1lZGlhVXBsb2FkID0gX3dwJGJsb2Nrcy5NZWRpYVVwbG9hZCxcbiAgICBJbnNwZWN0b3JDb250cm9scyA9IF93cCRibG9ja3MuSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgQmxvY2tEZXNjcmlwdGlvbiA9IF93cCRibG9ja3MuQmxvY2tEZXNjcmlwdGlvbjtcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgQnV0dG9uID0gX3dwJGNvbXBvbmVudHMuQnV0dG9uLFxuICAgIERhc2hpY29uID0gX3dwJGNvbXBvbmVudHMuRGFzaGljb24sXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5LFxuICAgIFBhbmVsUm93ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxSb3csXG4gICAgRm9ybVRvZ2dsZSA9IF93cCRjb21wb25lbnRzLkZvcm1Ub2dnbGU7XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2NnYi9ibG9jay1zYW5kYm94LWxheW91dHMnLCB7XG5cdHRpdGxlOiBfXygnU3dvcmQgTGF5b3V0cycsICdDR0InKSxcblx0aWNvbjogJ3NoaWVsZCcsXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblx0a2V5d29yZHM6IFtfXygnX3NhbmRib3gtbGF5b3V0cyDigJQgQ0dCIEJsb2NrJyksIF9fKCdDR0IgRXhhbXBsZScpLCBfXygnY3JlYXRlLWd1dGVuLWJsb2NrJyldLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0aW1nVVJMOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdHNvdXJjZTogJ2F0dHJpYnV0ZScsXG5cdFx0XHRzZWxlY3RvcjogJy5pbWFnZUJveCcsXG5cdFx0XHRhdHRyaWJ1dGU6ICdkYXRhLWltZ3VybCcsXG5cdFx0XHRkZWZhdWx0OiAnJ1xuXHRcdH0sXG5cdFx0aW1nSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogJydcblx0XHR9LFxuXHRcdGNvbnRlbnQ6IHtcblx0XHRcdHR5cGU6ICdhcnJheScsXG5cdFx0XHRzb3VyY2U6ICdjaGlsZHJlbicsXG5cdFx0XHRzZWxlY3RvcjogJy50ZXh0Qm94Q29udGVudCcsXG5cdFx0XHRkZWZhdWx0OiAnJ1xuXHRcdH0sXG5cdFx0aW52ZXJ0OiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiBmYWxzZVxuXHRcdH1cblx0fSxcblxuXHQvLyDwn5SlIG5vdCB3b3JraW5nXG5cdGdldEVkaXRXcmFwcGVyUHJvcHM6IGZ1bmN0aW9uIGdldEVkaXRXcmFwcGVyUHJvcHMoYXR0cmlidXRlcykge1xuXHRcdHJldHVybiB7ICdkYXRhLWFsaWduJzogJ2Z1bGwnIH07XG5cdH0sXG5cblxuXHQvLyBFZGl0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQoX3JlZikge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gX3JlZi5zZXRBdHRyaWJ1dGVzLFxuXHRcdCAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcblx0XHQgICAgZm9jdXMgPSBfcmVmLmZvY3VzO1xuXG5cdFx0dmFyIG9uQ2hhbmdlQ29udGVudCA9IGZ1bmN0aW9uIG9uQ2hhbmdlQ29udGVudCh2YWx1ZSkge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IGNvbnRlbnQ6IHZhbHVlIH0pO1xuXHRcdH07XG5cdFx0dmFyIHRvZ2dsZVBvc2l0aW9uID0gZnVuY3Rpb24gdG9nZ2xlUG9zaXRpb24oKSB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgaW52ZXJ0OiAhYXR0cmlidXRlcy5pbnZlcnQgfSk7XG5cdFx0fTtcblx0XHR2YXIgb25TZWxlY3RJbWFnZSA9IGZ1bmN0aW9uIG9uU2VsZWN0SW1hZ2UoaW1nKSB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0aW1nSUQ6IGltZy5pZCxcblx0XHRcdFx0aW1nVVJMOiBpbWcudXJsXG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdHZhciBidXR0b25UZXh0ID0gIWF0dHJpYnV0ZXMuaW1nSUQgPyAnU2VsZWN0IEltYWdlJyA6ICdDaGFuZ2UgSW1hZ2UnO1xuXHRcdHZhciBidXR0b25JY29uID0gIWF0dHJpYnV0ZXMuaW1nSUQgPyAnYWRkJyA6ICdlZGl0Jztcblx0XHRyZXR1cm4gWyEhZm9jdXMgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdFx0XHR7IGtleTogJ2luc3BlY3RvcicgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0QmxvY2tEZXNjcmlwdGlvbixcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdwJyxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdF9fKCdCbG9jayBjb250cm9scy4gIERvIG1vcmUuJylcblx0XHRcdFx0KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0UGFuZWxCb2R5LFxuXHRcdFx0XHR7IHRpdGxlOiBfXygnSW52ZXJ0IExheW91dCcpIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRQYW5lbFJvdyxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdsYWJlbCcsXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGh0bWxGb3I6ICdpbnZlcnQtZm9ybS10b2dnbGUnLFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU6ICdibG9ja3MtYmFzZS1jb250cm9sX19sYWJlbCdcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRfXygnSW52ZXJ0IExheW91dCcpXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoRm9ybVRvZ2dsZSwge1xuXHRcdFx0XHRcdFx0aWQ6ICdpbnZlcnQtZm9ybS10b2dnbGUnLFxuXHRcdFx0XHRcdFx0bGFiZWw6IF9fKCdJbnZlcnQgTGF5b3V0JyksXG5cdFx0XHRcdFx0XHRjaGVja2VkOiAhIWF0dHJpYnV0ZXMuaW52ZXJ0LFxuXHRcdFx0XHRcdFx0b25DaGFuZ2U6IHRvZ2dsZVBvc2l0aW9uXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0e1xuXHRcdFx0XHRjbGFzc05hbWU6IGNsYXNzTmFtZSxcblx0XHRcdFx0J2RhdGEtaW52ZXJ0JzogYXR0cmlidXRlcy5pbnZlcnQgPyAndHJ1ZScgOiAnZmFsc2UnLFxuXHRcdFx0XHQnZGF0YS1hbGlnbic6ICdmdWxsJ1xuXHRcdFx0fSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjbGFzc05hbWU6ICdpbWFnZUJveCcsXG5cdFx0XHRcdFx0c3R5bGU6IHsgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBhdHRyaWJ1dGVzLmltZ1VSTCArICcpJyB9LFxuXHRcdFx0XHRcdCdkYXRhLWltZ3VybCc6IGF0dHJpYnV0ZXMuaW1nVVJMLFxuXHRcdFx0XHRcdCdkYXRhLWltZ2lkJzogYXR0cmlidXRlcy5pbWdJRFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRmb2N1cyA/IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChNZWRpYVVwbG9hZCwge1xuXHRcdFx0XHRcdGJ1dHRvblByb3BzOiB7XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU6ICdjb21wb25lbnRzLWJ1dHRvbiBidXR0b24gYnV0dG9uLWxhcmdlJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0b25TZWxlY3Q6IG9uU2VsZWN0SW1hZ2UsXG5cdFx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy5pbWdJRCxcblx0XHRcdFx0XHRyZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihfcmVmMikge1xuXHRcdFx0XHRcdFx0dmFyIG9wZW4gPSBfcmVmMi5vcGVuO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0QnV0dG9uLFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0aXNMYXJnZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrOiBvcGVuLFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZTogJ2NvbXBvbmVudHMtYnV0dG9uIGNvbXBvbmVudHMtaWNvbi1idXR0b24gYnV0dG9uIGJ1dHRvbi1sYXJnZSB3cC1ibG9jay1pbWFnZV9fdXBsb2FkLWJ1dHRvbidcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KERhc2hpY29uLCB7IGljb246IGJ1dHRvbkljb24gfSksXG5cdFx0XHRcdFx0XHRcdGJ1dHRvblRleHRcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSA6IG51bGxcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ3RleHRCb3gnIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChFZGl0YWJsZSwge1xuXHRcdFx0XHRcdHRhZ25hbWU6ICdkaXYnLFxuXHRcdFx0XHRcdG11bHRpbGluZTogJ3AnLFxuXHRcdFx0XHRcdGNsYXNzTmFtZTogJ3RleHRCb3hDb250ZW50Jyxcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogJy4uLi4nLFxuXHRcdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLmNvbnRlbnQsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IG9uQ2hhbmdlQ29udGVudFxuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdCldO1xuXHR9LFxuXG5cdC8vIFNhdmUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUsICdkYXRhLWludmVydCc6IHByb3BzLmF0dHJpYnV0ZXMuaW52ZXJ0IH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcblx0XHRcdFx0Y2xhc3NOYW1lOiAnaW1hZ2VCb3gnLFxuXHRcdFx0XHQnZGF0YS1pbWd1cmwnOiBwcm9wcy5hdHRyaWJ1dGVzLmltZ1VSTCxcblx0XHRcdFx0J2RhdGEtaW1naWQnOiBwcm9wcy5hdHRyaWJ1dGVzLmltZ0lELFxuXHRcdFx0XHRzdHlsZTogeyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIHByb3BzLmF0dHJpYnV0ZXMuaW1nVVJMICsgJyknIH1cblx0XHRcdH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICd0ZXh0Qm94JyB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6ICd0ZXh0Qm94Q29udGVudCcgfSxcblx0XHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLmNvbnRlbnRcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2RzLWJsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzEyNWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz8zZTZiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);