from collections import deque


class Solution:
    def openLock(self, deadends: list, target: str) -> int:
        # 特判。。
        if '0000' in deadends:
            return -1

        # 生成器，获取当前值下一步的所有可能性
        def handler(node):
            for i in range(4):
                x = int(node[i])
                directions = (-1, 1)
                for direction in directions:
                    y = (x + direction) % 10
                    yield node[:i] + str(y) + node[i + 1:]

        deads = set(deadends)
        # 创建队列，初始值为0000， 步数为0
        q = deque([('0000', 0)])
        # 存储已经访问过的值
        seen = {'0000'}
        while q:
            node, depth = q.popleft()
            # 当前值等于目标值的时候，返回步数
            if node == target:
                return depth
            # 当前值在deads里的时候， 跳过，寻找其他有效解
            if node in deads:
                continue
            
            # 从生成器中获取下一步的值，若不在seen中，则加入到seen中，并且加入到队列中，更新步数
            for neighbor in handler(node):
                if neighbor not in seen:
                    seen.add(neighbor)
                    q.append((neighbor, depth + 1))
        # 最后没有找到则返回-1
        return -1


solute = Solution()
print(solute.openLock(["0201", "0101", "0102", "1212", "2002"], '0202'))
