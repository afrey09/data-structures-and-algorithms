'use strict';

// Require our linked list implementation
const { LinkedList, zipLists } = require('../index');


describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('should insert at the beginning of empty', () => {
    const list = new LinkedList();
    list.insert('apple');

    expect(list.head.value).toEqual('apple');
    expect(list.head.next).toBeNull();
  });

  it('should insert at the beginning of populated list', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');

    expect(list.head.value).toEqual('orange');
    expect(list.head.next.value).toEqual('apple');
    expect(list.head.next.next).toBeNull();
  });

  it('should display as string properly', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');

    const linkedString = list.toString();

    expect(linkedString).toEqual('{ orange } -> { apple } -> NULL');
  });

  it('should indicate whether the inputed value exists in the list', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');
    list.insert('banana');
    list.insert('cherry');
    list.insert('grape');

    expect(list.includes('apple')).toBeTruthy();
    expect(list.includes('orange')).toBeTruthy();
    expect(list.includes('blueberry')).toBeFalsy();
  });

  it('should zip together two lists', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    list1.append('apple');
    list1.append('orange');
    list1.append('banana');
    list2.append('cherry');
    list2.append('grape');

    const zipped = zipLists(list1, list2);

    expect(zipped.head.value).toEqual('apple');
    expect(zipped.head.next.value).toEqual('cherry');
    expect(zipped.head.next.next.value).toEqual('orange');
  });

});
