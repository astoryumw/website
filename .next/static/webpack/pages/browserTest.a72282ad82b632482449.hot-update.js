webpackHotUpdate_N_E("pages/browserTest",{

/***/ "./pages/browserTest.js":
/*!******************************!*\
  !*** ./pages/browserTest.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return browsersTest; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/MyLayout.js */ \"./components/MyLayout.js\");\n\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/Austin/NewWebsite/website/pages/browserTest.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar browsersTest = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(browsersTest, _React$Component);\n\n  var _super = _createSuper(browsersTest);\n\n  function browsersTest() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, browsersTest);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this), \"state\", {\n      // names: [],\n      // times: [],\n      people: []\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(browsersTest, [{\n    key: \"componentDidMount\",\n    value: function () {\n      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var _this2 = this;\n\n        var url, response, data, word, i;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                url = \"http://35.194.72.130/api/list\";\n                _context.next = 3;\n                return fetch(url);\n\n              case 3:\n                response = _context.sent;\n                _context.next = 6;\n                return response.json();\n\n              case 6:\n                data = _context.sent;\n                console.log(data.times.length);\n                word = \"\";\n\n                for (i = 0; i < data.times.length; i++) {\n                  word = data.times[i].name + \" \" + data.times[i].time;\n                  this.setState(function (previousState) {\n                    return {\n                      people: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(previousState.people), [word.split('\\n').map(function (str) {\n                        return __jsx(\"p\", {\n                          __self: _this2,\n                          __source: {\n                            fileName: _jsxFileName,\n                            lineNumber: 21,\n                            columnNumber: 67\n                          }\n                        }, str);\n                      })])\n                    };\n                  });\n                } // console.log(this.state.people);\n\n\n              case 10:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function componentDidMount() {\n        return _componentDidMount.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 4\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 5\n        }\n      }, this.state.people.join(\"\\n\")));\n    }\n  }]);\n\n  return browsersTest;\n}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYnJvd3NlclRlc3QuanM/MmZjZSJdLCJuYW1lcyI6WyJicm93c2Vyc1Rlc3QiLCJwZW9wbGUiLCJ1cmwiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidGltZXMiLCJsZW5ndGgiLCJ3b3JkIiwiaSIsIm5hbWUiLCJ0aW1lIiwic2V0U3RhdGUiLCJwcmV2aW91c1N0YXRlIiwic3BsaXQiLCJtYXAiLCJzdHIiLCJzdGF0ZSIsImpvaW4iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ1o7QUFDUDtBQUNBO0FBQ0FDLFlBQU0sRUFBRTtBQUhELEs7Ozs7Ozs7O2dOQU1SO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPQyxtQkFEUCxHQUNhLCtCQURiO0FBQUE7QUFBQSx1QkFFd0JDLEtBQUssQ0FBQ0QsR0FBRCxDQUY3Qjs7QUFBQTtBQUVPRSx3QkFGUDtBQUFBO0FBQUEsdUJBR29CQSxRQUFRLENBQUNDLElBQVQsRUFIcEI7O0FBQUE7QUFHT0Msb0JBSFA7QUFJQ0MsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFJLENBQUNHLEtBQUwsQ0FBV0MsTUFBdkI7QUFFSUMsb0JBTkwsR0FNWSxFQU5aOztBQU9DLHFCQUFTQyxDQUFULEdBQVcsQ0FBWCxFQUFjQSxDQUFDLEdBQUNOLElBQUksQ0FBQ0csS0FBTCxDQUFXQyxNQUEzQixFQUFtQ0UsQ0FBQyxFQUFwQyxFQUF3QztBQUN2Q0Qsc0JBQUksR0FBR0wsSUFBSSxDQUFDRyxLQUFMLENBQVdHLENBQVgsRUFBY0MsSUFBZCxHQUFxQixHQUFyQixHQUEyQlAsSUFBSSxDQUFDRyxLQUFMLENBQVdHLENBQVgsRUFBY0UsSUFBaEQ7QUFDQSx1QkFBS0MsUUFBTCxDQUFjLFVBQUFDLGFBQWE7QUFBQSwyQkFBSztBQUMvQmYsNEJBQU0seUdBQU1lLGFBQWEsQ0FBQ2YsTUFBcEIsSUFBNEJVLElBQUksQ0FBQ00sS0FBTCxDQUFXLElBQVgsRUFBaUJDLEdBQWpCLENBQXFCLFVBQUFDLEdBQUc7QUFBQSwrQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFJQSxHQUFKLENBQUo7QUFBQSx1QkFBeEIsQ0FBNUI7QUFEeUIscUJBQUw7QUFBQSxtQkFBM0I7QUFHQSxpQkFaRixDQWFDOzs7QUFiRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7Ozs7O1dBaUJBLGtCQUFTO0FBQ1IsYUFDQyxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsS0FBS0MsS0FBTCxDQUFXbkIsTUFBWCxDQUFrQm9CLElBQWxCLENBQXVCLElBQXZCLENBREYsQ0FERCxDQUREO0FBT0E7Ozs7RUFoQ3dDQyw2Q0FBSyxDQUFDQyxTIiwiZmlsZSI6Ii4vcGFnZXMvYnJvd3NlclRlc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0LmpzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYnJvd3NlcnNUZXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0Ly8gbmFtZXM6IFtdLFxuXHRcdC8vIHRpbWVzOiBbXSxcblx0XHRwZW9wbGU6IFtdLFxuXHR9XG5cblx0YXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y29uc3QgdXJsID0gXCJodHRwOi8vMzUuMTk0LjcyLjEzMC9hcGkvbGlzdFwiO1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRcdGNvbnNvbGUubG9nKGRhdGEudGltZXMubGVuZ3RoKTtcblxuXHRcdHZhciB3b3JkID0gXCJcIjtcblx0XHRmb3IgKHZhciBpPTA7IGk8ZGF0YS50aW1lcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0d29yZCA9IGRhdGEudGltZXNbaV0ubmFtZSArIFwiIFwiICsgZGF0YS50aW1lc1tpXS50aW1lO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZShwcmV2aW91c1N0YXRlID0+ICh7XG5cdFx0XHRcdHBlb3BsZTogWy4uLnByZXZpb3VzU3RhdGUucGVvcGxlLCB3b3JkLnNwbGl0KCdcXG4nKS5tYXAoc3RyID0+IDxwPntzdHJ9PC9wPildXG5cdFx0XHR9KSk7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucGVvcGxlKTtcblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdHt0aGlzLnN0YXRlLnBlb3BsZS5qb2luKFwiXFxuXCIpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdClcblx0fVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/browserTest.js\n");

/***/ })

})