(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./ui.js\");\n// import {\n//     Universe\n// } from \"wonder\";\n// import {\n//     memory\n// } from \"wonder/wonder_bg\";\n\n\n\n\n//  == HANDLES ==\n/// -- Forms --\nconst top_form = document.getElementById(\"top_form\");\nconst bottom_form = document.getElementById(\"bottom_form\");\n\n\n\n/// == FUNCTIONS ==\n/// -- Initialisation --\n/// Initialise a canvas object.\nfunction init_canvas(id, width, height) {\n    console.log(\"Initialising canvas...\");\n\n    const canvas = document.getElementById(id);\n    canvas.width = width;\n    canvas.height = height;\n\n    return {\n        width,\n        height,\n        ctx: canvas.getContext('2d')\n    }\n}\n\n\n\n/// == START ==\nconsole.log(\"Hello world!\");\nObject(_ui__WEBPACK_IMPORTED_MODULE_0__[\"toggle_forms\"])(top_form, bottom_form);\nObject(_ui__WEBPACK_IMPORTED_MODULE_0__[\"toggle_forms\"])(top_form, bottom_form);\n\nconst canvas = init_canvas(\"main_canvas\", 800, 800);\nconsole.log(canvas.width);\nconsole.log(canvas.height);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./ui.js":
/*!***************!*\
  !*** ./ui.js ***!
  \***************/
/*! exports provided: toggle_forms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggle_forms\", function() { return toggle_forms; });\n/// Toggle the form visibility.\nfunction toggle_forms(top, bottom) {\n    console.log(\"Toggling form visibility...\");\n\n    if (top.style.display == \"block\") {\n        top.style.display = \"none\";\n        bottom.style.display = \"none\";\n    } else {\n        top.style.display = \"block\";\n        bottom.style.display = \"block\";\n    }\n}\n\n\n//# sourceURL=webpack:///./ui.js?");

/***/ })

}]);