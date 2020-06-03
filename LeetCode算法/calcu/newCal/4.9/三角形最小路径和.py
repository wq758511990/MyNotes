class Solution:
    def minimumTotal(self, triangle: int) -> int:
        # if not triangle:
        #     return 0
        # lt = len(triangle)
        # if lt == 1 :
        #     return triangle[0][0]
        # for i in range(1, lt) :
        #     for j in range(0, len(triangle[i])) :
        #         if j == 0 : triangle[i][j] += triangle[i - 1][j]
        #         elif j == len(triangle[i]) - 1 : triangle[i][j] += triangle[i - 1][j - 1]
        #         else :
        #             triangle[i][j] += min(triangle[i - 1][j - 1:j + 1])

        # return min(triangle[lt - 1])

        if not triangle:
            return 0
        lt = len(triangle)
        if lt == 1:
            return triangle[0][0]
        for i in range(lt - 2, -1, -1):
            for j in range(0, len(triangle[i])):
                r = j + 1 if j < len(triangle[i]) else triangle[i] - 1
                triangle[i][j] += min(triangle[i + 1][j:r + 1])

        return triangle[0][0]


solute = Solution()
print(solute.minimumTotal([
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
]))
