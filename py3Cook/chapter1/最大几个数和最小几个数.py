import heapq
# nums = [1, 8, 2, 23, 7, -4, 18, 23, 42, 37, 2]
# print(heapq.nlargest(3, nums))
# print(heapq.nsmallest(3, nums))

# portfolio = [{'name': 'IBM', 'shares': 100, 'price': 91.1},
#              {'name': 'AAPL', 'shares': 50, 'price': 543.22},
#              {'name': 'FB', 'shares': 200, 'price': 21.09},
#              {'name': 'HPQ', 'shares': 35, 'price': 31.75},
#              {'name': 'YHOO', 'shares': 45, 'price': 16.35},
#              {'name': 'ACME', 'shares': 75, 'price': 115.65}]

# cheap = heapq.nsmallest(3, portfolio, lambda s: s['name'])
# expensive = heapq.nlargest(3, portfolio, lambda s: s['name'])

# print(cheap)
# print(expensive)

# nums = [1, 8, 2, 23, 7, -4, 18, 23, 42, 37, 2]
# heapq.heapify(nums)
# print(heapq.heappop(nums))
# print('nums', nums)
# print(heapq.heappop(nums))
# print('nums', nums)
# print(heapq.heappop(nums))
# print('nums', nums)


class PriorityQueue:

    def __init__(self):
        self._queue = []
        self._index = 0

    def push(self, item, priority):
        heapq.heappush(self._queue, (-priority, self._index, item))
        self._index += 1

    def pop(self):
        return heapq.heappop(self._queue)[-1]


class Item:
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return 'Item({!r})'.format(self.name)


q = PriorityQueue()
q.push(Item('foo'), 1)
q.push(Item('bar'), 5)
q.push(Item('spam'), 4)
q.push(Item('grok'), 1)
print(q.pop())
Item('bar')
print(q.pop())
Item('spam')
print(q.pop())
Item('foo')
print(q.pop())
Item('grok')
