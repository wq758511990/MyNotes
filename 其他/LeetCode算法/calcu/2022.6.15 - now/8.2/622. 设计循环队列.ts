class MyCircularQueue {
  queue: number[] = [];
  size: number = 0;
  constructor(k: number) {
    this.size = k;
  }

  enQueue(value: number): boolean {
    if (this.queue.length >= this.size) return false;
    this.queue.push(value);
    return true;
  }

  deQueue(): boolean {
    if (this.queue.length <= 0) return false;
    this.queue.shift();
    return true;
  }

  Front(): number {
    return this.queue.length === 0 ? -1 : this.queue[0];
  }
  Rear(): number {
    const length = this.queue.length;
    return length === 0 ? -1 : this.queue[length - 1];
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  isFull(): boolean {
    return this.queue.length === this.size;
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

const circularQueue = new MyCircularQueue(3); // 设置长度为 3
console.log(circularQueue.enQueue(1)); // 返回 true
console.log(circularQueue.enQueue(2)); // 返回 true
console.log(circularQueue.enQueue(3)); // 返回 true
console.log(circularQueue.enQueue(4)); // 返回 false，队列已满
console.log(circularQueue.Rear()); // 返回 3
console.log(circularQueue.isFull()); // 返回 true
console.log(circularQueue.deQueue()); // 返回 true
console.log(circularQueue.enQueue(4)); // 返回 true
console.log(circularQueue.Rear()); // 返回 4
