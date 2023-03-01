'use strict';

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

class AnimalShelter {
  constructor() {
    this.shelter = new Queue();
  }

  enqueue(animal) {
    if (animal.species && (animal.species === 'cat' || animal.species === 'dog')) {
      if (typeof animal.name === 'string') {
        this.shelter.enqueue(animal);
      }
    }
  }

  dequeue(pref) {

    let result = this.shelter.dequeue();

    if (result.species === pref) {
      return result;
    }
    else {
      return null;
    }
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}



module.exports = {
  Stack,
  Queue,
  PseudoQueue,
  AnimalShelter };
