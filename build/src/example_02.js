"use strict";

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function main() {
  //=> [[0, 1]]
  _promise2.default.all([_promise2.default.resolve(0).then(function (r0) {
    return _promise2.default.resolve(1).then(function (r1) {
      return [r0, r1];
    });
  })]).then(function (result) {
    console.log(result);
  });
}

main();
