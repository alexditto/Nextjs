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
      "str": parseInt(str),
      "dex": parseInt(dex),
      "con": parseInt(con),
      "wis": parseInt(wis),
      "int": parseInt(_int),
      "cha": parseInt(cha)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVycy5qcyJdLCJuYW1lcyI6WyJDaGFyYWN0ZXJzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlkIiwibmFtZSIsInR5cGUiLCJzdHIiLCJkZXgiLCJjb24iLCJ3aXMiLCJjaGEiLCJjaGFyYWN0ZXJzTGlzdCIsInNldENoYXJhY3RlcnMiLCJhZGRDaHJhY3RlciIsImludCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm5ld0NoYXJhY3RlciIsImNvbnNvbGUiLCJsb2ciLCJteUhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwicmF3IiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlSW50IiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInJlZGlyZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJ0ZXh0IiwicmVzdWx0IiwiZXJyb3IiLCJjaGFyYWN0ZXJzIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwianNvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUMsQ0FDN0M7QUFDSUMsTUFBRSxFQUFFLENBRFI7QUFFSUMsUUFBSSxFQUFFLE1BRlY7QUFHSUMsUUFBSSxFQUFFLFFBSFY7QUFJSUMsT0FBRyxFQUFFLElBSlQ7QUFLSUMsT0FBRyxFQUFFLEdBTFQ7QUFNSUMsT0FBRyxFQUFFLElBTlQ7QUFPSSxXQUFLLElBUFQ7QUFRSUMsT0FBRyxFQUFFLElBUlQ7QUFTSUMsT0FBRyxFQUFFO0FBVFQsR0FENkMsRUFZN0M7QUFDSVAsTUFBRSxFQUFFLENBRFI7QUFFSUMsUUFBSSxFQUFFLEtBRlY7QUFHSUMsUUFBSSxF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QUQ7QUFBYyxhQUFLLEVBQUl6QjtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0kscUVBQUMsOERBQUQ7QUFBcUIsc0JBQWMsRUFBR1osS0FBSyxDQUFDc0M7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVNILENBNUZEOztHQUFNdkMsVTs7S0FBQUEsVTtBQThGTkEsVUFBVSxDQUFDd0MsZUFBWCw2VEFBNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDUFAsS0FBSyxDQUFDLHVDQUFELENBREU7O0FBQUE7QUFDbkJRLGFBRG1CO0FBQUE7QUFBQSxpQkFFTkEsR0FBRyxDQUFDQyxJQUFKLEVBRk07O0FBQUE7QUFFbkJDLGNBRm1CO0FBR3pCeEIsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZdUIsSUFBWjtBQUh5QiwyQ0FJbEI7QUFBQ0osc0JBQVUsRUFBQ0k7QUFBWixXQUprQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUE3QjtBQU9lM0MseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhcmFjdGVycy45NjgxNjVhODY2Yzk5MWViOTIyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBBZGRDaGFyYWN0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9BZGRDaGFyYWN0ZXInXHJcbmltcG9ydCBDaGFyYWN0ZXJzQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhcmFjdGVycydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhcmFjdGVyJztcclxuXHJcblxyXG5cclxuY29uc3QgQ2hhcmFjdGVycyA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2NoYXJhY3RlcnNMaXN0LCBzZXRDaGFyYWN0ZXJzXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkFsZXhcIixcclxuICAgICAgICAgICAgdHlwZTogXCJXaXphcmRcIixcclxuICAgICAgICAgICAgc3RyOiBcIjEwXCIsXHJcbiAgICAgICAgICAgIGRleDogXCI4XCIsXHJcbiAgICAgICAgICAgIGNvbjogXCIxMlwiLFxyXG4gICAgICAgICAgICBpbnQ6IFwiMThcIixcclxuICAgICAgICAgICAgd2lzOiBcIjE0XCIsXHJcbiAgICAgICAgICAgIGNoYTogXCIxNlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICBuYW1lOiBcIktpbVwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIkNsZXJpY1wiLFxyXG4gICAgICAgICAgICBzdHI6IFwiMTZcIixcclxuICAgICAgICAgICAgZGV4OiBcIjhcIixcclxuICAgICAgICAgICAgY29uOiBcIjE0XCIsXHJcbiAgICAgICAgICAgIGludDogXCIxMFwiLFxyXG4gICAgICAgICAgICB3aXM6IFwiMThcIixcclxuICAgICAgICAgICAgY2hhOiBcIjEyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiS2l0dHlcIixcclxuICAgICAgICAgICAgdHlwZTogXCJGaWdodGVyXCIsXHJcbiAgICAgICAgICAgIHN0cjogXCIxOFwiLFxyXG4gICAgICAgICAgICBkZXg6IFwiMTRcIixcclxuICAgICAgICAgICAgY29uOiBcIjE2XCIsXHJcbiAgICAgICAgICAgIGludDogXCI4XCIsXHJcbiAgICAgICAgICAgIHdpczogXCIxMFwiLFxyXG4gICAgICAgICAgICBjaGE6IFwiMTJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgICAgbmFtZTogXCJMb2dhblwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIlJvZ3VlXCIsXHJcbiAgICAgICAgICAgIHN0cjogXCI4XCIsXHJcbiAgICAgICAgICAgIGRleDogXCIxOFwiLFxyXG4gICAgICAgICAgICBjb246IFwiMTRcIixcclxuICAgICAgICAgICAgaW50OiBcIjEwXCIsXHJcbiAgICAgICAgICAgIHdpczogXCIxMlwiLFxyXG4gICAgICAgICAgICBjaGE6IFwiMTZcIlxyXG4gICAgICAgIH0sXHJcbiAgICBdKTtcclxuXHJcbiAgICAvL0FkZCBDaGFyYWN0ZXJcclxuICAgIGNvbnN0IGFkZENocmFjdGVyID0gKG5hbWUsIHR5cGUsIHN0ciwgZGV4LCBjb24sIHdpcywgaW50LCBjaGEpID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqMTAwMDAwKSArMTtcclxuICAgICAgICBjb25zdCBuZXdDaGFyYWN0ZXIgPSB7aWQsIC4uLm5hbWV9O1xyXG4gICAgICAgIHNldENoYXJhY3RlcnMoWy4uLmNoYXJhY3RlcnNMaXN0LCBuZXdDaGFyYWN0ZXJdKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSlcclxuICAgICAgICB2YXIgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBteUhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHJcbiAgICAgICAgdmFyIHJhdyA9IEpTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogbmFtZS5uYW1lLCBcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBuYW1lLnR5cGUsIFxyXG4gICAgICAgICAgICAgICAgXCJzdHJcIjogcGFyc2VJbnQoc3RyKSwgXHJcbiAgICAgICAgICAgICAgICBcImRleFwiOiBwYXJzZUludChkZXgpLCBcclxuICAgICAgICAgICAgICAgIFwiY29uXCI6IHBhcnNlSW50KGNvbiksIFxyXG4gICAgICAgICAgICAgICAgXCJ3aXNcIjogcGFyc2VJbnQod2lzKSwgXHJcbiAgICAgICAgICAgICAgICBcImludFwiOiBwYXJzZUludChpbnQpLCBcclxuICAgICAgICAgICAgICAgIFwiY2hhXCI6IHBhcnNlSW50KGNoYSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiBteUhlYWRlcnMsXHJcbiAgICAgICAgYm9keTogcmF3LFxyXG4gICAgICAgIHJlZGlyZWN0OiAnZm9sbG93J1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2NoYXJhY3RlcnNoZWV0cy9hZGRcIiwgcmVxdWVzdE9wdGlvbnMpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEFkZENoYXJhY3RlciBvbkFkZCA9IHthZGRDaHJhY3Rlcn0gLz5cclxuICAgICAgICAgICAgICAgIDxoMT5DaGFyYWN0ZXJzPC9oMT5cclxuICAgICAgICAgICAgICAgIDxDaGFyYWN0ZXJzQ29tcG9uZW50IGNoYXJhY3RlcnNMaXN0PSB7cHJvcHMuY2hhcmFjdGVyc30vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufTtcclxuXHJcbkNoYXJhY3RlcnMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9jaGFyYWN0ZXJzaGVldHNcIik7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICByZXR1cm4ge2NoYXJhY3RlcnM6ZGF0YX1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVycyJdLCJzb3VyY2VSb290IjoiIn0=