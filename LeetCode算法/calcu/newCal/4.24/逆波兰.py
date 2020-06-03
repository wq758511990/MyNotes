class Solution:
    def evalRPN(self, tokens: list) -> int:
        lt = len(tokens)
        if lt == 0:
            return 0

        def plus(a, b): return a + b
        def sub(a, b): return a - b
        def div(a, b): return int(b/a)
        def mul(a, b): return a * b
        opt = {
            "+": plus,
            "-": sub,
            "/": div,
            "*": mul
        }
        tmplist = []

        for c in tokens:
            if c not in opt:
                tmplist.append(c)
            else:
                a = int(tmplist.pop())
                b = int(tmplist.pop())

                tmplist.append(opt[c](a, b))

        return tmplist[0]


solute = Solution()
print(solute.evalRPN(["4","13","5","/","+"]))
