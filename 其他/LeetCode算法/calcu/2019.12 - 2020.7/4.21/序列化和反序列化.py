from collections import deque
class Codec:

    def serialize(self, root):
        
        # def handler(root, string) :
        #     if not root :
        #         string += "None,"
        #     else :
        #         string += str(root.val) + ','
        #         string = handler(root.left, string)
        #         string = handler(root.right, string)
        #     return string

        # return handler(root, '')
        
        if not root :
            return None
        q = deque()
        q.append(root)
        resStr = ''
        while q :
            tmp = q.popleft()
            resStr += str(tmp.val) + ','
            if tmp.left :
                q.append(tmp.left)
            else :
                resStr += 'None,'
            
            if tmp.right :
                q.append(tmp.right)
            else :
                resStr += 'None,'
        return resStr

    def deserialize(self, data):
        """Decodes your encoded data to tree.
        
        :type data: str
        :rtype: TreeNode
        """
        def handler(l):
            tmp = l.pop(0)
            if tmp == 'None' :
                return None
            else :
                root = TreeNode(tmp)
                root.left = handler(l)
                root.right = handler(l)

            return root
            
        data_list = data.split(',')
        root = handler(data_list)
        return root
