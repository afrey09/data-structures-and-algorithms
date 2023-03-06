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
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
  }
    traverse(current);
    return data;


  inOrder() {
  }

  postOrder() {
  }
}


class BinarySearchTree {
  constructor() {

  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };
