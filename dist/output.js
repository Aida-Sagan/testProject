/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_adaptive_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../css/adaptive.css */ \"./css/adaptive.css\");\n\r\n\r\nfunction toggleInfo() {\r\n    const arrow = document.getElementById('arrow');\r\n    const moreInfoText = document.querySelector('.more-info-text');\r\n    const hideInfoText = document.querySelector('.hide-info-text');\r\n    const moreInfoPanel = document.querySelector('.more-info-panel');\r\n\r\n    if (moreInfoPanel.style.display === 'none') {\r\n        arrow.style.transform = 'rotate(180deg)';\r\n        moreInfoText.style.display = 'none';\r\n        hideInfoText.style.display = 'block';\r\n        moreInfoPanel.style.display = 'flex';\r\n        arrow.querySelector('path').setAttribute('fill', '#A6AAC3');\r\n    } else {\r\n        arrow.style.transform = 'rotate(0deg)';\r\n        moreInfoText.style.display = 'block';\r\n        hideInfoText.style.display = 'none';\r\n        moreInfoPanel.style.display = 'none';\r\n        arrow.querySelector('path').setAttribute('fill', '#0079F0');\r\n    }\r\n}\r\n\r\nfunction toggleInfoSecond() {\r\n    const arrow = document.getElementById('arrow2');\r\n    const moreInfoText = document.querySelector('.more-info-text2');\r\n    const hideInfoText = document.querySelector('.hide-info-text2');\r\n    const moreInfoPanel = document.querySelector('.more-info-panel2');\r\n\r\n    if (moreInfoPanel.style.display === 'none') {\r\n        arrow.style.transform = 'rotate(180deg)';\r\n        moreInfoText.style.display = 'none';\r\n        hideInfoText.style.display = 'block';\r\n        moreInfoPanel.style.display = 'flex';\r\n        arrow.querySelector('path').setAttribute('fill', '#A6AAC3');\r\n    } else {\r\n        arrow.style.transform = 'rotate(0deg)';\r\n        moreInfoText.style.display = 'block';\r\n        hideInfoText.style.display = 'none';\r\n        moreInfoPanel.style.display = 'none';\r\n        arrow.querySelector('path').setAttribute('fill', '#0079F0');\r\n    }\r\n}\r\n\r\nfunction toggleInfoThird() {\r\n    const arrow = document.getElementById('arrow3');\r\n    const moreInfoText = document.querySelector('.more-info-text3');\r\n    const hideInfoText = document.querySelector('.hide-info-text3');\r\n    const moreInfoPanel = document.querySelector('.more-info-panel3');\r\n\r\n    if (moreInfoPanel.style.display === 'none') {\r\n        arrow.style.transform = 'rotate(180deg)';\r\n        moreInfoText.style.display = 'none';\r\n        hideInfoText.style.display = 'block';\r\n        moreInfoPanel.style.display = 'flex';\r\n        arrow.querySelector('path').setAttribute('fill', '#A6AAC3');\r\n    } else {\r\n        arrow.style.transform = 'rotate(0deg)';\r\n        moreInfoText.style.display = 'block';\r\n        hideInfoText.style.display = 'none';\r\n        moreInfoPanel.style.display = 'none';\r\n        arrow.querySelector('path').setAttribute('fill', '#0079F0');\r\n    }\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n    const includes = document.querySelectorAll('include');\r\n    includes.forEach(include => {\r\n        fetch(include.getAttribute('src'))\r\n            .then(response => response.text())\r\n            .then(data => {\r\n                include.insertAdjacentHTML('afterend', data);\r\n                include.remove();\r\n            });\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://testproject/./js/script.js?");

/***/ }),

/***/ "./css/adaptive.css":
/*!**************************!*\
  !*** ./css/adaptive.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://testproject/./css/adaptive.css?");

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://testproject/./css/style.css?");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;