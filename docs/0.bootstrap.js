(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/wonder.js":
/*!************************!*\
  !*** ../pkg/wonder.js ***!
  \************************/
/*! exports provided: State, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wonder_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wonder_bg.wasm */ \"../pkg/wonder_bg.wasm\");\n/* harmony import */ var _wonder_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wonder_bg.js */ \"../pkg/wonder_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"State\", function() { return _wonder_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"State\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _wonder_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/wonder.js?");

/***/ }),

/***/ "../pkg/wonder_bg.js":
/*!***************************!*\
  !*** ../pkg/wonder_bg.js ***!
  \***************************/
/*! exports provided: State, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"State\", function() { return State; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _wonder_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wonder_bg.wasm */ \"../pkg/wonder_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _wonder_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_wonder_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n* Universe state information.\n*/\nclass State {\n\n    static __wrap(ptr) {\n        const obj = Object.create(State.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _wonder_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_state_free\"](ptr);\n    }\n    /**\n    * Create a new instance.\n    * @returns {State}\n    */\n    static new() {\n        var ret = _wonder_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"state_new\"]();\n        return State.__wrap(ret);\n    }\n    /**\n    * Update the position data buffer and get its length.\n    * @returns {number}\n    */\n    update_pos_buff() {\n        var ret = _wonder_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"state_update_pos_buff\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * Get a pointer to the position buffer.\n    * @returns {number}\n    */\n    read_pos_buff() {\n        var ret = _wonder_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"state_read_pos_buff\"](this.ptr);\n        return ret;\n    }\n    /**\n    * Tick the state forward a number of times.\n    * @param {number} n\n    */\n    progress(n) {\n        _wonder_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"state_progress\"](this.ptr, n);\n    }\n    /**\n    * Add a player to the world.\n    * @param {number} x\n    * @param {number} y\n    */\n    add_player(x, y) {\n        _wonder_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"state_add_player\"](this.ptr, x, y);\n    }\n    /**\n    * Add a monster to the world.\n    * @param {number} x\n    * @param {number} y\n    */\n    add_monster(x, y) {\n        _wonder_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"state_add_monster\"](this.ptr, x, y);\n    }\n}\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../web/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/wonder_bg.js?");

/***/ }),

/***/ "../pkg/wonder_bg.wasm":
/*!*****************************!*\
  !*** ../pkg/wonder_bg.wasm ***!
  \*****************************/
/*! exports provided: memory, __wbg_state_free, state_new, state_update_pos_buff, state_read_pos_buff, state_progress, state_add_player, state_add_monster */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wonder_bg.js */ \"../pkg/wonder_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/wonder_bg.wasm?");

/***/ }),

/***/ "./draw.js":
/*!*****************!*\
  !*** ./draw.js ***!
  \*****************/
