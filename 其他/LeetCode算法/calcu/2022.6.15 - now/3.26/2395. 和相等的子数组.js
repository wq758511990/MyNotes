/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
  const len = nums.length;
  if (len < 3) return false;

  const dict = {};

  for (let i = 0; i < len - 1; i++) {
    const sum = nums[i] + nums[i + 1];
    if (dict[sum]) return true;
    dict[sum] = 1;
  }

  return false
};

console.log(findSubarrays([4, 2, 4]));


// write a throttle 

const throttle = (fn, time) => {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(context, args), time);
  };
};

const throttle2 = throttle(function () {
  console.log('throttle2');
}, 1000);

const throttle3 = throttle(function () {
  console.log('throttle3');
}, 1000);
