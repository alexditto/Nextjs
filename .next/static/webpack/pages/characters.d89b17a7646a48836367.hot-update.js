webpackHotUpdate_N_E("pages/characters",{

/***/ "./pages/characters.js":
/*!*****************************!*\
  !*** ./pages/characters.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Alex_Desktop_Personal_Projects_React_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Alex_Desktop_Personal_Projects_React_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Alex_Desktop_Personal_Projects_React_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Alex_Desktop_Personal_Projects_React_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Alex_Desktop_Personal_Projects_React_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_Alex_Desktop_Personal_Projects_React_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_AddCharacter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AddCharacter */ "./components/AddCharacter.js");
/* harmony import */ var _components_Characters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Characters */ "./components/Characters.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Character__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Character */ "./components/Character.js");






var _jsxFileName = "C:\\Users\\Alex\\Desktop\\Personal Projects\\React\\next\\pages\\characters.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Alex_Desktop_Personal_Projects_React_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var Characters = function Characters(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([{
    id: 1,
    name: "Alex",
    type: "Wizard",
    str: "10",
    dex: "8",
    con: "12",
    "int": "18",
    wis: "14",
    cha: "16"
  }, {
    id: 2,
    name: "Kim",
    type: "Cleric",
    str: "16",
    dex: "8",
    con: "14",
    "int": "10",
    wis: "18",
    cha: "12"
  }, {
    id: 3,
    name: "Kitty",
    type: "Fighter",
    str: "18",
    dex: "14",
    con: "16",
    "int": "8",
    wis: "10",
    cha: "12"
  }, {
    id: 4,
    name: "Logan",
    type: "Rogue",
    str: "8",
    dex: "18",
    con: "14",
    "int": "10",
    wis: "12",
    cha: "16"
  }]),
      charactersList = _useState[0],
      setCharacters = _useState[1]; //Add Character


  var addChracter = function addChracter(character) {
    var id = Math.floor(Math.random() * 100000) + 1;

    var newCharacter = _objectSpread({
      id: id
    }, character);

    setCharacters([].concat(Object(C_Users_Alex_Desktop_Personal_Projects_React_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(charactersList), [newCharacter]));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_AddCharacter__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onAdd: addChracter
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        children: "Characters"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, _this), props.characters, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Characters__WEBPACK_IMPORTED_MODULE_7__["default"], {
        charactersList: charactersList
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 9
  }, _this);
};

_s(Characters, "ZzK/jcR0jtG+tM0pTBHsFWAJpJ8=");

