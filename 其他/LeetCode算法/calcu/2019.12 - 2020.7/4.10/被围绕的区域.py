class Solution:
    def solve(self, board: str) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        lb = len(board)
        if lb < 3 : return
        lbx = len(board[0])
        if lbx < 3 : return

        for i in range(1, lb - 1) :
            for j in range(1, lbx - 1) :
                pass


solute = Solution()
print(solute.solve([
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X']
]))
