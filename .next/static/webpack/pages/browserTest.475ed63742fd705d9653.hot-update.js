webpackHotUpdate_N_E("pages/browserTest",{

/***/ "./pages/browserTest.js":
/*!******************************!*\
  !*** ./pages/browserTest.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return browsersTest; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/MyLayout.js */ \"./components/MyLayout.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search */ \"./pages/search.js\");\n/* harmony import */ var _lib_App_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/App.js */ \"./lib/App.js\");\n\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/Austin/NewWebsite/website/pages/browserTest.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n //import { getTime } from '../lib/utils';\n\n\n\n\nvar browsersTest = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(browsersTest, _React$Component);\n\n  var _super = _createSuper(browsersTest);\n\n  function browsersTest() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, browsersTest);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this), \"state\", {\n      // names: [],\n      // times: [],\n      people: [],\n      loading: true\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(browsersTest, [{\n    key: \"componentDidMount\",\n    value: function () {\n      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var _this2 = this;\n\n        var url, response, data, newData, i;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                url = \"http://35.194.72.130/api/list\";\n                _context.next = 3;\n                return fetch(url);\n\n              case 3:\n                response = _context.sent;\n                _context.next = 6;\n                return response.json();\n\n              case 6:\n                data = _context.sent;\n                console.log(data.times.length);\n                newData = \"\";\n\n                if (data.times.length === 0) {\n                  this.setState({\n                    loading: false\n                  });\n                }\n\n                for (i = 0; i < data.times.length; i++) {\n                  newData = i + 1 + \". \" + data.times[i].name + \" \" + data.times[i].time;\n                  newData = newData.split('\\n').map(function (str) {\n                    return __jsx(\"p\", {\n                      __self: _this2,\n                      __source: {\n                        fileName: _jsxFileName,\n                        lineNumber: 32,\n                        columnNumber: 45\n                      }\n                    }, str);\n                  });\n                  this.setState(function (previousState) {\n                    return {\n                      people: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(previousState.people), [newData])\n                    };\n                  });\n                }\n\n                console.log(this.state.people);\n\n              case 12:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function componentDidMount() {\n        return _componentDidMount.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 4\n        }\n      }, __jsx(\"div\", {\n        className: \"background\",\n        style: {\n          height: 575\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 5\n        }\n      }, __jsx(\"table\", {\n        align: \"left\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 6\n        }\n      }, __jsx(_lib_App_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 7\n        }\n      }), __jsx(_search__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 7\n        }\n      })), __jsx(\"table\", {\n        align: \"center\",\n        className: \"tableForTimes\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 6\n        }\n      }, __jsx(\"h1\", {\n        align: \"center\",\n        className: \"text\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 7\n        }\n      }, \"Best Times\"), this.state.loading || !this.state.people ? __jsx(\"div\", {\n        className: \"text\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 8\n        }\n      }, \"There are not any times in the database. Record the first one!\") : __jsx(\"div\", {\n        className: \"text\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 8\n        }\n      }, this.state.people))));\n    }\n  }]);\n\n  return browsersTest;\n}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYnJvd3NlclRlc3QuanM/MmZjZSJdLCJuYW1lcyI6WyJicm93c2Vyc1Rlc3QiLCJwZW9wbGUiLCJsb2FkaW5nIiwidXJsIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInRpbWVzIiwibGVuZ3RoIiwibmV3RGF0YSIsInNldFN0YXRlIiwiaSIsIm5hbWUiLCJ0aW1lIiwic3BsaXQiLCJtYXAiLCJzdHIiLCJwcmV2aW91c1N0YXRlIiwic3RhdGUiLCJoZWlnaHQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTs7SUFJcUJBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ1o7QUFDUDtBQUNBO0FBQ0FDLFlBQU0sRUFBRSxFQUhEO0FBSVBDLGFBQU8sRUFBRTtBQUpGLEs7Ozs7Ozs7O2dOQU9SO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPQyxtQkFEUCxHQUNhLCtCQURiO0FBQUE7QUFBQSx1QkFFd0JDLEtBQUssQ0FBQ0QsR0FBRCxDQUY3Qjs7QUFBQTtBQUVPRSx3QkFGUDtBQUFBO0FBQUEsdUJBR29CQSxRQUFRLENBQUNDLElBQVQsRUFIcEI7O0FBQUE7QUFHT0Msb0JBSFA7QUFJQ0MsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFJLENBQUNHLEtBQUwsQ0FBV0MsTUFBdkI7QUFFSUMsdUJBTkwsR0FNZSxFQU5mOztBQVFDLG9CQUFJTCxJQUFJLENBQUNHLEtBQUwsQ0FBV0MsTUFBWCxLQUFzQixDQUExQixFQUE2QjtBQUM1Qix1QkFBS0UsUUFBTCxDQUFjO0FBQ2JYLDJCQUFPLEVBQUU7QUFESSxtQkFBZDtBQUdBOztBQUVELHFCQUFTWSxDQUFULEdBQVcsQ0FBWCxFQUFjQSxDQUFDLEdBQUNQLElBQUksQ0FBQ0csS0FBTCxDQUFXQyxNQUEzQixFQUFtQ0csQ0FBQyxFQUFwQyxFQUF3QztBQUN2Q0YseUJBQU8sR0FBR0UsQ0FBQyxHQUFDLENBQUYsR0FBTSxJQUFOLEdBQWFQLElBQUksQ0FBQ0csS0FBTCxDQUFXSSxDQUFYLEVBQWNDLElBQTNCLEdBQWtDLEdBQWxDLEdBQXdDUixJQUFJLENBQUNHLEtBQUwsQ0FBV0ksQ0FBWCxFQUFjRSxJQUFoRTtBQUNBSix5QkFBTyxHQUFHQSxPQUFPLENBQUNLLEtBQVIsQ0FBYyxJQUFkLEVBQW9CQyxHQUFwQixDQUF3QixVQUFBQyxHQUFHO0FBQUEsMkJBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBSUEsR0FBSixDQUFKO0FBQUEsbUJBQTNCLENBQVY7QUFFQSx1QkFBS04sUUFBTCxDQUFjLFVBQUFPLGFBQWE7QUFBQSwyQkFBSztBQUMvQm5CLDRCQUFNLHlHQUFNbUIsYUFBYSxDQUFDbkIsTUFBcEIsSUFBNEJXLE9BQTVCO0FBRHlCLHFCQUFMO0FBQUEsbUJBQTNCO0FBR0E7O0FBRURKLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLWSxLQUFMLENBQVdwQixNQUF2Qjs7QUF2QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7OztXQTBCQSxrQkFBUztBQUNSLGFBQ0MsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBNEIsYUFBSyxFQUFFO0FBQUNxQixnQkFBTSxFQUFDO0FBQVIsU0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQU8sYUFBSyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURELEVBRUMsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkQsQ0FERCxFQU1DO0FBQU8sYUFBSyxFQUFDLFFBQWI7QUFBc0IsaUJBQVMsRUFBQyxlQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBSSxhQUFLLEVBQUMsUUFBVjtBQUFtQixpQkFBUyxFQUFDLE1BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREQsRUFFRSxLQUFLRCxLQUFMLENBQVduQixPQUFYLElBQXNCLENBQUMsS0FBS21CLEtBQUwsQ0FBV3BCLE1BQWxDLEdBQ0E7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwRUFEQSxHQUdBO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBdUIsS0FBS29CLEtBQUwsQ0FBV3BCLE1BQWxDLENBTEYsQ0FORCxDQURELENBREQ7QUFtQkE7Ozs7RUF0RHdDc0IsNkNBQUssQ0FBQ0MsUyIsImZpbGUiOiIuL3BhZ2VzL2Jyb3dzZXJUZXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJztcbi8vaW1wb3J0IHsgZ2V0VGltZSB9IGZyb20gJy4uL2xpYi91dGlscyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vc2VhcmNoJzsgXG5pbXBvcnQgQXBwIGZyb20gXCIuLi9saWIvQXBwLmpzXCI7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBicm93c2Vyc1Rlc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHQvLyBuYW1lczogW10sXG5cdFx0Ly8gdGltZXM6IFtdLFxuXHRcdHBlb3BsZTogW10sXG5cdFx0bG9hZGluZzogdHJ1ZSxcblx0fVxuXG5cdGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IHVybCA9IFwiaHR0cDovLzM1LjE5NC43Mi4xMzAvYXBpL2xpc3RcIjtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0XHRjb25zb2xlLmxvZyhkYXRhLnRpbWVzLmxlbmd0aCk7XG5cblx0XHR2YXIgbmV3RGF0YSA9IFwiXCI7XG5cblx0XHRpZiAoZGF0YS50aW1lcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpPTA7IGk8ZGF0YS50aW1lcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bmV3RGF0YSA9IGkrMSArIFwiLiBcIiArIGRhdGEudGltZXNbaV0ubmFtZSArIFwiIFwiICsgZGF0YS50aW1lc1tpXS50aW1lO1xuXHRcdFx0bmV3RGF0YSA9IG5ld0RhdGEuc3BsaXQoJ1xcbicpLm1hcChzdHIgPT4gPHA+e3N0cn08L3A+KTtcblx0XHRcdFxuXHRcdFx0dGhpcy5zZXRTdGF0ZShwcmV2aW91c1N0YXRlID0+ICh7XG5cdFx0XHRcdHBlb3BsZTogWy4uLnByZXZpb3VzU3RhdGUucGVvcGxlLCBuZXdEYXRhXVxuXHRcdFx0fSkpO1xuXHRcdH1cblxuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucGVvcGxlKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2JhY2tncm91bmQnIHN0eWxlPXt7aGVpZ2h0OjU3NX19PlxuXHRcdFx0XHRcdDx0YWJsZSBhbGlnbj0nbGVmdCc+XG5cdFx0XHRcdFx0XHQ8QXBwIC8+XG5cdFx0XHRcdFx0XHQ8U2VhcmNoIC8+XG5cdFx0XHRcdFx0PC90YWJsZT5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8dGFibGUgYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9XCJ0YWJsZUZvclRpbWVzXCI+XG5cdFx0XHRcdFx0XHQ8aDEgYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9J3RleHQnPkJlc3QgVGltZXM8L2gxPlxuXHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUubG9hZGluZyB8fCAhdGhpcy5zdGF0ZS5wZW9wbGUgPyAoXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0Jz5UaGVyZSBhcmUgbm90IGFueSB0aW1lcyBpbiB0aGUgZGF0YWJhc2UuIFJlY29yZCB0aGUgZmlyc3Qgb25lITwvZGl2PlxuXHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+e3RoaXMuc3RhdGUucGVvcGxlfTwvZGl2PlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdClcblx0fVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/browserTest.js\n");

/***/ })

})