_c = Characters;
Characters.getInitialProps = /*#__PURE__*/Object(C_Users_Alex_Desktop_Personal_Projects_React_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Alex_Desktop_Personal_Projects_React_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return C_Users_Alex_Desktop_Personal_Projects_React_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch("http://localhost:5000/charactersheets");

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          console.log(data);
          return _context.abrupt("return", {
            characters: data
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Characters);

var _c;

$RefreshReg$(_c, "Characters");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVycy5qcyJdLCJuYW1lcyI6WyJDaGFyYWN0ZXJzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlkIiwibmFtZSIsInR5cGUiLCJzdHIiLCJkZXgiLCJjb24iLCJ3aXMiLCJjaGEiLCJjaGFyYWN0ZXJzTGlzdCIsInNldENoYXJhY3RlcnMiLCJhZGRDaHJhY3RlciIsImNoYXJhY3RlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm5ld0NoYXJhY3RlciIsImNoYXJhY3RlcnMiLCJnZXRJbml0aWFsUHJvcHMiLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDY0Msc0RBQVEsQ0FBQyxDQUM3QztBQUNJQyxNQUFFLEVBQUUsQ0FEUjtBQUVJQyxRQUFJLEVBQUUsTUFGVjtBQUdJQyxRQUFJLEVBQUUsUUFIVjtBQUlJQyxPQUFHLEVBQUUsSUFKVDtBQUtJQyxPQUFHLEVBQUUsR0FMVDtBQU1JQyxPQUFHLEVBQUUsSUFOVDtBQU9JLFdBQUssSUFQVDtBQVFJQyxPQUFHLEVBQUUsSUFSVDtBQVNJQyxPQUFHLEVBQUU7QUFUVCxHQUQ2QyxFQVk3QztBQUNJUCxNQUFFLEVBQUUsQ0FEUjtBQUVJQyxRQUFJLEVBQUUsS0FGVjtBQUdJQyxRQUFJLEVBQUUsUUFIVjtBQUlJQyxPQUFHLEVBQUUsSUFKVDtBQUtJQyxPQUFHLEVBQUUsR0FMVDtBQU1JQyxPQUFHLEVBQUUsSUFOVDtBQU9JLFdBQUssSUFQVDtBQVFJQyxPQUFHLEVBQUUsSUFSVDtBQVNJQyxPQUFHLEVBQUU7QUFUVCxHQVo2QyxFQXVCN0M7QUFDSVAsTUFBRSxFQUFFLENBRFI7QUFFSUMsUUFBSSxFQUFFLE9BRlY7QUFHSUMsUUFBSSxFQUFFLFNBSFY7QUFJSUMsT0FBRyxFQUFFLElBSlQ7QUFLSUMsT0FBRyxFQUFFLElBTFQ7QUFNSUMsT0FBRyxFQUFFLElBTlQ7QUFPSSxXQUFLLEdBUFQ7QUFRSUMsT0FBRyxFQUFFLElBUlQ7QUFTSUMsT0FBRyxFQUFFO0FBVFQsR0F2QjZDLEVBa0M3QztBQUNJUCxNQUFFLEVBQUUsQ0FEUjtBQUVJQyxRQUFJLEVBQUUsT0FGVjtBQUdJQyxRQUFJLEVBQUUsT0FIVjtBQUlJQyxPQUFHLEVBQUUsR0FKVDtBQUtJQyxPQUFHLEVBQUUsSUFMVDtBQU1JQyxPQUFHLEVBQUUsSUFOVDtBQU9JLFdBQUssSUFQVDtBQVFJQyxPQUFHLEVBQUUsSUFSVDtBQVNJQyxPQUFHLEVBQUU7QUFUVCxHQWxDNkMsQ0FBRCxDQUR0QjtBQUFBLE1BQ25CQyxjQURtQjtBQUFBLE1BQ0hDLGFBREcsaUJBZ0QxQjs7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsU0FBRCxFQUFlO0FBQy9CLFFBQU1YLEVBQUUsR0FBR1ksSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFlLE1BQTFCLElBQW1DLENBQTlDOztBQUNBLFFBQU1DLFlBQVk7QUFBSWYsUUFBRSxFQUFGQTtBQUFKLE9BQVdXLFNBQVgsQ0FBbEI7O0FBQ0FGLGlCQUFhLHNLQUFLRCxjQUFMLElBQXFCTyxZQUFyQixHQUFiO0FBQ0gsR0FKRDs7QUFNQSxzQkFDSSxxRUFBQywwREFBRDtBQUFBLDJCQUNJO0FBQUEsOEJBQ0kscUVBQUMsZ0VBQUQ7QUFBYyxhQUFLLEVBQUlMO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosRUFHS1osS0FBSyxDQUFDa0IsVUFIWCxlQUlJLHFFQUFDLDhEQUFEO0FBQXFCLHNCQUFjLEVBQUdSO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFVSCxDQWpFRDs7R0FBTVgsVTs7S0FBQUEsVTtBQW1FTkEsVUFBVSxDQUFDb0IsZUFBWCw2VEFBNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDUEMsS0FBSyxDQUFDLHVDQUFELENBREU7O0FBQUE7QUFDbkJDLGFBRG1CO0FBQUE7QUFBQSxpQkFFTkEsR0FBRyxDQUFDQyxJQUFKLEVBRk07O0FBQUE7QUFFbkJDLGNBRm1CO0FBR3pCQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFIeUIsMkNBSWxCO0FBQUNMLHNCQUFVLEVBQUNLO0FBQVosV0FKa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBN0I7QUFPZXhCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXJhY3RlcnMuZDg5YjE3YTc2NDZhNDg4MzYzNjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgQWRkQ2hhcmFjdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQWRkQ2hhcmFjdGVyJ1xyXG5pbXBvcnQgQ2hhcmFjdGVyc0NvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXJhY3RlcnMnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuLi9jb21wb25lbnRzL0NoYXJhY3Rlcic7XHJcblxyXG5cclxuXHJcbmNvbnN0IENoYXJhY3RlcnMgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtjaGFyYWN0ZXJzTGlzdCwgc2V0Q2hhcmFjdGVyc10gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgbmFtZTogXCJBbGV4XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiV2l6YXJkXCIsXHJcbiAgICAgICAgICAgIHN0cjogXCIxMFwiLFxyXG4gICAgICAgICAgICBkZXg6IFwiOFwiLFxyXG4gICAgICAgICAgICBjb246IFwiMTJcIixcclxuICAgICAgICAgICAgaW50OiBcIjE4XCIsXHJcbiAgICAgICAgICAgIHdpczogXCIxNFwiLFxyXG4gICAgICAgICAgICBjaGE6IFwiMTZcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgbmFtZTogXCJLaW1cIixcclxuICAgICAgICAgICAgdHlwZTogXCJDbGVyaWNcIixcclxuICAgICAgICAgICAgc3RyOiBcIjE2XCIsXHJcbiAgICAgICAgICAgIGRleDogXCI4XCIsXHJcbiAgICAgICAgICAgIGNvbjogXCIxNFwiLFxyXG4gICAgICAgICAgICBpbnQ6IFwiMTBcIixcclxuICAgICAgICAgICAgd2lzOiBcIjE4XCIsXHJcbiAgICAgICAgICAgIGNoYTogXCIxMlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICBuYW1lOiBcIktpdHR5XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiRmlnaHRlclwiLFxyXG4gICAgICAgICAgICBzdHI6IFwiMThcIixcclxuICAgICAgICAgICAgZGV4OiBcIjE0XCIsXHJcbiAgICAgICAgICAgIGNvbjogXCIxNlwiLFxyXG4gICAgICAgICAgICBpbnQ6IFwiOFwiLFxyXG4gICAgICAgICAgICB3aXM6IFwiMTBcIixcclxuICAgICAgICAgICAgY2hhOiBcIjEyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiTG9nYW5cIixcclxuICAgICAgICAgICAgdHlwZTogXCJSb2d1ZVwiLFxyXG4gICAgICAgICAgICBzdHI6IFwiOFwiLFxyXG4gICAgICAgICAgICBkZXg6IFwiMThcIixcclxuICAgICAgICAgICAgY29uOiBcIjE0XCIsXHJcbiAgICAgICAgICAgIGludDogXCIxMFwiLFxyXG4gICAgICAgICAgICB3aXM6IFwiMTJcIixcclxuICAgICAgICAgICAgY2hhOiBcIjE2XCJcclxuICAgICAgICB9LFxyXG4gICAgXSk7XHJcblxyXG4gICAgLy9BZGQgQ2hhcmFjdGVyXHJcbiAgICBjb25zdCBhZGRDaHJhY3RlciA9IChjaGFyYWN0ZXIpID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqMTAwMDAwKSArMTtcclxuICAgICAgICBjb25zdCBuZXdDaGFyYWN0ZXIgPSB7aWQsIC4uLmNoYXJhY3Rlcn07XHJcbiAgICAgICAgc2V0Q2hhcmFjdGVycyhbLi4uY2hhcmFjdGVyc0xpc3QsIG5ld0NoYXJhY3Rlcl0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QWRkQ2hhcmFjdGVyIG9uQWRkID0ge2FkZENocmFjdGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgPGgxPkNoYXJhY3RlcnM8L2gxPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmNoYXJhY3RlcnN9XHJcbiAgICAgICAgICAgICAgICA8Q2hhcmFjdGVyc0NvbXBvbmVudCBjaGFyYWN0ZXJzTGlzdD0ge2NoYXJhY3RlcnNMaXN0fS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59O1xyXG5cclxuQ2hhcmFjdGVycy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2NoYXJhY3RlcnNoZWV0c1wiKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHJldHVybiB7Y2hhcmFjdGVyczpkYXRhfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==