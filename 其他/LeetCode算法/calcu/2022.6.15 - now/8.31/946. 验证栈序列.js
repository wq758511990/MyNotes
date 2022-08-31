function validateStackSequences(pushed, popped) {
  const arr = [];
  for (let i = 0; i < pushed.length; i++) {
    while (arr[arr.length - 1] === popped[0]) {
      arr.pop();
      popped.shift();
    }
    arr.push(pushed[i]);
    if (arr[arr.length - 1] === popped[0]) {
      arr.pop();
      popped.shift();
    }
  }
  while (arr.length) {
    if (arr[arr.length - 1] === popped[0]) {
      arr.pop();
      popped.shift();
    } else {
      return false;
    }
  }

  return arr.length === 0 && arr.length === popped.length;
}

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
