class FreqStack {
  freqStack: number[];
  recordedStack: Record<number, number[]>;
  maxCount: number;
  popedIdx: number;
  constructor() {
    this.recordedStack = {};
    this.freqStack = [];
    this.maxCount = 0;
    this.popedIdx = -1;
  }

  push(val: number): void {
    this.freqStack.push(val);
    const idx = this.freqStack.length - 1;
    this.recordedStack[val]
      ? this.recordedStack[val].push(idx)
      : (this.recordedStack[val] = [idx]);
    this.maxCount = Math.max(this.maxCount, this.recordedStack[val].length);
  }

  pop(): number {
    this.getPopedIdx();
    const [ans] = this.freqStack.splice(this.popedIdx, 1);
    return ans;
  }

  getPopedIdx() {
    let keyOfpopedIdx: number | string = -1;
    for (const key in this.recordedStack) {
      const targetRecord = this.recordedStack[key];
      const length = targetRecord.length;
      if (length === this.maxCount) {
        if (targetRecord[length - 1] > this.popedIdx) {
          this.popedIdx = targetRecord[length - 1];
          keyOfpopedIdx = key;
        }
      }
    }
    // @ts-ignore
    this.recordedStack[keyOfpopedIdx].pop();
    for (const key in this.recordedStack) {
      const targetRecord = this.recordedStack[key];
      targetRecord.forEach((idx) => {
        if (idx >= this.popedIdx) {
          idx--;
        }
      });
    }
  }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */

const freqStack = new FreqStack();
freqStack.push(5); //堆栈为 [5]
freqStack.push(7); //堆栈是 [5,7]
freqStack.push(5); //堆栈是 [5,7,5]
freqStack.push(7); //堆栈是 [5,7,5,7]
freqStack.push(4); //堆栈是 [5,7,5,7,4]
freqStack.push(5); //堆栈是 [5,7,5,7,4,5]
freqStack.pop(); //返回 5 ，因为 5 出现频率最高。堆栈变成 [5,7,5,7,4]。
freqStack.pop(); //返回 7 ，因为 5 和 7 出现频率最高，但7最接近顶部。堆栈变成 [5,7,5,4]。
freqStack.pop(); //返回 5 ，因为 5 出现频率最高。堆栈变成 [5,7,4]。
freqStack.pop(); //返回 4 ，因为 4, 5 和 7 出现频率最高，但 4 是最接近顶部的。堆栈变成 [5,7]。
