(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pretty-json-string"] = factory();
	else
		root["pretty-json-string"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
* @class this
* helpers def. 
*
* @author #rbarriga
* @version 0.1
*
**/
var util = {
    isObject: function isObject(v) {
        return Object.prototype.toString.call(v) === '[object Object]';
    },
    pad: function pad(str, length) {
        str = String(str);
        while (str.length < length) {
            str = '0' + str;
        }return str;
    },
    dateFormat: function dateFormat(date, f) {
        f = f.replace('YYYY', date.getFullYear());
        f = f.replace('YY', String(date.getFullYear()).slice(-2));
        f = f.replace('MM', this.pad(date.getMonth() + 1, 2));
        f = f.replace('DD', this.pad(date.getDate(), 2));
        f = f.replace('HH24', this.pad(date.getHours(), 2));
        f = f.replace('HH', this.pad(date.getHours() % 12, 2));
        f = f.replace('MI', this.pad(date.getMinutes(), 2));
        f = f.replace('SS', this.pad(date.getSeconds(), 2));
        return f;
    },
    parseJSON: function parseJSON(data) {
        var obj = void 0;
        try {
            obj = JSON.parse(data);
        } catch (e) {
            data = data.replace(/([{,])(\s*)?(['"])?([A-Za-z0-9_\-]+?)(['"])?(\s*)?:/g, '$1"$4":');
            try {
                obj = JSON.parse(data);
            } catch (e) {
                return 'invalid JSON';
            }
        }
        return obj;
    },
    isNumber: function isNumber(obj) {
        return typeof obj === 'number' || obj instanceof Number;
    },
    isBoolean: function isBoolean(obj) {
        return typeof obj === 'boolean' || obj instanceof Boolean;
    },
    isDate: function isDate(obj) {
        return obj instanceof Date;
    },
    isNull: function isNull(obj) {
        return obj === null;
    },
    isUndefined: function isUndefined(obj) {
        return obj === undefined;
    },
    isArray: function isArray(obj) {
        return obj instanceof Array || Array.isArray(obj);
    },
    isString: function isString(obj) {
        return typeof obj === 'string' || obj instanceof String;
    },
    getSize: function getSize(obj) {
        if (this.isNull(obj)) {
            return 0;
        }
        if (this.isArray(obj)) {
            return obj.length;
        }
        return Object.keys(obj).length;
    }
};

exports.default = util;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _node = __webpack_require__(2);

var _node2 = _interopRequireDefault(_node);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(data, opt) {
    opt.data = _util2.default.parseJSON(data);
    new _node2.default(opt);
}

if (typeof window !== 'undefined') {
    window.prettyJson = render;
}
module.exports = render;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _leaf = __webpack_require__(3);

var _leaf2 = _interopRequireDefault(_leaf);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function () {
    function Node(opt) {
        _classCallCheck(this, Node);

        if (!opt.el) {
            this.$el = $("<span></span>");
        } else {
            this.$el = opt.el instanceof $ ? opt.el : $(opt.el);
        }

        this.options = opt;
        this.data = this.options.data || null;
        this.level = this.options.level || 1;
        this.path = this.options.path || "";
        this.isLast = _util2.default.isUndefined(this.options.isLast) ? true : this.options.isLast;
        this.rendered = false;
        this.dateFormat = this.options.dateFormat;

        var m = this.getMeta();
        this.type = m.type;
        this.size = m.size;
        this.childs = [];
        this.render();
        this.show();
    }

    _createClass(Node, [{
        key: 'getMeta',
        value: function getMeta() {
            return { size: _util2.default.getSize(this.data), type: _util2.default.isArray(this.data) ? "array" : "object" };
        }
    }, {
        key: 'elements',
        value: function elements() {
            this.els = {
                container: this.$el.find(".pj-node-container"),
                contentWrapper: this.$el.find(".pj-node-content-wrapper"),
                top: this.$el.find(".pj-node-top"),
                ul: this.$el.find(".pj-node-body"),
                down: this.$el.find(".pj-node-down")
            };
        }
    }, {
        key: 'render',
        value: function render() {
            this.$el.html(this.template());
            this.elements();
            var b = this.getBrackets();
            this.els.top.html(b.top);
            this.els.down.html(b.bottom);
            return this;
        }
    }, {
        key: 'renderChilds',
        value: function renderChilds() {
            var _this = this;

            var count = 1;
            $.each(this.data, function (key, val) {
                var isLast = count === _this.size;
                count = count + 1;
                var path = _this.type === "array" ? _this.path + "[" + key + "]" : _this.path + "." + key;
                var opt = {
                    key: key,
                    data: val,
                    parent: _this,
                    path: path,
                    level: _this.level + 1,
                    dateFormat: _this.dateFormat,
                    isLast: isLast
                };
                var child = _util2.default.isObject(val) || _util2.default.isArray(val) ? new Node(opt) : new _leaf2.default(opt);
                var li = $("<li/>");
                var quotation = '"';
                var colom = "&nbsp;:&nbsp;";
                var left = $("<span />");
                var right = $("<span />").append(child.$el);
                _this.type === "array" ? left.html("") : left.html(quotation + key + quotation + colom);
                left.append(right);
                li.append(left);

                _this.els.ul.append(li);
                child.parent = _this;
                _this.childs.push(child);
            });
        }
    }, {
        key: 'show',
        value: function show() {
            if (!this.rendered) {
                this.renderChilds();
                this.rendered = true;
            }
            this.els.top.html(this.getBrackets().top);
            this.els.contentWrapper.show();
            this.els.down.show();
        }
    }, {
        key: 'getBrackets',
        value: function getBrackets() {
            var v = { top: "{", bottom: "}" };
            if (this.type === "array") {
                v = { top: "[", bottom: "]" };
            }
            v.bottom = this.isLast ? v.bottom : v.bottom + ",";
            return v;
        }
    }, {
        key: 'expandAll',
        value: function expandAll() {
            $.each(this.childs, function (child) {
                if (child instanceof Node) {
                    child.show();
                    child.expandAll();
                }
            });
            this.show();
        }
    }, {
        key: 'template',
        value: function template() {
            return '<div class="pj-node-container"><span class="pj-node-top pj-node-bracket"></span><div class="pj-node-content-wrapper"><ul class="pj-node-body"></ul></div><span class="pj-node-down pj-node-bracket"></span></div>';
        }
    }]);

    return Node;
}();

exports.default = Node;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Leaf = function () {
    function Leaf(opt) {
        _classCallCheck(this, Leaf);

        this.$el = $("<span></span>");
        this.options = opt;
        this.data = _util2.default.isUndefined(this.options.data) ? null : this.options.data;
        this.level = _util2.default.isUndefined(this.options.level) ? 0 : this.options.level;
        this.path = this.options.path || "";
        this.type = this.getType() || "string";
        this.dateFormat = this.options.dateFormat;
        this.isLast = _util2.default.isUndefined(this.options.isLast) ? true : this.options.isLast;
        this.render();
    }

    _createClass(Leaf, [{
        key: "getType",
        value: function getType() {
            var m = "string";
            var d = this.data;
            if (_util2.default.isNumber(d)) m = "number";else if (_util2.default.isBoolean(d)) m = "boolean";else if (_util2.default.isDate(d)) m = "date";else if (_util2.default.isNull(d)) m = "null";
            return m;
        }
    }, {
        key: "getState",
        value: function getState() {
            var coma = this.isLast ? "" : ",";
            return { data: this.data, level: this.level, path: this.path, type: this.type, coma: coma };
        }
    }, {
        key: "render",
        value: function render() {
            var state = this.getState(),
                quotation = '"';
            if (state.type == "date" && this.dateFormat) {
                state.data = quotation + _util2.default.dateFormat(this.data, this.dateFormat) + quotation;
            } else if (state.type == "string") {
                state.data = quotation + state.data + quotation;
            } else if (state.type == "null") {
                state.data = "null";
            }
            this.$el.html(this.template(state));
            return this;
        }
    }, {
        key: "template",
        value: function template(_ref) {
            var type = _ref.type,
                data = _ref.data,
                coma = _ref.coma;

            return "<div class=\"pj-leaf-container\"><span class=\"pj-" + type + "\">" + data + "</span><span>" + coma + "</span></div>";
        }
    }]);

    return Leaf;
}();

exports.default = Leaf;

/***/ })
/******/ ]);
});
//# sourceMappingURL=pretty-json.js.map