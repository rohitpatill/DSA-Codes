class Node {
    constructor(data, next = null, prev = null) {
      this.data = data;
      this.next = next;
      this.prev = prev;
    }
  }
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Insert first node
    insertFirst(data) {
      const newNode = new Node(data, this.head);
      if (this.head) {
        this.head.prev = newNode;
      }
      this.head = newNode;
      this.size++;
    }
  
    // Insert last node
    insertLast(data) {
      const newNode = new Node(data);
      let current;
  
      // If empty, make head
      if (!this.head) {
        this.head = newNode;
        newNode.prev = this.head;
      } else {
        current = this.head;
  
        while (current.next !== this.head) {
          current = current.next;
        }
  
        current.next = newNode;
        newNode.prev = current;
        newNode.next = this.head;
      }
  
      this.size++;
    }
  
    // Insert at index
    insertAt(data, index) {
      //  If index is out of range
      if (index > 0 && index > this.size) {
        return;
      }
  
      // If first index
      if (index === 0) {
        this.insertFirst(data);
        return;
      }
  
      const newNode = new Node(data);
      let current, previous;
  
      // Set current to first
      current = this.head;
      let count = 0;
  
      while (count < index) {
        previous = current; // Node before index
        count++;
        current = current.next; // Node after index
      }
  
      newNode.next = current;
      newNode.prev = previous;
      previous.next = newNode;
      current.prev = newNode;
  
      this.size++;
    }
  
    // Get at index
    getAt(index) {
      let current = this.head;
      let count = 0;
  
      while (current) {
        if (count == index) {
          console.log(current.data);
        }
        count++;
        current = current.next;
        if (current === this.head) {
          break;
        }
      }
  
      return null;
    }
  
   // Remove at index
removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
  
    let current = this.head;
    let previous;
    let count = 0;
  
    // Remove first
    if (index === 0) {
      if (this.size === 1) {
        this.head = null;
      } else {
        while (current.next !== this.head) {
          current = current.next;
        }
        current.next = this.head.next;
        this.head.next.prev = current;
        this.head = this.head.next;
      }
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
  
      previous.next = current.next;
      current.next.prev = previous;
    }
  
    this.size--;
  }
  
  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }



  
  
  // Print list data
  printListData() {
    let current = this.head;
  
    while (current) {
      console.log(current.data);
      current = current.next;
      if (current === this.head) {
        break;
      }
    }
  }
  }
  const ll = new LinkedList();

  ll.insertFirst(100);
  ll.insertFirst(200);
  ll.insertFirst(300);
  ll.insertFirst(400);
  ll.insertFirst(500);
  ll.insertFirst(600);
  ll.insertAt(23,2)
  
  
  
  ll.printListData();
    