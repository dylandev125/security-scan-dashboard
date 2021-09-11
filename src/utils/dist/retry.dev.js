"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var retry = function retry(fn) {
  var retriesLeft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
  return new Promise(function (resolve, reject) {
    fn().then(resolve)["catch"](function (error) {
      setTimeout(function () {
        if (retriesLeft === 1) {
          // reject('maximum retries exceeded');
          reject(error);
          return;
        } // Passing on "reject" is the important part


        retry(fn, retriesLeft - 1, interval).then(resolve, reject);
      }, interval);
    });
  });
};

var _default = retry;
exports["default"] = _default;