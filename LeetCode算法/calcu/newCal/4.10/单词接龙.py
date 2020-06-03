class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: str) -> int:
        if not wordList.index(endWord) : return 0
        return 'hot' + 'hog'


solute = Solution()
print(solute.ladderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"]))