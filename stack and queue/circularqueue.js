class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class CircularQueue {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    enqueue(value) {
      const newNode = new Node(value);
      if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
        this.tail.next = this.head;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
        this.tail.next = this.head;
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      const value = this.head.value;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.tail.next = this.head;
      }
      return value;
    }
  
    isEmpty() {
      return !this.head;
    }
  
  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    let current = this.head;
    do {
      console.log(current.value);
      current = current.next;
    } while (current !== this.head);
  }
}
  const queue = new CircularQueue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.dequeue()
  queue.dequeue()
  queue.dequeue()
  queue.dequeue()
 
  queue.display();
      