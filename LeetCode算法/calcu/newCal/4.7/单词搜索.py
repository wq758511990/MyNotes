class Solution:

    directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]

    def exist(self, board: list, word: str) -> bool:
        m = len(board)
        if m == 0 : 
            return False
        n = len(board[0])

        markets = [[False for _ in range(n)] for _ in range(m)]
        for i in range(m) :
            for j in range(n) :
                if self.handler(board, word, markets, i, j, 0, m, n) :
                    return True
        return False
        
    def handler(self, board, word, markets, start_x, start_y, idx, m, n) :
        # 终止条件
        if idx == len(word) - 1 :
            return board[start_x][start_y] == word[idx]
        
        # 匹配过程
        if board[start_x][start_y] == word[idx] :
            markets[start_x][start_y] = True
            for direction in self.directions :
                new_x = start_x + direction[0]
                new_y = start_y + direction[1]
                
                if 0 <= new_x < m and 0 <= new_y < n and \
                    not markets[new_x][new_y] and \
                        self.handler(board, word, markets, new_x, new_y, idx + 1, m, n) :
                        return True
            markets[start_x][start_y] = False


solute = Solution()
print(solute.exist([
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
], 'ABCCED'
))

def getComs(n, m) :
    
    def handler(tmp, start) :
        if len(tmp) == m :
            res.append(tmp[:])
            return 
        
        for i in range(start, n + 1) :
            tmp.append(i)
            handler(tmp, i + 1)
            tmp.pop()
        
            

    res = []
    handler([], 1)
    return res

print(getComs(5, 3))
