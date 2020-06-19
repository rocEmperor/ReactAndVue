/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"react-app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/react/index.js","vendor~react-app~vue-app","vendor~react-app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/react/component/asyncComponent/index.js":
/*!*****************************************************!*\
  !*** ./src/react/component/asyncComponent/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction asyncComponent(importComponent) {\n  class AsyncComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n    constructor(props) {\n      super(props);\n      this.state = {\n        component: null\n      };\n    }\n\n    async componentDidMount() {\n      const {\n        default: component\n      } = await importComponent();\n      this.setState({\n        component: component\n      });\n    }\n\n    render() {\n      const Component = this.state.component;\n      return Component ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, this.props) : null;\n    }\n\n  }\n\n  return AsyncComponent;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (asyncComponent);\n\n//# sourceURL=webpack:///./src/react/component/asyncComponent/index.js?");

/***/ }),

/***/ "./src/react/index.js":
/*!****************************!*\
  !*** ./src/react/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ \"./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-logger */ \"./node_modules/redux-logger/dist/redux-logger.js\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./router */ \"./src/react/router.js\");\n/* harmony import */ var _src_react_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/react/store */ \"./src/react/store/index.js\");\n\n\n\n\n\n\n\n\nconst sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"createStore\"])(_src_react_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].rootReducer, Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"applyMiddleware\"])(sagaMiddleware, redux_logger__WEBPACK_IMPORTED_MODULE_5___default.a)); // 启动saga\n\nsagaMiddleware.run(_src_react_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].rootSaga); // store引入redux-saga中间件，用法上，我们进行了简单的封装，调用方式类似于dva，具体demo见@src/react/store/modules/about\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n  store: store\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)), document.getElementById('react_app'));\n\n//# sourceURL=webpack:///./src/react/index.js?");

/***/ }),

/***/ "./src/react/pages/About/index.js":
/*!****************************************!*\
  !*** ./src/react/pages/About/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ \"./src/react/pages/About/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass About extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  goVue() {\n    window.location.href = '/vue/about';\n  }\n\n  changeRedux() {\n    this.props.dispatch({\n      type: 'aboutModel/save',\n      payload: {\n        name: '哈哈哈'\n      }\n    });\n  }\n\n  textSaga() {\n    this.props.dispatch({\n      type: 'aboutModel/textSaga',\n      payload: {\n        name: '我是saga在作怪'\n      }\n    });\n  }\n\n  render() {\n    let {\n      name\n    } = this.props;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"about-class\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"icon\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"\\u7EC4\\u4EF6About-react\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"redux\\u6D4B\\u8BD5name -- \", name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"btn\",\n      onClick: () => this.changeRedux()\n    }, \"\\u70B9\\u51FB\\u66F4\\u65B0redux\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"btn\",\n      onClick: () => this.textSaga()\n    }, \"\\u6D4B\\u8BD5saga\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"btn\",\n      onClick: () => this.goVue()\n    }, \"\\u70B9\\u51FB\\u8DF3\\u8F6Cvue\\u5E94\\u7528\"));\n  }\n\n}\n\nfunction mapStateToProps(state) {\n  return { ...state.aboutModel\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(About));\n\n//# sourceURL=webpack:///./src/react/pages/About/index.js?");

/***/ }),

/***/ "./src/react/pages/About/index.scss":
/*!******************************************!*\
  !*** ./src/react/pages/About/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/react/pages/About/index.scss?");

/***/ }),

/***/ "./src/react/pages/Inbox/index.js":
/*!****************************************!*\
  !*** ./src/react/pages/Inbox/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Inbox extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"\\u7EC4\\u4EF6Inbox-react\"));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Inbox);\n\n//# sourceURL=webpack:///./src/react/pages/Inbox/index.js?");

/***/ }),

/***/ "./src/react/pages/Message/index.js":
/*!******************************************!*\
  !*** ./src/react/pages/Message/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Message extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"\\u7EC4\\u4EF6Message-react\");\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\n\n//# sourceURL=webpack:///./src/react/pages/Message/index.js?");

/***/ }),

/***/ "./src/react/router.js":
/*!*****************************!*\
  !*** ./src/react/router.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _src_react_component_asyncComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/react/component/asyncComponent */ \"./src/react/component/asyncComponent/index.js\");\n/* harmony import */ var _src_react_pages_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/react/pages/About */ \"./src/react/pages/About/index.js\");\n/* harmony import */ var _src_react_pages_Inbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/react/pages/Inbox */ \"./src/react/pages/Inbox/index.js\");\n/* harmony import */ var _src_react_pages_Message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/react/pages/Message */ \"./src/react/pages/Message/index.js\");\n\n\n\n\n\n\n\nfunction parseRoute(target) {\n  let data = [];\n  target && target.forEach((item, index) => {\n    if (item.children && item.children.length) {\n      item.children.forEach(child => {\n        data.push({\n          path: `${item.path}${child.path}`,\n          component: child.component\n        });\n      });\n    } else {\n      data.push({\n        path: item.path,\n        component: item.component\n      });\n    }\n  });\n  return data;\n} // 注意，由于混合框架的特殊性，外层路由必须是/react，否则会出现404，比如下面的'demo'路由\n\n\nconst routeList = [{\n  path: '/react',\n  children: [{\n    path: '/message',\n    component: Object(_src_react_component_asyncComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(() => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @src/react/pages/Message */ \"./src/react/pages/Message/index.js\")))\n  }, {\n    path: '/about',\n    component: _src_react_pages_About__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }, {\n    path: '/inbox',\n    component: _src_react_pages_Inbox__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }]\n}, {\n  path: 'demo',\n  component: _src_react_pages_Inbox__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}];\nconst parseRouteList = parseRoute(routeList) || [];\n\nclass RouterApp extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"BrowserRouter\"], null, parseRouteList.map((item, index) => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n        path: item.path,\n        component: item.component,\n        key: index\n      });\n    }));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RouterApp);\n\n//# sourceURL=webpack:///./src/react/router.js?");

