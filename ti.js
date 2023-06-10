// Construct Single Node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Create/Get/Remove Nodes From Linked List
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    
    this.head = new Node(data, this.head);
    this.size++;
  }



  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
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

    const node = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

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
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }


  //reverse singly linkedlist
  reverseList(head) {

    let curr;
    let prev;
    let temp;
    curr = head;
    prev = null;
    while (curr != null) {
      temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;

    }

    while (prev) {
      console.log(prev.data)
      prev = prev.next
    }
  }

  // another way to reverse singly linkedlsit
  anotherreverselist(){
    let r;
    let q;
    let p = this.head;
    while( p != null){
       r = q
       q = p
       p = p.next;
       q.next = r
    }
    while (q) {
      console.log(q.data)
      q = q.next
    }
  }

 


//remove duplicate nodes 
  remvoeduplicate(head) {
    let current = this.head;
    if (!this.head) { return null }
    while (current.next) {
      if (current.data === current.next.data) {
        current.next = current.next.next
      } else {
        current = current.next
      }   
    }
    return this.head;
  }

  


  //get midle 
  getMiddle(head) {
    let fast = head
    let slow = head;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    console.log(slow.data)
    console.log("above node is at middle")
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  coutnodes(){
    let current = this.head;
    let count = 1
    while(current.next){
    current = current.next
    count++
    }
    console.log(count)
  }

  // Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)

ll.insertFirst(400)
ll.insertFirst(500)

//ll.anotherreverselist()
//ll.coutnodes()
//ll.remvoeduplicate(ll.head)
// for (let i = 100 ; i<120; i++){ ll.insertFirst(i )}
//ll.reverseList(ll.head)
//ll.getMiddle(ll.head)
// ll.clearList();
// ll.getAt(2);

ll.printListData();