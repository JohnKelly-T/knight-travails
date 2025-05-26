import { QNode } from "./q-node.js";

export class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    let node = new QNode(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  dequeue() {
    if (this.head === null) throw new Error("Nothing to dequeue");


    let node = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return node.data;
    }

    this.head = this.head.next;

    return node.data;
  }

  isEmpty() {
    return (this.head === null) ? true : false;
  }
}