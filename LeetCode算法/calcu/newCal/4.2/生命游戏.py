
class Solution:
    def gameOfLife(self, board: list) -> None:
        """
        Do not return anything, modify board in-place instead.
        """

        neighbors = [(1, 0), (1, -1), (0, -1), (-1, -1),
                    (-1, 0), (-1, 1), (0, 1), (1, 1)]

        rows = len(board)
        cols = len(board[0])

        # # 从原数组复制一份到 copy_board 中
        # copy_board = [[board[row][col]
        #             for col in range(cols)] for row in range(rows)]

        # # 遍历面板每一个格子里的细胞
        # for row in range(rows):
        #     for col in range(cols):

        #         # 对于每一个细胞统计其八个相邻位置里的活细胞数量
        #         live_neighbors = 0
        #         for neighbor in neighbors:

        #             r = (row + neighbor[0])
        #             c = (col + neighbor[1])

        #             # 查看相邻的细胞是否是活细胞
        #             if (r < rows and r >= 0) and (c < cols and c >= 0) and (copy_board[r][c] == 1):
        #                 live_neighbors += 1

        #         # 规则 1 或规则 3
        #         if copy_board[row][col] == 1 and (live_neighbors < 2 or live_neighbors > 3):
        #             board[row][col] = 0
        #         # 规则 4
        #         if copy_board[row][col] == 0 and live_neighbors == 3:
        #             board[row][col] = 1

        # return board

        for row in range(rows) :
            for col in range(cols) :

                live_neighbors = 0
                for neighbor in neighbors :
                    r = (row + neighbor[0])
                    c = (col + neighbor[1])

                    if (r >= 0 and r < rows) and (c >= 0 and c < cols) and (abs(board[r][c]) == 1) :
                        live_neighbors += 1

                # 规则 1 or 规则 3
                if board[row][col] == 1 and(live_neighbors < 2 or live_neighbors > 3) :
                    board[row][col] = -1
                # 规则 4
                if board[row][col] == 0 and live_neighbors == 3 :
                    board[row][col] = 2
            
        
        for i in range(rows) :
            for j in range(cols) :
                board[i][j] = 1 if board[i][j] > 0 else 0

        return board

solute = Solution()
print(solute.gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
]))
