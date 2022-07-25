class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

class CBTInserter {
  cpRoot: TreeNode | null;
  candidate: TreeNode[] = [];
  queue: TreeNode[] | null = [];
  constructor(root: TreeNode | null) {
    this.cpRoot = root;
    this.queue = root ? [root] : null;
    while (this.queue?.length) {
      const node = this.queue.shift();
      if (node?.left) {
        this.queue.push(node.left);
      }
      if (node?.right) {
        this.queue.push(node.right);
      }
      if (!(node?.left && node.right)) {
        this.candidate.push(node as TreeNode);
      }
    }
  }

  insert(val: number): number {
    const newNode = new TreeNode(val);
    const candidateNode = this.candidate[0];
    const ret = candidateNode.val;
    if (!candidateNode.left) {
      candidateNode.left = newNode;
    } else {
      candidateNode.right = newNode;
      this.candidate.shift();
    }
    this.candidate.push(newNode);
    return ret;
  }

  get_root(): TreeNode | null {
    return this.cpRoot;
  }
}

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
