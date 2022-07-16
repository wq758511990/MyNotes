class MovingAverage {
  queue: number[] = [];
  size: number = 0;
  curSum: number = 0;
  constructor(size: number) {
    this.size = size;
  }

  next(val: number): number {
    let shiftedNumber = 0;
    if (this.queue.length === this.size) {
      shiftedNumber = this.queue.shift() || 0;
      this.curSum -= shiftedNumber;
    }
    this.queue.push(val);
    this.curSum += val;
    return this.curSum / this.queue.length;
  }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

const movingAverage = new MovingAverage(3);
console.log(movingAverage.next(1)); // 返回 1.0 = 1 / 1
console.log(movingAverage.next(10)); // 返回 5.5 = (1 + 10) / 2
console.log(movingAverage.next(3)); // 返回 4.66667 = (1 + 10 + 3) / 3
console.log(movingAverage.next(5)); // 返回 6.0 = (10 + 3 + 5) / 3