/***/ }),

/***/ "./src/react/store sync recursive \\.js$":
/*!************************************!*\
  !*** ./src/react/store sync \.js$ ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./index.js\": \"./src/react/store/index.js\",\n\t\"./modules/about.js\": \"./src/react/store/modules/about.js\",\n\t\"./modules/inbox.js\": \"./src/react/store/modules/inbox.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/react/store sync recursive \\\\.js$\";\n\n//# sourceURL=webpack:///./src/react/store_sync_\\.js$?");

/***/ }),

/***/ "./src/react/store sync recursive ^.*$":
/*!***********************************!*\
  !*** ./src/react/store sync ^.*$ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\".\": \"./src/react/store/index.js\",\n\t\"./\": \"./src/react/store/index.js\",\n\t\"./index\": \"./src/react/store/index.js\",\n\t\"./index.js\": \"./src/react/store/index.js\",\n\t\"./modules/about\": \"./src/react/store/modules/about.js\",\n\t\"./modules/about.js\": \"./src/react/store/modules/about.js\",\n\t\"./modules/inbox\": \"./src/react/store/modules/inbox.js\",\n\t\"./modules/inbox.js\": \"./src/react/store/modules/inbox.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/react/store sync recursive ^.*$\";\n\n//# sourceURL=webpack:///./src/react/store_sync_^.*$?");

/***/ }),

/***/ "./src/react/store sync recursive ^\\.\\/.*$":
/*!***************************************!*\
  !*** ./src/react/store sync ^\.\/.*$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./\": \"./src/react/store/index.js\",\n\t\"./index\": \"./src/react/store/index.js\",\n\t\"./index.js\": \"./src/react/store/index.js\",\n\t\"./modules/about\": \"./src/react/store/modules/about.js\",\n\t\"./modules/about.js\": \"./src/react/store/modules/about.js\",\n\t\"./modules/inbox\": \"./src/react/store/modules/inbox.js\",\n\t\"./modules/inbox.js\": \"./src/react/store/modules/inbox.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/react/store sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./src/react/store_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/react/store/index.js":
/*!**********************************!*\
  !*** ./src/react/store/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n\n\n\nconst context = __webpack_require__(\"./src/react/store sync recursive \\\\.js$\");\n\nconst keys = context.keys().filter(item => item !== './index.js' && item !== './saga.js'); // 获取所有的saga\n\nlet rootSaga = keys.map(item => {\n  let defaultData = __webpack_require__(\"./src/react/store sync recursive ^\\\\.\\\\/.*$\")(`./${item.replace('./', '')}`).default;\n\n  if (defaultData) {\n    if (defaultData.saga && typeof defaultData.saga == 'function') {\n      return defaultData.saga();\n    }\n  }\n}); // 获取所有的reducer\n\nlet reducerObj = {};\nkeys.forEach(item => {\n  let defaultData = __webpack_require__(\"./src/react/store sync recursive ^.*$\")(`${item}`).default;\n\n  if (defaultData) {\n    let nameSpace = defaultData.nameSpace;\n    let reducer = defaultData.reducer; // if (!nameSpace || !reducer) {\n    //   throw new Error('model文件内必须定义nameSpace 或者 reducer, now is undefined');\n    // }\n\n    reducerObj[nameSpace] = reducer || function () {};\n  }\n});\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])(reducerObj);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  rootSaga: function* () {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"all\"])(rootSaga);\n  },\n  rootReducer: rootReducer\n});\n\n//# sourceURL=webpack:///./src/react/store/index.js?");

/***/ }),

/***/ "./src/react/store/modules/about.js":
/*!******************************************!*\
  !*** ./src/react/store/modules/about.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n\nconst initState = {\n  name: 'about'\n};\nconst nameSpace = 'aboutModel';\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  nameSpace: nameSpace,\n  reducer: function (state = initState, action) {\n    switch (action.type) {\n      case `${nameSpace}/save`:\n        return { ...state,\n          ...action.payload\n        };\n\n      default:\n        return state;\n    }\n  },\n  saga: function* () {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeEvery\"])(`${nameSpace}/textSaga`, this.effect.textSaga)]);\n  },\n  effect: {\n    textSaga: function* ({\n      payload\n    }) {\n      let data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(function () {\n        return new Promise((resolve, reject) => {\n          setTimeout(() => {\n            resolve('我是saga在作怪');\n          }, 1000);\n        });\n      });\n\n      try {\n        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n          type: `${nameSpace}/save`,\n          payload: {\n            name: data\n          }\n        });\n      } catch (error) {}\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/react/store/modules/about.js?");

/***/ }),

/***/ "./src/react/store/modules/inbox.js":
/*!******************************************!*\
  !*** ./src/react/store/modules/inbox.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n\nconst initState = {\n  name: 'inbox'\n};\nconst nameSpace = 'inboxModel';\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  nameSpace: nameSpace,\n  reducer: function (state = initState, action) {\n    switch (action.type) {\n      case `${nameSpace}/save`:\n        return { ...state,\n          ...action.payload\n        };\n\n      default:\n        return state;\n    }\n  },\n  saga: function* () {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([// yield takeEvery(`${nameSpace}/textSaga`, this.effect.textSaga),\n    ]);\n  },\n  effect: {}\n});\n\n//# sourceURL=webpack:///./src/react/store/modules/inbox.js?");

/***/ })

/******/ });