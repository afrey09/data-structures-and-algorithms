'use strict';

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insert(value) {
    const oldHead = this.head;

    this.head = new Node(value);
    this.head.next = oldHead;
  }

  insertAtTail(value, newValue){
    let current = this.head;
    while(current) {
      if(current.value === value) {
        let newNode = current.next;
        current.next = newNode(newValue, newNode);
        this.length++;
        return this.length;
      } else {
        current = current.next;
      }
    }
  }

  toString() {
    let current = this.head;
    let str = '';

    while (current) {
      str += `{ ${current.value} } -> `;
      current = current.next;
    }

    return str += 'NULL';
  }

  includes(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }

      current = current.next;
    }

    return false;

  }

  kthFromEnd(k){
    if(k === null || k<0){
      console.log('invalid value');
    }
    let current = this.head;
    let length = 0;
    while(current){
      current = current.next;
      length++;
    }
    let result = length -k - 1;
    current = this.head;
    while(result!==0){
      current = current.next;
      result--;
    }
    return current;
  }
}


class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
