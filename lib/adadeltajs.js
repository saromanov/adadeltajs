"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mathjs = require("mathjs");

var mathjs = _interopRequire(_mathjs);

var multiply = _mathjs.multiply;
var add = _mathjs.add;
var divide = _mathjs.divide;
var subtract = _mathjs.subtract;
var dot = _mathjs.dot;
var sum = _mathjs.sum;

var Adadeltajs = exports.Adadeltajs = (function () {
    function Adadeltajs(X, y) {
        _classCallCheck(this, Adadeltajs);

        this.X = X;
        this.y = y;
    }

    _createClass(Adadeltajs, {
        fit: {
            value: function fit() {
                var iters = arguments[0] === undefined ? 100 : arguments[0];
                var rho = arguments[1] === undefined ? 0.001 : arguments[1];

                var converge = false;
                while (!converge) {
                    var value = multiply(this.X, theta0);
                    var loss = subtract(value, this.y);
                    var J = sum(multiply(loss, loss));
                    var grad = divide(multiply(this.X, loss), m);
                    var accgrad = add(multiply(grad, rho), multiply(multiply(grad, grad), 1 - rho));
                }
            }
        }
    });

    return Adadeltajs;
})();