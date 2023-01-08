/* Binary Search Tree */
// https://www.youtube.com/watch?v=t2CEgPsws3U&list=PLNaISn9Qu-Z5T1FABagCKd5o17QyGKI-u&index=14&t=5254s

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // we gonna add data
  add(data) {
    // top of tree which it starts as null
    const node = this.root;
    // if its first node
    if (node === null) {
      this.root = new Node(data);
      return;
      // figure out where to put this node in the tree (the new node)
    } else {
      const searchTree = function (node) {
        // this means the node on the left side of the tree
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
            // if no left is not null
          } else if (node.left !== null) {
            // continue searching
            return searchTree(node.left);
          }
          // if the data more than node.data, put the node on the right side
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            // keep searching
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  isPresent(data) {
    let current = this.root;
    // if the current is not null
    while (current) {
      if (data === current.data) {
        return true;
      }

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false; // if we never find
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node === null) {
        return null;
      }

      // if we have the data
      if (data === node.data) {
        // 4 scinarios
        // 1. node has no children like 76
        if (node.left === null && node.right === null) {
          return null;
        }

        // 2. node has no left child
        if (node.left === null) {
          return node.right;
        }

        // 3. node has no right child
        if (node.right === null) {
          return node.left;
        }

        // 4. node has two children
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
}

const bst = new BST();

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.remove(4);
console.log(bst.findMin());
console.log(bst.findMin());
console.log(bst.findMin());
console.log(bst.isPresent(4));
