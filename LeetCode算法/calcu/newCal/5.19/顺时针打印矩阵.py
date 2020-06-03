class Solution:
    def spiralOrder(self, matrix: list) -> list:
        # 特判
        if not matrix: return []
        # 获取行数，列数
        R, C = len(matrix), len(matrix[0])
        # 用来标记是否重复
        seen = [[False] * C for _ in range(R)]
        # 当前行，当前列，当前方向
        r, c, di = 0, 0, 0
        # 行的四个方向
        dr = [0, 1, 0, -1]
        # 列的四个方向
        dc = [1, 0, -1, 0]
        # 返回结果
        ans = []
        # 遍历R * C 次
        for _ in range(R * C) :
            # 把当前值加入数组中
            ans.append(matrix[r][c])
            # 当前点标记为True， 表示已经访问过
            seen[r][c] = True
            # 新的行，列 为 当前行，列 加上行、列的对应方向值
            nr, nc = r + dr[di], c + dc[di]
            # 若新的行、列都在R、C 范围内并且没有被访问过
            # 则当前行、列等于新的行、列
            if 0 <= nr < R and 0 <= nc < C and not seen[nr][nc] :
                r, c = nr, nc
            # 否则说明当前方向到头或者已经访问过了， 改变方向，并且改变当前行、列
            else :
                di = (di + 1) % 4
                r, c = r + dr[di], c + dc[di]
        return ans



solute = Solution()
print(solute.spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))