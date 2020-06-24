class Solution:
    def exist(self, board: list, word: str) -> bool:
        def handler(rows, columns, i, j, idx):
            if idx == len(word) - 1:
                return True
            markets[i][j] = True
            for direction in directions:
                ni = i + direction[0]
                nj = j + direction[1]

                if 0 <= ni < rows and 0 <= nj < columns and board[ni][nj] == word[idx + 1] and not markets[ni][nj]:
                    if handler(rows, columns, ni, nj, idx + 1):
                        return True
                    continue
            markets[i][j] = False
            return False

        rows = len(board)
        if rows == 0:
            return False
        columns = len(board[0])
        directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]
        for row in range(rows):
            for column in range(columns):
                if board[row][column] == word[0]:
                    markets = [[False for _ in range(
                        columns)] for _ in range(rows)]
                    if handler(rows, columns, row, column, 0):
                        return True
        return False


solute = Solution()
print(solute.exist([["A", "B", "C", "E"], ["S", "F", "E", "S"], ["A", "D", "E", "E"]],
                   "ABCEFSADEESE"))
