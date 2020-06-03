class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) % 2 != 0:
            return False
        # mystack = []
        # for x in s :
        #     if x == ')' :
        #         if mystack and mystack[-1] == '(' : mystack.pop()
        #         else : return False
        #     elif x == '}' :
        #         if mystack and mystack[-1] == '{' : mystack.pop()
        #         else : return False
        #     elif x == ']' :
        #         if mystack and mystack[-1] == '[' : mystack.pop()
        #         else : return False
        #     else :
        #         mystack.append(x)

        # return not mystack
        
        mymap = {
            "{": "}",
            "(": ")",
            "[": "]"
        }
        tmp = []
        for x in s :
            if x in mymap : 
                tmp.append(x)
            else :
                if not tmp or mymap[tmp.pop()] != x :
                    return False

        return not tmp

solute = Solution()
print(solute.isValid("]]"))
