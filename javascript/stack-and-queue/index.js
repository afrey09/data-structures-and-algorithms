'use strict';

const { Queue } = require('./index');

// class PseudoQueue {
//   constructor() {
//     this.stack1 = new Stack();
//     this.stack2 = new Stack();
//   }

//   enqueue(value) {
//     while (this.stack1.length !== 0) {
//       this.stack2.push(this.stack1.pop());
//     }
//     this.stack1.push(value);

//     while (this.stack2.length !== 0) {
//       this.stack1.push(this.stack2.pop());
//     }
//   }

//   dequeue() {
//     if (this.stack1.isEmpty()) {
//       return null;
//     }
//     let removedValue = this.stack1.pop();
//     return removedValue;
//   }
// }



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



module.exports = AnimalShelter;
