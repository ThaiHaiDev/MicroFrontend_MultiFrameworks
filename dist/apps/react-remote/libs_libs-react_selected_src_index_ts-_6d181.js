(self["webpackChunkreact_remote"] = self["webpackChunkreact_remote"] || []).push([["libs_libs-react_selected_src_index_ts-_6d181"],{

/***/ "../../libs/libs-react/selected/src/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LibsReactSelected: () => (/* reexport safe */ _lib_libs_react_selected__WEBPACK_IMPORTED_MODULE_0__.LibsReactSelected)
/* harmony export */ });
/* harmony import */ var _lib_libs_react_selected__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../libs/libs-react/selected/src/lib/libs-react-selected.tsx");


/***/ }),

/***/ "../../libs/libs-react/selected/src/lib/libs-react-selected.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LibsReactSelected: () => (/* binding */ LibsReactSelected),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _libs_react_selected_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../libs/libs-react/selected/src/lib/libs-react-selected.module.scss");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "D:\\HCMUTE\\Hai_Hoc_Ngu\\MicroFrontend\\check\\libs\\libs-react\\selected\\src\\lib\\libs-react-selected.tsx";







/* eslint-disable-next-line */

function LibsReactSelected(props) {
  const [age, setAge] = react__WEBPACK_IMPORTED_MODULE_0__.useState('');
  const handleChange = event => {
    setAge(event.target.value);
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: _libs_react_selected_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['container'],
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      sx: {
        m: 1,
        minWidth: 120
      },
      size: "small",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: "demo-select-small-label",
        children: "Age"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Select__WEBPACK_IMPORTED_MODULE_5__["default"], {
        labelId: "demo-select-small-label",
        id: "demo-select-small",
        value: age,
        label: "Age",
        onChange: handleChange,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: "",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("em", {
            children: "None"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: 10,
          children: "Ten"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: 20,
          children: "Twenty"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: 30,
          children: "Thirty"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LibsReactSelected);

/***/ }),

/***/ "../../libs/libs-react/selected/src/lib/libs-react-selected.module.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ })

}])
//# sourceMappingURL=libs_libs-react_selected_src_index_ts-_6d181.js.map