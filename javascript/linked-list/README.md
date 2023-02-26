# Singly Linked List


## Challenge
Node
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
Linked List
Create a Linked List class
Within your Linked List class, include a head property.
Upon instantiation, an empty Linked List should be created.
The class should contain the following methods
insert
Arguments: value
Returns: nothing
Adds a new node with that value to the head of the list with an O(1) Time performance.
includes
Arguments: value
Returns: Boolean
Indicates whether that value exists as a Node’s value somewhere within the list.
to string
Arguments: none
Returns: a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"

## Approach & Efficiency
MOB programming
testing our code
Collaborators: Jordan Covington and Joe Davitt

## API
insert - insert a value into the Linked List
toString - returns a string representing the value stored in the Linked List
includes - returns true if the value already is in Linked List


# Challenge Summary
Write the following method for the Linked List class:

kth from end
argument: a number, k, as a parameter.
Return the node’s value that is k places from the tail of the linked list.
You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Whiteboard Process
![Code Challenge 6](assets/codechallenge6.png)
![Code Challenge 7](assets/codechallenge7.png)
![Code Challenge 8](assets/codechallenge8.png)

## Approach & Efficiency
pair programming


## Lab 10 - Stacks and Queues

## Challenge
Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue

Node
Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
Stack
Create a Stack class that has a top property. It creates an empty Stack when instantiated.
This object should be aware of a default empty value assigned to top when the stack is created.
The class should contain the following methods:
push
Arguments: value
adds a new node with that value to the top of the stack with an O(1) Time performance.
pop
Arguments: none
Returns: the value from node from the top of the stack
Removes the node from the top of the stack
Should raise exception when called on empty stack
peek
Arguments: none
Returns: Value of the node located at the top of the stack
Should raise exception when called on empty stack
is empty
Arguments: none
Returns: Boolean indicating whether or not the stack is empty.
Queue
Create a Queue class that has a front property. It creates an empty Queue when instantiated.
This object should be aware of a default empty value assigned to front when the queue is created.
The class should contain the following methods:
enqueue
Arguments: value
adds a new node with that value to the back of the queue with an O(1) Time performance.
dequeue
Arguments: none
Returns: the value from node from the front of the queue
Removes the node from the front of the queue
Should raise exception when called on empty queue
peek
Arguments: none
Returns: Value of the node located at the front of the queue
Should raise exception when called on empty stack
is empty
Arguments: none
Returns: Boolean indicating whether or not the queue is empty


## Approach & Efficiency
I watched Udemy videos on Stacks and Queues, which were very helpful in helping me understand and formulate the code, reviewed demo code and parts of lecture.

## API


Collaborators:

Ty Aponte
Ash Uppal
Joe Davitt
Jordan Covington

## Solution
<!-- Show how to run your code, and examples of it in action -->
