webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/PopupApp.js":
/*!*************************!*\
  !*** ./lib/PopupApp.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/popup */ \"./components/popup.js\");\nvar _jsxFileName = \"/Users/Austin/NewWebsite/website/lib/PopupApp.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction PopupApp() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1]; // const [hasSeen, setHasSeen] = useState(false); maybe call this on index\n\n\n  var componentDidMount = function componentDidMount() {\n    _this.togglePopup();\n  };\n\n  var togglePopup = function togglePopup() {\n    setIsOpen(!isOpen);\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 10\n    }\n  }, __jsx(\"input\", {\n    type: \"button\",\n    value: \"Click to Open Popup\",\n    onClick: togglePopup,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }), isOpen && __jsx(_components_popup__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    content: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"b\", {\n      className: \"text\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }\n    }, \"Design your Popup\"), __jsx(\"p\", {\n      className: \"text\",\n      align: \"left\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 7\n      }\n    }, \" \\u2002 This website allows users to time themselves when solving the Rubik's cube. To start the stopwatch, press the start button or the \", __jsx(\"b\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 178\n      }\n    }, \"spacebar\"), \" button. To stop the stopwatch, press the stop button or the \", __jsx(\"b\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 254\n      }\n    }, \"spacebar\"), \". The timer restarts at 0 every time the program is run and each old time will be added to the \", __jsx(\"b\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 364\n      }\n    }, \"Last Time\"), \" box. To clear all times, press the clear button or the \", __jsx(\"b\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 436\n      }\n    }, \"c\"), \" button. To delete the last time, press the delete button or the \", __jsx(\"b\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 509\n      }\n    }, \"d\"), \" button. The program will find the average of all the times, the fastest time, the slowest time and the range between the two. If you leave the site, your times will be saved and they will load the next time you visit. Lastly, to add your best time for various cubes to a public list and see other people's times, \", __jsx(\"a\", {\n      className: \"link\",\n      href: \"http://www.acubestory.com/times\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 831\n      }\n    }, \"click here\"), \"!\"), __jsx(\"button\", {\n      onClick: togglePopup,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }\n    }, \"Close\")),\n    handleClose: togglePopup,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 16\n    }\n  }));\n}\n\n_s(PopupApp, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n\n_c = PopupApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PopupApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"PopupApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL1BvcHVwQXBwLmpzPzgzZjkiXSwibmFtZXMiOlsiUG9wdXBBcHAiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsImNvbXBvbmVudERpZE1vdW50IiwidG9nZ2xlUG9wdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsS0FBRCxDQURsQjtBQUFBLE1BQ1hDLE1BRFc7QUFBQSxNQUNIQyxTQURHLGlCQUVsQjs7O0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzlCLFNBQUksQ0FBQ0MsV0FBTDtBQUNELEdBRkQ7O0FBSUEsTUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkYsYUFBUyxDQUFDLENBQUNELE1BQUYsQ0FBVDtBQUNELEdBRkQ7O0FBSUEsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUw7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixTQUFLLEVBQUMscUJBQTNCO0FBQWlELFdBQU8sRUFBRUcsV0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZLLEVBS0pILE1BQU0sSUFBSSxNQUFDLHlEQUFEO0FBQ1QsV0FBTyxFQUFFLG1FQUNQO0FBQUcsZUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFETyxFQUVUO0FBQUcsZUFBUyxFQUFDLE1BQWI7QUFBb0IsV0FBSyxFQUFDLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUpBQTJLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQTNLLG1FQUF1UDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUF2UCxxR0FBcVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBclcsOERBQTZhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBN2EsdUVBQXNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBdGYsZ1VBQXd6QjtBQUFHLGVBQVMsRUFBQyxNQUFiO0FBQW9CLFVBQUksRUFBQyxpQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBeHpCLE1BRlMsRUFHUDtBQUFRLGFBQU8sRUFBRUcsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhPLENBREE7QUFNVCxlQUFXLEVBQUVBLFdBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxOLENBQVA7QUFjRDs7R0ExQlFMLFE7O0tBQUFBLFE7QUE0Qk1BLHVFQUFmIiwiZmlsZSI6Ii4vbGliL1BvcHVwQXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvcHVwIGZyb20gJy4uL2NvbXBvbmVudHMvcG9wdXAnO1xuIFxuZnVuY3Rpb24gUG9wdXBBcHAoKSB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGNvbnN0IFtoYXNTZWVuLCBzZXRIYXNTZWVuXSA9IHVzZVN0YXRlKGZhbHNlKTsgbWF5YmUgY2FsbCB0aGlzIG9uIGluZGV4XG5cbiAgY29uc3QgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgdGhpcy50b2dnbGVQb3B1cCgpO1xuICB9XG4gXG4gIGNvbnN0IHRvZ2dsZVBvcHVwID0gKCkgPT4ge1xuICAgIHNldElzT3BlbighaXNPcGVuKTtcbiAgfVxuXG4gIHJldHVybiA8ZGl2PlxuXG4gICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkNsaWNrIHRvIE9wZW4gUG9wdXBcIiBvbkNsaWNrPXt0b2dnbGVQb3B1cH0gLz5cblxuXG4gICAge2lzT3BlbiAmJiA8UG9wdXBcbiAgICAgIGNvbnRlbnQ9ezw+XG4gICAgICAgIDxiIGNsYXNzTmFtZT0ndGV4dCc+RGVzaWduIHlvdXIgUG9wdXA8L2I+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCIgYWxpZ249J2xlZnQnPiAmZW5zcDsgVGhpcyB3ZWJzaXRlIGFsbG93cyB1c2VycyB0byB0aW1lIHRoZW1zZWx2ZXMgd2hlbiBzb2x2aW5nIHRoZSBSdWJpaydzIGN1YmUuIFRvIHN0YXJ0IHRoZSBzdG9wd2F0Y2gsIHByZXNzIHRoZSBzdGFydCBidXR0b24gb3IgdGhlIDxiPnNwYWNlYmFyPC9iPiBidXR0b24uIFRvIHN0b3AgdGhlIHN0b3B3YXRjaCwgcHJlc3MgdGhlIHN0b3AgYnV0dG9uIG9yIHRoZSA8Yj5zcGFjZWJhcjwvYj4uIFRoZSB0aW1lciByZXN0YXJ0cyBhdCAwIGV2ZXJ5IHRpbWUgdGhlIHByb2dyYW0gaXMgcnVuIGFuZCBlYWNoIG9sZCB0aW1lIHdpbGwgYmUgYWRkZWQgdG8gdGhlIDxiPkxhc3QgVGltZTwvYj4gYm94LiBUbyBjbGVhciBhbGwgdGltZXMsIHByZXNzIHRoZSBjbGVhciBidXR0b24gb3IgdGhlIDxiPmM8L2I+IGJ1dHRvbi4gVG8gZGVsZXRlIHRoZSBsYXN0IHRpbWUsIHByZXNzIHRoZSBkZWxldGUgYnV0dG9uIG9yIHRoZSA8Yj5kPC9iPiBidXR0b24uIFRoZSBwcm9ncmFtIHdpbGwgZmluZCB0aGUgYXZlcmFnZSBvZiBhbGwgdGhlIHRpbWVzLCB0aGUgZmFzdGVzdCB0aW1lLCB0aGUgc2xvd2VzdCB0aW1lIGFuZCB0aGUgcmFuZ2UgYmV0d2VlbiB0aGUgdHdvLiBJZiB5b3UgbGVhdmUgdGhlIHNpdGUsIHlvdXIgdGltZXMgd2lsbCBiZSBzYXZlZCBhbmQgdGhleSB3aWxsIGxvYWQgdGhlIG5leHQgdGltZSB5b3UgdmlzaXQuIExhc3RseSwgdG8gYWRkIHlvdXIgYmVzdCB0aW1lIGZvciB2YXJpb3VzIGN1YmVzIHRvIGEgcHVibGljIGxpc3QgYW5kIHNlZSBvdGhlciBwZW9wbGUncyB0aW1lcywgPGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9XCJodHRwOi8vd3d3LmFjdWJlc3RvcnkuY29tL3RpbWVzXCI+Y2xpY2sgaGVyZTwvYT4hPC9wPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVBvcHVwfT5DbG9zZTwvYnV0dG9uPlxuICAgICAgPC8+fVxuICAgICAgaGFuZGxlQ2xvc2U9e3RvZ2dsZVBvcHVwfVxuICAgIC8+fVxuICA8L2Rpdj5cbn1cbiBcbmV4cG9ydCBkZWZhdWx0IFBvcHVwQXBwOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/PopupApp.js\n");

/***/ })

})