"use strict";

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function main() {
  var r0 = new _promise2.default(function (resolve, reject) {
    setTimeout(function () {
      resolve(0);
    }, Math.random() * 5 * 1000);
  });

  var r1 = new _promise2.default(function (resolve, reject) {
    setTimeout(function () {
      resolve(1);
    }, Math.random() * 10 * 1000);
  });

  var r2 = new _promise2.default(function (resolve, reject) {
    setTimeout(function () {
      resolve(2);
    }, Math.random() * 8 * 1000);
  });

  return _promise2.default.all([r0, r1, r2]);
}

main().then(function (res) {
  return console.log("res res res: " + res);
});
