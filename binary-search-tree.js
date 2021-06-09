class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let current = this.root;
    if (!current) this.root = new Node(val);
    while (current) {
      if (current.val > val) {
        if (!current.left) {
          current.left = new Node(val);
          return this;
        } else current = current.left;
      } else if (current.val < val) {
        if (!current.right) {
          current.right = new Node(val);
          return this;
        } else current = current.right;
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    if (current.val > val) {
      if (!current.left) {
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.left);
    } else if (current.val < val) {
      if (!current.right) {
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right);
    }

    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while (current) {
      if (current.val === val) return current;
      if (current.val > val) current = current.left;
      else current = current.right;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (!current) return undefined;
    if (current.val === val) return current;
    if (current.val > val) {
      return this.findRecursively(val, (current = current.left));
    }
    return this.findRecursively(val, (current = current.right));
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let nodesVisited = [];
    let current = this.root;

    function traverse(node) {
      nodesVisited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return nodesVisited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let nodesVisited = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      nodesVisited.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return nodesVisited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let nodesVisited = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      nodesVisited.push(node.val);
    }
    traverse(current);
    return nodesVisited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let nodesVisited = [];
    let queue = [];
    let current = this.root;

    queue.push(current);
    while (queue.length) {
      current = queue.shift();
      nodesVisited.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return nodesVisited;
  }

}

module.exports = BinarySearchTree;
