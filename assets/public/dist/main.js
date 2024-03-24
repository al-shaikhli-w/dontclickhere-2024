/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 29:
/***/ (() => {

var burgermenu = document.querySelector('.burgermenu');
var menuHeader = document.querySelector('#menu-header');
burgermenu.addEventListener('click', function () {
  burgermenu.classList.toggle('opened');
  menuHeader.classList.toggle('opened');
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/js/navbar/index.js
var navbar = __webpack_require__(29);
;// CONCATENATED MODULE: ./src/js/index.js

;// CONCATENATED MODULE: ./src/entry.js


console.log("Hello, world!");
})();

/******/ })()
;