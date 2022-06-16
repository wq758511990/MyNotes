function minEatingSpeed(piles, h) {
  const getTime = (speed) => {
    let curTime = 0;
    for (const pile of piles) {
      const spendedTime = Math.ceil(pile / speed);
      curTime += spendedTime;
    }
    return curTime;
  };

  let low = 1;
  let high = 0;
  for (const pile of piles) {
    high = Math.max(high, pile);
  }
  let k = high
  while (low < high) {
    const speed = Math.floor((low + high) / 2);
    const time = getTime(speed);
    if (time <= h) {
      // 返回结果k要从high开始减小，否则可能无法吃完
      k = speed
      high = speed;
    } else{
      low = speed + 1;
    }
  }
  return k;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8));
