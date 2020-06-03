class Solution:
    def floodFill(self, image: list, sr: int, sc: int, newColor: int) -> list:
        rows = len(image)
        if rows == 0:
            return []
        columns = len(image[0])
        directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]
        markets = [[None for _ in range(columns)] for _ in range(rows)]

        def handler(i, j, newColor, oldColor):
            for direction in directions:
                ni = i + direction[0]
                nj = j + direction[1]

                if 0 <= ni < rows and 0 <= nj < columns and \
                        image[ni][nj] == oldColor and \
                not markets[ni][nj]:
                    image[ni][nj] = newColor
                    markets[ni][nj] = True
                    handler(ni, nj, newColor, oldColor)

        oldColor = image[sr][sc]
        if oldColor == newColor: return image
        image[sr][sc] = newColor
        markets[sr][sc] = True
        handler(sr, sc, newColor, oldColor)
        return image


solute = Solution()
print(solute.floodFill([[0, 0, 0], [0, 1, 1]],
                       1,
                       1,
                       1))
