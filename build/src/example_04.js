'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function main() {
  return _regenerator2.default.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _regenerator2.default.awrap(ping());

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
}

function ping() {
  var i;
  return _regenerator2.default.async(function ping$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          i = 0;

        case 1:
          if (!(i < 10)) {
            _context2.next = 8;
            break;
          }

          _context2.next = 4;
          return _regenerator2.default.awrap(delay(300));

        case 4:
          console.log('ping');

        case 5:
          i++;
          _context2.next = 1;
          break;

        case 8:
        case 'end':
          return _context2.stop();
      }
    }
  }, null, this);
}

function delay(ms) {
  return new _promise2.default(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

main();
