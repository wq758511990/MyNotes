function asteroidCollisions(asteroids) {
  const stack = [];
  loop: for (let i = 0; i < asteroids.length; i++) {
    const n = stack.length - 1;
    let top = stack[n] || 0;
    while (top > 0 && asteroids[i] < 0) {
      const pre = Math.abs(asteroids[i]);
      const aft = Math.abs(top);
      if (pre > aft) {
        stack.pop();
        top = stack[stack.length - 1];
      } else if (pre === aft) {
        stack.pop();
        continue loop;
      } else continue loop;
    }
    stack.push(asteroids[i]);
  }
  return stack;
}

console.log(asteroidCollisions([-2, 1, -1, -2]));
