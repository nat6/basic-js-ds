const { NotImplementedError } = require('../extensions/index.js');

const ListNode = function (x) {
  this.value = x;
  this.next = null;
}

module.exports = class Queue {
  constructor() {
    this.node = null;
    this.next = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.node;
  }

  enqueue(value) {

    if (this.length === 0) {
      this.node = new ListNode(value);
    }
    else {
      let current = this.node;

      while(current.next) {
        current = current.next;
      }
      current.next = new ListNode(value);
    }

    this.length++;
  }

  dequeue() {
    if(!this.node) return null;

    let head = this.node;
    this.node = this.node.next;
    this.length--;

    return head.value;
  }
}