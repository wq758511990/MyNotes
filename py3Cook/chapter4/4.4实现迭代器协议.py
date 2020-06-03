class Node(object) :
    def __init__(self, value) :
        self._value = value
        self._children = []

    def __repr__(self) :
        return 'Node({!r})'.format(self._value)

    def add_child(self, node) :
        self._children.append(node)
    
    def __iter__(self) :
        return iter(self._children)

    def depth_iter(self) :
        yield self
        for x in self :
            yield from x.depth_iter()

root = Node(0)
child1 = Node(1)
child2 = Node(2)
root.add_child(child1)
root.add_child(child2)
child1.add_child(Node(3))
child1.add_child(Node(4))
child2.add_child(Node(5))

for x in root.depth_iter() :
    print(x)