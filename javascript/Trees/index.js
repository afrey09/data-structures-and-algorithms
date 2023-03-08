'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;

  }

  preOrder() {
    const data = [];
    let current = this.root;

    const traverse = (node) => {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(current);
    return data;
  }
  inOrder() {
    const results = [];
    const traverse = (node) => {

      if (node.left) traverse(node.left);
      results.push(node.value);

      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  postOrder() {
    const results = [];
    const traverse = (node) => {

      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);
      results.push(node.value);
    };
    traverse(this.root);
    return results;
  }

  getMax() {
    let results = this.root.value;

    const traverse = (node) => {
      if (node.left) {
        if (node.left.value > results) {
          results = node.left.value;
        }
        traverse(node.left);
      }

      if (node.right) {
        if (node.right.value > results) {
          results = node.right.value;
        }
        traverse(node.right);
      }
    };
    traverse(this.root);
    return results;
  }

}

class BST extends BinaryTree {
  super() {
    this.root = null;
  }

  add(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (current) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    if (this.root === null) {
      return false;
    }
    let current = this.root;
    let contains = false;

    while (current && !contains) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        contains = true;
      }
    }
    return contains;

  }

}

function breadthFirst(tree) {
  let result = [];
  let queue = [tree.root];

  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.value);
    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }
  return result;
}

module.exports = { Node, BinaryTree, BST, breadthFirst };

