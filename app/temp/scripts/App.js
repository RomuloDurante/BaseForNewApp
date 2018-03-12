/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/scripts/app.js":
/*!***********************************!*\
  !*** ./app/assets/scripts/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var P$ = __webpack_require__(/*! ./modules/Person */ \"./app/assets/scripts/modules/Person.js\");\r\n\n\n//# sourceURL=webpack:///./app/assets/scripts/app.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/Person.js":
/*!**********************************************!*\
  !*** ./app/assets/scripts/modules/Person.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function(global) {\r\n    var Person = function(name, lastname) {\r\n      return new Person.init(name, lastname);\r\n    }\r\n\r\n    Person.init = function(name, lastname) {\r\n      this.name = name;\r\n      this.lastname = lastname;\r\n    }\r\n\r\n    Person.init.prototype = {\r\n      greet: function() {\r\n        console.log('Hello ' + this.name + ' ' + this.lastname);\r\n\r\n        return this;\r\n      },\r\n\r\n      test: function (){\r\n        console.log('You are cool!');\r\n\r\n        return this;\r\n      }\r\n    }\r\n\r\n    global.Person = Person;\r\n\r\n\r\n      var person = Person('Romulo','Durante');\r\n      person.greet().test();\r\n      \r\n}(window));\r\n\r\nmodule.exports = Person;\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/Person.js?");

/***/ })

/******/ });