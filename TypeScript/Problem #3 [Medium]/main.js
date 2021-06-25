var TreeNode = /** @class */ (function () {
    function TreeNode(value, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.value = value;
        this.left = left;
        this.right = right;
    }
    return TreeNode;
}());
var serialize = function (node) {
    if (!node)
        return 'X,';
    var leftBranch = serialize(node.left);
    var rightBranch = serialize(node.right);
    return node.value + ',' + leftBranch + rightBranch;
};
var deserializeHelper = function (nodes) {
    var nodeValue = nodes.shift();
    if (nodeValue === "X")
        return null;
    return new TreeNode(nodeValue, deserializeHelper(nodes), deserializeHelper(nodes));
};
var deserialize = function (serialization) {
    var nodes = serialization.split(',');
    return deserializeHelper(nodes);
};
var printTree = function (node) {
    if (!node)
        return;
    console.log(node.value);
    printTree(node.left);
    printTree(node.right);
};
var node = new TreeNode('root', new TreeNode('left', new TreeNode('left.left')), new TreeNode('right'));
console.log(deserialize(serialize(node)).left.left.value === "left.left");
