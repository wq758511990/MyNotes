class MyCircularDeque {
  maxSize: number;
  queue: number[] = [];
  constructor(k: number) {
    this.maxSize = k;
  }

  insertFront(value: number): boolean {
    if (this.isFull()) return false;
    this.queue.unshift(value);
    return true;
  }

  insertLast(value: number): boolean {
    if (this.isFull()) return false;
    this.queue.push(value);
    return true;
  }

  deleteFront(): boolean {
    if (this.isEmpty()) return false;
    this.queue.shift();
    return true;
  }

  deleteLast(): boolean {
    if (this.isEmpty()) return false;
    this.queue.pop();
    return true;
  }

  getFront(): number {
    return this.isEmpty() ? -1 : this.queue[0];
  }

  getRear(): number {
    const n = this.queue.length;
    return this.isEmpty() ? -1 : this.queue[n - 1];
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  isFull(): boolean {
    return this.queue.length >= this.maxSize;
  }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
