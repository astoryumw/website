webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/PopupApp.js":
/*!*************************!*\
  !*** ./lib/PopupApp.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/popup */ \"./components/popup.js\");\nvar _jsxFileName = \"/Users/Austin/NewWebsite/website/lib/PopupApp.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction PopupApp() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var togglePopup = function togglePopup() {\n    setIsOpen(!isOpen);\n  };\n\n  var remember = function remember() {\n    if (isOpen) {\n      localStorage.setItem('wasOpen', JSON.stringify(isOpen));\n    }\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 10\n    }\n  }, __jsx(\"input\", {\n    type: \"button\",\n    value: \"Click to Open Popup\",\n    onClick: togglePopup,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }), isOpen && __jsx(_components_popup__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    content: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"b\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }\n    }, \"Design your Popup\"), __jsx(\"p\", {\n      className: \"text\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }\n    }, \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"), __jsx(\"button\", {\n      onClick: remember(),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }\n    }, \"Do not show this again\")),\n    handleClose: togglePopup,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 16\n    }\n  }), \"console.log(isOpen);\");\n}\n\n_s(PopupApp, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n\n_c = PopupApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PopupApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"PopupApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL1BvcHVwQXBwLmpzPzgzZjkiXSwibmFtZXMiOlsiUG9wdXBBcHAiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZVBvcHVwIiwicmVtZW1iZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxLQUFELENBRGxCO0FBQUEsTUFDWEMsTUFEVztBQUFBLE1BQ0hDLFNBREc7O0FBR2xCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJELGFBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQVQ7QUFDRCxHQUZEOztBQUlBLE1BQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsUUFBSUgsTUFBSixFQUFZO0FBQ1ZJLGtCQUFZLENBQUNDLE9BQWIsQ0FBcUIsU0FBckIsRUFBZ0NDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxNQUFmLENBQWhDO0FBQ0Q7QUFDRixHQUpEOztBQU1BLFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNMO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxTQUFLLEVBQUMscUJBRlI7QUFHRSxXQUFPLEVBQUVFLFdBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURLLEVBTUpGLE1BQU0sSUFBSSxNQUFDLHlEQUFEO0FBQ1QsV0FBTyxFQUFFLG1FQUNQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRE8sRUFFUDtBQUFHLGVBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdWNBRk8sRUFHUDtBQUFRLGFBQU8sRUFBRUcsUUFBUSxFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUhPLENBREE7QUFNVCxlQUFXLEVBQUVELFdBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5OLHlCQUFQO0FBZ0JEOztHQTdCUUosUTs7S0FBQUEsUTtBQStCTUEsdUVBQWYiLCJmaWxlIjoiLi9saWIvUG9wdXBBcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUG9wdXAgZnJvbSAnLi4vY29tcG9uZW50cy9wb3B1cCc7XG4gXG5mdW5jdGlvbiBQb3B1cEFwcCgpIHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiBcbiAgY29uc3QgdG9nZ2xlUG9wdXAgPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICB9XG5cbiAgY29uc3QgcmVtZW1iZXIgPSAoKSA9PiB7XG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dhc09wZW4nLCBKU09OLnN0cmluZ2lmeShpc09wZW4pKTtcbiAgICB9XG4gIH0gXG4gXG4gIHJldHVybiA8ZGl2PlxuICAgIDxpbnB1dFxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICB2YWx1ZT1cIkNsaWNrIHRvIE9wZW4gUG9wdXBcIlxuICAgICAgb25DbGljaz17dG9nZ2xlUG9wdXB9XG4gICAgLz5cbiAgICB7aXNPcGVuICYmIDxQb3B1cFxuICAgICAgY29udGVudD17PD5cbiAgICAgICAgPGI+RGVzaWduIHlvdXIgUG9wdXA8L2I+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dCc+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLjwvcD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZW1lbWJlcigpfT5EbyBub3Qgc2hvdyB0aGlzIGFnYWluPC9idXR0b24+XG4gICAgICA8Lz59XG4gICAgICBoYW5kbGVDbG9zZT17dG9nZ2xlUG9wdXB9XG4gICAgLz59XG4gICAgY29uc29sZS5sb2coaXNPcGVuKTtcbiAgPC9kaXY+XG59XG4gXG5leHBvcnQgZGVmYXVsdCBQb3B1cEFwcDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/PopupApp.js\n");

/***/ })

})