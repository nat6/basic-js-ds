const { NotImplementedError } = require('../extensions/index.js');

module.exports = class Stack {
  constructor() {
    this.arr = [];
  }

  push(element) {
    this.arr.unshift(element);
  }

  pop() {
    let elem = this.arr[0];
    this.arr.shift();
    return elem;
  }

  peek() {
    return this.arr[0];
  }
}
