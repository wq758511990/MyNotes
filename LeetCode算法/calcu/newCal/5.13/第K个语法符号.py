class Solution:
    def kthGrammar(self, N: int, K: int) -> int:
        # def handler(n) :
        #     if n == 0 :
        #         return '0'
        #     tmp = handler(n - 1)
        #     tmplist = list(tmp)
        #     lt = len(tmplist)
        #     for i in range(lt) :
        #         if tmplist[i] == '1' :
        #             tmplist[i] = '10'
        #         else :
        #             tmplist[i] = '01'
            
        #     return ''.join(tmplist)
        
        # resStr = handler(N - 1)
        # return resStr

        def handler(n) :
            
            if n == 1 :
                return '0'
            if n == 2 :
                return '01'
            tmp = handler(n - 1)
            mid = len(tmp) // 2
            tmpLeft = tmp[:mid]
            tmpRight = tmp[mid:]
            return tmp + tmpRight + tmpLeft

        resStr = handler(N)
        return resStr


solute = Solution()
print(solute.kthGrammar(5, 5))