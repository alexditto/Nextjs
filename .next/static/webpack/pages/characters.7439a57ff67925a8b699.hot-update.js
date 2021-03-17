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
      }, _this), props.characters.id, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Characters__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVycy5qcyJdLCJuYW1lcyI6WyJDaGFyYWN0ZXJzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlkIiwibmFtZSIsInR5cGUiLCJzdHIiLCJkZXgiLCJjb24iLCJ3aXMiLCJjaGEiLCJjaGFyYWN0ZXJzTGlzdCIsInNldENoYXJhY3RlcnMiLCJhZGRDaHJhY3RlciIsImNoYXJhY3RlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm5ld0NoYXJhY3RlciIsImNoYXJhY3RlcnMiLCJnZXRJbml0aWFsUHJvcHMiLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDY0Msc0RBQVEsQ0FBQyxDQUM3QztBQUNJQyxNQUFFLEVBQUUsQ0FEUjtBQUVJQyxRQUFJLEVBQUUsTUFGVjtBQUdJQyxRQUFJLEVBQUUsUUFIVjtBQUlJQyxPQUFHLEVBQUUsSUFKVDtBQUtJQyxPQUFHLEVBQUUsR0FMVDtBQU1JQyxPQUFHLEVBQUUsSUFOVDtBQU9JLFdBQUssSUFQVDtBQVFJQyxPQUFHLEVBQUUsSUFSVDtBQVNJQyxPQUFHLEVBQUU7QUFUVCxHQUQ2QyxFQVk3QztBQUNJUCxNQUFFLEVBQUUsQ0FEUjtBQUVJQyxRQUFJLEVBQUUsS0FGVjtBQUdJQyxRQUFJLEVBQUUsUUFIVjtBQUlJQyxPQUFHLEVBQUUsSUFKVDtBQUtJQyxPQUFHLEVBQUUsR0FMVDtBQU1JQyxPQUFHLEVBQUUsSUFOVDtBQU9JLFdBQUssSUFQVDtBQVFJQyxPQUFHLEVBQUUsSUFSVDtBQVNJQyxPQUFHLEVBQUU7QUFUVCxHQVo2QyxFQXVCN0M7QUFDSVAsTUFBRSxFQUFFLENBRFI7QUFFSUMsUUFBSSxFQUFFLE9BRlY7QUFHSUMsUUFBSSxFQUFFLFNBSFY7QUFJSUMsT0FBRyxFQUFFLElBSlQ7QUFLSUMsT0FBRyxFQUFFLElBTFQ7QUFNSUMsT0FBRyxFQUFFLElBTlQ7QUFPSSxXQUFLLEdBUFQ7QUFRSUMsT0FBRyxFQUFFLElBUlQ7QUFTSUMsT0FBRyxFQUFFO0FBVFQsR0F2QjZDLEVBa0M3QztBQUNJUCxNQUFFLEVBQUUsQ0FEUjtBQUVJQyxRQUFJLEVBQUUsT0FGVjtBQUdJQyxRQUFJLEVBQUUsT0FIVjtBQUlJQyxPQUFHLEVBQUUsR0FKVDtBQUtJQyxPQUFHLEVBQUUsSUFMVDtBQU1JQyxPQUFHLEVBQUUsSUFOVDtBQU9JLFdBQUssSUFQVDtBQVFJQyxPQUFHLEVBQUUsSUFSVDtBQVNJQyxPQUFHLEVBQUU7QUFUVCxHQWxDNkMsQ0FBRCxDQUR0QjtBQUFBLE1BQ25CQyxjQURtQjtBQUFBLE1BQ0hDLGFBREcsaUJBZ0QxQjs7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsU0FBRCxFQUFlO0FBQy9CLFFBQU1YLEVBQUUsR0FBR1ksSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFlLE1BQTFCLElBQW1DLENBQTlDOztBQUNBLFFBQU1DLFlBQVk7QUFBSWYsUUFBRSxFQUFGQTtBQUFKLE9BQVdXLFNBQVgsQ0FBbEI7O0FBQ0FGLGlCQUFhLHNLQUFLRCxjQUFMLElBQXFCTyxZQUFyQixHQUFiO0FBQ0gsR0FKRDs7QUFNQSxzQkFDSSxxRUFBQywwREFBRDtBQUFBLDJCQUNJO0FBQUEsOEJBQ0kscUVBQUMsZ0VBQUQ7QUFBYyxhQUFLLEVBQUlMO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosRUFHS1osS0FBSyxDQUFDa0IsVUFBTixDQUFpQmhCLEVBSHRCLGVBSUkscUVBQUMsOERBQUQ7QUFBcUIsc0JBQWMsRUFBR1E7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVVILENBakVEOztHQUFNWCxVOztLQUFBQSxVO0FBbUVOQSxVQUFVLENBQUNvQixlQUFYLDZUQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNQQyxLQUFLLENBQUMsdUNBQUQsQ0FERTs7QUFBQTtBQUNuQkMsYUFEbUI7QUFBQTtBQUFBLGlCQUVOQSxHQUFHLENBQUNDLElBQUosRUFGTTs7QUFBQTtBQUVuQkMsY0FGbUI7QUFHekJDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUh5QiwyQ0FJbEI7QUFBQ0wsc0JBQVUsRUFBQ0s7QUFBWixXQUprQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUE3QjtBQU9leEIseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhcmFjdGVycy43NDM5YTU3ZmY2NzkyNWE4YjY5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBBZGRDaGFyYWN0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9BZGRDaGFyYWN0ZXInXHJcbmltcG9ydCBDaGFyYWN0ZXJzQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhcmFjdGVycydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhcmFjdGVyJztcclxuXHJcblxyXG5cclxuY29uc3QgQ2hhcmFjdGVycyA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2NoYXJhY3RlcnNMaXN0LCBzZXRDaGFyYWN0ZXJzXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkFsZXhcIixcclxuICAgICAgICAgICAgdHlwZTogXCJXaXphcmRcIixcclxuICAgICAgICAgICAgc3RyOiBcIjEwXCIsXHJcbiAgICAgICAgICAgIGRleDogXCI4XCIsXHJcbiAgICAgICAgICAgIGNvbjogXCIxMlwiLFxyXG4gICAgICAgICAgICBpbnQ6IFwiMThcIixcclxuICAgICAgICAgICAgd2lzOiBcIjE0XCIsXHJcbiAgICAgICAgICAgIGNoYTogXCIxNlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICBuYW1lOiBcIktpbVwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIkNsZXJpY1wiLFxyXG4gICAgICAgICAgICBzdHI6IFwiMTZcIixcclxuICAgICAgICAgICAgZGV4OiBcIjhcIixcclxuICAgICAgICAgICAgY29uOiBcIjE0XCIsXHJcbiAgICAgICAgICAgIGludDogXCIxMFwiLFxyXG4gICAgICAgICAgICB3aXM6IFwiMThcIixcclxuICAgICAgICAgICAgY2hhOiBcIjEyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiS2l0dHlcIixcclxuICAgICAgICAgICAgdHlwZTogXCJGaWdodGVyXCIsXHJcbiAgICAgICAgICAgIHN0cjogXCIxOFwiLFxyXG4gICAgICAgICAgICBkZXg6IFwiMTRcIixcclxuICAgICAgICAgICAgY29uOiBcIjE2XCIsXHJcbiAgICAgICAgICAgIGludDogXCI4XCIsXHJcbiAgICAgICAgICAgIHdpczogXCIxMFwiLFxyXG4gICAgICAgICAgICBjaGE6IFwiMTJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgICAgbmFtZTogXCJMb2dhblwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIlJvZ3VlXCIsXHJcbiAgICAgICAgICAgIHN0cjogXCI4XCIsXHJcbiAgICAgICAgICAgIGRleDogXCIxOFwiLFxyXG4gICAgICAgICAgICBjb246IFwiMTRcIixcclxuICAgICAgICAgICAgaW50OiBcIjEwXCIsXHJcbiAgICAgICAgICAgIHdpczogXCIxMlwiLFxyXG4gICAgICAgICAgICBjaGE6IFwiMTZcIlxyXG4gICAgICAgIH0sXHJcbiAgICBdKTtcclxuXHJcbiAgICAvL0FkZCBDaGFyYWN0ZXJcclxuICAgIGNvbnN0IGFkZENocmFjdGVyID0gKGNoYXJhY3RlcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoxMDAwMDApICsxO1xyXG4gICAgICAgIGNvbnN0IG5ld0NoYXJhY3RlciA9IHtpZCwgLi4uY2hhcmFjdGVyfTtcclxuICAgICAgICBzZXRDaGFyYWN0ZXJzKFsuLi5jaGFyYWN0ZXJzTGlzdCwgbmV3Q2hhcmFjdGVyXSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxBZGRDaGFyYWN0ZXIgb25BZGQgPSB7YWRkQ2hyYWN0ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8aDE+Q2hhcmFjdGVyczwvaDE+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hhcmFjdGVycy5pZH1cclxuICAgICAgICAgICAgICAgIDxDaGFyYWN0ZXJzQ29tcG9uZW50IGNoYXJhY3RlcnNMaXN0PSB7Y2hhcmFjdGVyc0xpc3R9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn07XHJcblxyXG5DaGFyYWN0ZXJzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvY2hhcmFjdGVyc2hlZXRzXCIpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgcmV0dXJuIHtjaGFyYWN0ZXJzOmRhdGF9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcnMiXSwic291cmNlUm9vdCI6IiJ9