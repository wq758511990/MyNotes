class Solution:
    def canVisitAllRooms(self, rooms: list) -> bool:
        def handler(startIdx, curKeys) :
            curKeys = rooms[startIdx]
            if startIdx + 1 in curKeys :
                return handler(startIdx + 1, rooms[startIdx + 1])
            elif startIdx == len(rooms) - 1 :
                return True
            else :
                return False


        return handler(0, 0)

solute = Solution()
print(solute.canVisitAllRooms([[2],[],[1]]))