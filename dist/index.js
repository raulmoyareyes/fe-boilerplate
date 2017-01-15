(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["feBoilerplate"] = factory();
	else
		root["feBoilerplate"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _App = __webpack_require__(1);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _App2.default)();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Square = __webpack_require__(2);

	var _Square2 = _interopRequireDefault(_Square);

	var _Rectangle = __webpack_require__(4);

	var _Rectangle2 = _interopRequireDefault(_Rectangle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function App() {
	  var shapes = [new _Rectangle2.default(), new _Rectangle2.default(), new _Square2.default()];

	  shapes.forEach(function (shape) {

	    switch (shape.constructor.name) {
	      case 'Square':
	        shape.setLength(4);
	        break;
	      case 'Rectangle':
	        shape.setWidth(6);
	        shape.setHeight(6);
	    }

	    var area = shape.getArea();
	    shape.render(area);
	  });
	}

	exports.default = App;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Shape2 = __webpack_require__(3);

	var _Shape3 = _interopRequireDefault(_Shape2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Square = function (_Shape) {
	    _inherits(Square, _Shape);

	    function Square() {
	        _classCallCheck(this, Square);

	        var _this = _possibleConstructorReturn(this, (Square.__proto__ || Object.getPrototypeOf(Square)).call(this));

	        _this.length = 0;
	        return _this;
	    }

	    _createClass(Square, [{
	        key: 'setLength',
	        value: function setLength(length) {
	            this.length = length;
	        }
	    }, {
	        key: 'getArea',
	        value: function getArea() {
	            return this.length * this.length;
	        }
	    }]);

	    return Square;
	}(_Shape3.default);

	exports.default = Square;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Shape = function () {
	    function Shape() {
	        _classCallCheck(this, Shape);
	    }

	    _createClass(Shape, [{
	        key: 'setColor',
	        value: function setColor(color) {
	            this.color = color;
	        }
	    }, {
	        key: 'render',
	        value: function render(area) {
	            var element = document.createElement('div');

	            element.innerText = area;
	            document.body.appendChild(element);
	        }
	    }]);

	    return Shape;
	}();

	exports.default = Shape;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Shape2 = __webpack_require__(3);

	var _Shape3 = _interopRequireDefault(_Shape2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Rectangle = function (_Shape) {
	    _inherits(Rectangle, _Shape);

	    function Rectangle() {
	        _classCallCheck(this, Rectangle);

	        var _this = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this));

	        _this.width = 0;
	        _this.height = 0;
	        return _this;
	    }

	    _createClass(Rectangle, [{
	        key: 'setWidth',
	        value: function setWidth(width) {
	            this.width = width;
	        }
	    }, {
	        key: 'setHeight',
	        value: function setHeight(height) {
	            this.height = height;
	        }
	    }, {
	        key: 'getArea',
	        value: function getArea() {
	            return this.width * this.height;
	        }
	    }]);

	    return Rectangle;
	}(_Shape3.default);

	exports.default = Rectangle;

/***/ }
/******/ ])
});
;