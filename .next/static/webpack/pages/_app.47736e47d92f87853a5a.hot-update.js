webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _reducer_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer/index */ \"./store/reducer/index.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\n\n\n\nvar initStore = function initStore(initialState, options) {\n  var composerEnhancers = redux__WEBPACK_IMPORTED_MODULE_2__[\"compose\"];\n\n  if (false) {}\n\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"createStore\"])(_reducer_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"], initialState, composerEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__[\"default\"])));\n  return store;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initStore);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvaW5kZXguanM/OTEwMSJdLCJuYW1lcyI6WyJpbml0U3RvcmUiLCJpbml0aWFsU3RhdGUiLCJvcHRpb25zIiwiY29tcG9zZXJFbmhhbmNlcnMiLCJjb21wb3NlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJvb3RSZWR1Y2VyIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLFlBQUQsRUFBZUMsT0FBZixFQUEyQjtBQUM1QyxNQUFJQyxpQkFBaUIsR0FBR0MsNkNBQXhCOztBQUVBLGFBQXFDLEVBRXBDOztBQUdELE1BQU1DLEtBQUssR0FBR0MseURBQVcsQ0FBQ0Msc0RBQUQsRUFBY04sWUFBZCxFQUE0QkUsaUJBQWlCLENBQ3JFSyw2REFBZSxDQUFDQyxtREFBRCxDQURzRCxDQUE3QyxDQUF6QjtBQUlBLFNBQU9KLEtBQVA7QUFFQSxDQWREOztBQWdCZUwsd0VBQWYiLCJmaWxlIjoiLi9zdG9yZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByb290UmVkdWNlciAgZnJvbSAnLi9yZWR1Y2VyL2luZGV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuXG5jb25zdCBpbml0U3RvcmUgPSAoaW5pdGlhbFN0YXRlLCBvcHRpb25zKSA9PiB7XG5cdGxldCBjb21wb3NlckVuaGFuY2VycyA9IGNvbXBvc2U7XG5cblx0aWYgKHByb2Nlc3MuYnJvd3NlciA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRjb21wb3NlRW5oYW5jZXJzID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlO1xuXHR9XG5cblxuXHRjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGNvbXBvc2VyRW5oYW5jZXJzKFxuXHRcdGFwcGx5TWlkZGxld2FyZSh0aHVuaylcblx0KSk7XG5cblx0cmV0dXJuIHN0b3JlO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0U3RvcmU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/index.js\n");

/***/ })

})