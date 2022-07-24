/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./api/getProductById.js":
/*!*******************************!*\
  !*** ./api/getProductById.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProductById": () => (/* binding */ getProductById)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getProductsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getProductsList */ "./api/getProductsList.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./constants.js");






const getProductById = async ({
  productId
}) => {
  try {
    const productsList = await (0,_getProductsList__WEBPACK_IMPORTED_MODULE_1__.getProductsList)();
    const product = JSON.parse(productsList).find(product => product.id === productId);

    if (!product) {
      throw Error;
    }

    return product;
  } catch (error) {
    console.error(`${_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_PRODUCT_NOT_FOUND}: `, error);
    return {
      error: {
        type: error.toString(),
        message: _constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_PRODUCT_NOT_FOUND
      }
    };
  }
};

/***/ }),

/***/ "./api/getProductsList.js":
/*!********************************!*\
  !*** ./api/getProductsList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProductsList": () => (/* binding */ getProductsList)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_productsList_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/productsList.json */ "./data/productsList.json");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./constants.js");






const getProductsList = async () => {
  try {
    //TODO: replace with real API call
    return JSON.stringify(_data_productsList_json__WEBPACK_IMPORTED_MODULE_1__);
  } catch (error) {
    console.error(`${_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_PRODUCTS_LIST_FETCH_FAILED}: `, error);
    return {
      error: {
        type: error.toString(),
        message: _constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_PRODUCTS_LIST_FETCH_FAILED
      }
    };
  }
};

/***/ }),

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERROR_PRODUCTS_LIST_FETCH_FAILED": () => (/* binding */ ERROR_PRODUCTS_LIST_FETCH_FAILED),
/* harmony export */   "ERROR_PRODUCT_NOT_FOUND": () => (/* binding */ ERROR_PRODUCT_NOT_FOUND)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

// Errors messages
const ERROR_PRODUCTS_LIST_FETCH_FAILED = 'Failed to fetch the products list';
const ERROR_PRODUCT_NOT_FOUND = 'Product not found';

/***/ }),

/***/ "./handlers/getProductById.handler.js":
/*!********************************************!*\
  !*** ./handlers/getProductById.handler.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProductByIdHandler": () => (/* binding */ getProductByIdHandler)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_getProductById__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/getProductById */ "./api/getProductById.js");
/* harmony import */ var _utils_handleError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/handleError */ "./utils/handleError.js");






const getProductByIdHandler = async (event, context, callback) => {
  const {
    productId
  } = event.pathParameters;
  const product = await (0,_api_getProductById__WEBPACK_IMPORTED_MODULE_1__.getProductById)({
    productId
  });
  (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_2__.handleError)(product, callback);
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: product
  };
  callback(null, response);
};

/***/ }),

/***/ "./handlers/getProductsList.handler.js":
/*!*********************************************!*\
  !*** ./handlers/getProductsList.handler.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProductsListHandler": () => (/* binding */ getProductsListHandler)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_getProductsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/getProductsList */ "./api/getProductsList.js");
/* harmony import */ var _utils_handleError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/handleError */ "./utils/handleError.js");






const getProductsListHandler = async (event, context, callback) => {
  const products = await (0,_api_getProductsList__WEBPACK_IMPORTED_MODULE_1__.getProductsList)();
  (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_2__.handleError)(products, callback);
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(products)
  };
  callback(null, response);
};

/***/ }),

/***/ "./utils/handleError.js":
/*!******************************!*\
  !*** ./utils/handleError.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleError": () => (/* binding */ handleError)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

const handleError = (result, callback) => {
  if (result !== null && result !== void 0 && result.error) {
    const {
      type,
      message
    } = result['error'];
    const errorMessage = `${message}. ${type}`;
    return callback(errorMessage);
  }
};

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

/***/ }),

/***/ "./data/productsList.json":
/*!********************************!*\
  !*** ./data/productsList.json ***!
  \********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"count":1,"description":"Mario, Luigi, Yoschi figures","id":"1","price":300,"title":"Mario, Luigi, Yoschi figures","img":"https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg"},{"count":2,"description":"Funny Dinos figures","id":"2","price":200,"title":"Funny Dinos figures","img":"https://images.pexels.com/photos/3663060/pexels-photo-3663060.jpeg"}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./handler.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProductById": () => (/* reexport safe */ _handlers_getProductById_handler__WEBPACK_IMPORTED_MODULE_2__.getProductByIdHandler),
/* harmony export */   "getProductsList": () => (/* reexport safe */ _handlers_getProductsList_handler__WEBPACK_IMPORTED_MODULE_1__.getProductsListHandler)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _handlers_getProductsList_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/getProductsList.handler */ "./handlers/getProductsList.handler.js");
/* harmony import */ var _handlers_getProductById_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/getProductById.handler */ "./handlers/getProductById.handler.js");





})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=handler.js.map