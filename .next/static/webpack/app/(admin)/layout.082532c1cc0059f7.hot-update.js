"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(admin)/layout",{

/***/ "(app-pages-browser)/./src/layouts/UserLayout/index.jsx":
/*!******************************************!*\
  !*** ./src/layouts/UserLayout/index.jsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UserLayout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ \"(app-pages-browser)/./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/useMediaQuery */ \"(app-pages-browser)/./node_modules/@mui/material/useMediaQuery/index.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Container */ \"(app-pages-browser)/./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Toolbar */ \"(app-pages-browser)/./node_modules/@mui/material/Toolbar/Toolbar.js\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Stack */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"(app-pages-browser)/./src/layouts/UserLayout/Header/index.jsx\");\n/* harmony import */ var _components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Breadcrumbs */ \"(app-pages-browser)/./src/components/Breadcrumbs.jsx\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Loader */ \"(app-pages-browser)/./src/components/Loader.jsx\");\n/* harmony import */ var _hooks_useConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useConfig */ \"(app-pages-browser)/./src/hooks/useConfig.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// @project\n\n\n\n\n/***************************  ADMIN LAYOUT  ***************************/ function UserLayout(param) {\n    let { children } = param;\n    _s();\n    const { menuMasterLoading } = useGetMenuMaster();\n    const { miniDrawer } = (0,_hooks_useConfig__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const downXL = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n        \"UserLayout.useMediaQuery[downXL]\": (theme)=>theme.breakpoints.down('xl')\n    }[\"UserLayout.useMediaQuery[downXL]\"]);\n    if (menuMasterLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/gauravpandey/Documents/work/01-project/complyAI/ComplyAI-App/src/layouts/UserLayout/index.jsx\",\n        lineNumber: 26,\n        columnNumber: 33\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        direction: \"row\",\n        width: 1,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/gauravpandey/Documents/work/01-project/complyAI/ComplyAI-App/src/layouts/UserLayout/index.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                component: \"main\",\n                sx: {\n                    width: \"calc(100% - \".concat(0, \"px)\"),\n                    flexGrow: 1,\n                    p: {\n                        xs: 2,\n                        sm: 3\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        sx: {\n                            minHeight: {\n                                xs: 54,\n                                sm: 46,\n                                md: 76\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/gauravpandey/Documents/work/01-project/complyAI/ComplyAI-App/src/layouts/UserLayout/index.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        sx: {\n                            py: 0.4,\n                            px: 1.5,\n                            mx: {\n                                xs: -2,\n                                sm: -3\n                            },\n                            display: {\n                                xs: 'block',\n                                md: 'none'\n                            },\n                            borderBottom: 1,\n                            borderColor: 'divider',\n                            mb: 2\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/gauravpandey/Documents/work/01-project/complyAI/ComplyAI-App/src/layouts/UserLayout/index.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/gauravpandey/Documents/work/01-project/complyAI/ComplyAI-App/src/layouts/UserLayout/index.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        maxWidth: \"lg\",\n                        sx: {\n                            px: {\n                                xs: 0,\n                                sm: 2\n                            }\n                        },\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/gauravpandey/Documents/work/01-project/complyAI/ComplyAI-App/src/layouts/UserLayout/index.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gauravpandey/Documents/work/01-project/complyAI/ComplyAI-App/src/layouts/UserLayout/index.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gauravpandey/Documents/work/01-project/complyAI/ComplyAI-App/src/layouts/UserLayout/index.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(UserLayout, \"Kqyv/zV6sZCHMyiAt1cBBx73nTM=\", true, function() {\n    return [\n        _hooks_useConfig__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = UserLayout;\nUserLayout.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().any)\n};\nvar _c;\n$RefreshReg$(_c, \"UserLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9sYXlvdXRzL1VzZXJMYXlvdXQvaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ21DO0FBRUQ7QUFFc0I7QUFDUjtBQUNKO0FBQ0o7QUFDSjtBQUVwQyxXQUFXO0FBQ21CO0FBQ3FCO0FBQ1Y7QUFDQztBQUUxQyxzRUFBc0UsR0FFdkQsU0FBU1csV0FBVyxLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7O0lBQ2pDLE1BQU0sRUFBRUMsaUJBQWlCLEVBQUUsR0FBR0M7SUFDOUIsTUFBTSxFQUFFQyxVQUFVLEVBQUUsR0FBR0wsNERBQVNBO0lBRWhDLE1BQU1NLFNBQVNkLHVFQUFhQTs0Q0FBQyxDQUFDZSxRQUFVQSxNQUFNQyxXQUFXLENBQUNDLElBQUksQ0FBQzs7SUFFL0QsSUFBSU4sbUJBQW1CLHFCQUFPLDhEQUFDSiwwREFBTUE7Ozs7O0lBRXJDLHFCQUNFLDhEQUFDSiwyREFBS0E7UUFBQ2UsV0FBVTtRQUFNQyxPQUFPOzswQkFDNUIsOERBQUNkLCtDQUFNQTs7Ozs7MEJBRVAsOERBQUNELHlEQUFHQTtnQkFBQ2dCLFdBQVU7Z0JBQU9DLElBQUk7b0JBQUVGLE9BQU8sZUFBaUIsT0FBRixHQUFFO29CQUFNRyxVQUFVO29CQUFHQyxHQUFHO3dCQUFFQyxJQUFJO3dCQUFHQyxJQUFJO29CQUFFO2dCQUFFOztrQ0FDekYsOERBQUN2Qiw2REFBT0E7d0JBQUNtQixJQUFJOzRCQUFFSyxXQUFXO2dDQUFFRixJQUFJO2dDQUFJQyxJQUFJO2dDQUFJRSxJQUFJOzRCQUFHO3dCQUFFOzs7Ozs7a0NBQ3JELDhEQUFDdkIseURBQUdBO3dCQUNGaUIsSUFBSTs0QkFDRk8sSUFBSTs0QkFDSkMsSUFBSTs0QkFDSkMsSUFBSTtnQ0FBRU4sSUFBSSxDQUFDO2dDQUFHQyxJQUFJLENBQUM7NEJBQUU7NEJBQ3JCTSxTQUFTO2dDQUFFUCxJQUFJO2dDQUFTRyxJQUFJOzRCQUFPOzRCQUNuQ0ssY0FBYzs0QkFDZEMsYUFBYTs0QkFDYkMsSUFBSTt3QkFDTjtrQ0FFQSw0RUFBQzVCLCtEQUFXQTs7Ozs7Ozs7OztrQ0FFZCw4REFBQ0wsZ0VBQVNBO3dCQUFDa0MsVUFBUzt3QkFBS2QsSUFBSTs0QkFBRVEsSUFBSTtnQ0FBRUwsSUFBSTtnQ0FBR0MsSUFBSTs0QkFBRTt3QkFBRTtrQ0FDakRmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWDtHQWpDd0JEOztRQUVDRCx3REFBU0E7UUFFakJSLG1FQUFhQTs7O0tBSk5TO0FBbUN4QkEsV0FBVzJCLFNBQVMsR0FBRztJQUFFMUIsVUFBVVosd0RBQWE7QUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2dhdXJhdnBhbmRleS9Eb2N1bWVudHMvd29yay8wMS1wcm9qZWN0L2NvbXBseUFJL0NvbXBseUFJLUFwcC9zcmMvbGF5b3V0cy9Vc2VyTGF5b3V0L2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvdXNlTWVkaWFRdWVyeSc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XG5pbXBvcnQgU3RhY2sgZnJvbSAnQG11aS9tYXRlcmlhbC9TdGFjayc7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcblxuLy8gQHByb2plY3RcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IEJyZWFkY3J1bWJzIGZyb20gJ0AvY29tcG9uZW50cy9CcmVhZGNydW1icyc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJ0AvY29tcG9uZW50cy9Mb2FkZXInO1xuaW1wb3J0IHVzZUNvbmZpZyBmcm9tICdAL2hvb2tzL3VzZUNvbmZpZyc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiogIEFETUlOIExBWU9VVCAgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCB7IG1lbnVNYXN0ZXJMb2FkaW5nIH0gPSB1c2VHZXRNZW51TWFzdGVyKCk7XG4gIGNvbnN0IHsgbWluaURyYXdlciB9ID0gdXNlQ29uZmlnKCk7XG5cbiAgY29uc3QgZG93blhMID0gdXNlTWVkaWFRdWVyeSgodGhlbWUpID0+IHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hsJykpO1xuXG4gIGlmIChtZW51TWFzdGVyTG9hZGluZykgcmV0dXJuIDxMb2FkZXIgLz47XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgd2lkdGg9ezF9PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgey8qIDxEcmF3ZXIgLz4gKi99XG4gICAgICA8Qm94IGNvbXBvbmVudD1cIm1haW5cIiBzeD17eyB3aWR0aDogYGNhbGMoMTAwJSAtICR7MH1weClgLCBmbGV4R3JvdzogMSwgcDogeyB4czogMiwgc206IDMgfSB9fT5cbiAgICAgICAgPFRvb2xiYXIgc3g9e3sgbWluSGVpZ2h0OiB7IHhzOiA1NCwgc206IDQ2LCBtZDogNzYgfSB9fSAvPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHB5OiAwLjQsXG4gICAgICAgICAgICBweDogMS41LFxuICAgICAgICAgICAgbXg6IHsgeHM6IC0yLCBzbTogLTMgfSxcbiAgICAgICAgICAgIGRpc3BsYXk6IHsgeHM6ICdibG9jaycsIG1kOiAnbm9uZScgfSxcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTogMSxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnZGl2aWRlcicsXG4gICAgICAgICAgICBtYjogMlxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8QnJlYWRjcnVtYnMgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIHN4PXt7IHB4OiB7IHhzOiAwLCBzbTogMiB9IH19PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cbiAgICA8L1N0YWNrPlxuICApO1xufVxuXG5Vc2VyTGF5b3V0LnByb3BUeXBlcyA9IHsgY2hpbGRyZW46IFByb3BUeXBlcy5hbnkgfTtcbiJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJ1c2VFZmZlY3QiLCJ1c2VNZWRpYVF1ZXJ5IiwiQ29udGFpbmVyIiwiVG9vbGJhciIsIlN0YWNrIiwiQm94IiwiSGVhZGVyIiwiQnJlYWRjcnVtYnMiLCJMb2FkZXIiLCJ1c2VDb25maWciLCJVc2VyTGF5b3V0IiwiY2hpbGRyZW4iLCJtZW51TWFzdGVyTG9hZGluZyIsInVzZUdldE1lbnVNYXN0ZXIiLCJtaW5pRHJhd2VyIiwiZG93blhMIiwidGhlbWUiLCJicmVha3BvaW50cyIsImRvd24iLCJkaXJlY3Rpb24iLCJ3aWR0aCIsImNvbXBvbmVudCIsInN4IiwiZmxleEdyb3ciLCJwIiwieHMiLCJzbSIsIm1pbkhlaWdodCIsIm1kIiwicHkiLCJweCIsIm14IiwiZGlzcGxheSIsImJvcmRlckJvdHRvbSIsImJvcmRlckNvbG9yIiwibWIiLCJtYXhXaWR0aCIsInByb3BUeXBlcyIsImFueSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/layouts/UserLayout/index.jsx\n"));

/***/ })

});