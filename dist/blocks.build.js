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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_ds_block_js__ = __webpack_require__(/*! ./block/ds-block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript.\n * You can create a new block folder in\n * this dir and include code for that block\n * here as well.\n *\n * All blocks should be included here since\n * this is the file that Webpack is compiling.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdC5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpblxuICogdGhpcyBkaXIgYW5kIGluY2x1ZGUgY29kZSBmb3IgdGhhdCBibG9ja1xuICogaGVyZSBhcyB3ZWxsLlxuICpcbiAqIEFsbCBibG9ja3Mgc2hvdWxkIGJlIGluY2x1ZGVkIGhlcmUgc2luY2VcbiAqIHRoaXMgaXMgdGhlIGZpbGUgdGhhdCBXZWJwYWNrIGlzIGNvbXBpbGluZy5cbiAqL1xuXG5pbXBvcnQgJy4vYmxvY2svZHMtYmxvY2suanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*******************************!*\
  !*** ./src/block/ds-block.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: _sandbox-layouts\n *\n *\n *\n */\n\n//import classnames from 'classnames';\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n/**\n * Internal block libraries\n AlignmentToolbar,\n BlockControls,\n BlockAlignmentToolbar,\n */\n\nvar _wp$blocks = wp.blocks,\n    registerBlockType = _wp$blocks.registerBlockType,\n    Editable = _wp$blocks.Editable,\n    MediaUpload = _wp$blocks.MediaUpload,\n    InspectorControls = _wp$blocks.InspectorControls,\n    BlockDescription = _wp$blocks.BlockDescription;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    Dashicon = _wp$components.Dashicon,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    FormToggle = _wp$components.FormToggle;\n\n\nregisterBlockType('cgb/block-sandbox-layouts', {\n\ttitle: __('Sword Layouts', 'CGB'),\n\ticon: 'shield',\n\tcategory: 'common',\n\tkeywords: [__('_sandbox-layouts — CGB Block'), __('CGB Example'), __('create-guten-block')],\n\tattributes: {\n\t\timgURL: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'attribute',\n\t\t\tselector: '.imageBox',\n\t\t\tattribute: 'data-imgurl',\n\t\t\tdefault: ''\n\t\t},\n\t\timgID: {\n\t\t\ttype: 'number',\n\t\t\tdefault: ''\n\t\t},\n\t\tcontent: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: '.textBoxContent',\n\t\t\tdefault: ''\n\t\t},\n\t\tinvert: {\n\t\t\ttype: 'boolean',\n\t\t\tdefault: false\n\t\t}\n\t},\n\t// Edit --------------------------------\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes,\n\t\t    className = _ref.className,\n\t\t    focus = _ref.focus;\n\n\t\tvar onChangeContent = function onChangeContent(value) {\n\t\t\tsetAttributes({ content: value });\n\t\t};\n\t\tvar togglePosition = function togglePosition() {\n\t\t\tsetAttributes({ invert: !attributes.invert });\n\t\t};\n\t\tvar onSelectImage = function onSelectImage(img) {\n\t\t\tsetAttributes({\n\t\t\t\timgID: img.id,\n\t\t\t\timgURL: img.url\n\t\t\t});\n\t\t};\n\t\tvar buttonText = !attributes.imgID ? 'Select Image' : 'Change Image';\n\t\tvar buttonIcon = !attributes.imgID ? 'add' : 'edit';\n\t\treturn [!!focus && wp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\t{ key: 'inspector' },\n\t\t\twp.element.createElement(\n\t\t\t\tBlockDescription,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\t__('Block controls.  Do more.')\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{ title: __('Invert Layout') },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tPanelRow,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'label',\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\thtmlFor: 'invert-form-toggle',\n\t\t\t\t\t\t\tclassName: 'blocks-base-control__label'\n\t\t\t\t\t\t},\n\t\t\t\t\t\t__('Invert Layout')\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement(FormToggle, {\n\t\t\t\t\t\tid: 'invert-form-toggle',\n\t\t\t\t\t\tlabel: __('Invert Layout'),\n\t\t\t\t\t\tchecked: !!attributes.invert,\n\t\t\t\t\t\tonChange: togglePosition\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t)\n\t\t), wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className, 'data-invert': attributes.invert ? \"true\" : \"false\" },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{\n\t\t\t\t\tclassName: 'imageBox',\n\t\t\t\t\tstyle: { backgroundImage: 'url(' + attributes.imgURL + ')' },\n\t\t\t\t\t'data-imgurl': attributes.imgURL,\n\t\t\t\t\t'data-imgid': attributes.imgID\n\t\t\t\t},\n\t\t\t\tfocus ? wp.element.createElement(MediaUpload, {\n\t\t\t\t\tbuttonProps: {\n\t\t\t\t\t\tclassName: 'components-button button button-large'\n\t\t\t\t\t},\n\t\t\t\t\tonSelect: onSelectImage,\n\t\t\t\t\ttype: 'image',\n\t\t\t\t\tvalue: attributes.imgID,\n\t\t\t\t\trender: function render(_ref2) {\n\t\t\t\t\t\tvar open = _ref2.open;\n\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\tButton,\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tisLarge: true,\n\t\t\t\t\t\t\t\tonClick: open,\n\t\t\t\t\t\t\t\tclassName: 'components-button components-icon-button button button-large wp-block-image__upload-button'\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\twp.element.createElement(Dashicon, { icon: buttonIcon }),\n\t\t\t\t\t\t\tbuttonText\n\t\t\t\t\t\t);\n\t\t\t\t\t}\n\t\t\t\t}) : null\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'textBox' },\n\t\t\t\twp.element.createElement(Editable, {\n\t\t\t\t\ttagname: 'div',\n\t\t\t\t\tmultiline: 'p',\n\t\t\t\t\tclassName: 'textBoxContent',\n\t\t\t\t\tplaceholder: '....',\n\t\t\t\t\tvalue: attributes.content,\n\t\t\t\t\tonChange: onChangeContent\n\t\t\t\t})\n\t\t\t)\n\t\t)];\n\t},\n\n\t// Save --------------------------------\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className, 'data-invert': props.attributes.invert },\n\t\t\twp.element.createElement('div', {\n\t\t\t\tclassName: 'imageBox',\n\t\t\t\t'data-imgurl': props.attributes.imgURL,\n\t\t\t\t'data-imgid': props.attributes.imgID,\n\t\t\t\tstyle: { backgroundImage: 'url(' + props.attributes.imgURL + ')' }\n\t\t\t}),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'textBox' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'textBoxContent' },\n\t\t\t\t\tprops.attributes.content\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9kcy1ibG9jay5qcz8yZTg2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IF9zYW5kYm94LWxheW91dHNcbiAqXG4gKlxuICpcbiAqL1xuXG4vL2ltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbnZhciBfXyA9IHdwLmkxOG4uX187IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuLyoqXG4gKiBJbnRlcm5hbCBibG9jayBsaWJyYXJpZXNcbiBBbGlnbm1lbnRUb29sYmFyLFxuIEJsb2NrQ29udHJvbHMsXG4gQmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuICovXG5cbnZhciBfd3AkYmxvY2tzID0gd3AuYmxvY2tzLFxuICAgIHJlZ2lzdGVyQmxvY2tUeXBlID0gX3dwJGJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZSxcbiAgICBFZGl0YWJsZSA9IF93cCRibG9ja3MuRWRpdGFibGUsXG4gICAgTWVkaWFVcGxvYWQgPSBfd3AkYmxvY2tzLk1lZGlhVXBsb2FkLFxuICAgIEluc3BlY3RvckNvbnRyb2xzID0gX3dwJGJsb2Nrcy5JbnNwZWN0b3JDb250cm9scyxcbiAgICBCbG9ja0Rlc2NyaXB0aW9uID0gX3dwJGJsb2Nrcy5CbG9ja0Rlc2NyaXB0aW9uO1xudmFyIF93cCRjb21wb25lbnRzID0gd3AuY29tcG9uZW50cyxcbiAgICBCdXR0b24gPSBfd3AkY29tcG9uZW50cy5CdXR0b24sXG4gICAgRGFzaGljb24gPSBfd3AkY29tcG9uZW50cy5EYXNoaWNvbixcbiAgICBQYW5lbEJvZHkgPSBfd3AkY29tcG9uZW50cy5QYW5lbEJvZHksXG4gICAgUGFuZWxSb3cgPSBfd3AkY29tcG9uZW50cy5QYW5lbFJvdyxcbiAgICBGb3JtVG9nZ2xlID0gX3dwJGNvbXBvbmVudHMuRm9ybVRvZ2dsZTtcblxuXG5yZWdpc3RlckJsb2NrVHlwZSgnY2diL2Jsb2NrLXNhbmRib3gtbGF5b3V0cycsIHtcblx0dGl0bGU6IF9fKCdTd29yZCBMYXlvdXRzJywgJ0NHQicpLFxuXHRpY29uOiAnc2hpZWxkJyxcblx0Y2F0ZWdvcnk6ICdjb21tb24nLFxuXHRrZXl3b3JkczogW19fKCdfc2FuZGJveC1sYXlvdXRzIOKAlCBDR0IgQmxvY2snKSwgX18oJ0NHQiBFeGFtcGxlJyksIF9fKCdjcmVhdGUtZ3V0ZW4tYmxvY2snKV0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRpbWdVUkw6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0c291cmNlOiAnYXR0cmlidXRlJyxcblx0XHRcdHNlbGVjdG9yOiAnLmltYWdlQm94Jyxcblx0XHRcdGF0dHJpYnV0ZTogJ2RhdGEtaW1ndXJsJyxcblx0XHRcdGRlZmF1bHQ6ICcnXG5cdFx0fSxcblx0XHRpbWdJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAnJ1xuXHRcdH0sXG5cdFx0Y29udGVudDoge1xuXHRcdFx0dHlwZTogJ2FycmF5Jyxcblx0XHRcdHNvdXJjZTogJ2NoaWxkcmVuJyxcblx0XHRcdHNlbGVjdG9yOiAnLnRleHRCb3hDb250ZW50Jyxcblx0XHRcdGRlZmF1bHQ6ICcnXG5cdFx0fSxcblx0XHRpbnZlcnQ6IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHQvLyBFZGl0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQoX3JlZikge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gX3JlZi5zZXRBdHRyaWJ1dGVzLFxuXHRcdCAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcblx0XHQgICAgZm9jdXMgPSBfcmVmLmZvY3VzO1xuXG5cdFx0dmFyIG9uQ2hhbmdlQ29udGVudCA9IGZ1bmN0aW9uIG9uQ2hhbmdlQ29udGVudCh2YWx1ZSkge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IGNvbnRlbnQ6IHZhbHVlIH0pO1xuXHRcdH07XG5cdFx0dmFyIHRvZ2dsZVBvc2l0aW9uID0gZnVuY3Rpb24gdG9nZ2xlUG9zaXRpb24oKSB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgaW52ZXJ0OiAhYXR0cmlidXRlcy5pbnZlcnQgfSk7XG5cdFx0fTtcblx0XHR2YXIgb25TZWxlY3RJbWFnZSA9IGZ1bmN0aW9uIG9uU2VsZWN0SW1hZ2UoaW1nKSB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0aW1nSUQ6IGltZy5pZCxcblx0XHRcdFx0aW1nVVJMOiBpbWcudXJsXG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdHZhciBidXR0b25UZXh0ID0gIWF0dHJpYnV0ZXMuaW1nSUQgPyAnU2VsZWN0IEltYWdlJyA6ICdDaGFuZ2UgSW1hZ2UnO1xuXHRcdHZhciBidXR0b25JY29uID0gIWF0dHJpYnV0ZXMuaW1nSUQgPyAnYWRkJyA6ICdlZGl0Jztcblx0XHRyZXR1cm4gWyEhZm9jdXMgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdFx0XHR7IGtleTogJ2luc3BlY3RvcicgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0QmxvY2tEZXNjcmlwdGlvbixcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdwJyxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdF9fKCdCbG9jayBjb250cm9scy4gIERvIG1vcmUuJylcblx0XHRcdFx0KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0UGFuZWxCb2R5LFxuXHRcdFx0XHR7IHRpdGxlOiBfXygnSW52ZXJ0IExheW91dCcpIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRQYW5lbFJvdyxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdsYWJlbCcsXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGh0bWxGb3I6ICdpbnZlcnQtZm9ybS10b2dnbGUnLFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU6ICdibG9ja3MtYmFzZS1jb250cm9sX19sYWJlbCdcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRfXygnSW52ZXJ0IExheW91dCcpXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoRm9ybVRvZ2dsZSwge1xuXHRcdFx0XHRcdFx0aWQ6ICdpbnZlcnQtZm9ybS10b2dnbGUnLFxuXHRcdFx0XHRcdFx0bGFiZWw6IF9fKCdJbnZlcnQgTGF5b3V0JyksXG5cdFx0XHRcdFx0XHRjaGVja2VkOiAhIWF0dHJpYnV0ZXMuaW52ZXJ0LFxuXHRcdFx0XHRcdFx0b25DaGFuZ2U6IHRvZ2dsZVBvc2l0aW9uXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgJ2RhdGEtaW52ZXJ0JzogYXR0cmlidXRlcy5pbnZlcnQgPyBcInRydWVcIiA6IFwiZmFsc2VcIiB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGNsYXNzTmFtZTogJ2ltYWdlQm94Jyxcblx0XHRcdFx0XHRzdHlsZTogeyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIGF0dHJpYnV0ZXMuaW1nVVJMICsgJyknIH0sXG5cdFx0XHRcdFx0J2RhdGEtaW1ndXJsJzogYXR0cmlidXRlcy5pbWdVUkwsXG5cdFx0XHRcdFx0J2RhdGEtaW1naWQnOiBhdHRyaWJ1dGVzLmltZ0lEXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZvY3VzID8gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KE1lZGlhVXBsb2FkLCB7XG5cdFx0XHRcdFx0YnV0dG9uUHJvcHM6IHtcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogJ2NvbXBvbmVudHMtYnV0dG9uIGJ1dHRvbiBidXR0b24tbGFyZ2UnXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvblNlbGVjdDogb25TZWxlY3RJbWFnZSxcblx0XHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLmltZ0lELFxuXHRcdFx0XHRcdHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKF9yZWYyKSB7XG5cdFx0XHRcdFx0XHR2YXIgb3BlbiA9IF9yZWYyLm9wZW47XG5cdFx0XHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRCdXR0b24sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRpc0xhcmdlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s6IG9wZW4sXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiAnY29tcG9uZW50cy1idXR0b24gY29tcG9uZW50cy1pY29uLWJ1dHRvbiBidXR0b24gYnV0dG9uLWxhcmdlIHdwLWJsb2NrLWltYWdlX191cGxvYWQtYnV0dG9uJ1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoRGFzaGljb24sIHsgaWNvbjogYnV0dG9uSWNvbiB9KSxcblx0XHRcdFx0XHRcdFx0YnV0dG9uVGV4dFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pIDogbnVsbFxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAndGV4dEJveCcgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEVkaXRhYmxlLCB7XG5cdFx0XHRcdFx0dGFnbmFtZTogJ2RpdicsXG5cdFx0XHRcdFx0bXVsdGlsaW5lOiAncCcsXG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiAndGV4dEJveENvbnRlbnQnLFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyOiAnLi4uLicsXG5cdFx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMuY29udGVudCxcblx0XHRcdFx0XHRvbkNoYW5nZTogb25DaGFuZ2VDb250ZW50XG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0KV07XG5cdH0sXG5cblx0Ly8gU2F2ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSwgJ2RhdGEtaW52ZXJ0JzogcHJvcHMuYXR0cmlidXRlcy5pbnZlcnQgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuXHRcdFx0XHRjbGFzc05hbWU6ICdpbWFnZUJveCcsXG5cdFx0XHRcdCdkYXRhLWltZ3VybCc6IHByb3BzLmF0dHJpYnV0ZXMuaW1nVVJMLFxuXHRcdFx0XHQnZGF0YS1pbWdpZCc6IHByb3BzLmF0dHJpYnV0ZXMuaW1nSUQsXG5cdFx0XHRcdHN0eWxlOiB7IGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgcHJvcHMuYXR0cmlidXRlcy5pbWdVUkwgKyAnKScgfVxuXHRcdFx0fSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ3RleHRCb3gnIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3RleHRCb3hDb250ZW50JyB9LFxuXHRcdFx0XHRcdHByb3BzLmF0dHJpYnV0ZXMuY29udGVudFxuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZHMtYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);