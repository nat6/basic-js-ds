const { NotImplementedError } = require('../extensions/index.js');

module.exports = function removeKFromList(l, k) {
  if(!l) return l;

  while(l && l.value === k) {
    l = l.next;
  }

  let current = l;

  while(current.next) {
    if(current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return l;
}
