class Solution:
    def grayCode(self, n: int) -> int:

        # res = []
        
        # def handler(start) :
        #     if start == 0 :
        #         return [''] 
            
        #     pre = handler(start - 1)
        #     newRes = []
        #     for item in pre :
        #         tmp = '0' + str(item)
        #         newRes.append(tmp)
        #     for item1 in pre[::-1] :
        #         tmp = '1' + str(item1)
        #         newRes.append(tmp)

        #     return newRes         
        
        # # res = handler(n)
        # res = [int(item, 2) for item in handler(n)]
        # return res
        
        res, head = [0], 1
        for i in range(n) :
            for item in res[::-1] :
                res.append(item + head)
            head <<= 1
        
        return res


        



solute = Solution()
print(solute.grayCode(3))