class Solution:
    def isValidSudoku(self, board):
        line_lis = [[] for i in range(9)]
        column_lis = [[] for i in range(9)]
        kuai_lis = [[] for i in range(9)]
        for i in range(9) :
            for j in range(9) :
                num = board[i][j]
                kuai = i // 3 * 3 + j // 3
                if num!='.':
                    num=int(num)
                    if num not in line_lis[i]:
                        line_lis[i].append(num)
                    else:
                        return False
                    if num not in column_lis[j]:
                        column_lis[j].append(num)
                    else:
                        return False
                    if num not in kuai_lis[kuai]:
                        kuai_lis[kuai].append(num)
                    else:
                        return False
        return True


solute = Solution()
print(solute.isValidSudoku(
[
[".", ".", ".", ".", ".", ".", ".", ".", "2"],
[".", ".", ".", ".", ".", ".", "6", ".", "."], 
[".", ".", "1", "4", ".", ".", "8", ".", "."], 
[".", ".", ".", ".", ".", ".", ".", ".", "."],
[".", ".", ".", ".", ".", ".", ".", ".", "."], 
[".", ".", ".", ".", "3", ".", ".", ".", "."], 
["5", ".", "8", "6", ".", ".", ".", ".", "."], 
[".", "9", ".", ".", ".", ".", "4", ".", "."], 
[".", ".", ".", ".", "5", ".", ".", ".", "."]
]
))
