//stack
class Node{
    constructor( data , next = null){
      this.data = data;
      this.next = next;
    }
  }
  
  class Stack{
    constructor(){
      this.head  = null;
      this.size =0;
    }
  
    push(data){
  
      let node = new Node(data)
      if(!this.head){
        this.head = node
        this.size++;
      }else{
    this.head = new Node(data , this.head)
    this.size++;
    }
  
  }
    pop(){
      if(!this.head){
        console.log("stack is empty")
      }else{
      this.head = this.head.next
      this.size--;
    }
  }
  
  display(){
    let current = this.head
  
    while(current){
      console.log(current.data)
      current = current.next
    }
  }
  }
  
  const ll = new Stack()
  ll.push(100)
  ll.push(200)
  ll.push(300)
  ll.push(400)
  ll.pop()
  
  
  ll.display()