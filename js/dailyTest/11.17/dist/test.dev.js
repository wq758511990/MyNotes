"use strict";

var num = 0;

outermost: for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      break outermost;
    }

    num++;
  }
}

console.log(num); // 55

var num_1 = 0;

outermost_1: for (var _i = 0; _i < 10; _i++) {
  for (var _j = 0; _j < 10; _j++) {
    if (_i == 5 && _j == 5) {
      continue outermost_1;
    }

    num_1++;
  }
}

console.log(num_1); // 95