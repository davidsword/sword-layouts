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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tiles_tile_block_js__ = __webpack_require__(/*! ./tiles/tile_block.js */ 4);\n\n// ..more blocks enroute, standby//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/Mjc5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vdGlsZXMvdGlsZV9ibG9jay5qcyc7XG4vLyAuLm1vcmUgYmxvY2tzIGVucm91dGUsIHN0YW5kYnlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/*!*********************************!*\
  !*** ./src/tiles/tile_block.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: _sandbox-layouts\n */\n\n/* eslint-disable react/jsx-key */\n\n\n\nvar __ = wp.i18n.__;\nvar _wp$blocks = wp.blocks,\n    registerBlockType = _wp$blocks.registerBlockType,\n    Editable = _wp$blocks.Editable,\n    MediaUpload = _wp$blocks.MediaUpload,\n    InspectorControls = _wp$blocks.InspectorControls,\n    BlockDescription = _wp$blocks.BlockDescription;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    Dashicon = _wp$components.Dashicon,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    FormToggle = _wp$components.FormToggle;\n\n\nregisterBlockType('cgb/block-sandbox-layouts', {\n\ttitle: __('Sword Layouts', 'CGB'),\n\ticon: 'shield',\n\tcategory: 'common',\n\tkeywords: [__('_sandbox-layouts — CGB Block'), __('CGB Example'), __('create-guten-block')],\n\tattributes: {\n\t\timgURL: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'attribute',\n\t\t\tselector: '.imageBox',\n\t\t\tattribute: 'data-imgurl',\n\t\t\tdefault: ''\n\t\t},\n\t\timgID: {\n\t\t\ttype: 'number',\n\t\t\tdefault: ''\n\t\t},\n\t\tcontent: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: '.textBoxContent',\n\t\t\tdefault: ''\n\t\t},\n\t\tinvert: {\n\t\t\ttype: 'boolean',\n\t\t\tdefault: false\n\t\t}\n\t},\n\n\tgetEditWrapperProps: function getEditWrapperProps() {\n\t\treturn { 'data-align': 'full' };\n\t},\n\n\n\t// Edit --------------------------------\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes,\n\t\t    className = _ref.className,\n\t\t    focus = _ref.focus;\n\n\t\tvar onChangeContent = function onChangeContent(value) {\n\t\t\tsetAttributes({ content: value });\n\t\t};\n\t\tvar togglePosition = function togglePosition() {\n\t\t\tsetAttributes({ invert: !attributes.invert });\n\t\t};\n\t\tvar onSelectImage = function onSelectImage(img) {\n\t\t\tsetAttributes({\n\t\t\t\timgID: img.id,\n\t\t\t\timgURL: img.url\n\t\t\t});\n\t\t};\n\t\tvar buttonText = !attributes.imgID ? 'Select Image' : 'Change Image';\n\t\tvar buttonIcon = !attributes.imgID ? 'add' : 'edit';\n\t\treturn [!!focus && wp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\t{ key: 'inspector' },\n\t\t\twp.element.createElement(\n\t\t\t\tBlockDescription,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\t__('Block controls.  Do more.')\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{ title: __('Invert Layout') },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tPanelRow,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'label',\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\thtmlFor: 'invert-form-toggle',\n\t\t\t\t\t\t\tclassName: 'blocks-base-control__label'\n\t\t\t\t\t\t},\n\t\t\t\t\t\t__('Invert Layout')\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement(FormToggle, {\n\t\t\t\t\t\tid: 'invert-form-toggle',\n\t\t\t\t\t\tlabel: __('Invert Layout'),\n\t\t\t\t\t\tchecked: !!attributes.invert,\n\t\t\t\t\t\tonChange: togglePosition\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t)\n\t\t), wp.element.createElement(\n\t\t\t'div',\n\t\t\t{\n\t\t\t\tclassName: className,\n\t\t\t\t'data-invert': attributes.invert ? 'true' : 'false',\n\t\t\t\t'data-align': 'full'\n\t\t\t},\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{\n\t\t\t\t\tclassName: 'imageBox',\n\t\t\t\t\tstyle: { backgroundImage: 'url(' + attributes.imgURL + ')' },\n\t\t\t\t\t'data-imgurl': attributes.imgURL,\n\t\t\t\t\t'data-imgid': attributes.imgID,\n\t\t\t\t\t'data-hasimg': !!attributes.imgID ? 'true' : 'false'\n\t\t\t\t},\n\t\t\t\tfocus ? wp.element.createElement(MediaUpload, {\n\t\t\t\t\tbuttonProps: {\n\t\t\t\t\t\tclassName: 'components-button button button-large'\n\t\t\t\t\t},\n\t\t\t\t\tonSelect: onSelectImage,\n\t\t\t\t\ttype: 'image',\n\t\t\t\t\tvalue: attributes.imgID,\n\t\t\t\t\trender: function render(_ref2) {\n\t\t\t\t\t\tvar open = _ref2.open;\n\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\tButton,\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tisLarge: true,\n\t\t\t\t\t\t\t\tonClick: open,\n\t\t\t\t\t\t\t\tclassName: 'components-button components-icon-button button button-large wp-block-image__upload-button'\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\twp.element.createElement(Dashicon, { icon: buttonIcon }),\n\t\t\t\t\t\t\tbuttonText\n\t\t\t\t\t\t);\n\t\t\t\t\t}\n\t\t\t\t}) : null\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'textBox' },\n\t\t\t\twp.element.createElement(Editable, {\n\t\t\t\t\ttagname: 'div',\n\t\t\t\t\tmultiline: 'p',\n\t\t\t\t\tclassName: 'textBoxContent',\n\t\t\t\t\tplaceholder: '....',\n\t\t\t\t\tvalue: attributes.content,\n\t\t\t\t\tonChange: onChangeContent\n\t\t\t\t})\n\t\t\t)\n\t\t)];\n\t},\n\n\t// Save --------------------------------\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className, 'data-invert': props.attributes.invert },\n\t\t\twp.element.createElement('div', {\n\t\t\t\tclassName: 'imageBox',\n\t\t\t\t'data-imgurl': props.attributes.imgURL,\n\t\t\t\t'data-imgid': props.attributes.imgID,\n\t\t\t\tstyle: { backgroundImage: 'url(' + props.attributes.imgURL + ')' }\n\t\t\t}),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'textBox' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'textBoxContent' },\n\t\t\t\t\tprops.attributes.content\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90aWxlcy90aWxlX2Jsb2NrLmpzPzU0MmQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCTE9DSzogX3NhbmRib3gtbGF5b3V0c1xuICovXG5cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1rZXkgKi9cblxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgX3dwJGJsb2NrcyA9IHdwLmJsb2NrcyxcbiAgICByZWdpc3RlckJsb2NrVHlwZSA9IF93cCRibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUsXG4gICAgRWRpdGFibGUgPSBfd3AkYmxvY2tzLkVkaXRhYmxlLFxuICAgIE1lZGlhVXBsb2FkID0gX3dwJGJsb2Nrcy5NZWRpYVVwbG9hZCxcbiAgICBJbnNwZWN0b3JDb250cm9scyA9IF93cCRibG9ja3MuSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgQmxvY2tEZXNjcmlwdGlvbiA9IF93cCRibG9ja3MuQmxvY2tEZXNjcmlwdGlvbjtcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgQnV0dG9uID0gX3dwJGNvbXBvbmVudHMuQnV0dG9uLFxuICAgIERhc2hpY29uID0gX3dwJGNvbXBvbmVudHMuRGFzaGljb24sXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5LFxuICAgIFBhbmVsUm93ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxSb3csXG4gICAgRm9ybVRvZ2dsZSA9IF93cCRjb21wb25lbnRzLkZvcm1Ub2dnbGU7XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2NnYi9ibG9jay1zYW5kYm94LWxheW91dHMnLCB7XG5cdHRpdGxlOiBfXygnU3dvcmQgTGF5b3V0cycsICdDR0InKSxcblx0aWNvbjogJ3NoaWVsZCcsXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblx0a2V5d29yZHM6IFtfXygnX3NhbmRib3gtbGF5b3V0cyDigJQgQ0dCIEJsb2NrJyksIF9fKCdDR0IgRXhhbXBsZScpLCBfXygnY3JlYXRlLWd1dGVuLWJsb2NrJyldLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0aW1nVVJMOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdHNvdXJjZTogJ2F0dHJpYnV0ZScsXG5cdFx0XHRzZWxlY3RvcjogJy5pbWFnZUJveCcsXG5cdFx0XHRhdHRyaWJ1dGU6ICdkYXRhLWltZ3VybCcsXG5cdFx0XHRkZWZhdWx0OiAnJ1xuXHRcdH0sXG5cdFx0aW1nSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogJydcblx0XHR9LFxuXHRcdGNvbnRlbnQ6IHtcblx0XHRcdHR5cGU6ICdhcnJheScsXG5cdFx0XHRzb3VyY2U6ICdjaGlsZHJlbicsXG5cdFx0XHRzZWxlY3RvcjogJy50ZXh0Qm94Q29udGVudCcsXG5cdFx0XHRkZWZhdWx0OiAnJ1xuXHRcdH0sXG5cdFx0aW52ZXJ0OiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiBmYWxzZVxuXHRcdH1cblx0fSxcblxuXHRnZXRFZGl0V3JhcHBlclByb3BzOiBmdW5jdGlvbiBnZXRFZGl0V3JhcHBlclByb3BzKCkge1xuXHRcdHJldHVybiB7ICdkYXRhLWFsaWduJzogJ2Z1bGwnIH07XG5cdH0sXG5cblxuXHQvLyBFZGl0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQoX3JlZikge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gX3JlZi5zZXRBdHRyaWJ1dGVzLFxuXHRcdCAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcblx0XHQgICAgZm9jdXMgPSBfcmVmLmZvY3VzO1xuXG5cdFx0dmFyIG9uQ2hhbmdlQ29udGVudCA9IGZ1bmN0aW9uIG9uQ2hhbmdlQ29udGVudCh2YWx1ZSkge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IGNvbnRlbnQ6IHZhbHVlIH0pO1xuXHRcdH07XG5cdFx0dmFyIHRvZ2dsZVBvc2l0aW9uID0gZnVuY3Rpb24gdG9nZ2xlUG9zaXRpb24oKSB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgaW52ZXJ0OiAhYXR0cmlidXRlcy5pbnZlcnQgfSk7XG5cdFx0fTtcblx0XHR2YXIgb25TZWxlY3RJbWFnZSA9IGZ1bmN0aW9uIG9uU2VsZWN0SW1hZ2UoaW1nKSB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0aW1nSUQ6IGltZy5pZCxcblx0XHRcdFx0aW1nVVJMOiBpbWcudXJsXG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdHZhciBidXR0b25UZXh0ID0gIWF0dHJpYnV0ZXMuaW1nSUQgPyAnU2VsZWN0IEltYWdlJyA6ICdDaGFuZ2UgSW1hZ2UnO1xuXHRcdHZhciBidXR0b25JY29uID0gIWF0dHJpYnV0ZXMuaW1nSUQgPyAnYWRkJyA6ICdlZGl0Jztcblx0XHRyZXR1cm4gWyEhZm9jdXMgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdFx0XHR7IGtleTogJ2luc3BlY3RvcicgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0QmxvY2tEZXNjcmlwdGlvbixcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdwJyxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdF9fKCdCbG9jayBjb250cm9scy4gIERvIG1vcmUuJylcblx0XHRcdFx0KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0UGFuZWxCb2R5LFxuXHRcdFx0XHR7IHRpdGxlOiBfXygnSW52ZXJ0IExheW91dCcpIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRQYW5lbFJvdyxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdsYWJlbCcsXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGh0bWxGb3I6ICdpbnZlcnQtZm9ybS10b2dnbGUnLFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU6ICdibG9ja3MtYmFzZS1jb250cm9sX19sYWJlbCdcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRfXygnSW52ZXJ0IExheW91dCcpXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoRm9ybVRvZ2dsZSwge1xuXHRcdFx0XHRcdFx0aWQ6ICdpbnZlcnQtZm9ybS10b2dnbGUnLFxuXHRcdFx0XHRcdFx0bGFiZWw6IF9fKCdJbnZlcnQgTGF5b3V0JyksXG5cdFx0XHRcdFx0XHRjaGVja2VkOiAhIWF0dHJpYnV0ZXMuaW52ZXJ0LFxuXHRcdFx0XHRcdFx0b25DaGFuZ2U6IHRvZ2dsZVBvc2l0aW9uXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0e1xuXHRcdFx0XHRjbGFzc05hbWU6IGNsYXNzTmFtZSxcblx0XHRcdFx0J2RhdGEtaW52ZXJ0JzogYXR0cmlidXRlcy5pbnZlcnQgPyAndHJ1ZScgOiAnZmFsc2UnLFxuXHRcdFx0XHQnZGF0YS1hbGlnbic6ICdmdWxsJ1xuXHRcdFx0fSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjbGFzc05hbWU6ICdpbWFnZUJveCcsXG5cdFx0XHRcdFx0c3R5bGU6IHsgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBhdHRyaWJ1dGVzLmltZ1VSTCArICcpJyB9LFxuXHRcdFx0XHRcdCdkYXRhLWltZ3VybCc6IGF0dHJpYnV0ZXMuaW1nVVJMLFxuXHRcdFx0XHRcdCdkYXRhLWltZ2lkJzogYXR0cmlidXRlcy5pbWdJRCxcblx0XHRcdFx0XHQnZGF0YS1oYXNpbWcnOiAhIWF0dHJpYnV0ZXMuaW1nSUQgPyAndHJ1ZScgOiAnZmFsc2UnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZvY3VzID8gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KE1lZGlhVXBsb2FkLCB7XG5cdFx0XHRcdFx0YnV0dG9uUHJvcHM6IHtcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogJ2NvbXBvbmVudHMtYnV0dG9uIGJ1dHRvbiBidXR0b24tbGFyZ2UnXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvblNlbGVjdDogb25TZWxlY3RJbWFnZSxcblx0XHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLmltZ0lELFxuXHRcdFx0XHRcdHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKF9yZWYyKSB7XG5cdFx0XHRcdFx0XHR2YXIgb3BlbiA9IF9yZWYyLm9wZW47XG5cdFx0XHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRCdXR0b24sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRpc0xhcmdlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s6IG9wZW4sXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiAnY29tcG9uZW50cy1idXR0b24gY29tcG9uZW50cy1pY29uLWJ1dHRvbiBidXR0b24gYnV0dG9uLWxhcmdlIHdwLWJsb2NrLWltYWdlX191cGxvYWQtYnV0dG9uJ1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoRGFzaGljb24sIHsgaWNvbjogYnV0dG9uSWNvbiB9KSxcblx0XHRcdFx0XHRcdFx0YnV0dG9uVGV4dFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pIDogbnVsbFxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAndGV4dEJveCcgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEVkaXRhYmxlLCB7XG5cdFx0XHRcdFx0dGFnbmFtZTogJ2RpdicsXG5cdFx0XHRcdFx0bXVsdGlsaW5lOiAncCcsXG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiAndGV4dEJveENvbnRlbnQnLFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyOiAnLi4uLicsXG5cdFx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMuY29udGVudCxcblx0XHRcdFx0XHRvbkNoYW5nZTogb25DaGFuZ2VDb250ZW50XG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0KV07XG5cdH0sXG5cblx0Ly8gU2F2ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSwgJ2RhdGEtaW52ZXJ0JzogcHJvcHMuYXR0cmlidXRlcy5pbnZlcnQgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuXHRcdFx0XHRjbGFzc05hbWU6ICdpbWFnZUJveCcsXG5cdFx0XHRcdCdkYXRhLWltZ3VybCc6IHByb3BzLmF0dHJpYnV0ZXMuaW1nVVJMLFxuXHRcdFx0XHQnZGF0YS1pbWdpZCc6IHByb3BzLmF0dHJpYnV0ZXMuaW1nSUQsXG5cdFx0XHRcdHN0eWxlOiB7IGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgcHJvcHMuYXR0cmlidXRlcy5pbWdVUkwgKyAnKScgfVxuXHRcdFx0fSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ3RleHRCb3gnIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3RleHRCb3hDb250ZW50JyB9LFxuXHRcdFx0XHRcdHByb3BzLmF0dHJpYnV0ZXMuY29udGVudFxuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGlsZXMvdGlsZV9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!******************************!*\
  !*** ./src/tiles/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90aWxlcy9zdHlsZS5zY3NzP2VlNjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90aWxlcy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*******************************!*\
  !*** ./src/tiles/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90aWxlcy9lZGl0b3Iuc2Nzcz9jYzRhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGlsZXMvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ })
/******/ ]);