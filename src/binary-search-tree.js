const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

module.exports = class BinarySearchTree {

  constructor() {
    this.head = null;
    this.left = null;
    this.right = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    const node = new Node(data);
    if(!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;

    while(current) {
      if(node.data < current.data) {
        if (!current.left) {
          current.left = node;
          return;
        }
        current = current.left;
      }

      else {
        if (!current.right) {
          current.right = node;
          return;
        }
        current = current.right;
      }
    }
  }

  traverse(node, data) {
    if(!node) return null;

    if (node.data > data) {
      return this.traverse(node.left, data);
    }
    else if(node.data < data) {
      return this.traverse(node.right, data);
    }
    return node;
  }

  has(data) {
    return (this.traverse(this.head, data)) ? true : false;
  }

  find(data) {
    return this.traverse(this.head, data);
  }

  remove(data) {
  }

  min() {
    if (!this.head) return null;
    let node = this.head;

    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.head) return null;
    let node = this.head;

    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}