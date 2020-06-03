class Solution:
    def isRectangleOverlap(self, rec1, rec2) :
        return not(rec2[0] >= rec1[2] or rec2[2] <= rec1[0] or rec2[1] >= rec1[3] or rec2[3] <= rec1[1])


solute = Solution()
print(solute.isRectangleOverlap([0,0,1,1], [1,0,2,1]))