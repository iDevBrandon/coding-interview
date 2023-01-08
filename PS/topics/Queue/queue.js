// QUEUE
const queue = [];

// enqueue
// Enqueue an item to the queue. like push
queue.push("seahorse");
queue.push("dolphin");
queue.push("shark");

// dequeue
// Dequeue an item from the queue. like pop
queue.shift(); // seahorse

// JS class
class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.storage[this.tail] = element;
    this.tail++;
  }

  dequeue() {
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }
}
