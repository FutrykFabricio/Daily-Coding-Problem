class TreeNode {
    value: any;
    left: any;
    right: any;

    constructor(value: string, left: TreeNode = null, right: TreeNode = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

let serialize = (node: TreeNode): string => {
    if (!node)
        return 'X,';

    let leftBranch: string = serialize(node.left);
    let rightBranch: string = serialize(node.right);

    return node.value + ',' + leftBranch + rightBranch;
}

let deserializeHelper = (nodes: Array<string>): TreeNode => {
    let nodeValue: string = nodes.shift();

    if (nodeValue === "X")
        return null;

    return new TreeNode(nodeValue, deserializeHelper(nodes), deserializeHelper(nodes));
}

let deserialize = (serialization: string):TreeNode => {
    let nodes: Array<string> = serialization.split(',');
    return deserializeHelper(nodes);
}

let node: TreeNode = new TreeNode('root', new TreeNode('left', new TreeNode('left.left')), new TreeNode('right'));

console.log(deserialize(serialize(node)).left.left.value === "left.left")