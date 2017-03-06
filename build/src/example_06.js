"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function main() {
  var res;
  return _regenerator2.default.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _regenerator2.default.awrap(_promise2.default.resolve(0).then(function (r0) {
            return _promise2.default.resolve(1).then(function (r1) {
              return _promise2.default.resolve(2).then(function (r2) {
                return [r0, r1, r2];
              });
            });
          }));

        case 2:
          res = _context.sent;


          console.log(res);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, null, this);
} //=> [[0, 1, 2]]

main();
