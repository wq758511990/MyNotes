class Solution:
    def groupAnagrams(self, strs: list) -> list :
        map1 = {}
        res = []
        for x in strs :
            newX = ''.join(sorted(x))
            if newX in map1 :
                map1[newX].append(x)
            else :
                map1[newX] = [x]
        for item in map1.values() :
            res.append(item)
        return res
solute = Solution()
print(solute.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))