'use strict';

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.length = 0;
  }

  insert(value) {
    const oldHead = this.head;

    this.head = new Node(value);
    this.head.next = oldHead;
  }

  insertAtTail(value, newValue) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        let newNode = current.next;
        current.next = newNode(newValue, newNode);
        this.length++;
        return this.length;
      } else {
        current = current.next;

      }
    }
  }

  append(value) {
    if (!this.head) {
      this.insert(value);
      return this.length;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
    this.length++;
    return this.length;
  }


<<<<<<< HEAD
  insertAtTail(value, newValue) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        let newNode = current.next;
        current.next = newNode(newValue, newNode);
        this.length++;
        return this.length;
      } else {
        current = current.next;
      }
    }
=======
  append(value) {
    if(!this.head){
      this.insert(value);
      return this.length;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
    this.length++;
    return this.length;
>>>>>>> 96a07d1 (tests passing)
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

  kthFromEnd(k) {
    if (k === null || k < 0) {
      console.log('invalid value');
    }
    let current = this.head;
    let length = 0;
    while (current) {
      current = current.next;
      length++;
    }
    let result = length - k - 1;
    current = this.head;
    while (result !== 0) {
      current = current.next;
      result--;
    }
    return current;
  }
}

const zipLists = (list1, list2) => {
  let current1 = list1.head;
  let current2 = list2.head;
  let list3 = new LinkedList();
  while (current1 || current2) {
    if (current1) {
      list3.append(current1.value);
      current1 = current1.next;
    }
    if (current2) {
      list3.append(current2.value);
      current2 = current2.next;
    }
  } return list3;
};

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(value);

    while (this.stack2.length !== 0) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    if (this.stack1.isEmpty()) {
      return null;
    }
    let removedValue = this.stack1.pop();
    return removedValue;
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = { LinkedList, zipLists };
module.exports = { LinkedList, zipLists };
