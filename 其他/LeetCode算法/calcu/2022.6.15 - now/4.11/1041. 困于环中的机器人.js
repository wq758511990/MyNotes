/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
  const directions = [
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 0],
  ];
  let dir = 0;
  let pos = [0, 0];
  let maxCircle = 4;
  function loop() {
    for (const step of instructions) {
      if (step === "G") {
        const direction = directions[dir];
        pos = [pos[0] + direction[0], pos[1] + direction[1]];
      } else if (step === "L") {
        dir = (dir + 1) % 4;
      } else {
        dir = dir - 1 < 0 ? 3 : dir - 1; // wrap around from 3 to 0. reverse direction.
      }
    }
    if (pos[0] === 0 && pos[1] === 0) return true;
  }
  while (maxCircle--) {
    if (loop()) {
      return true;
    }
  }
  return false;
};

console.log(isRobotBounded("GLRLGLLGLGRGLGL"));
