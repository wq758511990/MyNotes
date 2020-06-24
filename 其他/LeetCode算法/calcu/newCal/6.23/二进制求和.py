class Solution:
    def addBinary(self, a: str, b: str) -> str:
        r, t = '', 0
        d = len(b) - len(a)
        a = '0' * d + a
        b = '0' * -d + b
        for i, j in zip(a[::-1], b[::-1]) :
            s = int(i) + int(j) + t
            r = str(s % 2) + r
            t = s // 2
        return '1' + r if t else r

        # return bin(int(a, 2) + int(b, 2))[2:]



solute = Solution()
print(solute.addBinary("11", "1"))