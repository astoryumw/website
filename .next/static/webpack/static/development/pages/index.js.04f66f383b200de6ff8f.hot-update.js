webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MyLayout.js */ \"./components/MyLayout.js\");\n/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Table */ \"./node_modules/react-bootstrap/esm/Table.js\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles.scss */ \"./styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/Austin/website/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n // import './appStyles.css';\n\nvar Home = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Home, _React$Component);\n\n  var _super = _createSuper(Home);\n\n  function Home(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Home);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"textInput\", function () {\n      clearInterval(_this.timer);\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"keyPress\", function (e) {\n      if (e.keyCode === 32) {\n        // some logic to assess stop/start of timer\n        if (_this.state.milliSecondsElapsed === 0) {\n          _this.startBtn.click();\n        } else if (_this.state.timerInProgress === false) {\n          _this.startBtn.click();\n        } else {\n          _this.stopBtn.click();\n        }\n      }\n\n      if (e.keyCode === 99) {\n        _this.clearBtn.click();\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"handleStart\", function () {\n      if (_this.state.timerInProgress === true) return;\n\n      _this.setState({\n        milliSecondsElapsed: 0\n      });\n\n      _this.timer = setInterval(function () {\n        _this.setState({\n          milliSecondsElapsed: _this.state.milliSecondsElapsed + 1,\n          timerInProgress: true\n        }, function () {\n          _this.stopBtn.focus();\n        });\n      }, 10);\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"handleStop\", function () {\n      if (_this.state.average === 0) {\n        // if its the first go through, average is set to first value\n        _this.setState({\n          average: (_this.state.milliSecondsElapsed / 100).toFixed(2)\n        });\n      }\n\n      _this.setState({\n        // adds value to the total\n        total: _this.state.total + _this.state.milliSecondsElapsed\n      });\n\n      _this.setState({\n        last: _this.state.milliSecondsElapsed / 100\n      });\n\n      if (_this.state.high < _this.state.milliSecondsElapsed) {\n        // finds slowest time\n        _this.setState({\n          high: _this.state.milliSecondsElapsed\n        });\n      }\n\n      if (_this.state.low === 0) {\n        // finds fastest time\n        _this.setState({\n          low: _this.state.milliSecondsElapsed\n        });\n      }\n\n      if (_this.state.low > _this.state.milliSecondsElapsed) {\n        // because i start with low = 0, it will never be less than that\n        _this.setState({\n          low: _this.state.milliSecondsElapsed\n        });\n      }\n\n      _this.setState( // adding the value to the array and then clearing the timer, shifting focus to start button\n      function (previousState) {\n        return {\n          timerInProgress: false,\n          myArray: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(previousState.myArray), [// <-- shallow copy existing data\n          _this.state.milliSecondsElapsed / 100 // <-- add new time\n          ])\n        };\n      }, function () {\n        clearInterval(_this.timer);\n\n        _this.startBtn.focus();\n      });\n\n      if (_this.state.count === 1) {\n        _this.setState({\n          // average: ((this.state.total) / (this.state.myArray.length) / 100).toFixed(2)\n          average: (_this.state.total / _this.state.myArray.length / 100).toFixed(2)\n        });\n      }\n\n      _this.setState({\n        count: 1\n      }); // it makes the first value equal to the average, then averages the second value on the third run\n      // so on, so forth\n\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"clear\", function () {\n      _this.setState({\n        average: 0\n      });\n\n      _this.setState({\n        high: 0\n      });\n\n      _this.setState({\n        low: 0\n      });\n\n      _this.setState({\n        total: 0\n      });\n\n      _this.setState({\n        myArray: []\n      });\n\n      _this.setState({\n        range: 0\n      });\n\n      _this.startBtn.focus();\n    });\n\n    _this.state = {\n      myArray: [],\n      // <- add initial empty array\n      data: [],\n      // this'll be the table?\n      milliSecondsElapsed: 0,\n      total: 0,\n      // this is my total, add the times each go through to the total and then divide by amount of times\n      average: 0,\n      high: 0,\n      // highest value\n      low: 0,\n      // lowest value\n      count: 0,\n      last: 0,\n      timerInProgress: false // state to detect whether timer has started\n\n    };\n    _this.updateState = _this.updateState.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    _this.textInput = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Home, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      window.addEventListener(\"keypress\", this.keyPress);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      window.removeEventListener(\"keypress\", this.keyPress);\n    }\n  }, {\n    key: \"updateState\",\n    value: function updateState(e) {\n      this.setState({\n        milliSecondsElapsed: e.target.milliSecondsElapsed\n      });\n    }\n  }, {\n    key: \"render\",\n    // find the average AT EVERY GO \n    value: function render() {\n      var _this2 = this;\n\n      var myTotal = this.state.total;\n      return __jsx(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 168,\n          columnNumber: 6\n        }\n      }, __jsx(\"div\", {\n        className: \"background\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 169,\n          columnNumber: 7\n        }\n      }, __jsx(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        striped: true,\n        bordered: true,\n        hover: true,\n        align: \"right\",\n        width: \"200px\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 171,\n          columnNumber: 7\n        }\n      }, __jsx(\"thead\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 172,\n          columnNumber: 9\n        }\n      }, __jsx(\"tr\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 173,\n          columnNumber: 11\n        }\n      }, __jsx(\"th\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 174,\n          columnNumber: 13\n        }\n      }, \"Last Time\"))), __jsx(\"tbody\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 178,\n          columnNumber: 9\n        }\n      }, __jsx(\"tr\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 179,\n          columnNumber: 11\n        }\n      }, __jsx(\"td\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 180,\n          columnNumber: 13\n        }\n      }, this.state.myArray.join(\", \"))))), __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 185,\n          columnNumber: 7\n        }\n      }, \"Press the spacebar to start/stop the timer.\"), __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 186,\n          columnNumber: 7\n        }\n      }, \"Press the c button to clear everything.\"), __jsx(\"div\", {\n        className: \"index\",\n        align: \"center\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 188,\n          columnNumber: 8\n        }\n      }, __jsx(\"input\", {\n        value: this.state.milliSecondsElapsed / 100,\n        onChange: this.updateState,\n        ref: this.textInput,\n        readOnly: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 189,\n          columnNumber: 10\n        }\n      }), __jsx(\"button\", {\n        onClick: this.handleStart,\n        ref: function ref(_ref) {\n          return _this2.startBtn = _ref;\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 195,\n          columnNumber: 10\n        }\n      }, \"START\"), __jsx(\"button\", {\n        onClick: this.handleStop,\n        ref: function ref(_ref2) {\n          return _this2.stopBtn = _ref2;\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 198,\n          columnNumber: 10\n        }\n      }, \"STOP\"), __jsx(\"button\", {\n        onClick: this.clear,\n        ref: function ref(_ref3) {\n          return _this2.clearBtn = _ref3;\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 201,\n          columnNumber: 11\n        }\n      }, \"CLEAR\"), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 204,\n          columnNumber: 10\n        }\n      }, this.state.milliSecondsElapsed / 100)), __jsx(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        striped: true,\n        bordered: true,\n        hover: true,\n        align: \"center\",\n        width: \"200px\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 209,\n          columnNumber: 9\n        }\n      }, __jsx(\"thead\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 210,\n          columnNumber: 11\n        }\n      }, __jsx(\"tr\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 211,\n          columnNumber: 13\n        }\n      }, __jsx(\"th\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 212,\n          columnNumber: 15\n        }\n      }, \"Average\"), __jsx(\"th\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 213,\n          columnNumber: 15\n        }\n      }, \"Fastest\"), __jsx(\"th\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 214,\n          columnNumber: 15\n        }\n      }, \"Slowest\"), __jsx(\"th\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 215,\n          columnNumber: 15\n        }\n      }, \"Range\"))), __jsx(\"tbody\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 219,\n          columnNumber: 11\n        }\n      }, __jsx(\"tr\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 220,\n          columnNumber: 13\n        }\n      }, __jsx(\"td\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 221,\n          columnNumber: 15\n        }\n      }, myTotal ? __jsx(\"td\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 222,\n          columnNumber: 19\n        }\n      }, (this.state.total / this.state.myArray.length / 100).toFixed(2)) : __jsx(\"td\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 224,\n          columnNumber: 19\n        }\n      }, \" 0 \")), __jsx(\"td\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 226,\n          columnNumber: 15\n        }\n      }, this.state.low / 100), __jsx(\"td\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 227,\n          columnNumber: 15\n        }\n      }, this.state.high / 100), __jsx(\"td\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 228,\n          columnNumber: 15\n        }\n      }, (this.state.high / 100 - this.state.low / 100).toFixed(2)))))));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsImNsZWFySW50ZXJ2YWwiLCJ0aW1lciIsImUiLCJrZXlDb2RlIiwic3RhdGUiLCJtaWxsaVNlY29uZHNFbGFwc2VkIiwic3RhcnRCdG4iLCJjbGljayIsInRpbWVySW5Qcm9ncmVzcyIsInN0b3BCdG4iLCJjbGVhckJ0biIsInNldFN0YXRlIiwic2V0SW50ZXJ2YWwiLCJmb2N1cyIsImF2ZXJhZ2UiLCJ0b0ZpeGVkIiwidG90YWwiLCJsYXN0IiwiaGlnaCIsImxvdyIsInByZXZpb3VzU3RhdGUiLCJteUFycmF5IiwiY291bnQiLCJsZW5ndGgiLCJyYW5nZSIsImRhdGEiLCJ1cGRhdGVTdGF0ZSIsImJpbmQiLCJ0ZXh0SW5wdXQiLCJSZWFjdCIsImNyZWF0ZVJlZiIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlQcmVzcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJteVRvdGFsIiwiam9pbiIsImhhbmRsZVN0YXJ0IiwicmVmIiwiaGFuZGxlU3RvcCIsImNsZWFyIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0lBRXFCQSxJOzs7OztBQUNuQixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsb05BMEJQLFlBQU07QUFDaEJDLG1CQUFhLENBQUMsTUFBS0MsS0FBTixDQUFiO0FBQ0QsS0E1QmtCOztBQUFBLG1OQW1DUixVQUFDQyxDQUFELEVBQU87QUFDaEIsVUFBSUEsQ0FBQyxDQUFDQyxPQUFGLEtBQWMsRUFBbEIsRUFBc0I7QUFDcEI7QUFDQSxZQUFJLE1BQUtDLEtBQUwsQ0FBV0MsbUJBQVgsS0FBbUMsQ0FBdkMsRUFBMEM7QUFDeEMsZ0JBQUtDLFFBQUwsQ0FBY0MsS0FBZDtB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RixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSyxDQUFDLEtBQUtkLEtBQUwsQ0FBV2MsSUFBWCxHQUFnQixHQUFoQixHQUFzQixLQUFLZCxLQUFMLENBQVdlLEdBQVgsR0FBZSxHQUF0QyxFQUEyQ0osT0FBM0MsQ0FBbUQsQ0FBbkQsQ0FBTCxDQVJGLENBREYsQ0FWRixDQXhDRixDQURELENBREQ7QUF5RUQ7Ozs7RUF6TytCYyw0Q0FBSyxDQUFDYSxTIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJztcbmltcG9ydCBUYWJsZSBmcm9tICdyZWFjdC1ib290c3RyYXAvVGFibGUnO1xuaW1wb3J0IFwiLi4vc3R5bGVzLnNjc3NcIlxuLy8gaW1wb3J0ICcuL2FwcFN0eWxlcy5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG15QXJyYXk6IFtdLCAvLyA8LSBhZGQgaW5pdGlhbCBlbXB0eSBhcnJheVxuICAgICAgZGF0YTogW10sIC8vIHRoaXMnbGwgYmUgdGhlIHRhYmxlP1xuICAgICAgbWlsbGlTZWNvbmRzRWxhcHNlZDogMCxcbiAgICAgIHRvdGFsOiAwLCAvLyB0aGlzIGlzIG15IHRvdGFsLCBhZGQgdGhlIHRpbWVzIGVhY2ggZ28gdGhyb3VnaCB0byB0aGUgdG90YWwgYW5kIHRoZW4gZGl2aWRlIGJ5IGFtb3VudCBvZiB0aW1lc1xuICAgICAgYXZlcmFnZTogMCxcbiAgICAgIGhpZ2g6IDAsIC8vIGhpZ2hlc3QgdmFsdWVcbiAgICAgIGxvdzogMCwgLy8gbG93ZXN0IHZhbHVlXG4gICAgICBjb3VudDogMCxcbiAgICAgIGxhc3Q6IDAsXG4gICAgICB0aW1lckluUHJvZ3Jlc3M6IGZhbHNlLCAvLyBzdGF0ZSB0byBkZXRlY3Qgd2hldGhlciB0aW1lciBoYXMgc3RhcnRlZFxuICAgIH07XG4gICAgdGhpcy51cGRhdGVTdGF0ZSA9IHRoaXMudXBkYXRlU3RhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRleHRJbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCB0aGlzLmtleVByZXNzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgdGhpcy5rZXlQcmVzcyk7XG4gIH1cblxuICB0ZXh0SW5wdXQgPSAoKSA9PiB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgfTtcblxuICB1cGRhdGVTdGF0ZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1pbGxpU2Vjb25kc0VsYXBzZWQ6IGUudGFyZ2V0Lm1pbGxpU2Vjb25kc0VsYXBzZWQgfSk7XG4gIH1cbiAgXG5cbiAga2V5UHJlc3MgPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAvLyBzb21lIGxvZ2ljIHRvIGFzc2VzcyBzdG9wL3N0YXJ0IG9mIHRpbWVyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5taWxsaVNlY29uZHNFbGFwc2VkID09PSAwKSB7XG4gICAgICAgIHRoaXMuc3RhcnRCdG4uY2xpY2soKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS50aW1lckluUHJvZ3Jlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuc3RhcnRCdG4uY2xpY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RvcEJ0bi5jbGljaygpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZS5rZXlDb2RlID09PSA5OSkge1xuICAgICAgdGhpcy5jbGVhckJ0bi5jbGljaygpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVTdGFydCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS50aW1lckluUHJvZ3Jlc3MgPT09IHRydWUpIHJldHVybjtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWlsbGlTZWNvbmRzRWxhcHNlZDogMFxuICAgIH0pO1xuICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgbWlsbGlTZWNvbmRzRWxhcHNlZDogdGhpcy5zdGF0ZS5taWxsaVNlY29uZHNFbGFwc2VkICsgMSxcbiAgICAgICAgICB0aW1lckluUHJvZ3Jlc3M6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3RvcEJ0bi5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0sIDEwKTtcbiAgfTtcbiAgaGFuZGxlU3RvcCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5hdmVyYWdlID09PSAwKSB7IC8vIGlmIGl0cyB0aGUgZmlyc3QgZ28gdGhyb3VnaCwgYXZlcmFnZSBpcyBzZXQgdG8gZmlyc3QgdmFsdWVcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhdmVyYWdlOiAodGhpcy5zdGF0ZS5taWxsaVNlY29uZHNFbGFwc2VkIC8gMTAwKS50b0ZpeGVkKDIpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyAvLyBhZGRzIHZhbHVlIHRvIHRoZSB0b3RhbFxuICAgICAgdG90YWw6IHRoaXMuc3RhdGUudG90YWwgKyB0aGlzLnN0YXRlLm1pbGxpU2Vjb25kc0VsYXBzZWRcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxhc3Q6IHRoaXMuc3RhdGUubWlsbGlTZWNvbmRzRWxhcHNlZC8xMDBcbiAgICB9KVxuICAgIGlmICh0aGlzLnN0YXRlLmhpZ2ggPCB0aGlzLnN0YXRlLm1pbGxpU2Vjb25kc0VsYXBzZWQpIHsgLy8gZmluZHMgc2xvd2VzdCB0aW1lXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaGlnaDogdGhpcy5zdGF0ZS5taWxsaVNlY29uZHNFbGFwc2VkXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5sb3cgPT09IDApIHsgLy8gZmluZHMgZmFzdGVzdCB0aW1lXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG93OiB0aGlzLnN0YXRlLm1pbGxpU2Vjb25kc0VsYXBzZWRcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmxvdyA+IHRoaXMuc3RhdGUubWlsbGlTZWNvbmRzRWxhcHNlZCkgeyAvLyBiZWNhdXNlIGkgc3RhcnQgd2l0aCBsb3cgPSAwLCBpdCB3aWxsIG5ldmVyIGJlIGxlc3MgdGhhbiB0aGF0XG4gICAgICB0aGlzLnNldFN0YXRlKHsgXG4gICAgICAgIGxvdzogdGhpcy5zdGF0ZS5taWxsaVNlY29uZHNFbGFwc2VkXG4gICAgICB9KVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKCAvLyBhZGRpbmcgdGhlIHZhbHVlIHRvIHRoZSBhcnJheSBhbmQgdGhlbiBjbGVhcmluZyB0aGUgdGltZXIsIHNoaWZ0aW5nIGZvY3VzIHRvIHN0YXJ0IGJ1dHRvblxuICAgICAgKHByZXZpb3VzU3RhdGUpID0+ICh7XG4gICAgICAgIHRpbWVySW5Qcm9ncmVzczogZmFsc2UsXG4gICAgICAgIG15QXJyYXk6IFtcbiAgICAgICAgICAuLi5wcmV2aW91c1N0YXRlLm15QXJyYXksIC8vIDwtLSBzaGFsbG93IGNvcHkgZXhpc3RpbmcgZGF0YVxuICAgICAgICAgIHRoaXMuc3RhdGUubWlsbGlTZWNvbmRzRWxhcHNlZCAvIDEwMCAvLyA8LS0gYWRkIG5ldyB0aW1lXG4gICAgICAgIF1cbiAgICAgIH0pLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLnN0YXJ0QnRuLmZvY3VzKCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIGlmICh0aGlzLnN0YXRlLmNvdW50ID09PSAxKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgLy8gYXZlcmFnZTogKCh0aGlzLnN0YXRlLnRvdGFsKSAvICh0aGlzLnN0YXRlLm15QXJyYXkubGVuZ3RoKSAvIDEwMCkudG9GaXhlZCgyKVxuICAgICAgICBhdmVyYWdlOiAodGhpcy5zdGF0ZS50b3RhbCAvIHRoaXMuc3RhdGUubXlBcnJheS5sZW5ndGggLyAxMDApLnRvRml4ZWQoMilcbiAgICAgIH0pXG4gICAgfSAgICBcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY291bnQ6IDFcbiAgICB9KVxuXG5cblxuICAgIC8vIGl0IG1ha2VzIHRoZSBmaXJzdCB2YWx1ZSBlcXVhbCB0byB0aGUgYXZlcmFnZSwgdGhlbiBhdmVyYWdlcyB0aGUgc2Vjb25kIHZhbHVlIG9uIHRoZSB0aGlyZCBydW5cbiAgICAvLyBzbyBvbiwgc28gZm9ydGhcbiAgICBcblxuICB9O1xuXG4gIGNsZWFyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYXZlcmFnZTogMFxuICAgIH0pXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBoaWdoOiAwXG4gICAgfSlcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxvdzogMFxuICAgIH0pXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0b3RhbDogMFxuICAgIH0pXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBteUFycmF5OiBbXVxuICAgIH0pXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICByYW5nZTogMFxuICAgIH0pXG5cbiAgICB0aGlzLnN0YXJ0QnRuLmZvY3VzKCk7XG5cbiAgfTtcblxuXG4gIC8vIGZpbmQgdGhlIGF2ZXJhZ2UgQVQgRVZFUlkgR08gXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG15VG90YWwgPSB0aGlzLnN0YXRlLnRvdGFsO1xuICAgIHJldHVybiAoXG5cdCAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JhY2tncm91bmQnPlxuXG4gICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciBhbGlnbj1cInJpZ2h0XCIgd2lkdGg9XCIyMDBweFwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkxhc3QgVGltZTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cblxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLm15QXJyYXkuam9pbihcIiwgXCIpfTwvdGQ+IFxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L1RhYmxlPlxuXG4gICAgICA8cD5QcmVzcyB0aGUgc3BhY2ViYXIgdG8gc3RhcnQvc3RvcCB0aGUgdGltZXIuPC9wPlxuICAgICAgPHA+UHJlc3MgdGhlIGMgYnV0dG9uIHRvIGNsZWFyIGV2ZXJ5dGhpbmcuPC9wPlxuXG5cdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXhcIiBhbGlnbj0nY2VudGVyJz5cblx0ICAgICAgICA8aW5wdXQgXG5cdCAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5taWxsaVNlY29uZHNFbGFwc2VkLzEwMH1cblx0ICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVN0YXRlfVxuXHQgICAgICAgICAgcmVmPXt0aGlzLnRleHRJbnB1dH1cblx0ICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxuXHQgICAgICAgIC8+XG5cdCAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVN0YXJ0fSByZWY9eyhyZWYpID0+ICh0aGlzLnN0YXJ0QnRuID0gcmVmKX0+XG5cdCAgICAgICAgICBTVEFSVFxuXHQgICAgICAgIDwvYnV0dG9uPlxuXHQgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVTdG9wfSByZWY9eyhyZWYpID0+ICh0aGlzLnN0b3BCdG4gPSByZWYpfT5cblx0ICAgICAgICAgIFNUT1Bcblx0ICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xlYXJ9IHJlZj17KHJlZikgPT4gKHRoaXMuY2xlYXJCdG4gPSByZWYpfT5cbiAgICAgICAgICAgIENMRUFSXG4gICAgICAgICAgPC9idXR0b24+XG5cdCAgICAgICAgPGgxPnt0aGlzLnN0YXRlLm1pbGxpU2Vjb25kc0VsYXBzZWQvMTAwfTwvaDE+XG5cdCAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciBhbGlnbj1cImNlbnRlclwiIHdpZHRoPVwiMjAwcHhcIj5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5BdmVyYWdlPC90aD5cbiAgICAgICAgICAgICAgPHRoPkZhc3Rlc3Q8L3RoPlxuICAgICAgICAgICAgICA8dGg+U2xvd2VzdDwvdGg+XG4gICAgICAgICAgICAgIDx0aD5SYW5nZTwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD57bXlUb3RhbCA/IChcbiAgICAgICAgICAgICAgICAgIDx0ZD57KHRoaXMuc3RhdGUudG90YWwgLyB0aGlzLnN0YXRlLm15QXJyYXkubGVuZ3RoIC8gMTAwKS50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDx0ZD4gMCA8L3RkPlxuICAgICAgICAgICAgICAgICl9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmxvdy8xMDB9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmhpZ2gvMTAwfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57KHRoaXMuc3RhdGUuaGlnaC8xMDAgLSB0aGlzLnN0YXRlLmxvdy8xMDApLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cblxuXG4gICAgICAgIDwvVGFibGU+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG5cblxuICAgICk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})