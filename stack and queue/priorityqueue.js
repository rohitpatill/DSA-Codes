// priority queue
class Node {
    constructor(data, priority) {
      this.data = data;
      this.priority = priority;
    //  this.next = null;
    }
  }
  
  class PriorityQueue {
    constructor() {
      
      this.head = null;
    }
  
    enqueue(data, priority) {
      const node = new Node(data, priority);
  
      if (!this.head || priority > this.head.priority) {
        node.next = this.head;
        this.head = node;
      } else {
        let current = this.head;
        while (current.next && current.next.priority >= priority) {
          current = current.next;
        }
        node.next = current.next;
        current.next = node;
      }
    }
  
    dequeue() {
      if (!this.head) {
        return null;
      }
      const dequeued = this.head;
      this.head = this.head.next;
      return dequeued.data;
    }

    display() {
        let current = this.head;
        while (current) {
          console.log(`Data: ${current.data}, Priority: ${current.priority}`);
          current = current.next;
        }
      }
          
  }


  const ll = new PriorityQueue()
  ll.enqueue(100 ,3 )
  ll.enqueue(200 ,1 )
  ll.enqueue(300, 2 )
  //ll.dequeue()
  ll.enqueue(321 , 4)
  ll.enqueue(321 , 53)
  ll.enqueue(321 , 76)
  ll.enqueue(321 , 76)
  ll.enqueue(34 , -76)
 

  ll.display( )