/*! exports provided: clear_canvas, fill_canvas, draw_circle, draw_rect, draw_sprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clear_canvas\", function() { return clear_canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fill_canvas\", function() { return fill_canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draw_circle\", function() { return draw_circle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draw_rect\", function() { return draw_rect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draw_sprite\", function() { return draw_sprite; });\nfunction clear_canvas(canvas) {\n    canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);\n}\n\nfunction fill_canvas(canvas) {\n    canvas.ctx.fillRect(0, 0, canvas.width, canvas.height);\n}\n\nfunction draw_circle(canvas, fx, fy, rad) {\n    const ctx = canvas.ctx;\n    ctx.beginPath();\n    ctx.arc(canvas.width * fx, canvas.height * (1.0 - fy), canvas.width * rad, 0, 2 * Math.PI, true);\n    ctx.fill();\n    ctx.stroke();\n}\n\nfunction draw_rect(canvas, fx, fy, dx, dy) {\n    const ctx = canvas.ctx;\n    ctx.beginPath();\n    ctx.fillRect(canvas.width * fx, canvas.height * (1.0 - fy), canvas.width * dx, -canvas.height * dy);\n    ctx.stroke();\n}\n\nfunction draw_sprite(canvas, img, fx, fy, dx, dy) {\n    canvas.ctx.drawImage(img, canvas.width * fx, canvas.height * (1.0 - fy), canvas.width * dx, -canvas.height * dy);\n}\n\n\n//# sourceURL=webpack:///./draw.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw */ \"./draw.js\");\n/* harmony import */ var _sprites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprites */ \"./sprites.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./render.js\");\n/* harmony import */ var wonder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wonder */ \"../pkg/wonder.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui */ \"./ui.js\");\n\n\n\n\n\n\n\n\n/// == HANDLES ==\n/// -- Forms --\nconst top_form = document.getElementById(\"top_form\");\nconst bottom_form = document.getElementById(\"bottom_form\");\n\n\n\n/// == GLOBALS ==\n/// -- Time --\nvar interval = null;\n\n\n\n/// == LISTENERS ==\n/// -- Buttons --\n/// Check for time button click.\ntime_button.addEventListener(\"click\", event => {\n    if (is_paused()) {\n        play();\n    } else {\n        pause();\n    }\n});\n\n\n/// -- Keypress --\ndocument.body.onkeyup = function (e) {\n    console.log(\"Registered keypress: \", e.keyCode);\n\n    if (e.keyCode == 32) { // spacebar.\n        if (is_paused()) {\n            play();\n        } else {\n            pause();\n        }\n    } else if (e.keyCode == 27) { // escape.\n        Object(_ui__WEBPACK_IMPORTED_MODULE_4__[\"toggle_forms\"])(top_form, bottom_form);\n    } else if (e.keyCode == 82) { // 'r'.\n    }\n}\n\n\n\n/// == FUNCTIONS ==\n/// -- Initialisation --\n/// Initialise a canvas object.\nfunction init_canvas(id, width, height) {\n    console.log(\"Initialising canvas...\");\n\n    const canvas = document.getElementById(id);\n    canvas.width = width;\n    canvas.height = height;\n\n    return {\n        width,\n        height,\n        ctx: canvas.getContext('2d')\n    }\n}\n\n\n/// -- Time --\n/// Check if time is paused.\nfunction is_paused() {\n    return interval === null;\n};\n\n/// Start time.\nfunction play() {\n    console.log(\"PLAY\");\n    time_button.textContent = \"pause\";\n    interval = setInterval(tick, 100);\n};\n\n/// Stop time.\nfunction pause() {\n    console.log(\"PAUSE\");\n    time_button.textContent = \"start\";\n    clearInterval(interval);\n    interval = null;\n};\n\n/// Tick forward one iteration.\nfunction tick() {\n    console.log(\"*tick*\");\n    state.progress(1);\n    Object(_render__WEBPACK_IMPORTED_MODULE_2__[\"render\"])(canvas, state, sprite_map);\n}\n\n\n\n/// == START ==\n/// -- Initialisation --\nconst sprite_map = Object(_sprites__WEBPACK_IMPORTED_MODULE_1__[\"load_sprite_map\"])();\nconst canvas = init_canvas(\"main_canvas\", 800, 500);\n\nconst state = wonder__WEBPACK_IMPORTED_MODULE_3__[\"State\"].new();\nstate.add_player(40, 40);\nfor (let i = 0; i < 10; ++i) {\n    state.add_monster(4 + i * 7, 20);\n}\n\nplay();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./render.js":
/*!*******************!*\
  !*** ./render.js ***!
  \*******************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var wonder_wonder_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wonder/wonder_bg */ \"../pkg/wonder_bg.wasm\");\n/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw */ \"./draw.js\");\n\n\n\n\n\n/// == FUNCTIONS ==\n/// -- Control --\nfunction render(canvas, state, sprite_map) {\n    canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);\n    render_ents(canvas, state, sprite_map);\n}\n\n\n/// -- Components --\nfunction render_ents(canvas, state, sprite_map) {\n    let ent_count = state.update_pos_buff();\n\n    const pos_ptr = state.read_pos_buff();\n    const pos = new Int32Array(wonder_wonder_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer, pos_ptr, ent_count * 2);\n\n    for (let i = 0; i < ent_count; ++i) {\n        const x = pos[2 * i];\n        const y = pos[(2 * i) + 1];\n\n        const fx = x / 80.0;\n        const fy = y / 50.0;\n\n        Object(_draw__WEBPACK_IMPORTED_MODULE_1__[\"draw_sprite\"])(canvas, sprite_map['p'], fx, fy, 0.05, 0.05);\n    }\n}\n\n\n//# sourceURL=webpack:///./render.js?");

/***/ }),

/***/ "./sprites.js":
/*!********************!*\
  !*** ./sprites.js ***!
  \********************/
/*! exports provided: load_sprite_map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"load_sprite_map\", function() { return load_sprite_map; });\n/// == FUNCTIONS ==\n/// -- Loading --\nfunction load_sprite_map() {\n    console.log(\"Loading sprites...\");\n\n    let map = new Map();\n\n    map['p'] = load_img(\"burst\");\n    map['g'] = load_img(\"burst\");\n\n    console.log(\"Sprites loaded.\");\n\n    return map;\n}\n\n\n/// -- Drawing --\n/// Draw a human symbol.\nfunction load_img(name) {\n    let img = new Image();\n    img.onload = function () {\n        console.log(\"Loaded image: \", name);\n    };\n    img.src = './../res/sprites/' + name + '.png';\n\n    return img;\n}\n\n\n//# sourceURL=webpack:///./sprites.js?");

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