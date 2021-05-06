webpackHotUpdate_N_E("pages/browserTest",{

/***/ "./pages/browserTest.js":
/*!******************************!*\
  !*** ./pages/browserTest.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return browsersTest; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/MyLayout.js */ \"./components/MyLayout.js\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/Austin/NewWebsite/website/pages/browserTest.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar browsersTest = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(browsersTest, _React$Component);\n\n  var _super = _createSuper(browsersTest);\n\n  function browsersTest() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, browsersTest);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"state\", {\n      // names: [],\n      // times: [],\n      people: []\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(browsersTest, [{\n    key: \"componentDidMount\",\n    value: function () {\n      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var url, response, data, newData;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                url = \"http://35.194.72.130/api/list\";\n                _context.next = 3;\n                return fetch(url);\n\n              case 3:\n                response = _context.sent;\n                _context.next = 6;\n                return response.json();\n\n              case 6:\n                data = _context.sent;\n                console.log(data.times.length);\n                newData = data; // const newData = data.split('\\n');\n\n                console.log(newData);\n                /* for (var i=0; i<data.times.length; i++) {\n                \tthis.setState(previousState => ({\n                \t\tpeople: [...previousState.people, data.times[i].name + \" \" + data.times[i].time + \"\\n\"]\n                \t}));\n                }*/\n                // console.log(this.state.people);\n\n              case 10:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function componentDidMount() {\n        return _componentDidMount.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 4\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 5\n        }\n      }, this.state.people));\n    }\n  }]);\n\n  return browsersTest;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYnJvd3NlclRlc3QuanM/MmZjZSJdLCJuYW1lcyI6WyJicm93c2Vyc1Rlc3QiLCJwZW9wbGUiLCJ1cmwiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidGltZXMiLCJsZW5ndGgiLCJuZXdEYXRhIiwic3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRXFCQSxZOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNaO0FBQ1A7QUFDQTtBQUNBQyxZQUFNLEVBQUU7QUFIRCxLOzs7Ozs7OztnTkFNUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDT0MsbUJBRFAsR0FDYSwrQkFEYjtBQUFBO0FBQUEsdUJBRXdCQyxLQUFLLENBQUNELEdBQUQsQ0FGN0I7O0FBQUE7QUFFT0Usd0JBRlA7QUFBQTtBQUFBLHVCQUdvQkEsUUFBUSxDQUFDQyxJQUFULEVBSHBCOztBQUFBO0FBR09DLG9CQUhQO0FBSUNDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSSxDQUFDRyxLQUFMLENBQVdDLE1BQXZCO0FBRU1DLHVCQU5QLEdBTWlCTCxJQU5qQixFQU9DOztBQUNBQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlHLE9BQVo7QUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7O0FBZkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7OztXQW1CQSxrQkFBUztBQUNSLGFBQ0MsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLEtBQUtDLEtBQUwsQ0FBV1gsTUFEYixDQURELENBREQ7QUFPQTs7OztFQWxDd0NZLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoiLi9wYWdlcy9icm93c2VyVGVzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBicm93c2Vyc1Rlc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHQvLyBuYW1lczogW10sXG5cdFx0Ly8gdGltZXM6IFtdLFxuXHRcdHBlb3BsZTogW10sXG5cdH1cblxuXHRhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRjb25zdCB1cmwgPSBcImh0dHA6Ly8zNS4xOTQuNzIuMTMwL2FwaS9saXN0XCI7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdFx0Y29uc29sZS5sb2coZGF0YS50aW1lcy5sZW5ndGgpO1xuXG5cdFx0Y29uc3QgbmV3RGF0YSA9IGRhdGE7XG5cdFx0Ly8gY29uc3QgbmV3RGF0YSA9IGRhdGEuc3BsaXQoJ1xcbicpO1xuXHRcdGNvbnNvbGUubG9nKG5ld0RhdGEpO1xuXG5cdFx0LyogZm9yICh2YXIgaT0wOyBpPGRhdGEudGltZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiAoe1xuXHRcdFx0XHRwZW9wbGU6IFsuLi5wcmV2aW91c1N0YXRlLnBlb3BsZSwgZGF0YS50aW1lc1tpXS5uYW1lICsgXCIgXCIgKyBkYXRhLnRpbWVzW2ldLnRpbWUgKyBcIlxcblwiXVxuXHRcdFx0fSkpO1xuXHRcdH0qL1xuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucGVvcGxlKTtcblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdHt0aGlzLnN0YXRlLnBlb3BsZX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpXG5cdH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/browserTest.js\n");

/***/ })

})