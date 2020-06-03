def numMagicSquaresInside(grid: list):
    res = 0
    for i, v in enumerate(grid):
        for j, value in enumerate(v):
            try:
                if sorted([grid[i][j], grid[i][j + 1], grid[i][j + 2],  grid[i + 1][j], grid[i + 1][j + 1], grid[i + 1][j + 2],  grid[i + 2][j], grid[i + 2][j + 1], grid[i + 2][j + 2]]) != [1, 2, 3, 4, 5, 6, 7, 8, 9]:
                    continue
                sum = grid[i][j] + grid[i][j + 1] + grid[i][j + 2]
                sum1 = grid[i + 1][j] + grid[i + 1][j + 1] + grid[i + 1][j + 2]
                sum2 = grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2]
                sum3 = grid[i][j] + grid[i + 1][j] + grid[i + 2][j]
                sum4 = grid[i][j + 1] + grid[i + 1][j + 1] + grid[i + 2][j + 1]
                sum5 = grid[i][j + 2] + grid[i + 1][j + 2] + grid[i + 2][j + 2]
                sum6 = grid[i][j] + grid[i + 1][j + 1] + grid[i + 2][j + 2]
                sum7 = grid[i + 2][j] + grid[i + 1][j + 1] + grid[i][j + 2]
                if sum == sum1 == sum2 == sum3 == sum4 == sum5 == sum6 == sum7:
                    res += 1
            except:
                continue
    return res


print(numMagicSquaresInside([[4, 3, 8, 4],
                             [9, 5, 1, 9],
                             [2, 7, 6, 2]]))
