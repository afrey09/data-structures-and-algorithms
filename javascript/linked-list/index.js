'use strict';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!newNode) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
    }
    this.length++;
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

  insertAtHead(value, newValue) {
    let current = this.head;
    if (current.value === value) {
      this.insert(newValue);
      return;
    }
    while (current.next) {
      if (current.next.value === value) {
        let oldNext = current.next;
        current.next = new Node(newValue, oldNext);
        this.length++;
        return this.length;
      } else {
        current = current.next;
      }
    }
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


class Stack {
  constructor() {
    this.top = null;
    this.last = null;

  }
  push(value) {
    let newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
    } else {
      var temp = this.top;
      this.top = newNode;
      newNode.next = temp;
    }
    return this.top;
  }
  pop() {
    if (!this.top) return null;
    let current = this.top;
    if (this.top === this.last) {
      this.last = null;
    } return current.value;
  }

  peek() {
    if (!this.top) return null;
    return this.top.value;
  }
  isEmpty() {
    return this.top === null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;

  }
  enqueue(value) {
    let newNode = new Node(value);
    if (!this.front) {
      this.first = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
    }
    this.rear = newNode;
  }

  dequeue() {
    if (!this.front) return null;
    let current = this.front;
    if (this.front === this.rear) {
      this.rear = null;
    }
    this.front = this.current.next;
    this.length--;
    return current.value;
  }

  peek() {
    if (!this.front) {
      return null;
    }
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = { LinkedList, zipLists, Stack, Queue };
module.exports = { LinkedList, zipLists, Stack, Queue };
