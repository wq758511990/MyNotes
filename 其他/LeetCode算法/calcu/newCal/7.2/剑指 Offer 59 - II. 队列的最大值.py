class MaxQueue:

    def __init__(self):
        self.queue = []
        self.deque = []

    def max_value(self) -> int:
        return self.deque[0] if self.deque else -1
        
    def push_back(self, value: int) -> None:
        self.queue.append(value)
        while self.deque and self.deque[-1] < value :
            self.deque.pop()
        self.deque.append(value)


    def pop_front(self) -> int:
        if not self.queue: 
            return -1
        ans = self.queue.pop(0)
        if ans == self.deque[0] :
            self.deque.pop(0)
        return ans
