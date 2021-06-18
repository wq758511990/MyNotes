class Solution:
    def countCharacters(self, words, chars) :
        # res = 0
        # for x in words :
        #     listX = list(x)
        #     for y in chars :
        #         try :
        #             idx = listX.index(y)
        #             listX.pop(idx)
        #         except :
        #             pass
        #     if listX == [] :
        #         res += len(x)
        # return res

        # ans = 0
        # for w in words:
        #     for i in w:
        #         if w.count(i) > chars.count(i):
        #             break
        #     else:
        #         ans+=len(w)
        # return ans

        
        # flag = 0
        # res = 0
        # for x in words :
        #     for y in x :
        #         if x.count(y) <= chars.count(y) :
        #             flag = 1
        #             continue
        #         else :
        #             flag = 0
        #             break
        #     if flag == 1 :
        #         res += len(x)
        
        # return res

        # 字典
        mapChar = {}
        res = 0
        for x in chars :
            if x not in mapChar :
                mapChar[x] = 1
            else :
                mapChar[x] += 1
        
        for y in words :
            mapy = {}
            addFlag = 0
            for i in y :
                if i not in mapy :
                    mapy[i] = 1
                else :
                    mapy[i] += 1
            
            for c, v in mapy.items() :
                if c in mapChar and v <= mapChar[c] :
                    addFlag = 1
                    continue
                else :
                    addFlag = 0
                    break
            if addFlag :
                res += len(y)

        return res

solute = Solution()
print(solute.countCharacters(["cat","bt","hat","tree"], 'atach'))