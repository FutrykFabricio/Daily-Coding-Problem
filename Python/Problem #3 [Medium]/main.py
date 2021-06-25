class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def serialize(node):
    if not node:
        return 'X,'

    leftBranch = serialize(node.left)
    rightBranch = serialize(node.right)
        
    return node.val + ',' + leftBranch + rightBranch;

def deserializeHelper(nodes):
    nodeVal = nodes[0]
    del nodes[0]

    if nodeVal == "X":
        return None;

    return Node(nodeVal, deserializeHelper(nodes), deserializeHelper(nodes))

def deserialize(serialization):
    nodes = serialization.split(',');
    return deserializeHelper(nodes)


def printTree(node):
    print(node.val)

    if node.left:
        printTree(node.left)
    
    if node.right:
        printTree(node.right)

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'