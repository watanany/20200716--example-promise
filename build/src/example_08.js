"use strict";

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var count = 0;

function main() {
  return _promise2.default.resolve(0).then(function (r0) {
    console.log("Promise0 count: " + count);
    return _promise2.default.resolve(1).then(function (r1) {
      console.log("Promise1 count: " + count);
      return _promise2.default.resolve(2).then(function (r2) {
        console.log("Promise2 count: " + count);
        return new _promise2.default(function (resolve, reject) {
          count++;
          setTimeout(function () {
            console.log("Promise3 count: " + count);
            resolve([r0, r1, r2]);
          }, Math.random() * count * 1000);
        });
      });
    });
  });
}

// main().then(res => console.log(`res res res: ${res}`));

// Promise.resolve(0).then((r0) => {
//   return Promise.resolve(1).then((r1) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => { resolve(111); }, 5000);
//     });
//   });
// }).then(res => console.log(`res res res: ${res}`));

var _loop = function _loop(i) {
  console.log("i i i: " + i);
  main().then(function (res) {
    return console.log("res res res" + i + ": " + res + ", " + count);
  }).catch(function (err) {
    return console.error(err);
  });
};

for (var i = 0; i < 100; i++) {
  _loop(i);
}
