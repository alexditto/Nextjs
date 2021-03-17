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


  var addChracter = function addChracter(name, type, str, dex, con, wis, _int, cha) {
    var id = Math.floor(Math.random() * 100000) + 1;

    var newCharacter = _objectSpread({
      id: id
    }, name);

    setCharacters([].concat(Object(C_Users_Alex_Desktop_Personal_Projects_React_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(charactersList), [newCharacter]));
    console.log(name);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "name": name.name,
      "type": name.type,
      "str": parseInt(name.str),
      "dex": parseInt(name.dex),
      "con": parseInt(name.con),
      "wis": parseInt(name.wis),
      "int": parseInt(name["int"]),
      "cha": parseInt(name.cha)
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("http://localhost:5000/charactersheets/add", requestOptions).then(function (response) {
      return response.text();
    }).then(function (result) {
      return console.log(result);
    })["catch"](function (error) {
      return console.log('error', error);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_AddCharacter__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onAdd: addChracter
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        children: "Characters"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Characters__WEBPACK_IMPORTED_MODULE_7__["default"], {
        charactersList: props.characters
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 94,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVycy5qcyJdLCJuYW1lcyI6WyJDaGFyYWN0ZXJzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlkIiwibmFtZSIsInR5cGUiLCJzdHIiLCJkZXgiLCJjb24iLCJ3aXMiLCJjaGEiLCJjaGFyYWN0ZXJzTGlzdCIsInNldENoYXJhY3RlcnMiLCJhZGRDaHJhY3RlciIsImludCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm5ld0NoYXJhY3RlciIsImNvbnNvbGUiLCJsb2ciLCJteUhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwicmF3IiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlSW50IiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInJlZGlyZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJ0ZXh0IiwicmVzdWx0IiwiZXJyb3IiLCJjaGFyYWN0ZXJzIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwianNvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUMsQ0FDN0M7QUFDSUMsTUFBRSxFQUFFLENBRFI7QUFFSUMsUUFBSSxFQUFFLE1BRlY7QUFHSUMsUUFBSSxFQUFFLFFBSFY7QUFJSUMsT0FBRyxFQUFFLElBSlQ7QUFLSUMsT0FBRyxFQUFFLEdBTFQ7QUFNSUMsT0FBRyxFQUFFLElBTlQ7QUFPSSxXQUFLLElBUFQ7QUFRSUMsT0FBRyxFQUFFLElBUlQ7QUFTSUMsT0FBRyxFQUFFO0FBVFQsR0FENkMsRUFZN0M7QUFDSVAsTUFBRSxFQUFFLENBRFI7QUFFSUMsUUFBSSxFQUFFLEtBRlY7QUFHSUMsUUFBSSxF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R0FoQ0Q7O0FBa0NBLHNCQUNJLHFFQUFDLDBEQUFEO0FBQUEsMkJBQ0k7QUFBQSw4QkFDSSxxRUFBQyxnRUFBRDtBQUFjLGFBQUssRUFBSXpCO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSSxxRUFBQyw4REFBRDtBQUFxQixzQkFBYyxFQUFHWixLQUFLLENBQUNzQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBU0gsQ0E1RkQ7O0dBQU12QyxVOztLQUFBQSxVO0FBOEZOQSxVQUFVLENBQUN3QyxlQUFYLDZUQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNQUCxLQUFLLENBQUMsdUNBQUQsQ0FERTs7QUFBQTtBQUNuQlEsYUFEbUI7QUFBQTtBQUFBLGlCQUVOQSxHQUFHLENBQUNDLElBQUosRUFGTTs7QUFBQTtBQUVuQkMsY0FGbUI7QUFHekJ4QixpQkFBTyxDQUFDQyxHQUFSLENBQVl1QixJQUFaO0FBSHlCLDJDQUlsQjtBQUFDSixzQkFBVSxFQUFDSTtBQUFaLFdBSmtCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQTdCO0FBT2UzQyx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGFyYWN0ZXJzLmQ3N2JhNmY3MjE0MTc2ZTU3OGUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IEFkZENoYXJhY3RlciBmcm9tICcuLi9jb21wb25lbnRzL0FkZENoYXJhY3RlcidcclxuaW1wb3J0IENoYXJhY3RlcnNDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9DaGFyYWN0ZXJzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9DaGFyYWN0ZXInO1xyXG5cclxuXHJcblxyXG5jb25zdCBDaGFyYWN0ZXJzID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbY2hhcmFjdGVyc0xpc3QsIHNldENoYXJhY3RlcnNdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiQWxleFwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIldpemFyZFwiLFxyXG4gICAgICAgICAgICBzdHI6IFwiMTBcIixcclxuICAgICAgICAgICAgZGV4OiBcIjhcIixcclxuICAgICAgICAgICAgY29uOiBcIjEyXCIsXHJcbiAgICAgICAgICAgIGludDogXCIxOFwiLFxyXG4gICAgICAgICAgICB3aXM6IFwiMTRcIixcclxuICAgICAgICAgICAgY2hhOiBcIjE2XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiS2ltXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiQ2xlcmljXCIsXHJcbiAgICAgICAgICAgIHN0cjogXCIxNlwiLFxyXG4gICAgICAgICAgICBkZXg6IFwiOFwiLFxyXG4gICAgICAgICAgICBjb246IFwiMTRcIixcclxuICAgICAgICAgICAgaW50OiBcIjEwXCIsXHJcbiAgICAgICAgICAgIHdpczogXCIxOFwiLFxyXG4gICAgICAgICAgICBjaGE6IFwiMTJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgbmFtZTogXCJLaXR0eVwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIkZpZ2h0ZXJcIixcclxuICAgICAgICAgICAgc3RyOiBcIjE4XCIsXHJcbiAgICAgICAgICAgIGRleDogXCIxNFwiLFxyXG4gICAgICAgICAgICBjb246IFwiMTZcIixcclxuICAgICAgICAgICAgaW50OiBcIjhcIixcclxuICAgICAgICAgICAgd2lzOiBcIjEwXCIsXHJcbiAgICAgICAgICAgIGNoYTogXCIxMlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgICBuYW1lOiBcIkxvZ2FuXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiUm9ndWVcIixcclxuICAgICAgICAgICAgc3RyOiBcIjhcIixcclxuICAgICAgICAgICAgZGV4OiBcIjE4XCIsXHJcbiAgICAgICAgICAgIGNvbjogXCIxNFwiLFxyXG4gICAgICAgICAgICBpbnQ6IFwiMTBcIixcclxuICAgICAgICAgICAgd2lzOiBcIjEyXCIsXHJcbiAgICAgICAgICAgIGNoYTogXCIxNlwiXHJcbiAgICAgICAgfSxcclxuICAgIF0pO1xyXG5cclxuICAgIC8vQWRkIENoYXJhY3RlclxyXG4gICAgY29uc3QgYWRkQ2hyYWN0ZXIgPSAobmFtZSwgdHlwZSwgc3RyLCBkZXgsIGNvbiwgd2lzLCBpbnQsIGNoYSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoxMDAwMDApICsxO1xyXG4gICAgICAgIGNvbnN0IG5ld0NoYXJhY3RlciA9IHtpZCwgLi4ubmFtZX07XHJcbiAgICAgICAgc2V0Q2hhcmFjdGVycyhbLi4uY2hhcmFjdGVyc0xpc3QsIG5ld0NoYXJhY3Rlcl0pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lKVxyXG4gICAgICAgIHZhciBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIG15SGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cclxuICAgICAgICB2YXIgcmF3ID0gSlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lLm5hbWUsIFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IG5hbWUudHlwZSwgXHJcbiAgICAgICAgICAgICAgICBcInN0clwiOiBwYXJzZUludChuYW1lLnN0ciksIFxyXG4gICAgICAgICAgICAgICAgXCJkZXhcIjogcGFyc2VJbnQobmFtZS5kZXgpLCBcclxuICAgICAgICAgICAgICAgIFwiY29uXCI6IHBhcnNlSW50KG5hbWUuY29uKSwgXHJcbiAgICAgICAgICAgICAgICBcIndpc1wiOiBwYXJzZUludChuYW1lLndpcyksIFxyXG4gICAgICAgICAgICAgICAgXCJpbnRcIjogcGFyc2VJbnQobmFtZS5pbnQpLCBcclxuICAgICAgICAgICAgICAgIFwiY2hhXCI6IHBhcnNlSW50KG5hbWUuY2hhKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IG15SGVhZGVycyxcclxuICAgICAgICBib2R5OiByYXcsXHJcbiAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvY2hhcmFjdGVyc2hlZXRzL2FkZFwiLCByZXF1ZXN0T3B0aW9ucylcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QWRkQ2hhcmFjdGVyIG9uQWRkID0ge2FkZENocmFjdGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgPGgxPkNoYXJhY3RlcnM8L2gxPlxyXG4gICAgICAgICAgICAgICAgPENoYXJhY3RlcnNDb21wb25lbnQgY2hhcmFjdGVyc0xpc3Q9IHtwcm9wcy5jaGFyYWN0ZXJzfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59O1xyXG5cclxuQ2hhcmFjdGVycy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2NoYXJhY3RlcnNoZWV0c1wiKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHJldHVybiB7Y2hhcmFjdGVyczpkYXRhfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==